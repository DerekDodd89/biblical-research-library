"use client";

import { create } from "zustand";

interface BibleState {
  translation: string;
  book: string;
  chapter: number;

  setTranslation: (translation: string) => void;
  setBook: (book: string) => void;
  setChapter: (chapter: number) => void;

  goTo: (
    book: string,
    chapter: number,
    translation?: string
  ) => void;
}

export const useBibleState = create<BibleState>((set) => ({
  translation: "KJV",

  book: "Romans",

  chapter: 12,

  setTranslation: (translation) =>
    set({ translation }),

  setBook: (book) =>
    set({ book }),

  setChapter: (chapter) =>
    set({ chapter }),

  goTo: (book, chapter, translation) =>
    set((state) => ({
      book,
      chapter,
      translation: translation ?? state.translation,
    })),
}));