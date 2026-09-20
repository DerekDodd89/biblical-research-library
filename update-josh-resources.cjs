const fs = require("fs");
const path = require("path");

const root = path.resolve("../brl-sermons/sermons/published");
const skip = new Set(["411.001", "411.007"]);

for (let i = 1; i <= 16; i++) {
  const num = String(i).padStart(3, "0");
  const shortId = `411.${num}`;
  if (skip.has(shortId)) continue;

  const id = `BRL-SER-${shortId}`;
  const packageDir = path.join(root, id);
  const l3Dir = path.join(packageDir, "01-l3");
  const metadataPath = path.join(
    packageDir,
    "00-metadata",
    `${id}-metadata.json`
  );

  const files = fs.readdirSync(l3Dir)
    .filter(file => file.toLowerCase().endsWith(".docx"));

  if (files.length !== 1) {
    console.error(
      `${id}: expected exactly 1 DOCX in 01-l3, found ${files.length}`
    );
    continue;
  }

  const filename = files[0];
  const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

  metadata.legacyImport.preservedFilename = filename;

  metadata.resources = [
    {
      resourceKey: "legacy-sermon",
      path: `01-l3/${filename}`,
      role: "legacy-sermon",
      format: "docx"
    }
  ];

  fs.writeFileSync(
    metadataPath,
    JSON.stringify(metadata, null, 2) + "\n",
    "utf8"
  );

  console.log(`${id} -> 01-l3/${filename}`);
}

console.log("\nResource inventories updated.");
