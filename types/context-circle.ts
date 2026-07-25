export type ContextCircleRole =
  | "reader"
  | "guided"
  | "editor"
  | "admin";

export type ContextCircleMode = "guided" | "editor";

export type ContextCircleStage =
  | "setup"
  | "dc"
  | "rc"
  | "tc"
  | "cei"
  | "outline";

export type ContextCircleStatus =
  | "personal"
  | "submitted"
  | "repository";

export type CEIEntry = {
  command: boolean;
  example: boolean;
  inference: boolean;
};

export type ContextCircleNotes = Record<string, string>;

export type ContextCircleCEI = Record<string, CEIEntry>;

export type ContextCircleStudy = {
  id?: string;
  title?: string;
  passage: string;
  translation?: string;
  fullText: string;
  mainSubject: string;
  rcSubjects: string[];
  dcNotes: ContextCircleNotes;
  rcNotes: ContextCircleNotes;
  tcNotes: ContextCircleNotes;
  cei: ContextCircleCEI;
  guidedNotes: ContextCircleNotes;
  editorNotes: ContextCircleNotes;
  outline: string;
  stage: ContextCircleStage;
  status: ContextCircleStatus;
  createdAt?: string;
  updatedAt?: string;
};

export type ContextCircleStageDefinition = {
  id: ContextCircleStage;
  label: string;
  shortLabel: string;
  description: string;
};

export type ContextCircleRoleDefinition = {
  id: ContextCircleRole;
  label: string;
  description: string;
};

export type ContextCircleModeDefinition = {
  id: ContextCircleMode;
  label: string;
  description: string;
};