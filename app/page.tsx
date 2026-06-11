import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { HomepageMenuShowcase } from "@/components/HomepageMenuShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Planes } from "@/components/Planes";
import { FAQ } from "@/components/FAQ";
import { CookieBannerSlot } from "@/components/CookieBannerSlot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <HomepageMenuShowcase />
        <ComparisonTable />
        <Planes />
        <FAQ />
      </main>
      <CookieBannerSlot />
    </>
  );
}
