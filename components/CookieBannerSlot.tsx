"use client";

import { useState } from "react";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export function CookieBannerSlot() {
  const [cookiesOpen, setCookiesOpen] = useState(false);

  return (
    <>
      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
    </>
  );
}
