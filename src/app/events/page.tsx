import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { WEEKLY_GATHERINGS, MONTHLY_GATHERINGS } from "@/lib/constants";

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
        <div className="container-content space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-6"><Clock size={18} className="text-[#CC1120]" aria-hidden="true" /><p className="eyebrow">Every week</p></div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] mb-8">Regular gatherings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              {WEEKLY_GATHERINGS.map((g) => (
                <div key={g.day} className="flex items-center justify-between gap-4 py-5 border-t border-stone-300">
                  <div><p className="text-xs uppercase tracking-wider text-stone-500">{g.day}</p><h3 className="font-semibold text-lg text-[#1A1917]">{g.name}</h3></div>
                  <p className="text-sm text-stone-600 tabular-nums text-right">{g.time}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6"><CalendarDays size={18} className="text-[#CC1120]" aria-hidden="true" /><p className="eyebrow">Throughout the month</p></div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917] mb-8">Monthly gatherings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              {MONTHLY_GATHERINGS.map((g) => (
                <div key={g.name} className="py-5 border-t border-stone-300"><p className="text-xs uppercase tracking-wider text-stone-500">{g.frequency}</p><h3 className="font-semibold text-lg text-[#1A1917] mt-1">{g.name}</h3></div>
              ))}
            </div>
            <p className="text-sm text-stone-500 mt-4">For details about monthly gathering times and upcoming dates, please contact the church team.</p>
          </div>
          <div className="border-t border-stone-300 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-sm text-stone-600 max-w-xl">We would be glad to welcome you. Get in touch if you need more information before attending.</p>
            <Link href="/connect" className="inline-flex items-center gap-2 bg-[#1A1917] text-white hover:bg-[#CC1120] px-6 py-4 text-sm font-semibold transition-colors shrink-0">Contact the church <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
