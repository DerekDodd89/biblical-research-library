import fs from "fs";
import path from "path";
import { ImportQueueItem } from "./importerTypes";

const SERMON_ROOT = path.join(
  process.cwd(),
  "downloads",
  "sermons"
);

export function importSermon(
  sermon: ImportQueueItem
) {
  const sermonFolder = path.join(
    SERMON_ROOT,
    sermon.id
  );

  if (!fs.existsSync(sermonFolder)) {
    fs.mkdirSync(sermonFolder, {
      recursive: true,
    });
  }

  for (const resource of sermon.resources) {
    const destination = path.join(
      sermonFolder,
      resource.fileName
    );

    fs.copyFileSync(
      resource.fullPath,
      destination
    );
  }

  const metadata = {
    id: sermon.id,
    title: sermon.title,
    speaker: sermon.speaker,
    series: sermon.series,
    primaryText: sermon.primaryText,
    legacy: sermon.legacy,
    canonical: sermon.canonical,
  };

  fs.writeFileSync(
    path.join(sermonFolder, "metadata.json"),
    JSON.stringify(metadata, null, 2)
  );

  return sermonFolder;
}