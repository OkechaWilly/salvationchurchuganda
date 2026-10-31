import type { Metadata } from "next";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events at Salvation Church Uganda — services, programmes and community gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <div className="bg-[#1A1917] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-content text-center space-y-4">
          <p className="eyebrow text-[#CC1120]">What&apos;s On</p>
          <h1 className="font-display text-display-xl text-[#FAF9F6]">
            Upcoming Events
          </h1>
        </div>
      </div>

      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="events-page-heading">
        <div className="container-content space-y-8">
          <h2 id="events-page-heading" className="sr-only">All Events</h2>

          <p className="text-sm text-[#8C8B85] bg-[#FFF8E7] border border-[#FFD54F] rounded px-4 py-3 max-w-xl">
            📅 Event listings are pending confirmation from church leadership.
            Once the CMS is connected, church staff will be able to add and update events directly.
          </p>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 bg-[#F2F1EB] border border-[#E8E7E1] rounded-sm opacity-50"
                aria-hidden="true"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#CC1120] rounded-sm flex flex-col items-center justify-center text-white">
                  <Calendar size={16} />
                  <span className="text-[9px] font-bold tracking-widest uppercase mt-0.5">TBD</span>
                </div>
                <div className="space-y-1">
                  <div className="h-4 bg-[#D1D0CA] rounded w-48" />
                  <div className="h-3 bg-[#D1D0CA] rounded w-32" />
                  <div className="h-3 bg-[#D1D0CA] rounded w-64 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

