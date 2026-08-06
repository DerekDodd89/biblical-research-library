import HeroSection from "@/components/home/HeroSection";
import ModuleGrid from "@/components/home/ModuleGrid";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-slate-100">
        {/* Hero */}
        <HeroSection />

        {/* BRL Modules */}
        <section className="py-8">
          <ModuleGrid />
        </section>
      </main>

      {/* Footer directly below modules */}
      <SiteFooter />
    </>
  );
}