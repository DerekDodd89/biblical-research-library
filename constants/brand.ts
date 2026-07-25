export const BRAND = {
  name: "Biblical Research Library",
  shortName: "BRL",

  platformStatement: "One Platform. Many Biblical Study Tools.",

  headline: "Searching God's Word",

  motto: "Through Context. For the Church. For His Glory.",

  description:
    "A connected biblical research, study, teaching, and curriculum ecosystem built around sound hermeneutics and careful examination of Scripture.",

  mission:
    "To equip Christians, families, teachers, preachers, leaders, and congregations with reliable tools for studying, teaching, and applying God's Word in context.",

  principles: [
    "100% Bible Based",
    "Sound Hermeneutics",
    "For the Church",
    "Available to All",
    "Glory to God Alone",
  ],

  contextRings: {
    direct: "Direct Context",
    remote: "Remote Context",
    total: "Total Context",
  },

  colors: {
    navy: "#061A31",
    navyDark: "#031223",
    navyLight: "#123755",

    gold: "#D4A017",
    goldBright: "#FBBF24",
    goldLight: "#FDE68A",

    paper: "#F8F7F4",
    white: "#FFFFFF",

    slate: "#334155",
    slateDark: "#0F172A",
    slateLight: "#E2E8F0",

    blue: "#1D4ED8",
    teal: "#0F766E",
    purple: "#6B21A8",
    green: "#166534",
    bronze: "#92400E",
    orange: "#C2410C",
  },

  moduleColors: {
    bible: "#1D4ED8",
    contextCircle: "#0F766E",
    researchLibrary: "#6B21A8",
    academy: "#1E40AF",
    churchCurriculum: "#166534",
    doctrineExplorer: "#92400E",
    bibleAtlas: "#1D4ED8",
    sermons: "#7E22CE",
    workspace: "#6B21A8",
    tools: "#C2410C",
  },

  typography: {
    heading:
      "Georgia, 'Times New Roman', Times, serif",

    body:
      "Arial, Helvetica, sans-serif",
  },

  layout: {
    maximumWidth: "1500px",
    contentWidth: "1200px",
    readingWidth: "800px",
  },

  borderRadius: {
    small: "0.5rem",
    medium: "0.75rem",
    large: "1rem",
  },

  animation: {
    fast: "150ms",
    standard: "170ms",
    slow: "250ms",
  },

  routes: {
    home: "/",
    startHere: "/start-here",
    bible: "/bible",
    contextCircle: "/context-circle",
    library: "/library",
    academy: "/academy",
    churchCurriculum: "/church-curriculum",
    doctrine: "/doctrine",
    atlas: "/atlas",
    sermons: "/sermons",
    workspace: "/workspace",
    tools: "/tools",
    login: "/login",
  },

  assets: {
    primaryLogo: "/branding/brl-logo-primary.svg",
    horizontalLogo: "/branding/brl-logo-horizontal.svg",
    logoMark: "/branding/brl-logo-mark.svg",
    monochromeLogo: "/branding/brl-logo-monochrome.svg",
    favicon: "/branding/favicon.svg",
    heroImage: "/images/hero/brl-mountain-sunrise.jpg",
  },

  copyright: `© ${new Date().getFullYear()} Biblical Research Library`,
} as const;

export type Brand = typeof BRAND;
export type BrandRoute = keyof typeof BRAND.routes;
export type ModuleColor = keyof typeof BRAND.moduleColors;