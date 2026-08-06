import MetadataEditor from "./MetadataEditor";
import IntroductionEditor from "./IntroductionEditor";
import PointEditor from "./PointEditor";
import ConclusionEditor from "./ConclusionEditor";

export default function SermonEditor() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 p-8">

      <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <MetadataEditor />
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <IntroductionEditor />
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <PointEditor />
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/30 p-6">
        <ConclusionEditor />
      </section>

    </div>
  );
}