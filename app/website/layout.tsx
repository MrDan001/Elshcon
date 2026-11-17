import type { Metadata } from "next";
import { MotionController, SiteHeader } from "@/components/website/SiteExperience";
import SiteFooter from "@/components/website/SiteFooter";
import "./site.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://elshcon.com"),
  title: {
    default: "Elshcon Nigeria Limited | Energy and Marine Solutions",
    template: "%s | Elshcon Nigeria Limited",
  },
  description:
    "Elshcon Nigeria Limited is an integrated maritime logistics and fabrication/construction company. Explore marine logistics, jetty and supply base, pipeline and fabrication services.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Elshcon Nigeria Limited",
    title: "Elshcon Nigeria Limited",
    description:
      "Integrated maritime logistics, supply base, fabrication and pipeline support.",
  },
};

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionController />
      <SiteHeader />
      <main className="ew-main">{children}</main>
      <SiteFooter />
    </>
  );
}
