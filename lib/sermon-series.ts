import { getSermonById, type Sermon } from "@/lib/sermons";

export type SermonSeries = {
  id: string;
  slug: string;
  title: string;
  description: string;
  status: "draft" | "published";
  sermonIds: string[];
};

export const sermonSeries: SermonSeries[] = [
  {
    id: "BRL-SERIES-000001",
    slug: "do-you-know-god",
    title: "Do You Know God?",
    description:
      "A sermon series designed to move Christians beyond merely knowing facts about God toward recognizing His character, priorities, and desire for fellowship.",
    status: "published",
    sermonIds: ["BRL-S000001"],
  },
];

export function getPublishedSermonSeries(): SermonSeries[] {
  return sermonSeries.filter((series) => series.status === "published");
}

export function getSermonSeriesBySlug(
  slug: string,
): SermonSeries | undefined {
  return sermonSeries.find((series) => series.slug === slug);
}

export function getSermonsForSeries(series: SermonSeries): Sermon[] {
  return series.sermonIds
    .map((sermonId) => getSermonById(sermonId))
    .filter((sermon): sermon is Sermon => sermon !== undefined);
}