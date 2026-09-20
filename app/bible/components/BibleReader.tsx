"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { BibleChapter, getChapter } from "@/lib/bible";
import { useBibleState } from "@/lib/bible-state";
import { useSelectedVerse } from "@/lib/selected-verse";

export default function BibleReader() {
  const {
    book,
    chapter,
    translation,
    setTranslation,
    goTo,
  } = useBibleState();

  const {
    selectedVerse,
    setSelectedVerse,
  } = useSelectedVerse();

  const [chapterData, setChapterData] =
    useState<BibleChapter | null>(null);

  useEffect(() => {
    async function loadChapter() {
      const result = await getChapter(
        book,
        chapter,
        translation
      );

      if (result) {
        setChapterData(result);
      }
    }

    loadChapter();
  }, [book, chapter, translation]);

  if (!chapterData) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div>

      {/* ================================================= */}
      {/* Reader Toolbar */}
      {/* ================================================= */}

      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              goTo(book, Math.max(1, chapter - 1))
            }
            className="rounded-lg border border-white/10 p-2 hover:bg-slate-800"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => goTo(book, chapter + 1)}
            className="rounded-lg border border-white/10 p-2 hover:bg-slate-800"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <h2 className="text-2xl font-bold">
          {book} {chapter}
        </h2>

        <select
          value={translation}
          onChange={(e) =>
            setTranslation(e.target.value)
          }
          className="rounded-lg border border-white/10 bg-[#08131f] px-4 py-2"
        >
          <option value="ASV">ASV</option>
          <option value="KJV">KJV</option>
          <option value="ESV">ESV</option>
          <option value="NKJV">NKJV</option>
          <option value="NASB">NSAB</option>
        </select>

      </div>

      {/* ================================================= */}
      {/* Scripture */}
      {/* ================================================= */}

      <div className="space-y-2 p-8 text-lg leading-10">

        {chapterData.verses.map((verse) => {

          const selected =
            selectedVerse?.book === book &&
            selectedVerse?.chapter === chapter &&
            selectedVerse?.verse === verse.verse;

          return (

            <div
              key={verse.verse}
              onClick={() =>
                setSelectedVerse({
                  book,
                  chapter,
                  verse: verse.verse,
                  translation,
                })
              }
              className={`cursor-pointer rounded-xl border p-3 transition-all duration-200 ${
                selected
                  ? "border-amber-500 bg-amber-500/10"
                  : "border-transparent hover:border-slate-700 hover:bg-slate-800/40"
              }`}
            >

              <span className="mr-3 font-bold text-amber-400">

                {verse.verse}

              </span>

              {verse.text}

            </div>

          );
        })}

      </div>

    </div>
  );
}