export type ImportResourceType =
  | "docx"
  | "pptx"
  | "pdf"
  | "audio"
  | "image"
  | "video"
  | "unknown";

export interface ImportResource {
  type: ImportResourceType;
  fileName: string;
  fullPath: string;
  extension: string;
}

export interface ImportQueueItem {
  id: string;

  folderName: string;

  title?: string;

  speaker?: string;

  series?: string;

  primaryText?: string;

  resources: ImportResource[];

  legacy: boolean;

  canonical: boolean;

  imported: boolean;
}

export interface MetadataDraft {
  title: string;

  speaker: string;

  series: string;

  primaryText: string;

  legacy: boolean;

  canonical: boolean;
}