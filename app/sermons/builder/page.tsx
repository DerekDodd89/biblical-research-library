import ModuleNavigation from "@/components/layout/ModuleNavigation";

import BuilderSidebar from "@/components/sermons/BuilderSidebar";
import BuilderWorkspace from "@/components/sermons/BuilderWorkspace";
import BuilderInspector from "@/components/sermons/BuilderInspector";

export default function SermonBuilderPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">

      <div
        className="pointer-events-none fixed inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15]"
        style={{
          backgroundImage:
            "url('/images/modules/08-sermons.png')",
        }}
      />

      <div className="relative z-10 flex h-screen flex-col">

        <div className="px-8 pt-8">
          <ModuleNavigation
            moduleName="Sermons & Outlines"
            currentPage="Sermon Builder"
            fallbackHref="/sermons"
            fallbackLabel="Back"
          />
        </div>

        <div className="flex flex-1 overflow-hidden">

          <BuilderSidebar />

          <BuilderWorkspace />

          <BuilderInspector />

        </div>

      </div>

    </main>
  );
}