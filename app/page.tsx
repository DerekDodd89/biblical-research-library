import HeroSection from "@/components/home/HeroSection";
import InformationPanels from "@/components/home/InformationPanels";
import ModuleGrid from "@/components/home/ModuleGrid";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        <HeroSection />

        <ModuleGrid />

        <InformationPanels />
      </main>

      <SiteFooter />
    </>
  );
}