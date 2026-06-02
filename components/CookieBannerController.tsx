"use client";

import { useState } from "react";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";

export function CookieBannerController() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <>
      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
    </>
  );
}
