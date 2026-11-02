import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find out about gatherings and events at Salvation Church Uganda in Namulanda.",
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-[#1A1917] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-content">
          <p className="eyebrow text-[#E05A64] mb-5">Life Together</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#FAF9F6] leading-[0.96] max-w-3xl">
            Gather. Grow.<br /><span className="italic text-white/65">Be part of it.</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-xl mt-7 leading-relaxed">
            Keep this page close for updates about gatherings and events at Salvation Church Uganda.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF9F6]">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center py-12 sm:py-20">
            <div className="w-14 h-14 mx-auto border border-[#D8D5CC] flex items-center justify-center text-[#CC1120]">
              <CalendarDays size={23} aria-hidden="true" />
            </div>
            <p className="eyebrow mt-7 mb-3">Coming up</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917]">New dates will be announced here.</h2>
            <p className="text-sm sm:text-base text-[#6B6A65] leading-relaxed mt-4">
              There are no confirmed event listings to share at the moment. For current church updates, please contact the team directly.
            </p>
            <Link href="/connect" className="inline-flex items-center gap-2 bg-[#1A1917] text-white hover:bg-[#CC1120] px-6 py-4 text-sm font-semibold mt-8 transition-colors">
              Contact the church <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
