import { getPublishedSermons, type Sermon } from "@/lib/sermons";

export type SermonSeries = {id:string;slug:string;title:string;description:string;status:"published";sermonIds:string[]};
const names=[...new Set(getPublishedSermons().map(s=>s.series).filter(Boolean))].sort();
// Internal route keys are not assigned BRL series IDs.
export const sermonSeries:SermonSeries[]=names.map(title=>({
  id:title,slug:encodeURIComponent(title),title,description:"",status:"published",
  sermonIds:getPublishedSermons().filter(s=>s.series===title).map(s=>s.id)
}));
export function getPublishedSermonSeries(){return sermonSeries;}
export function getSermonSeriesBySlug(slug:string){return sermonSeries.find(s=>s.slug===slug || s.title===slug);}
export function getSermonsForSeries(series:SermonSeries):Sermon[]{return getPublishedSermons().filter(s=>series.sermonIds.includes(s.id)).sort((a,b)=>(a.seriesSequence ?? Infinity)-(b.seriesSequence ?? Infinity) || a.title.localeCompare(b.title));}
