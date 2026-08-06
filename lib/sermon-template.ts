import { BRLSermon } from "@/types/sermon";

export function createNewSermon(): BRLSermon {
  return {
    //==========================================================
    // System
    //==========================================================

    id: "",

    version: "1.0",

    status: "draft",

    created: new Date().toISOString(),

    modified: new Date().toISOString(),

    //==========================================================
    // Metadata
    //==========================================================

    title: "",

    subtitle: "",

    author: "Derek Dodd",

    series: "",

    primaryScripture: "",

    audience: "",

    topics: [],

    keywords: [],

    outlineVersion: "standard",

    estimatedMinutes: 30,

    //==========================================================
    // Introduction
    //==========================================================

    introduction: {
      hook: "",

      problem: "",

      proposition: "",

      preview: [],
    },

    //==========================================================
    // Body
    //==========================================================

    points: [],

    //==========================================================
    // Conclusion
    //==========================================================

    conclusion: {
      review: [],

      invitation: "",

      callToAction: "",
    },

    //==========================================================
    // Resources
    //==========================================================

    resources: {},
  };
}