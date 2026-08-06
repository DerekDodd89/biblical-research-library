import Link from "next/link";
import {
  Archive,
  BookOpen,
  Box,
  CalendarDays,
  Clock3,
  FileText,
  Globe2,
  IdCard,
  Presentation,
  ScrollText,
  Star,
  UserRound,
} from "lucide-react";

export type ResourceFormat = {
  title: string;
  description: string;
  actionLabel: string;
  href?: string;
  available: boolean;
  icon:
    | "outline"
    | "archive"
    | "powerpoint"
    | "handout"
    | "package";
};

export type ResourceDetailData = {
  id: string;
  title: string;
  subtitle?: string;
  moduleName: string;

  series?: string;
  seriesHref?: string;
  seriesId?: string;

  primaryText?: string;
  speaker?: string;
  audience?: string;
  standardLength?: number;
  status?: string;
  version?: string;

  proposition?: string;
  preview: string[];

  formats: ResourceFormat[];

  availableLengths?: number[];
  selectedLength?: number;
  lengthSelectorHref?: string;

  relatedResources?: {
    id: string;
    title: string;
    href?: string;
  }[];

  publicationDate?: string;
  author?: string;
  dateWritten?: string;
  lastUpdated?: string;
  language?: string;
};

type ResourceDetailsProps = {
  resource: ResourceDetailData;
};

const formatIcons = {
  outline: FileText,
  archive: Archive,
  powerpoint: Presentation,
  handout: ScrollText,
  package: Box,
};

export default function ResourceDetails({
  resource,
}: ResourceDetailsProps) {
  const downloadableFormats = resource.formats.filter(
    (format) => format.icon !== "package",
  );

  const packageFormat = resource.formats.find(
    (format) => format.icon === "package",
  );

  return (
    <article className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
      <div className="min-w-0 space-y-5">
        <header>
          <span className="inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-200">
            {resource.id}
          </span>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {resource.title}
          </h1>

          {resource.subtitle ? (
            <p className="mt-1 text-lg text-neutral-300">
              {resource.subtitle}
            </p>
          ) : null}

          {resource.primaryText ? (
            <p className="mt-3 flex items-center gap-2 text-sm text-neutral-300">
              <BookOpen className="h-4 w-4 text-neutral-400" />

              <span className="text-neutral-400">
                Scripture:
              </span>

              <span className="font-semibold text-amber-200">
                {resource.primaryText}
              </span>
            </p>
          ) : null}
        </header>

        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          {resource.proposition ? (
            <section className="rounded-2xl border border-white/20 bg-black/45 p-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                Proposition
              </p>

              <p className="mt-4 leading-7 text-neutral-200">
                {resource.proposition}
              </p>
            </section>
          ) : null}

          <section className="rounded-2xl border border-white/20 bg-black/45 p-5 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Preview
            </p>

            <div className="mt-4 space-y-1.5">
              {resource.preview.slice(0, 5).map((line, index) => (
                <p
                  key={`${index}-${line}`}
                  className="text-sm leading-6 text-neutral-300"
                >
                  {line}
                </p>
              ))}
            </div>
          </section>
        </div>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Available Formats
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {downloadableFormats.map((format) => (
              <FormatCard
                key={format.title}
                format={format}
              />
            ))}
          </div>

          {packageFormat ? (
            <CompletePackageCard format={packageFormat} />
          ) : null}
        </section>
      </div>

      <aside className="space-y-4 border-white/10 xl:border-l xl:pl-5">
        <section className="rounded-2xl border border-white/20 bg-black/45 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Sermon Length
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[20, 30, 40].map((minutes) => {
              const available =
                resource.availableLengths?.includes(minutes) ?? false;

              const selected =
                resource.selectedLength === minutes;

              const selectorHref =
                `${resource.lengthSelectorHref ?? ""}?length=${minutes}`;

              if (!available) {
                return (
                  <div
                    key={minutes}
                    className="rounded-lg border border-white/10 bg-black/30 px-3 py-3 text-center text-sm text-neutral-600"
                  >
                    {minutes} min
                  </div>
                );
              }

              return (
                <Link
                  key={minutes}
                  href={selectorHref}
                  scroll={false}
                  className={
                    selected
                      ? "rounded-lg border border-amber-300/70 bg-amber-300/15 px-3 py-3 text-center text-sm font-semibold text-amber-200"
                      : "rounded-lg border border-white/20 bg-black/30 px-3 py-3 text-center text-sm font-semibold text-neutral-300 transition hover:border-amber-300/50 hover:text-amber-200"
                  }
                >
                  {minutes} min
                  {selected ? " ✓" : ""}
                </Link>
              );
            })}
          </div>

          <p className="mt-3 text-xs leading-5 text-neutral-400">
            The selected length changes only the preacher’s L2 outline.
          </p>
        </section>

        <section className="rounded-2xl border border-white/20 bg-black/45 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Related BRL Resources
          </p>

          {resource.relatedResources?.length ? (
            <div className="mt-4 overflow-hidden rounded-xl border border-white/15">
              {resource.relatedResources.map((related) =>
                related.href ? (
                  <Link
                    key={related.id}
                    href={related.href}
                    className="flex items-center justify-between gap-3 border-b border-white/10 bg-black/20 px-4 py-3 text-sm transition last:border-b-0 hover:bg-white/5"
                  >
                    <span>
                      <strong className="text-amber-300">
                        {related.id}
                      </strong>

                      <span className="ml-3 text-neutral-200">
                        {related.title}
                      </span>
                    </span>

                    <span className="text-amber-300">›</span>
                  </Link>
                ) : (
                  <div
                    key={related.id}
                    className="border-b border-white/10 bg-black/20 px-4 py-3 text-sm last:border-b-0"
                  >
                    <strong className="text-amber-300">
                      {related.id}
                    </strong>

                    <span className="ml-3 text-neutral-200">
                      {related.title}
                    </span>
                  </div>
                ),
              )}
            </div>
          ) : (
            <p className="mt-4 text-sm text-neutral-400">
              No related BRL studies assigned.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-white/20 bg-black/45 p-5 text-sm backdrop-blur-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            File Details
          </p>

          <FileDetailRow
            icon={UserRound}
            label="Author"
            value={resource.author ?? resource.speaker ?? "Not recorded"}
          />

          <FileDetailRow
            icon={CalendarDays}
            label="Date Written"
            value={resource.dateWritten ?? "Not recorded"}
          />

          <FileDetailRow
            icon={Clock3}
            label="Last Updated"
            value={resource.lastUpdated ?? "Not recorded"}
          />

          <FileDetailRow
            icon={Star}
            label="Status"
            value={resource.status ?? "Not recorded"}
          />

          <FileDetailRow
            icon={CalendarDays}
            label="Published"
            value={resource.publicationDate ?? "Not recorded"}
          />

          <FileDetailRow
            icon={IdCard}
            label="Resource ID"
            value={resource.id}
          />

          {resource.seriesId ? (
            <FileDetailRow
              icon={BookOpen}
              label="Series ID"
              value={resource.seriesId}
            />
          ) : null}

          <FileDetailRow
            icon={Archive}
            label="Version"
            value={resource.version ?? "1.0"}
          />

          <FileDetailRow
            icon={Globe2}
            label="Language"
            value={resource.language ?? "English"}
          />
        </section>
      </aside>
    </article>
  );
}

function FormatCard({
  format,
}: {
  format: ResourceFormat;
}) {
  const Icon = formatIcons[format.icon];

  const content = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5 shrink-0 text-amber-300" />

        <h3 className="font-bold text-white">
          {format.title}
        </h3>
      </div>

      <p className="mt-3 line-clamp-3 text-xs leading-5 text-neutral-400">
        {format.description}
      </p>

      <p
        className={
          format.available
            ? "mt-auto pt-4 text-sm font-semibold text-amber-300"
            : "mt-auto pt-4 text-sm font-semibold text-neutral-500"
        }
      >
        {format.available
          ? `${format.actionLabel} →`
          : "Coming Soon"}
      </p>
    </div>
  );

  if (format.available && format.href) {
    return (
      <Link
        href={format.href}
        className="min-h-44 rounded-xl border border-white/20 bg-black/45 p-4 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-amber-300/70 hover:bg-black/55"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="min-h-44 rounded-xl border border-white/10 bg-black/30 p-4 opacity-60">
      {content}
    </div>
  );
}

function CompletePackageCard({
  format,
}: {
  format: ResourceFormat;
}) {
  const content = (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-amber-300/30 bg-amber-300/10">
          <Box className="h-6 w-6 text-amber-300" />
        </div>

        <div>
          <h3 className="font-bold text-white">
            {format.title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-neutral-400">
            {format.description}
          </p>
        </div>
      </div>

      <span
        className={
          format.available
            ? "shrink-0 text-sm font-semibold text-amber-300"
            : "shrink-0 text-sm font-semibold text-neutral-500"
        }
      >
        {format.available
          ? `${format.actionLabel} →`
          : "Coming Soon"}
      </span>
    </div>
  );

  if (format.available && format.href) {
    return (
      <Link
        href={format.href}
        className="mt-3 block rounded-xl border border-amber-300/30 bg-amber-300/5 p-4 transition hover:border-amber-300/70 hover:bg-amber-300/10"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-4 opacity-60">
      {content}
    </div>
  );
}

type FileDetailRowProps = {
  icon: typeof BookOpen;
  label: string;
  value: string;
};

function FileDetailRow({
  icon: Icon,
  label,
  value,
}: FileDetailRowProps) {
  return (
    <div className="grid grid-cols-[18px_104px_minmax(0,1fr)] items-center gap-3 border-b border-white/10 py-2.5 last:border-b-0">
      <Icon className="h-4 w-4 text-neutral-400" />

      <span className="text-neutral-400">
        {label}:
      </span>

      <span className="min-w-0 font-medium text-neutral-200">
        {value}
      </span>
    </div>
  );
}