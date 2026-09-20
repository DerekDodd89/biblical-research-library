import publicCatalog from "@/generated/sermon-catalog.public.json";

export type CatalogResource = {
  resourceKey: string;
  role: string;
  path: string;
  format: string;
  sha256: string;
  bytes: number;
  downloadUrl: string | null;
  approvalState?: string;
  durationMinutes?: number | null;
  audience?: string | null;
};

export type SermonOutlinePoint = {
  number?: number | string;
  title?: string;
  heading?: string;
  theme?: string;
  summary?: string;
  scripture?: string;
  text?: string;
  reference?: string;
};

export type CatalogMetadata = {
  review: Record<string, unknown>;
  identityReview?: Record<string, unknown>;

  subtitle?: string;
  version?: string;

  audience?: string | string[];

  proposition?: string;
  sermonQuestion?: string;
  seriesTheme?: string;

  outline?: SermonOutlinePoint[];

  conclusion?:
    | string
    | string[]
    | {
        summary?: string | string[];
        closing?: string;
        [key: string]: unknown;
      };

  topics?: string[];

  relatedBrls?: string[];
  relatedBRLs?: string[];

  dateWritten?: string;
  writtenDate?: string;
  publicationDate?: string;
  publishedDate?: string;
  lastUpdated?: string;
  modified?: string;

  language?: string;

  [key: string]: unknown;
};

export type CatalogPackage = {
  packagePath: string;
  slug: string;
  id: string | null;
  title: string;

  lifecycle: string;
  legacyImport: boolean;

  series: string | null;
  seriesSequence: number | null;

  speaker: string | null;
  primaryText: string[];

  publicVisible: boolean;
  withheldReasons: string[];

  resources: CatalogResource[];
  metadata: CatalogMetadata;
};

export type SermonSection = {
  heading: string;
  points: {
    heading: string;
    scripture: string;
    summary: string;
  }[];
  application: string[];
};

export type Sermon = {
  id: string;
  slug: string;

  title: string;
  subtitle: string;

  series: string;
  seriesSequence: number | null;

  speaker: string;
  status: string;

  primaryText: string;

  proposition: string;
  sermonQuestion: string;
  seriesTheme: string;

  topics: string[];
  audience: string;

  version: string;
  language: string;

  dateWritten?: string;
  publicationDate?: string;
  lastUpdated?: string;

  estimatedMinutes?: number;

  introduction: string[];
  sections: SermonSection[];
  conclusion: string[];

  outlinePreview: string[];

  relatedBrls: string[];

  packagePath: string;
  inventory: CatalogResource[];

  metadata: CatalogMetadata;
};

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function audienceText(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value
      .filter((item): item is string => typeof item === "string")
      .join(", ");
  }

  return "";
}

function outlinePreview(metadata: CatalogMetadata): string[] {
  if (!Array.isArray(metadata.outline)) {
    return [];
  }

  return metadata.outline
    .map((point) => {
      if (!point || typeof point !== "object") {
        return "";
      }

      const title =
        text(point.title) ||
        text(point.heading) ||
        text(point.theme);

      const scripture =
        text(point.scripture) ||
        text(point.text) ||
        text(point.reference);

      if (title && scripture) {
        return `${title} — ${scripture}`;
      }

      return title || scripture;
    })
    .filter(Boolean)
    .slice(0, 5);
}

function conclusionLines(metadata: CatalogMetadata): string[] {
  const conclusion = metadata.conclusion;

  if (typeof conclusion === "string") {
    return conclusion.trim() ? [conclusion.trim()] : [];
  }

  if (Array.isArray(conclusion)) {
    return stringArray(conclusion);
  }

  if (conclusion && typeof conclusion === "object") {
    const lines: string[] = [];

    if (typeof conclusion.summary === "string") {
      if (conclusion.summary.trim()) {
        lines.push(conclusion.summary.trim());
      }
    } else if (Array.isArray(conclusion.summary)) {
      lines.push(...stringArray(conclusion.summary));
    }

    if (
      typeof conclusion.closing === "string" &&
      conclusion.closing.trim()
    ) {
      lines.push(conclusion.closing.trim());
    }

    return lines;
  }

  return [];
}

// The public catalog remains the website's source.
// Metadata is carried forward rather than replaced with blank placeholders.
export const sermons: Sermon[] = (
  publicCatalog.packages as CatalogPackage[]
)
  .filter(
    (sermonPackage) =>
      sermonPackage.publicVisible &&
      sermonPackage.id !== null
  )
  .map((sermonPackage) => {
    const metadata = sermonPackage.metadata ?? {
      review: {},
    };

    const lengths = sermonPackage.resources
      .map((resource) => resource.durationMinutes)
      .filter(
        (minutes): minutes is number =>
          minutes === 20 ||
          minutes === 30 ||
          minutes === 40
      );

    const standardLength = lengths.includes(30)
      ? 30
      : lengths[0];

    const relatedBrls = [
      ...stringArray(metadata.relatedBrls),
      ...stringArray(metadata.relatedBRLs),
    ];

    return {
      id: sermonPackage.id!,
      slug: sermonPackage.slug,

      title: sermonPackage.title,
      subtitle: text(metadata.subtitle),

      series: sermonPackage.series ?? "",
      seriesSequence: sermonPackage.seriesSequence,

      speaker: sermonPackage.speaker ?? "Not recorded",
      status: sermonPackage.lifecycle,

      primaryText: sermonPackage.primaryText.join("; "),

      proposition: text(metadata.proposition),
      sermonQuestion: text(metadata.sermonQuestion),
      seriesTheme: text(metadata.seriesTheme),

      topics: stringArray(metadata.topics),
      audience: audienceText(metadata.audience),

      version: text(metadata.version) || "1.0",
      language: text(metadata.language) || "English",

      dateWritten:
        text(metadata.dateWritten) ||
        text(metadata.writtenDate) ||
        undefined,

      publicationDate:
        text(metadata.publicationDate) ||
        text(metadata.publishedDate) ||
        undefined,

      lastUpdated:
        text(metadata.lastUpdated) ||
        text(metadata.modified) ||
        undefined,

      estimatedMinutes: standardLength,

      introduction: [],
      sections: [],
      conclusion: conclusionLines(metadata),

      outlinePreview: outlinePreview(metadata),

      relatedBrls: [...new Set(relatedBrls)],

      packagePath: sermonPackage.packagePath,
      inventory: sermonPackage.resources,

      metadata,
    };
  });

export function getPublishedSermons(): Sermon[] {
  return sermons;
}

export function getSermonBySlug(
  slug: string
): Sermon | undefined {
  return sermons.find((sermon) => sermon.slug === slug);
}

export function getSermonById(
  id: string
): Sermon | undefined {
  return sermons.find((sermon) => sermon.id === id);
}