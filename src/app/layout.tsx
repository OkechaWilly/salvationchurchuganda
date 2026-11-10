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

const churchJsonLd = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Salvation Church Uganda",
  description:
    "A community of believers in Namulanda, Entebbe Road, Uganda. Sunday services from 10:00 AM to 1:00 PM with children Sunday School.",
  url: "https://salvationchurchuganda.vercel.app",
  telephone: "+256 774 707220",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Namulanda, near Kajjansi / Entebbe Road",
    addressLocality: "Wakiso District",
    addressCountry: "UG",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 0.1983,
    longitude: 32.5375,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "18:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "18:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "18:00",
      closes: "19:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Pastor Nijel Rawlins",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
        />
      </head>
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
