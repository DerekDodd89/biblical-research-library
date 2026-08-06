import SermonEditor from "./editor/SermonEditor";

export default function BuilderWorkspace() {
  return (
    <main className="flex-1 overflow-y-auto">
      <SermonEditor />
    </main>
  );
}