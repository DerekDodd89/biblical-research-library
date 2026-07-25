"use client";

import { useState } from "react";

import {
  ContextCircleMode,
  ContextCircleRole,
  ContextCircleStudy,
} from "@/types/context-circle";

const initialStudy: ContextCircleStudy = {
  passage: "",
  translation: "ESV",
  fullText: "",
  mainSubject: "",
  rcSubjects: [],
  dcNotes: {},
  rcNotes: {},
  tcNotes: {},
  cei: {},
  guidedNotes: {},
  editorNotes: {},
  outline: "",
  stage: "setup",
  status: "personal",
};

export function useContextCircle() {
  const [role, setRole] = useState<ContextCircleRole>("guided");
  const [mode, setMode] = useState<ContextCircleMode>("guided");
  const [study, setStudy] = useState<ContextCircleStudy>(initialStudy);

  return {
    role,
    setRole,

    mode,
    setMode,

    study,
    setStudy,
  };
}