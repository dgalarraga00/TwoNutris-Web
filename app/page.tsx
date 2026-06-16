import { Navbar } from "@/components/Navbar";
import { LaunchBanner } from "@/components/LaunchBanner";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { HomepageMenuShowcase } from "@/components/HomepageMenuShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQ } from "@/components/FAQ";
import { CookieBannerController } from "@/components/CookieBannerController";
import { WhatsAppButton } from "@/components/shop/WhatsAppButton";

// Revalida para que el showcase pase de teaser a menú tras el lanzamiento.
export const revalidate = 300;

export default function Home() {
  return (
    <>
      <Navbar />
      <LaunchBanner />
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
