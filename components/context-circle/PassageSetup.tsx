"use client";

import { useEffect, useState } from "react";
import { BookOpen, Play } from "lucide-react";

import type { ContextCircleStudy } from "@/types/context-circle";

type PassageSetupProps = {
  study: ContextCircleStudy;
  onStudyChange: (study: ContextCircleStudy) => void;
};

const translations = [
  "KJV",
  "ASV",
  "ESV",
  "NKJV",
  "NASB",
  "CSB",
] as const;

export default function PassageSetup({
  study,
  onStudyChange,
}: PassageSetupProps) {
  const [passageDraft, setPassageDraft] = useState(study.passage);
  const [translationDraft, setTranslationDraft] = useState(
    study.translation ?? "ESV",
  );

  useEffect(() => {
    setPassageDraft(study.passage);
  }, [study.passage]);

  useEffect(() => {
    setTranslationDraft(study.translation ?? "ESV");
  }, [study.translation]);

  const cleanedPassage = passageDraft.trim();
  const canBeginStudy = cleanedPassage.length > 0;

  function beginStudy() {
    if (!canBeginStudy) {
      return;
    }

    onStudyChange({
      ...study,
      passage: cleanedPassage,
      translation: translationDraft,
      stage: "dc",
    });
  }

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-[1500px] gap-4 px-5 py-4 lg:grid-cols-[1fr_180px_auto] lg:items-end lg:px-8">
        <label className="block">
          <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            <BookOpen className="h-4 w-4 text-blue-700" />
            Passage
          </span>

          <input
            type="text"
            value={passageDraft}
            onChange={(event) => setPassageDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                beginStudy();
              }
            }}
            placeholder="Example: Romans 6:1-14"
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
            Translation
          </span>

          <select
            value={translationDraft}
            onChange={(event) => setTranslationDraft(event.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
          >
            {translations.map((translation) => (
              <option key={translation} value={translation}>
                {translation}
              </option>
            ))}
          </select>
        </label>

        <button
          type="button"
          onClick={beginStudy}
          disabled={!canBeginStudy}
          className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg bg-blue-950 px-5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          <Play className="h-4 w-4" />
          Begin Study
        </button>
      </div>
    </section>
  );
}