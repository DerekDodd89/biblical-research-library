import ModuleCard from "@/components/home/ModuleCard";
import { modules } from "@/lib/modules";

export default function ModuleGrid() {
  return (
    <section className="bg-slate-50 px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            Explore the Platform
          </p>

          <h2 className="mt-1 font-serif text-3xl font-bold text-slate-950">
            Biblical Research Library Modules
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            Study Scripture, conduct contextual research, follow structured
            courses, prepare teaching material, and organize your work from one
            connected platform.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {modules.map((module) => (
            <ModuleCard key={module.title} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}