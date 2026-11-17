import type { Metadata, Viewport } from "next";
import "./globals.css";
import ConceptBanner from "@/components/ConceptBanner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export const metadata: Metadata = {
  title: {
    default: "Elshcon website concept",
    template: "%s | Elshcon concept",
  },
  description:
    "Concept for discussion. Not the live Elshcon website. Shows a content-first improvement approach.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2A4A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ConceptBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
