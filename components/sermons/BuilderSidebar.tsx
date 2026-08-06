export default function BuilderSidebar() {
  const steps = [
    "Welcome",
    "Import",
    "Analyze",
    "Review",
    "Canonical",
    "Resources",
    "Publish",
  ];

  return (
    <aside className="flex h-full w-64 flex-col border-r border-white/10 bg-black/30">
      <div className="border-b border-white/10 p-5">
        <h2 className="text-lg font-bold text-amber-300">
          Workflow
        </h2>
      </div>

      <nav className="flex-1 px-3 py-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`mb-2 rounded-lg px-4 py-3 ${
              index === 0
                ? "bg-amber-300/15 text-amber-300"
                : "text-neutral-300 hover:bg-white/5"
            }`}
          >
            {index === 0 ? "●" : "○"} {step}
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-5">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          Progress
        </p>

        <div className="mt-3 h-2 rounded-full bg-white/10">
          <div className="h-2 w-[5%] rounded-full bg-amber-300" />
        </div>

        <p className="mt-2 text-sm text-neutral-300">
          5% Complete
        </p>
      </div>
    </aside>
  );
}