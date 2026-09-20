import { notFound } from "next/navigation";
import type { CatalogPackage } from "@/lib/sermons";

export const dynamic = "force-dynamic";
export default async function CatalogPage(){
  if(process.env.NODE_ENV!=="development") notFound();
  const catalog=await import("@/generated/sermon-catalog.json");
  return <main className="min-h-screen bg-neutral-950 p-8 text-white">
    <h1 className="text-3xl font-bold">Development sermon catalog</h1>
    <p>Repository inventory only. This view does not publish sermons.</p>
    <p>{catalog.summary.discovered} packages; {catalog.summary.publicVisible} public; {catalog.summary.withheld} withheld.</p>
    <table className="mt-6 w-full text-left"><thead><tr><th>ID</th><th>Title</th><th>Lifecycle</th><th>Legacy</th><th>Review / visibility</th></tr></thead>
    <tbody>{(catalog.packages as CatalogPackage[]).map(p=><tr key={p.packagePath} className="border-t border-neutral-700">
      <td>{p.id ?? "Unresolved identity"}</td><td>{p.title}</td><td>{p.lifecycle}</td>
      <td>{p.legacyImport?"Legacy import":"â€”"}</td><td>{p.withheldReasons.join("; ") || "Public"}</td>
    </tr>)}</tbody></table>
  </main>;
}
