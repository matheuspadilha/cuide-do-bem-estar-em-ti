import AboutSection from "@/components/AboutSection";
import CategoryExplorer from "@/components/CategoryExplorer";
import Hero from "@/components/Hero";
import SupportBanner from "@/components/SupportBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoryExplorer />
      <SupportBanner />
      <AboutSection />
    </main>
  );
}
