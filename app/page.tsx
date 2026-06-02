import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { HomepageMenuShowcase } from "@/components/HomepageMenuShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { CookieBannerController } from "@/components/CookieBannerController";
import { WhatsAppButton } from "@/components/shop/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <HomepageMenuShowcase />
        <ComparisonTable />
        <FAQ />
      </main>
      <CookieBannerController />
      <WhatsAppButton />
    </>
  );
}
