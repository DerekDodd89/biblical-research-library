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
      : 30;

  const l2OutlineHref =
    `/downloads/sermons/BRL-S000001/` +
    `BRL-S000001-${selectedLength}min-L2-Outline.pdf`;

  const resource: ResourceDetailData = {
    id: sermon.id,
    title: sermon.title,
    subtitle: sermon.subtitle,
    moduleName: "Sermons & Outlines",

    series: sermon.series,
    seriesHref: "/sermons/series/do-you-know-god",
    seriesId: "BRL-SERIES-000001",

    primaryText: sermon.primaryText,
    speaker: sermon.speaker,
    audience: sermon.audience,
    standardLength: sermon.estimatedMinutes,
    status: "Published",
    version: "1.0",

    proposition: sermon.proposition,
    preview: sermon.introduction.slice(0, 7),

    availableLengths: [20, 30, 40],
    selectedLength,
    lengthSelectorHref: `/sermons/${sermon.slug}`,

    author: sermon.speaker,
    dateWritten: "Not recorded",
    lastUpdated: "August 3, 2026",
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
        href: l2OutlineHref,
        available: true,
        icon: "outline",
      },
      {
        title: "L3 Sermon Archive",
        description:
          "The complete canonical sermon archive with expanded development.",
        actionLabel: "Download PDF",
        href:
          "/downloads/sermons/BRL-S000001/BRL-S000001-L3-Sermon-Archive.pdf",
        available: true,
        icon: "archive",
      },
      {
        title: "PowerPoint",
        description:
          "Presentation slides prepared for preaching and teaching.",
        actionLabel: "Download PPTX",
        href:
          "/downloads/sermons/BRL-S000001/BRL-S000001-Presentation.pptx",
        available: true,
        icon: "powerpoint",
      },
      {
        title: "Listener Handout",
        description:
          "A printable resource for listeners, classes, and group study.",
        actionLabel: "Download PDF",
        href:
          "/downloads/sermons/BRL-S000001/BRL-S000001-Listener-Handout.pdf",
        available: true,
        icon: "handout",
      },
      {
        title: "Download Complete Sermon Package",
        description:
          "All timed L2 outlines, the L3 archive, presentation, and listener handout.",
        actionLabel: "Download ZIP",
        href:
          "/downloads/sermons/BRL-S000001/BRL-S000001-Complete-Sermon-Package.zip",
        available: true,
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