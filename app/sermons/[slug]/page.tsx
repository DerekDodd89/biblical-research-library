import { notFound } from "next/navigation";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import ResourceDetails, {
  type ResourceDetailData,
  type ResourceFormat,
} from "@/components/resource/ResourceDetails";
import {
  getSermonBySlug,
  type CatalogResource,
} from "@/lib/sermons";

type SermonDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    length?: string;
  }>;
};

function cleanText(value?: string): string {
  if (!value) return "";

  return value
    .replace(/â€“/g, "–")
    .replace(/â€”/g, "—")
    .replace(/â€™/g, "’")
    .replace(/â€œ/g, "“")
    .replace(/â€/g, "”");
}

function firstDownloadable(
  resources: CatalogResource[]
): CatalogResource | undefined {
  return resources.find(
    (resource) => Boolean(resource.downloadUrl)
  );
}

function makeFormat(
  title: string,
  description: string,
  actionLabel: string,
  icon: ResourceFormat["icon"],
  resources: CatalogResource[]
): ResourceFormat {
  const downloadable = firstDownloadable(resources);

  return {
    title,
    description,
    actionLabel,
    icon,
    href: downloadable?.downloadUrl ?? undefined,
    available: Boolean(downloadable?.downloadUrl),
  };
}

export default async function SermonDetailsPage({
  params,
  searchParams,
}: SermonDetailsPageProps) {
  const { slug } = await params;
  const { length } = await searchParams;

  const sermon = getSermonBySlug(slug);

  if (!sermon) {
    notFound();
  }

  /*
   * ---------------------------------------------------------
   * SERMON LENGTH
   * ---------------------------------------------------------
   */

  const availableLengths = [
    ...new Set(
      sermon.inventory
        .map((resource) => resource.durationMinutes)
        .filter(
          (minutes): minutes is number =>
            minutes === 20 ||
            minutes === 30 ||
            minutes === 40
        )
    ),
  ].sort((a, b) => a - b);

  const requestedLength = Number(length);

  const selectedLength =
    availableLengths.includes(requestedLength)
      ? requestedLength
      : availableLengths.includes(30)
        ? 30
        : availableLengths[0];

  /*
   * ---------------------------------------------------------
   * RESOURCE GROUPING
   * ---------------------------------------------------------
   */

  const l3Resources = sermon.inventory.filter(
    (resource) =>
      resource.path.startsWith("01-l3/") ||
      resource.role.toLowerCase().includes("l3")
  );

  const l2Resources = sermon.inventory.filter(
    (resource) => {
      const isL2 =
        resource.path.startsWith("02-l2/") ||
        resource.role.toLowerCase().includes("l2");

      if (!isL2) return false;

      if (!selectedLength) return true;

      return (
        resource.durationMinutes === selectedLength ||
        resource.path.includes(
          `${selectedLength}_Minute`
        ) ||
        resource.path.includes(
          `${selectedLength}-Minute`
        )
      );
    }
  );

  const presentationResources = sermon.inventory.filter(
    (resource) =>
      resource.path.startsWith("03-presentation/") ||
      resource.format.toLowerCase() === "pptx" ||
      resource.role
        .toLowerCase()
        .includes("presentation")
  );

  const handoutResources = sermon.inventory.filter(
    (resource) => {
      const path = resource.path.toLowerCase();

      const isHandout =
        path.startsWith("04-handouts/") ||
        resource.role
          .toLowerCase()
          .includes("handout");

      const internalAsset =
        path.includes("approved_mockup_assets") ||
        path.includes("approved-mockup-assets") ||
        path.includes("mockup");

      return isHandout && !internalAsset;
    }
  );

  /*
   * ---------------------------------------------------------
   * USER-FACING FORMATS
   * ---------------------------------------------------------
   */

  const formats: ResourceDetailData["formats"] = [];

  if (l3Resources.length > 0) {
    formats.push(
      makeFormat(
        "L3 Study / Archive",
        `${l3Resources.length} exegetical study ${
          l3Resources.length === 1 ? "resource" : "resources"
        } supporting this sermon.`,
        "Open L3 Resource",
        "archive",
        l3Resources
      )
    );
  }

  if (l2Resources.length > 0) {
    formats.push(
      makeFormat(
        selectedLength
          ? `L2 ${selectedLength}-Minute Outline`
          : "L2 Sermon Outline",
        selectedLength
          ? `Preacher's pulpit outline prepared for the ${selectedLength}-minute sermon length.`
          : "Preacher's pulpit outline for this sermon.",
        "Open L2 Outline",
        "outline",
        l2Resources
      )
    );
  }

  if (presentationResources.length > 0) {
    formats.push(
      makeFormat(
        "PowerPoint",
        "Visual presentation prepared for preaching and teaching this sermon.",
        "Download PowerPoint",
        "powerpoint",
        presentationResources
      )
    );
  }

  if (handoutResources.length > 0) {
    formats.push(
      makeFormat(
        "Listener Handouts",
        `${handoutResources.length} listener ${
          handoutResources.length === 1
            ? "handout"
            : "handouts"
        } available for this sermon.`,
        "Open Handout",
        "handout",
        handoutResources
      )
    );
  }

  /*
   * ---------------------------------------------------------
   * SERMON PREVIEW
   * ---------------------------------------------------------
   */

  const preview: string[] = [];

  if (sermon.sermonQuestion) {
    preview.push(
      `Sermon Question: ${sermon.sermonQuestion}`
    );
  }

  if (sermon.seriesTheme) {
    preview.push(
      `Series Theme: ${sermon.seriesTheme}`
    );
  }

  preview.push(...sermon.outlinePreview);

  if (preview.length === 0) {
    preview.push(
      "Sermon resources are available in the BRL archive."
    );
  }

  /*
   * ---------------------------------------------------------
   * RESOURCE DETAILS
   * ---------------------------------------------------------
   */

  const resource: ResourceDetailData = {
    id: sermon.id,
    title: cleanText(sermon.title),
    subtitle: cleanText(sermon.subtitle),

    moduleName: "Sermons & Outlines",

    series: cleanText(sermon.series),

    // The current metadata contains a series title,
    // not a separate permanent BRL series ID.
    seriesId: undefined,

    primaryText: cleanText(sermon.primaryText),

    speaker: sermon.speaker,
    audience: sermon.audience || "General",

    standardLength: sermon.estimatedMinutes,

    status:
      sermon.status === "published"
        ? "Published"
        : sermon.status,

    version: sermon.version,

    proposition: sermon.proposition,

    preview: preview.slice(0, 5),

    availableLengths,
    selectedLength,

    lengthSelectorHref: `/sermons/${sermon.slug}`,

    author: sermon.speaker,

    dateWritten: sermon.dateWritten,
    publicationDate: sermon.publicationDate,
    lastUpdated: sermon.lastUpdated,

    language: sermon.language,

    relatedResources: sermon.relatedBrls.map(
      (id) => ({
        id,
        title: "Related BRL Study",
      })
    ),

    formats,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16]"
        style={{
          backgroundImage:
            "url('/images/modules/08-sermons.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-neutral-950/10"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-8 py-8">
          <ModuleNavigation
            moduleName="Sermons & Outlines"
            currentPage="Sermon Details"
            fallbackHref="/sermons/library"
            fallbackLabel="Go Back"
          />

          <div className="mx-auto max-w-6xl pb-20 pt-2">
            <ResourceDetails resource={resource} />
          </div>
        </div>
      </div>
    </main>
  );
}