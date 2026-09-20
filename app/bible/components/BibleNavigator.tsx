"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { useBibleState } from "@/lib/bible-state";

const OLD_TESTAMENT = [
  { name: "Genesis", chapters: 50 },
  { name: "Exodus", chapters: 40 },
  { name: "Leviticus", chapters: 27 },
  { name: "Numbers", chapters: 36 },
  { name: "Deuteronomy", chapters: 34 },
  { name: "Joshua", chapters: 24 },
  { name: "Judges", chapters: 21 },
  { name: "Ruth", chapters: 4 },
  { name: "1 Samuel", chapters: 31 },
  { name: "2 Samuel", chapters: 24 },
  { name: "1 Kings", chapters: 22 },
  { name: "2 Kings", chapters: 25 },
  { name: "1 Chronicles", chapters: 29 },
  { name: "2 Chronicles", chapters: 36 },
  { name: "Ezra", chapters: 10 },
  { name: "Nehemiah", chapters: 13 },
  { name: "Esther", chapters: 10 },
  { name: "Job", chapters: 42 },
  { name: "Psalms", chapters: 150 },
  { name: "Proverbs", chapters: 31 },
  { name: "Ecclesiastes", chapters: 12 },
  { name: "Song of Solomon", chapters: 8 },
  { name: "Isaiah", chapters: 66 },
  { name: "Jeremiah", chapters: 52 },
  { name: "Lamentations", chapters: 5 },
  { name: "Ezekiel", chapters: 48 },
  { name: "Daniel", chapters: 12 },
  { name: "Hosea", chapters: 14 },
  { name: "Joel", chapters: 3 },
  { name: "Amos", chapters: 9 },
  { name: "Obadiah", chapters: 1 },
  { name: "Jonah", chapters: 4 },
  { name: "Micah", chapters: 7 },
  { name: "Nahum", chapters: 3 },
  { name: "Habakkuk", chapters: 3 },
  { name: "Zephaniah", chapters: 3 },
  { name: "Haggai", chapters: 2 },
  { name: "Zechariah", chapters: 14 },
  { name: "Malachi", chapters: 4 },
];

const NEW_TESTAMENT = [
  { name: "Matthew", chapters: 28 },
  { name: "Mark", chapters: 16 },
  { name: "Luke", chapters: 24 },
  { name: "John", chapters: 21 },
  { name: "Acts", chapters: 28 },
  { name: "Romans", chapters: 16 },
  { name: "1 Corinthians", chapters: 16 },
  { name: "2 Corinthians", chapters: 13 },
  { name: "Galatians", chapters: 6 },
  { name: "Ephesians", chapters: 6 },
  { name: "Philippians", chapters: 4 },
  { name: "Colossians", chapters: 4 },
  { name: "1 Thessalonians", chapters: 5 },
  { name: "2 Thessalonians", chapters: 3 },
  { name: "1 Timothy", chapters: 6 },
  { name: "2 Timothy", chapters: 4 },
  { name: "Titus", chapters: 3 },
  { name: "Philemon", chapters: 1 },
  { name: "Hebrews", chapters: 13 },
  { name: "James", chapters: 5 },
  { name: "1 Peter", chapters: 5 },
  { name: "2 Peter", chapters: 3 },
  { name: "1 John", chapters: 5 },
  { name: "2 John", chapters: 1 },
  { name: "3 John", chapters: 1 },
  { name: "Jude", chapters: 1 },
  { name: "Revelation", chapters: 22 },
];

interface BibleNavigatorProps {
  onNavigate?: () => void;
}

export default function BibleNavigator({
  onNavigate,
}: BibleNavigatorProps) {
  const { goTo, book, chapter } = useBibleState();

  const [showOT, setShowOT] = useState(false);
  const [showNT, setShowNT] = useState(true);
  const [expandedBook, setExpandedBook] = useState("Romans");

  function renderBook(item: { name: string; chapters: number }) {
    const open = expandedBook === item.name;

    return (
      <div key={item.name}>
        <button
          onClick={() =>
            setExpandedBook(open ? "" : item.name)
          }
          className="flex w-full items-center gap-2 rounded-md px-2 py-2 text-left transition hover:bg-[#163654]"
        >
          {open ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}

          <BookOpen size={15} className="text-amber-400" />

          <span
            className={
              item.name === book
                ? "font-semibold text-amber-400"
                : ""
            }
          >
            {item.name}
          </span>
        </button>

        {open && (
          <div className="ml-8 mb-4 mt-2 grid grid-cols-5 gap-1">
            {Array.from(
              { length: item.chapters },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(item.name, i + 1)}
                  className={`rounded px-2 py-1 text-xs transition ${
                    book === item.name && chapter === i + 1
                      ? "bg-amber-500 text-black"
                      : "bg-slate-800 hover:bg-amber-500 hover:text-black"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <aside className="h-[calc(100vh-230px)] overflow-y-auto rounded-xl border border-slate-700 bg-[#0d1d2d] p-4">

      <h2 className="mb-5 text-xl font-bold">
        Bible Navigator
      </h2>

      <button
        onClick={() => setShowOT(!showOT)}
        className="mb-2 flex w-full items-center gap-2 rounded-md px-2 py-2 font-semibold uppercase tracking-wider hover:bg-[#163654]"
      >
        {showOT ? (
          <ChevronDown size={18} />
        ) : (
          <ChevronRight size={18} />
        )}

        Old Testament
      </button>

      {showOT && (
        <div className="mb-6">
          {OLD_TESTAMENT.map(renderBook)}
        </div>
      )}

      <button
        onClick={() => setShowNT(!showNT)}
        className="mb-2 flex w-full items-center gap-2 rounded-md px-2 py-2 font-semibold uppercase tracking-wider hover:bg-[#163654]"
      >
        {showNT ? (
          <ChevronDown size={18} />
        ) : (
          <ChevronRight size={18} />
        )}

        New Testament
      </button>

      {showNT && (
        <div>
          {NEW_TESTAMENT.map(renderBook)}
        </div>
      )}
    </aside>
  );
}