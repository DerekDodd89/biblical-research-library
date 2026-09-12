import { notFound } from "next/navigation";

import ModuleNavigation from "@/components/layout/ModuleNavigation";
import ResourceDetails, {
  type ResourceDetailData,
} from "@/components/resource/ResourceDetails";
import { getSermonBySlug } from "@/lib/sermons";

type SermonDetailsPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    length?: string;
  }>;
};

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

  const requestedLength = Number(length);

  const selectedLength =
    requestedLength === 20 ||
    requestedLength === 30 ||
    requestedLength === 40
      ? requestedLength
      : sermon.estimatedMinutes;

  const downloadBase = `/downloads/sermons/${sermon.resources.downloadFolder}`;

  const selectedL2 =
    sermon.resources.l2[
      selectedLength as keyof typeof sermon.resources.l2
    ];

  const l2OutlineHref = selectedL2
    ? `${downloadBase}/${selectedL2}`
    : undefined;

  const resource: ResourceDetailData = {
    id: sermon.id,
    title: sermon.title,
    subtitle: sermon.subtitle,
    moduleName: "Sermons & Outlines",

    series: sermon.series,
    seriesHref: sermon.series
      ? `/sermons/series/${sermon.series
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "")}`
      : undefined,
    seriesId: sermon.series ? sermon.series : undefined,

    primaryText: sermon.primaryText,
    speaker: sermon.speaker,
    audience: sermon.audience,
    standardLength: sermon.estimatedMinutes,
    status: sermon.status === "published" ? "Published" : "Draft",
    version: "1.0",

    proposition: sermon.proposition,
    preview: sermon.introduction.slice(0, 7),

    availableLengths: (
      Object.keys(sermon.resources.l2)
        .map(Number)
        .filter(
          (value): value is 20 | 30 | 40 =>
            value === 20 || value === 30 || value === 40
        )
    ),

    selectedLength,
    lengthSelectorHref: `/sermons/${sermon.slug}`,

    author: sermon.speaker,
    dateWritten: "Not recorded",
    lastUpdated: "August 2026",
    publicationDate: "August 2026",
    language: "English",

    relatedResources: sermon.relatedBrls.map((id) => ({
      id,
      title: "Related BRL Study",
    })),

    formats: [
      {
        title: `L2 Outline — ${selectedLength} Minutes`,
        description:
          "A concise, printable preaching outline prepared for the selected sermon length.",
        actionLabel: "Download PDF",
        href: l2OutlineHref ?? "#",
        available: Boolean(l2OutlineHref),
        icon: "outline",
      },

      {
        title: "L3 Sermon Archive",
        description:
          "The complete canonical sermon archive with expanded development.",
        actionLabel: "Download PDF",
        href: sermon.resources.l3Archive
          ? `${downloadBase}/${sermon.resources.l3Archive}`
          : "#",
        available: Boolean(sermon.resources.l3Archive),
        icon: "archive",
      },

      {
        title: "PowerPoint",
        description:
          "Presentation slides prepared for preaching and teaching.",
        actionLabel: "Download PPTX",
        href: sermon.resources.powerpoint
          ? `${downloadBase}/${sermon.resources.powerpoint}`
          : "#",
        available: Boolean(sermon.resources.powerpoint),
        icon: "powerpoint",
      },

      {
        title: "Listener Handout",
        description:
          "A printable resource for listeners, classes, and group study.",
        actionLabel: "Download PDF",
        href: sermon.resources.handout
          ? `${downloadBase}/${sermon.resources.handout}`
          : "#",
        available: Boolean(sermon.resources.handout),
        icon: "handout",
      },

      {
        title: "Download Complete Sermon Package",
        description:
          "All timed L2 outlines, the L3 archive, presentation, and listener handout.",
        actionLabel: "Download ZIP",
        href: sermon.resources.package
          ? `${downloadBase}/${sermon.resources.package}`
          : "#",
        available: Boolean(sermon.resources.package),
        icon: "package",
      },
    ],
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.16]"
        style={{
          backgroundImage: "url('/images/modules/08-sermons.png')",
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