"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { BibleChapter, getChapter } from "@/lib/bible";
import { useBibleState } from "@/lib/bible-state";

export default function BibleReader() {
  const {
    book,
    chapter,
    translation,
    setTranslation,
    goTo,
  } = useBibleState();

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

      <div className="flex items-center justify-between border-b #8b6a2b px-6 py-4">

        <div className="flex items-center gap-2">

          <button
            onClick={() =>
              goTo(book, Math.max(1, chapter - 1))
            }
            className="rounded-lg border #8b6a2b p-2 hover:bg-slate-800"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() =>
              goTo(book, chapter + 1)
            }
            className="rounded-lg border #8b6a2b p-2 hover:bg-slate-800"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        <div className="text-center">

          <h2 className="text-2xl font-bold">

            {book} {chapter}

          </h2>

        </div>

        <select
          value={translation}
          onChange={(e) =>
            setTranslation(e.target.value)
          }
          className="rounded-lg border #8b6a2b bg-[#08131f] px-4 py-2"
        >
          <option value="ASV">ASV</option>
          <option value="KJV">KJV</option>
          <option value="NKJV">NKJV</option>
        </select>

      </div>

      {/* ================================================= */}
      {/* Scripture */}
      {/* ================================================= */}

      <div className="space-y-5 p-8 text-lg leading-10">

        {chapterData.verses.map((verse) => (

          <div
            key={verse.verse}
            className="cursor-pointer rounded-lg p-2 transition hover:bg-slate-800"
          >

            <span className="mr-3 font-bold text-amber-400">

              {verse.verse}

            </span>

            {verse.text}

          </div>

        ))}

      </div>

    </div>
  );
}