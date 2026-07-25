"use client";

import PassageSetup from "@/components/context-circle/PassageSetup";
import StudyHeader from "@/components/context-circle/StudyHeader";
import PageContainer from "@/components/ui/PageContainer";
import { useContextCircle } from "@/hooks/useContextCircle";

export default function ContextCircleWorkspace() {
  const {
    role,
    setRole,
    mode,
    setMode,
    study,
    setStudy,
  } = useContextCircle();

  return (
    <div className="min-h-screen bg-slate-100">
      <StudyHeader
        role={role}
        mode={mode}
        onRoleChange={setRole}
        onModeChange={setMode}
      />

      <PassageSetup study={study} onStudyChange={setStudy} />

      <PageContainer as="main" className="py-5">
        <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Passage
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {study.passage || "Not selected"}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Translation
              </p>

              <p className="mt-1 font-semibold text-slate-900">
                {study.translation}
              </p>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Stage
              </p>

              <p className="mt-1 font-semibold uppercase text-slate-900">
                {study.stage}
              </p>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}