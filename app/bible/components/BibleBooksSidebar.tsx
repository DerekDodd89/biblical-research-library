"use client";

import { ChevronDown, BookOpen } from "lucide-react";

const oldTestament = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
];

const newTestament = [
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

export default function BibleBooksSidebar() {
  return (
    <aside className="h-[calc(100vh-250px)] overflow-y-auto rounded-xl border border-slate-700 bg-[#0d1d2d] p-5">

      <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold">
        <BookOpen className="text-amber-400" size={22} />
        Bible Books
      </h2>

      {/* Old Testament */}

      <div className="mb-6">

        <button className="mb-3 flex w-full items-center gap-2 text-left text-sm font-bold uppercase tracking-widest text-slate-300">

          <ChevronDown size={16} />

          Old Testament

        </button>

        <div className="space-y-1">

          {oldTestament.map((book) => (
            <button
              key={book}
              className="block w-full rounded-md px-3 py-2 text-left text-slate-300 transition hover:bg-[#163654] hover:text-white"
            >
              {book}
            </button>
          ))}

        </div>

      </div>

      {/* New Testament */}

      <div>

        <button className="mb-3 flex w-full items-center gap-2 text-left text-sm font-bold uppercase tracking-widest text-slate-300">

          <ChevronDown size={16} />

          New Testament

        </button>

        <div className="space-y-1">

          {newTestament.map((book) => (
            <button
              key={book}
              className="block w-full rounded-md px-3 py-2 text-left text-slate-300 transition hover:bg-[#163654] hover:text-white"
            >
              {book}
            </button>
          ))}

        </div>

      </div>

    </aside>
  );
}