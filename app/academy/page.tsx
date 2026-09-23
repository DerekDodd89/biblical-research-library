import AcademyDashboard from "@/components/academy/AcademyDashboard";
import AcademyFooter from "@/components/academy/AcademyFooter";
import AcademyHeader from "@/components/academy/AcademyHeader";
import AcademyHero from "@/components/academy/AcademyHero";
import AcademyStages from "@/components/academy/AcademyStages";

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#f4f1e9] text-slate-900">
      <AcademyHeader />
      <AcademyHero />

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
        <AcademyStages />
        <AcademyDashboard />
        <AcademyFooter />
      </div>
    </main>
  );
}