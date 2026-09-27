import AcademyFooter from "@/components/academy/AcademyFooter";
import AcademyHeader from "@/components/academy/AcademyHeader";
import AcademyHero from "@/components/academy/AcademyHero";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-slate-900">
      <AcademyHeader />

      <AcademyHero />

      <AcademyFooter />
    </main>
  );
}