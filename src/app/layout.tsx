import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://salvationchurchuganda.org"),
  title: {
    default: "Salvation Church Uganda",
    template: "%s | Salvation Church Uganda",
  },
  description:
    "A community of believers in Namulanda, Entebbe Road, Uganda. Join us for Sunday services, watch our sermons online, and discover your place in our family.",
  keywords: [
    "Salvation Church Uganda",
    "church Namulanda",
    "church Entebbe Road",
    "church Uganda",
    "Pastor Nijel Rawlins",
    "Sunday service Uganda",
    "sermons Uganda",
  ],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://salvationchurchuganda.org",
    siteName: "Salvation Church Uganda",
    title: "Salvation Church Uganda",
    description:
      "A community of believers in Namulanda, Entebbe Road, Uganda.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salvation Church Uganda",
    description:
      "A community of believers in Namulanda, Entebbe Road, Uganda.",
  },
  robots:
    process.env.VERCEL_ENV === "production"
      ? { index: true, follow: true }
      : { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6]">
        <SiteNav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
