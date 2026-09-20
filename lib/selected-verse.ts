"use client";

import { create } from "zustand";

export interface SelectedVerse {
  book: string;
  chapter: number;
  verse: number;
  translation: string;
}

interface SelectedVerseState {
  selectedVerse: SelectedVerse | null;

  setSelectedVerse: (verse: SelectedVerse) => void;

  clearSelectedVerse: () => void;
}

export const useSelectedVerse = create<SelectedVerseState>((set) => ({
  selectedVerse: null,

  setSelectedVerse: (verse) =>
    set({
      selectedVerse: verse,
    }),

  clearSelectedVerse: () =>
    set({
      selectedVerse: null,
    }),
}));