import {
  ContextCircleModeDefinition,
  ContextCircleRoleDefinition,
  ContextCircleStageDefinition,
} from "@/types/context-circle";

export const CONTEXT_CIRCLE_STAGES: ContextCircleStageDefinition[] = [
  {
    id: "setup",
    label: "Study Setup",
    shortLabel: "Setup",
    description: "Select a passage and prepare the study."
  },
  {
    id: "dc",
    label: "Direct Context",
    shortLabel: "DC",
    description: "Examine the immediate context of the passage."
  },
  {
    id: "rc",
    label: "Remote Context",
    shortLabel: "RC",
    description: "Investigate related passages and supporting context."
  },
  {
    id: "tc",
    label: "Total Context",
    shortLabel: "TC",
    description: "Compare findings with the whole counsel of Scripture."
  },
  {
    id: "cei",
    label: "Authority (CEI)",
    shortLabel: "CEI",
    description: "Determine biblical authority through Command, Example, and Necessary Inference."
  },
  {
    id: "outline",
    label: "Study Outline",
    shortLabel: "Outline",
    description: "Generate the finished study outline."
  },
];

export const CONTEXT_CIRCLE_ROLES: ContextCircleRoleDefinition[] = [
  {
    id: "reader",
    label: "Reader",
    description: "View completed studies."
  },
  {
    id: "guided",
    label: "Guided",
    description: "Guided workflow for new Bible students."
  },
  {
    id: "editor",
    label: "Editor",
    description: "Advanced BRL research workflow."
  },
  {
    id: "admin",
    label: "Administrator",
    description: "Administrative tools and publishing."
  },
];

export const CONTEXT_CIRCLE_MODES: ContextCircleModeDefinition[] = [
  {
    id: "guided",
    label: "Guided Mode",
    description: "Simple, step-by-step contextual study."
  },
  {
    id: "editor",
    label: "Editor Mode",
    description: "Full BRL research and exegesis workspace."
  },
];