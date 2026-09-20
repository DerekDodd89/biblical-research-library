import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";

const hash = (bytes) =>
  createHash("sha256").update(bytes).digest("hex");

const posix = (p) => p.split(path.sep).join("/");

const compare = (a, b) =>
  a < b ? -1 : a > b ? 1 : 0;

function walk(root) {
  if (!fs.existsSync(root)) return [];

  return fs
    .readdirSync(root, { withFileTypes: true })
    .sort((a, b) => compare(a.name, b.name))
    .flatMap((entry) => {
      const p = path.join(root, entry.name);

      if (entry.isSymbolicLink()) {
        throw Error("Symlink not allowed: " + p);
      }

      return entry.isDirectory() ? walk(p) : [p];
    });
}

function requireValue(condition, message) {
  if (!condition) throw Error(message);
}

function contained(root, p) {
  const rel = path.relative(
    fs.realpathSync(root),
    fs.realpathSync(p)
  );

  return (
    rel !== ".." &&
    !rel.startsWith(".." + path.sep) &&
    !path.isAbsolute(rel)
  );
}

function copyIfChanged(sourcePath, destinationPath) {
  const sourceBytes = fs.readFileSync(sourcePath);

  if (fs.existsSync(destinationPath)) {
    const destinationBytes = fs.readFileSync(destinationPath);

    if (hash(sourceBytes) === hash(destinationBytes)) {
      return;
    }
  }

  fs.mkdirSync(path.dirname(destinationPath), {
    recursive: true,
  });

  fs.writeFileSync(destinationPath, sourceBytes);
}

function removeDirectoryIfExists(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    fs.rmSync(directoryPath, {
      recursive: true,
      force: true,
    });
  }
}

function publicResourcePath(
  publicRoot,
  sermonId,
  resourcePath
) {
  return path.join(
    publicRoot,
    "downloads",
    "sermons",
    sermonId,
    ...resourcePath.split("/")
  );
}

function publicResourceUrl(sermonId, resourcePath) {
  return (
    "/downloads/sermons/" +
    encodeURIComponent(sermonId) +
    "/" +
    resourcePath
      .split("/")
      .map(encodeURIComponent)
      .join("/")
  );
}

export function buildCatalog(sourceRoot, appRoot) {
  requireValue(
    fs.existsSync(path.join(sourceRoot, "sermons")),
    "Authoritative sermon repository is unavailable"
  );

  const packages = [];
  const excluded = [];
  const duplicates = [];

  const publicRoot = path.join(appRoot, "public");

  let discovered = 0;

  for (const lifecycle of [
    "draft",
    "in-review",
    "published",
    "archived",
  ]) {
    const lifecycleRoot = path.join(
      sourceRoot,
      "sermons",
      lifecycle
    );

    const manifests = walk(lifecycleRoot).filter((p) => {
      const fileName = path.basename(p);
      const metadataFolder = path.basename(
        path.dirname(p)
      );

      return (
        metadataFolder === "00-metadata" &&
        /^BRL-SER-\d+\.\d+-metadata\.json$/i.test(
          fileName
        )
      );
    });

    for (const manifest of manifests) {
      discovered++;

      const folder = path.dirname(
        path.dirname(manifest)
      );

      const packagePath = posix(
        path.relative(sourceRoot, folder)
      );

      try {
        const manifestBytes = fs.readFileSync(manifest);

        const m = JSON.parse(
          manifestBytes
            .toString("utf8")
            .replace(/^\uFEFF/, "")
        );

        requireValue(
          m.schemaVersion === "2.0",
          "Expected schemaVersion 2.0"
        );

        requireValue(
          typeof m.title === "string" &&
            m.title.trim(),
          "Missing title"
        );

        requireValue(
          m.id === null ||
            (typeof m.id === "string" &&
              /^[A-Za-z0-9][A-Za-z0-9.-]*$/.test(
                m.id
              )),
          "Invalid/missing permanent ID"
        );

        requireValue(
          m.status === lifecycle ||
            (lifecycle === "in-review" &&
              m.status === "review"),
          "Manifest status differs from lifecycle folder"
        );

        requireValue(
          m.review &&
            typeof m.review === "object",
          "Missing review metadata"
        );

        requireValue(
          Array.isArray(m.mainText) &&
            m.mainText.every(
              (value) =>
                typeof value === "string"
            ),
          "Invalid mainText"
        );

        requireValue(
          m.speaker === null ||
            typeof m.speaker === "string" ||
            (m.speaker &&
              typeof m.speaker.name === "string"),
          "Invalid speaker"
        );

        requireValue(
          m.series === null ||
            typeof m.series === "string" ||
            (m.series &&
              typeof (
                m.series.name ?? m.series.title
              ) === "string"),
          "Invalid series"
        );

        requireValue(
          Array.isArray(m.resources) &&
            m.resources.length > 0,
          "Missing resource inventory"
        );

        for (const flag of [
          "doctrinalApproval",
          "editorialApproval",
          "publicationReady",
        ]) {
          requireValue(
            m.review[flag] === undefined ||
              m.review[flag] === null ||
              typeof m.review[flag] ===
                "boolean",
            "Invalid review flag: " + flag
          );
        }

        /*
         * Determine public visibility before deployment.
         *
         * Only approved published sermons are copied into
         * the website's public download directory.
         */
        const reasons = [];

        if (lifecycle !== "published") {
          reasons.push("Lifecycle: " + lifecycle);
        }

        if (!m.id) {
          reasons.push(
            "Unresolved permanent identity"
          );
        }

        if (m.identityReview?.required === true) {
          reasons.push(
            "Identity review required"
          );
        }

        if (
          m.review.doctrinalApproval !== true
        ) {
          reasons.push(
            "Doctrinal approval not established"
          );
        }

        if (
          m.review.editorialApproval !== true
        ) {
          reasons.push(
            "Editorial approval not established"
          );
        }

        if (
          m.review.publicationReady !== true
        ) {
          reasons.push(
            "Publication readiness not established"
          );
        }

        const publicVisible =
          reasons.length === 0;

        const keys = new Set();
        const paths = new Set();

        const resources = m.resources.map(
          (resource) => {
            requireValue(
              typeof resource.resourceKey ===
                "string" &&
                !keys.has(resource.resourceKey),
              "Duplicate/missing resource key"
            );

            keys.add(resource.resourceKey);

            requireValue(
              typeof resource.path ===
                "string" &&
                !path.isAbsolute(resource.path) &&
                !resource.path.includes("\\") &&
                !resource.path
                  .split("/")
                  .includes("..") &&
                !paths.has(resource.path),
                "Unsafe/duplicate resource path: " + resource.path
            );

            paths.add(resource.path);

            requireValue(
              typeof resource.role ===
                "string" &&
                typeof resource.format ===
                  "string",
              "Missing resource role/format"
            );

            const resourcePath = path.resolve(
              folder,
              resource.path
            );

            requireValue(
              fs.existsSync(resourcePath) &&
                fs
                  .statSync(resourcePath)
                  .isFile() &&
                contained(folder, resourcePath),
              "Missing or escaping resource: " +
                resource.path
            );

            const data =
              fs.readFileSync(resourcePath);

            const digest = hash(data);

            if (resource.sha256 !== undefined) {
  requireValue(
    typeof resource.sha256 === "string" &&
      digest === resource.sha256.toLowerCase(),
    "SHA-256 mismatch: " +
      resource.path +
      " | expected=" +
      resource.sha256 +
      " | actual=" +
      digest
  );
}

if (resource.bytes !== undefined) {
  requireValue(
    Number.isInteger(resource.bytes) &&
      data.length === resource.bytes,
    "Byte-size mismatch: " +
      resource.path +
      " | expected=" +
      resource.bytes +
      " | actual=" +
      data.length
  );
}

            let downloadUrl = null;

            /*
             * AUTOMATIC PUBLICATION
             *
             * The authoritative resource stays in
             * brl-sermons.
             *
             * For an approved public sermon, the catalog
             * process automatically copies the exact file
             * into the website's public directory while
             * preserving its internal package path.
             */
            if (publicVisible && m.id) {
              const destinationPath =
                publicResourcePath(
                  publicRoot,
                  m.id,
                  resource.path
                );

              copyIfChanged(
                resourcePath,
                destinationPath
              );

              downloadUrl =
                publicResourceUrl(
                  m.id,
                  resource.path
                );
            }

            return {
              ...resource,
              bytes: data.length,
              sha256: digest,
              downloadUrl,
            };
          }
        );

        const slug =
          (m.slug || path.basename(folder))
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-|-$/g, "") +
          "-" +
          hash(packagePath).slice(0, 12);

        packages.push({
          packagePath,
          slug,
          id: m.id,
          title: m.title,
          lifecycle,

          legacyImport:
            m.legacyImport?.isLegacy === true,

          series:
            typeof m.series === "string"
              ? m.series
              : m.series?.name ??
                m.series?.title ??
                null,

          seriesSequence:
            m.series?.sequence ?? null,

          speaker:
            typeof m.speaker === "string"
              ? m.speaker
              : m.speaker?.name ?? null,

          primaryText: m.mainText,

          publicVisible,
          withheldReasons: reasons,

          manifestSha256: hash(manifestBytes),

          resources,
          metadata: m,
        });
      } catch (error) {
        excluded.push({
          packagePath,
          reason: error.message,
        });
      }
    }
  }

  /*
   * Duplicate permanent-ID detection
   */
  const ids = new Map();

  for (const sermonPackage of packages) {
    if (!sermonPackage.id) continue;

    if (!ids.has(sermonPackage.id)) {
      ids.set(sermonPackage.id, []);
    }

    ids
      .get(sermonPackage.id)
      .push(sermonPackage.packagePath);
  }

  for (const [id, packagePaths] of ids) {
    if (packagePaths.length > 1) {
      duplicates.push({
        id,
        packages: packagePaths,
      });
    }
  }

  /*
   * Remove public deployment for sermons that are
   * currently known but no longer public-visible.
   *
   * We intentionally do NOT delete unrelated historical
   * sermon download folders here.
   */
  for (const sermonPackage of packages) {
    if (
      sermonPackage.id &&
      !sermonPackage.publicVisible
    ) {
      removeDirectoryIfExists(
        path.join(
          publicRoot,
          "downloads",
          "sermons",
          sermonPackage.id
        )
      );
    }
  }

  const lifecycleCounts =
    Object.fromEntries(
      [
        "draft",
        "in-review",
        "published",
        "archived",
      ].map((status) => [
        status,
        packages.filter(
          (sermonPackage) =>
            sermonPackage.lifecycle === status
        ).length,
      ])
    );

  const summary = {
    discovered,

    valid: packages.length,

    publicVisible: packages.filter(
      (sermonPackage) =>
        sermonPackage.publicVisible
    ).length,

    withheld: packages.filter(
      (sermonPackage) =>
        !sermonPackage.publicVisible
    ).length,

    permanentIds: packages
      .filter(
        (sermonPackage) => sermonPackage.id
      )
      .map(
        (sermonPackage) => sermonPackage.id
      ),

    unresolved: packages
      .filter(
        (sermonPackage) => !sermonPackage.id
      )
      .map(
        (sermonPackage) =>
          sermonPackage.packagePath
      ),

    legacyImports: packages.filter(
      (sermonPackage) =>
        sermonPackage.legacyImport
    ).length,

    lifecycleCounts,

    series: [
      ...new Set(
        packages
          .map(
            (sermonPackage) =>
              sermonPackage.series
          )
          .filter(Boolean)
      ),
    ].sort(compare),

    excluded,
    duplicates,
  };

  return {
    schemaVersion: "1.0",

    source: "../brl-sermons",

    policy:
      "published lifecycle + permanent ID + no identity review + doctrinal/editorial approval + publicationReady",

    summary,
    packages,
  };
}

export function syncCatalog(
  sourceRoot,
  appRoot,
  check = false
) {
  const catalog = buildCatalog(
    sourceRoot,
    appRoot
  );

  if (catalog.summary.duplicates.length) {
  throw Error(
    JSON.stringify(
      catalog.summary,
      null,
      2
    )
  );
}

  const outputs = {
    "generated/sermon-catalog.json":
      catalog,

    "generated/sermon-catalog.public.json":
      {
        packages: catalog.packages.filter(
          (sermonPackage) =>
            sermonPackage.publicVisible
        ),
      },
  };

  for (const [relative, value] of Object.entries(
    outputs
  )) {
    const outputPath = path.join(
      appRoot,
      relative
    );

    const outputText =
      JSON.stringify(value, null, 2) + "\n";

    if (check) {
      requireValue(
        fs.existsSync(outputPath) &&
          fs.readFileSync(
            outputPath,
            "utf8"
          ) === outputText,
        "Stale catalog: " + relative
      );
    } else {
      fs.mkdirSync(
        path.dirname(outputPath),
        {
          recursive: true,
        }
      );

      if (
        !fs.existsSync(outputPath) ||
        fs.readFileSync(
          outputPath,
          "utf8"
        ) !== outputText
      ) {
        fs.writeFileSync(
          outputPath,
          outputText
        );
      }
    }
  }

  return catalog.summary;
}

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) ===
    fileURLToPath(import.meta.url)
) {
  const appRoot = path.resolve(
    path.dirname(
      fileURLToPath(import.meta.url)
    ),
    ".."
  );

  try {
    console.log(
      JSON.stringify(
        syncCatalog(
          path.resolve(
            appRoot,
            "../brl-sermons"
          ),
          appRoot,
          process.argv.includes("--check")
        ),
        null,
        2
      )
    );
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}