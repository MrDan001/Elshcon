"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import ConceptBanner from "@/components/ConceptBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPublicWebsite = pathname === "/website" || pathname.startsWith("/website/");

  if (isPublicWebsite) {
    return <>{children}</>;
  }

  return (
    <>
      <ConceptBanner />
      <Header />
      <main>{children}</main>
      <Footer />
      <MobileBar />
    </>
  );
}
