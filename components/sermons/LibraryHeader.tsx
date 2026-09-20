"use client";

type Sermon = ReturnType<
  typeof import("@/lib/sermons").getPublishedSermons
>[number];

type LibraryHeaderProps = {
  sermons: Sermon[];
};

export default function LibraryHeader({
  sermons,
}: LibraryHeaderProps) {
  const totalSermons = sermons.length;

  return (
    <header className="border-b border-[#8b6a2b]/30 px-10 py-5">
      <div className="flex items-start justify-between gap-8">
        <div>
          <h1 className="text-5xl font-bold text-white">
            Search Sermons Library
          </h1>

          <p className="mt-2 max-w-2xl text-lg text-neutral-400">
            Find, filter, and access sermons from your BRL collection.
          </p>
        </div>

        <div className="pt-1">
          <Stat
            title="Total Sermons"
            value={totalSermons.toString()}
          />
        </div>
      </div>
    </header>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="text-center">
      <div className="text-xs uppercase tracking-[0.2em] text-neutral-500">
        {title}
      </div>

      <div className="mt-1 text-5xl font-bold text-amber-400">
        {value}
      </div>
    </div>
  );
}