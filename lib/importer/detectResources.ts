import {
  ImportResource,
  ImportResourceType,
} from "./importerTypes";

const extensionMap: Record<string, ImportResourceType> = {
  ".docx": "docx",
  ".pptx": "pptx",
  ".pdf": "pdf",

  ".mp3": "audio",
  ".wav": "audio",
  ".m4a": "audio",

  ".jpg": "image",
  ".jpeg": "image",
  ".png": "image",
  ".gif": "image",
  ".webp": "image",

  ".mp4": "video",
  ".mov": "video",
};

export function detectResourceType(
  fileName: string
): ImportResourceType {
  const dot = fileName.lastIndexOf(".");

  if (dot === -1) return "unknown";

  const ext = fileName.substring(dot).toLowerCase();

  return extensionMap[ext] ?? "unknown";
}

export function createResource(
  fileName: string,
  fullPath: string
): ImportResource {
  const dot = fileName.lastIndexOf(".");

  const extension =
    dot === -1 ? "" : fileName.substring(dot).toLowerCase();

  return {
    type: detectResourceType(fileName),
    fileName,
    fullPath,
    extension,
  };
}