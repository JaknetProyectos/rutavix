import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CTACard } from "@/components/CTACard";
import { CoverageSection } from "@/components/CoverageSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <CTACard />
      <CoverageSection />
      <ExperiencesSection />
      <WhyUsSection />
      <Footer />
    </main>
  );
}
