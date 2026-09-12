import fs from "fs";
import path from "path";
import { createResource } from "./detectResources";
import { ImportResource } from "./importerTypes";

export function scanFolder(folderPath: string): ImportResource[] {
  const resources: ImportResource[] = [];

  walk(folderPath, resources);

  return resources;
}

function walk(
  currentPath: string,
  resources: ImportResource[]
) {
  const entries = fs.readdirSync(currentPath, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, resources);
      continue;
    }

    resources.push(
      createResource(entry.name, fullPath)
    );
  }
}