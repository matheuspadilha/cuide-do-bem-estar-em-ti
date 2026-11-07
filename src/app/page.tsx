import AboutSection from "@/components/AboutSection";
import CategoryExplorer from "@/components/CategoryExplorer";
import ContactCallout from "@/components/ContactCallout";
import Hero from "@/components/Hero";
import SupportBanner from "@/components/SupportBanner";

export default function Home() {
  return (
    <main id="conteudo" tabIndex={-1} className="focus:outline-none">
      <Hero />
      <CategoryExplorer />
      <SupportBanner />
      <AboutSection />
      <ContactCallout />
    </main>
  );
}
