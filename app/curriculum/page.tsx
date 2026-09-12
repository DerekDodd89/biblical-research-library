import BrowseCurriculum from "@/components/curriculum/BrowseCurriculum";
import CurriculumCategories from "@/components/curriculum/CurriculumCategories";
import CurriculumFooter from "@/components/curriculum/CurriculumFooter";
import CurriculumHeader from "@/components/curriculum/CurriculumHeader";
import CurriculumHero from "@/components/curriculum/CurriculumHero";

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <CurriculumHeader />
      <CurriculumHero />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
        <CurriculumCategories />
        <BrowseCurriculum />
        <CurriculumFooter />
      </div>
    </main>
  );
}