import path from "path";

import {
  ImportQueueItem,
  ImportResource,
} from "./importerTypes";

export function buildQueue(
  resources: ImportResource[]
): ImportQueueItem[] {

  const map = new Map<string, ImportQueueItem>();

  for (const resource of resources) {

    const title = path.parse(resource.fileName).name;

    if (!map.has(title)) {

      map.set(title, {

        id: crypto.randomUUID(),

        folderName: title,

        title,

        speaker: "",

        series: "",

        primaryText: "",

        resources: [],

        legacy: false,

        canonical: false,

        imported: false,

      });

    }

    map.get(title)!.resources.push(resource);

  }

  return [...map.values()].sort((a, b) =>
    a.title!.localeCompare(b.title!)
  );
}