"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { HomepageMenuShowcase } from "@/components/HomepageMenuShowcase";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Planes } from "@/components/Planes";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

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
      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
    </>
  );
}
