// ============================================================
// BRL Sermon Engine
// Canonical Sermon Model
// Version 1.0
// ============================================================

export type OutlineVersion =
  | "short"
  | "standard"
  | "extended";

export type SermonStatus =
  | "draft"
  | "review"
  | "published"
  | "archived";

export interface BRLSermon {

  //============================================================
  // System
  //============================================================

  id: string;

  version: string;

  status: SermonStatus;

  created: string;

  modified: string;

  //============================================================
  // Metadata
  //============================================================

  title: string;

  subtitle?: string;

  author: string;

  series?: string;

  primaryScripture: string;

  audience?: string;

  topics: string[];

  keywords: string[];

  outlineVersion: OutlineVersion;

  estimatedMinutes: number;

  //============================================================
  // Introduction
  //============================================================

  introduction: SermonIntroduction;

  //============================================================
  // Body
  //============================================================

  points: SermonPoint[];

  //============================================================
  // Conclusion
  //============================================================

  conclusion: SermonConclusion;

  //============================================================
  // BRL Resources
  //============================================================

  resources: SermonResources;
}

// ============================================================
// Introduction
// ============================================================

export interface SermonIntroduction {

  hook: string;

  problem: string;

  proposition: string;

  preview: string[];
}

// ============================================================
// Major Point
// ============================================================

export interface SermonPoint {

  id: string;

  order: number;

  heading: string;

  scripture: string;

  purpose: string;

  summary: string;

  illustration?: string;

  applications: string[];

  supportingScriptures: string[];

  notes?: string;
}

// ============================================================
// Conclusion
// ============================================================

export interface SermonConclusion {

  review: string[];

  invitation: string;

  callToAction: string;
}

// ============================================================
// Generated Resources
// ============================================================

export interface SermonResources {

  outline20?: string;

  outline30?: string;

  outline40?: string;

  archive?: string;

  powerpoint?: string;

  listenerHandout?: string;

  package?: string;
}