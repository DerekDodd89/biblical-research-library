import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Download,
  FileText,
  ArrowLeft,
  PackageOpen,
  Eye,
} from "lucide-react";

import {
  getSermonBySlug,
  type CatalogResource,
} from "@/lib/sermons";

type SermonHandoutsPageProps = {
  params: Promise<{
    slug: string;
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

function isListenerHandout(
  resource: CatalogResource
): boolean {
  const path = resource.path.toLowerCase();
  const role = resource.role.toLowerCase();

  const isHandout =
    path.startsWith("04-handouts/") ||
    role.includes("handout");

  const internalAsset =
    path.includes("approved_mockup_assets") ||
    path.includes("approved-mockup-assets") ||
    path.includes("mockup");

  return isHandout && !internalAsset;
}

function getFilename(path: string): string {
  return path.split("/").pop() ?? path;
}

function getDisplayName(
  resource: CatalogResource
): string {
  const filename = getFilename(resource.path);

  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/^BRL-SER-\d+\.\d+[-_]?/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getFormatLabel(
  resource: CatalogResource
): string {
  const format = resource.format?.trim();

  if (!format) {
    return "FILE";
  }

  return format.toUpperCase();
}

export default async function SermonHandoutsPage({
  params,
}: SermonHandoutsPageProps) {
  const { slug } = await params;

  const sermon = getSermonBySlug(slug);

  if (!sermon) {
    notFound();
  }

  const handouts = sermon.inventory
    .filter(isListenerHandout)
    .filter(
      (
        resource
      ): resource is CatalogResource & {
        downloadUrl: string;
      } => Boolean(resource.downloadUrl)
    )
    .sort((a, b) =>
      getDisplayName(a).localeCompare(
        getDisplayName(b),
        undefined,
        {
          numeric: true,
          sensitivity: "base",
        }
      )
    );

  if (handouts.length === 0) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-neutral-950 text-white">
      {/* Background */}

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
        className="pointer-events-none fixed inset-0 bg-neutral-950/20"
      />

      {/* Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        {/* Back */}

        <Link
          href={`/sermons/${sermon.slug}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#8b6a2b]/30 bg-[#0b1525]/80 px-4 py-2 text-sm font-semibold text-neutral-200 transition hover:border-amber-400/50 hover:text-white"
        >
          <ArrowLeft size={17} />
          Sermon Details
        </Link>

        {/* Header */}

        <div className="mt-6 border-b border-[#8b6a2b]/30 pb-6">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">
            <PackageOpen size={18} />
            Listener Handouts
          </div>

          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {cleanText(sermon.title)}
          </h1>

          {sermon.subtitle && (
            <p className="mt-2 text-lg text-neutral-300">
              {cleanText(sermon.subtitle)}
            </p>
          )}

          <p className="mt-4 text-sm text-neutral-400">
            {handouts.length}{" "}
            {handouts.length === 1
              ? "handout"
              : "handouts"}{" "}
            available
          </p>
        </div>

        {/* Handouts */}

        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          {handouts.map((handout) => {
            const displayName =
              getDisplayName(handout);

            return (
              <article
                key={handout.path}
                className="flex min-w-0 flex-col rounded-2xl border border-[#8b6a2b]/30 bg-[#0b1525]/90 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#8b6a2b]/30 bg-[#101d30] text-amber-300">
                    <FileText size={21} />
                  </div>

                  <div className="min-w-0">
                    <h2 className="break-words text-lg font-bold text-white">
                      {displayName}
                    </h2>

                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      {getFormatLabel(handout)}
                    </div>
                  </div>
                </div>

                {/* Preview + Download */}

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <a
                     href={handout.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-amber-400/40 bg-[#101d30] px-4 py-2 text-sm font-bold text-amber-300 transition hover:border-amber-300 hover:bg-[#15243a]"
                >
                    <Eye size={17} />
                    Preview
                </a>
                  <a
                    href={handout.downloadUrl}
                    download
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-400"
                  >
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Complete Handout Set */}

        {handouts.length > 1 && (
          <div className="mt-8 rounded-2xl border border-[#8b6a2b]/30 bg-[#0b1525]/80 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold">
                  Complete Handout Set
                </h2>

                <p className="mt-1 text-sm text-neutral-400">
                  Download all {handouts.length} listener
                  handouts together.
                </p>
              </div>

              <button
                type="button"
                disabled
                title="Download All ZIP will be added next."
                className="inline-flex min-h-[44px] cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-[#8b6a2b]/30 bg-[#111827] px-5 py-2 text-sm font-bold text-neutral-500"
              >
                <Download size={17} />
                Download All
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}