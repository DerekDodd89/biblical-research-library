import { scanFolder } from "./scanFolder";
import { buildQueue } from "./buildQueue";
import { importSermon } from "./importSermon";

export * from "./importerTypes";
export * from "./detectResources";

export {
  scanFolder,
  buildQueue,
  importSermon,
};

/**
 * Complete importer pipeline.
 *
 * Scan Folder
 *      ↓
 * Detect Resources
 *      ↓
 * Build Queue
 */
export function createImportQueue(folder: string) {
  const resources = scanFolder(folder);

  return buildQueue(resources);
}