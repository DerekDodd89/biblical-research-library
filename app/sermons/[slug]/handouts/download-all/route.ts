import fs from "node:fs";
import path from "node:path";

import JSZip from "jszip";

import {
  getSermonBySlug,
  type CatalogResource,
} from "@/lib/sermons";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

/*
 * ---------------------------------------------------------
 * LISTENER HANDOUT FILTER
 * ---------------------------------------------------------
 */

function isListenerHandout(
  resource: CatalogResource
): boolean {
  const resourcePath =
    resource.path.toLowerCase();

  const role =
    resource.role.toLowerCase();

  const isHandout =
    resourcePath.startsWith("04-handouts/") ||
    role.includes("handout");

  const internalAsset =
    resourcePath.includes(
      "approved_mockup_assets"
    ) ||
    resourcePath.includes(
      "approved-mockup-assets"
    ) ||
    resourcePath.includes("mockup");

  return isHandout && !internalAsset;
}

/*
 * ---------------------------------------------------------
 * FILE HELPERS
 * ---------------------------------------------------------
 */

function filenameFromUrl(
  url: string
): string {
  try {
    const pathname = new URL(
      url,
      "http://localhost"
    ).pathname;

    return decodeURIComponent(
      pathname.split("/").pop() || "handout"
    );
  } catch {
    return "handout";
  }
}

function publicFileFromUrl(
  downloadUrl: string
): string | null {
  let pathname: string;

  try {
    pathname = new URL(
      downloadUrl,
      "http://localhost"
    ).pathname;
  } catch {
    return null;
  }

  const decodedPath =
    decodeURIComponent(pathname);

  /*
   * Only allow files from the published
   * sermon download directory.
   */

  if (
    !decodedPath.startsWith(
      "/downloads/sermons/"
    )
  ) {
    return null;
  }

  const relativePath = decodedPath
    .replace(/^\/+/, "")
    .split("/")
    .join(path.sep);

  const publicRoot = path.resolve(
    process.cwd(),
    "public"
  );

  const absolutePath = path.resolve(
    publicRoot,
    relativePath
  );

  /*
   * Prevent path traversal outside /public.
   */

  const relativeCheck = path.relative(
    publicRoot,
    absolutePath
  );

  if (
    relativeCheck.startsWith("..") ||
    path.isAbsolute(relativeCheck)
  ) {
    return null;
  }

  return absolutePath;
}

function safeZipName(
  value: string
): string {
  return value
    .replace(
      /[<>:"/\\|?*\x00-\x1F]/g,
      "-"
    )
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/*
 * ---------------------------------------------------------
 * DOWNLOAD ALL LISTENER HANDOUTS
 * ---------------------------------------------------------
 */

export async function GET(
  _request: Request,
  context: RouteContext
) {
  const { slug } =
    await context.params;

  const sermon =
    getSermonBySlug(slug);

  if (!sermon) {
    return new Response(
      "Sermon not found.",
      {
        status: 404,
      }
    );
  }

  /*
   * Find all published listener handouts.
   */

  const handouts =
    sermon.inventory
      .filter(isListenerHandout)
      .filter(
        (
          resource
        ): resource is CatalogResource & {
          downloadUrl: string;
        } =>
          Boolean(
            resource.downloadUrl
          )
      );

  if (handouts.length === 0) {
    return new Response(
      "No listener handouts are available.",
      {
        status: 404,
      }
    );
  }

  /*
   * ---------------------------------------------------------
   * CREATE ZIP
   * ---------------------------------------------------------
   */

  const zip = new JSZip();

  const usedNames =
    new Set<string>();

  let addedFiles = 0;

  for (const resource of handouts) {
    const absolutePath =
      publicFileFromUrl(
        resource.downloadUrl
      );

    if (!absolutePath) {
      continue;
    }

    if (
      !fs.existsSync(
        absolutePath
      )
    ) {
      continue;
    }

    if (
      !fs
        .statSync(absolutePath)
        .isFile()
    ) {
      continue;
    }

    /*
     * Determine filename inside ZIP.
     */

    const originalFilename =
      filenameFromUrl(
        resource.downloadUrl
      );

    let zipFilename =
      originalFilename;

    let counter = 2;

    /*
     * Prevent duplicate filenames.
     */

    while (
      usedNames.has(
        zipFilename
      )
    ) {
      const extension =
        path.extname(
          originalFilename
        );

      const base =
        path.basename(
          originalFilename,
          extension
        );

      zipFilename =
        `${base}-${counter}${extension}`;

      counter += 1;
    }

    usedNames.add(
      zipFilename
    );

    /*
     * Read published file.
     */

    const fileBuffer =
      fs.readFileSync(
        absolutePath
      );

    /*
     * Add file to ZIP.
     */

    zip.file(
      zipFilename,
      fileBuffer
    );

    addedFiles += 1;
  }

  /*
   * If catalog entries existed but the
   * published files were not found.
   */

  if (addedFiles === 0) {
    return new Response(
      "Listener handout files could not be found.",
      {
        status: 404,
      }
    );
  }

  /*
   * ---------------------------------------------------------
   * GENERATE ZIP
   * ---------------------------------------------------------
   */

  const zipBuffer =
    await zip.generateAsync({
      type: "uint8array",

      compression:
        "DEFLATE",

      compressionOptions: {
        level: 9,
      },
    });

  /*
   * ---------------------------------------------------------
   * DOWNLOAD NAME
   * ---------------------------------------------------------
   */

  const downloadName =
    `${safeZipName(
      sermon.id
    )}-Listener-Handouts.zip`;

  /*
   * Convert the generated ZIP into a Blob.
   *
   * This avoids the BodyInit TypeScript
   * incompatibility between Uint8Array and
   * the Next.js Response constructor.
   */

  const responseBody =
    new Blob(
      [
        zipBuffer as BlobPart,
      ],
      {
        type: "application/zip",
      }
    );

  /*
   * ---------------------------------------------------------
   * RESPONSE
   * ---------------------------------------------------------
   */

  return new Response(
    responseBody,
    {
      status: 200,

      headers: {
        "Content-Type":
          "application/zip",

        "Content-Disposition":
          `attachment; filename="${downloadName}"`,

        "Content-Length":
          String(
            zipBuffer.byteLength
          ),

        "Cache-Control":
          "no-store",
      },
    }
  );
}