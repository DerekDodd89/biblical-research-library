export default function SermonOutline() {
  return (
    <div className="flex h-full flex-col">

      {/* Title */}

      <div className="border-b #8b6a2b px-5 py-4">

        <h2 className="text-lg font-bold text-amber-300">
          Sermon Outline
        </h2>

        <p className="mt-1 text-sm text-neutral-400">
          Document Navigation
        </p>

      </div>

      {/* Outline */}

      <div className="flex-1 overflow-y-auto px-4 py-4">

        <TreeSection title="Metadata" active />

        <TreeSection title="Introduction" />

        <TreeSection title="Proposition" />

        <Divider />

        <TreeSection title="I. Major Point">

          <TreeItem text="Definition" />

          <TreeItem text="Supporting Scriptures" />

          <TreeItem text="Illustration" />

          <TreeItem text="Application" />

        </TreeSection>

        <TreeSection title="II. Major Point">

          <TreeItem text="Definition" />

          <TreeItem text="Supporting Scriptures" />

          <TreeItem text="Illustration" />

          <TreeItem text="Application" />

        </TreeSection>

        <TreeSection title="III. Major Point">

          <TreeItem text="Definition" />

          <TreeItem text="Supporting Scriptures" />

          <TreeItem text="Illustration" />

          <TreeItem text="Application" />

        </TreeSection>

        <Divider />

        <TreeSection title="Conclusion" />

        <TreeSection title="Invitation" />

        <TreeSection title="Applications" />

        <TreeSection title="Illustrations" />

      </div>

      {/* Bottom */}

      <div className="border-t #8b6a2b p-4">

        <button className="w-full rounded-lg border border-amber-400/30 py-2 text-sm font-medium text-amber-300 hover:bg-amber-400/10">
          + Add Section
        </button>

      </div>

    </div>
  );
}

function TreeSection({
  title,
  active = false,
  children,
}: {
  title: string;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="mb-4">

      <div
        className={`rounded-lg px-3 py-2 font-medium transition ${
          active
            ? "bg-amber-400/15 text-amber-300"
            : "text-white hover:bg-white/5"
        }`}
      >
        {title}
      </div>

      {children && (
        <div className="mt-2 ml-5 border-l #8b6a2b pl-3">
          {children}
        </div>
      )}

    </div>
  );
}

function TreeItem({
  text,
}: {
  text: string;
}) {
  return (
    <div className="py-1 text-sm text-neutral-400 hover:text-white cursor-pointer">
      • {text}
    </div>
  );
}

function Divider() {
  return (
    <div className="my-5 border-t #8b6a2b" />
  );
}