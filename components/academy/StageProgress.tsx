export default function StageProgress() {
  const completedCourses = 0;
  const totalCourses = 0;

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#061b3a] font-black text-amber-300">
          01
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.16em] text-amber-600">
            Stage Progress
          </div>

          <h2 className="font-black text-[#061b3a]">
            Biblical Foundations
          </h2>
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-3xl font-black text-[#061b3a]">0%</div>
            <div className="mt-1 text-xs text-slate-500">
              Stage completed
            </div>
          </div>

          <div className="text-right text-xs leading-5 text-slate-500">
            {completedCourses} completed
            <br />
            {totalCourses > 0 ? `${totalCourses} total courses` : "Courses not started"}
          </div>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-amber-400 transition-all"
            style={{ width: "0%" }}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="text-xs font-black uppercase tracking-[0.14em] text-[#061b3a]">
          Current Course
        </div>

        <div className="mt-3 rounded-xl border border-slate-200 bg-[#f8f6f0] p-4">
          <div className="text-sm font-bold text-[#061b3a]">
            No course started
          </div>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Select your first Stage 1 course to begin your Academy studies.
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-[#061b3a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#0a2b58]"
      >
        Begin Stage 1
      </button>

      <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
        <div className="text-xs font-bold text-[#061b3a]">
          Advancement Standard
        </div>

        <p className="mt-1 text-xs leading-5 text-slate-600">
          Academy advancement is based upon demonstrated mastery. Required
          coursework and assessments must be satisfactorily completed before
          progressing to the next stage.
        </p>
      </div>
    </aside>
  );
}