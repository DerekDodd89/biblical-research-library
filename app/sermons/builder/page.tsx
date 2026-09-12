import ModuleNavigation from "@/components/layout/ModuleNavigation";
import SermonEngine from "@/components/sermons/SermonEngine";

export default function SermonBuilderPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{
          backgroundImage:
            "url('/images/modules/08-sermons.png')",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 bg-neutral-950/20"
      />

      <div className="relative z-10 flex h-screen flex-col">

        <div className="px-8 pt-5">

          <ModuleNavigation
            moduleName="Sermons & Outlines"
            currentPage="Sermon Engine"
            fallbackHref="/sermons"
            fallbackLabel="Back"
          />

        </div>

        <div className="flex-1 overflow-hidden">

          <SermonEngine />

        </div>

      </div>

    </main>
  );
}