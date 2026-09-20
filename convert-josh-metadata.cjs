const fs = require("fs");
const path = require("path");

const root = path.resolve("../brl-sermons/sermons/published");
const skip = new Set(["411.001", "411.007"]);

for (let i = 1; i <= 16; i++) {
  const num = String(i).padStart(3, "0");
  const shortId = `411.${num}`;

  if (skip.has(shortId)) continue;

  const id = `BRL-SER-${shortId}`;
  const metadataPath = path.join(
    root,
    id,
    "00-metadata",
    `${id}-metadata.json`
  );

  const old = JSON.parse(fs.readFileSync(metadataPath, "utf8"));

  const title = old.title || old.legacy_title || id;
  const sequence = i;

  const mainTextRaw =
    old.primary_text ||
    old.mainText ||
    old.primaryText ||
    "";

  const mainText = Array.isArray(mainTextRaw)
    ? mainTextRaw
    : mainTextRaw
      ? [mainTextRaw]
      : [];

  const oldSections =
    old.major_sections ||
    old.outline ||
    [];

  const outline = oldSections
    .map((section) => {
      if (typeof section === "string") {
        return { heading: section };
      }

      return {
        heading:
          section.title ||
          section.heading ||
          section.section ||
          "Untitled Section"
      };
    });

  const topics =
    old.key_topics ||
    old.topics ||
    [];

  const originalFilename =
    old.legacy_source?.original_filename ||
    old.legacyImport?.originalFilename ||
    null;

  const preservedFilename =
    old.legacy_source?.preserved_filename ||
    old.legacyImport?.preservedFilename ||
    originalFilename;

  const theme =
    old.theme ||
    old.thesis ||
    old.proposition ||
    "";

  const proposition =
    old.proposition ||
    old.thesis ||
    old.theme ||
    "";

  const slug = title
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const converted = {
    schemaVersion: "2.0",
    id,
    slug,
    title,
    status: "published",

    speaker: {
      name: old.author_speaker || old.speaker?.name || "Josh Hetrick"
    },

    series: {
      name: "Josh Hetrick Legacy Sermons",
      sequence
    },

    mainText,

    sermonType: {
      primary: "Topical"
    },

    theme,
    proposition,

    sermonQuestion:
      old.sermonQuestion ||
      "",

    outline,
    topics,

    legacyImport: {
      isLegacy: true,
      collection: "Josh Hetrick Legacy Sermons",
      originalFilename,
      preservedFilename,
      contentPreservation:
        old.legacy_source?.content_preservation ||
        old.legacyImport?.contentPreservation ||
        "Original Josh Hetrick legacy sermon preserved unchanged.",
      importDate:
        old.brl_import?.date ||
        old.legacyImport?.importDate ||
        "2026-09-13"
    },

    identityReview: {
      required: false
    },

    review: {
      doctrinalApproval: true,
      editorialApproval: true,
      publicationReady: true
    },

    resources: []
  };

  fs.writeFileSync(
    metadataPath,
    JSON.stringify(converted, null, 2) + "\n",
    "utf8"
  );

  console.log(`Converted ${id} — ${title}`);
}

console.log("\nJosh legacy metadata conversion complete.");
