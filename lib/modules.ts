import {
  BookOpen,
  BriefcaseBusiness,
  CircleDot,
  Compass,
  GraduationCap,
  Library,
  Map,
  Mic2,
  Users,
  Wrench,
} from "lucide-react";
import type { ModuleCardData } from "@/components/home/ModuleCard";
import { BRAND } from "@/constants/brand";

export const modules: ModuleCardData[] = [
  {
    title: "Bible",
    description:
      "Read Scripture and study with translations, cross-references, word tools, and contextual resources.",
    href: BRAND.routes.bible,
    action: "Open Bible",
    icon: BookOpen,
    accent: "text-blue-700",
  },
  {
    title: "Context Circle",
    description:
      "Work through Direct, Remote, and Total Context using BRL's signature guided study system.",
    href: BRAND.routes.contextCircle,
    action: "Open Context Circle",
    icon: CircleDot,
    accent: "text-teal-700",
  },
  {
    title: "Research Library",
    description:
      "Explore BRLs, articles, outlines, historical studies, research archives, and reference material.",
    href: BRAND.routes.library,
    action: "Browse Library",
    icon: Library,
    accent: "text-violet-800",
  },
  {
    title: "Academy",
    description:
      "Follow courses, certifications, guided learning paths, assignments, and structured Bible studies.",
    href: BRAND.routes.academy,
    action: "Go to Academy",
    icon: GraduationCap,
    accent: "text-blue-800",
  },
  {
    title: "Church Curriculum",
    description:
      "Biblical curriculum for congregations, teachers, families, ministries, and every stage of growth.",
    href: BRAND.routes.churchCurriculum,
    action: "View Curriculum",
    icon: Users,
    accent: "text-green-800",
  },
  {
    title: "Doctrine Explorer",
    description:
      "Study major biblical subjects through Scripture, context, hermeneutics, and organized BRL research.",
    href: BRAND.routes.doctrine,
    action: "Explore Doctrine",
    icon: Compass,
    accent: "text-amber-800",
  },
  {
    title: "Bible Atlas",
    description:
      "Explore maps, journeys, places, nations, timelines, and the historical setting of Scripture.",
    href: BRAND.routes.atlas,
    action: "Open Atlas",
    icon: Map,
    accent: "text-blue-700",
  },
  {
    title: "Sermons & Outlines",
    description:
      "Access sermons, class outlines, teaching resources, presentations, and preaching material.",
    href: BRAND.routes.sermons,
    action: "Browse Messages",
    icon: Mic2,
    accent: "text-purple-800",
  },
  {
    title: "My Workspace",
    description:
      "Save studies, organize notes, create collections, track progress, and manage personal research.",
    href: BRAND.routes.workspace,
    action: "Go to Workspace",
    icon: BriefcaseBusiness,
    accent: "text-purple-800",
  },
  {
    title: "Tools & Resources",
    description:
      "Access word studies, concordances, timelines, commentaries, worksheets, and supporting tools.",
    href: BRAND.routes.tools,
    action: "Explore Tools",
    icon: Wrench,
    accent: "text-orange-700",
  },
];