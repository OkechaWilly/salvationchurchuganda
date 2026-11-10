import Link from "next/link";
import { ArrowUpRight, Clock, CalendarDays, MapPin } from "lucide-react";
import { WEEKLY_GATHERINGS, MONTHLY_GATHERINGS, CHURCH_LOCATION } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function EventsPreviewSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6] border-t border-[#E8E7E1]"
      aria-labelledby="gatherings-heading"
    >
      <div className="container-content">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="eyebrow mb-3 tracking-[0.2em] text-[#CC1120]">Service Times &amp; Gatherings</p>
              <h2
                id="gatherings-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1917] font-medium tracking-tight"
              >
                Gather with us every week.
              </h2>
            </div>
            <Link
              href="/events"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1A1917] hover:text-[#CC1120] transition-colors"
            >
              View all gatherings &amp; monthly events
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WEEKLY_GATHERINGS.map((item, idx) => (
            <ScrollReveal key={item.day} delay={idx * 80}>
              <div
                className={`p-6 border transition-all h-full flex flex-col justify-between ${
                  idx === 0
                    ? "bg-white border-[#CC1120]/40 shadow-xs ring-1 ring-[#CC1120]/15"
                    : "bg-white border-[#E8E7E1] hover:border-stone-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                    <span>{item.day}</span>
                    {idx === 0 && (
                      <span className="text-[10px] bg-[#F5E5E7] text-[#CC1120] font-semibold px-2 py-0.5 rounded-full">
                        Main Service
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl text-[#1A1917] font-semibold mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-stone-700 tabular-nums flex items-center gap-1.5 mb-3">
                    <Clock size={14} className="text-[#CC1120]" aria-hidden="true" />
                    {item.time}
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans">
                    {idx === 0
                      ? "A joyful gathering of worship, the Word, and concurrent Sunday School for little children."
                      : idx === 1
                      ? "In-depth Bible study to build strong foundations in Scripture."
                      : idx === 2
                      ? "Dedicated time of intercession standing in the gap for people and Uganda."
                      : "Closing the week together in corporate prayer and thanksgiving."}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-10 pt-8 border-t border-[#E8E7E1] flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white p-6 sm:p-8 border border-[#E8E7E1] shadow-2xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CC1120]">
                <CalendarDays size={14} aria-hidden="true" />
                <span>Monthly Gatherings</span>
              </div>
              <p className="text-sm text-stone-700 font-medium">
                1st Sat: Evangelism · 2nd Sat: Baptism · 2nd Sun: Membership · Last Fri: Overnight
              </p>
              <p className="text-xs text-stone-500">
                Meeting at {CHURCH_LOCATION.address}, {CHURCH_LOCATION.city}.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/visit"
                className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors shadow-xs"
              >
                Plan Your Visit <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/visit#location"
                className="inline-flex items-center gap-2 border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-bold uppercase tracking-wider px-5 py-3 transition-colors"
              >
                <MapPin size={13} className="text-[#CC1120]" aria-hidden="true" />
                Directions
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
