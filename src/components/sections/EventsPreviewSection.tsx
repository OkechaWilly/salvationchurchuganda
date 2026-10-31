import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

// PLACEHOLDER: Events require confirmation from church leadership.
// These will be driven by the CMS (Sanity) once configured.
const PLACEHOLDER_EVENTS = [
  {
    id: "1",
    title: "[Upcoming Event — Title Pending]",
    date: "TBD",
    location: "Namulanda, Entebbe Road",
    description: "Event details will be added by church staff.",
    href: "/events",
  },
  {
    id: "2",
    title: "[Upcoming Event — Title Pending]",
    date: "TBD",
    location: "Salvation Church Uganda",
    description: "Event details will be added by church staff.",
    href: "/events",
  },
  {
    id: "3",
    title: "[Upcoming Event — Title Pending]",
    date: "TBD",
    location: "Salvation Church Uganda",
    description: "Event details will be added by church staff.",
    href: "/events",
  },
];

export function EventsPreviewSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6] border-t border-[#E8E7E1]"
      aria-labelledby="events-heading"
    >
      <div className="container-content">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="eyebrow">What&apos;s On</p>
            <h2
              id="events-heading"
              className="font-display text-display-lg text-[#1A1917]"
            >
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="text-sm text-[#6B6A65] hover:text-[#CC1120] transition-colors flex items-center gap-1.5 font-sans whitespace-nowrap"
          >
            View all events
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>

        {/* Events list */}
        <div className="space-y-3">
          {PLACEHOLDER_EVENTS.map((event) => (
            <Link
              key={event.id}
              href={event.href}
              className="group flex items-start gap-5 p-5 bg-[#F2F1EB] hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E7E1] rounded-sm transition-all duration-200"
              aria-label={`${event.title} — view details`}
            >
              {/* Date badge */}
              <div
                className="flex-shrink-0 w-14 h-14 bg-[#CC1120] rounded-sm flex flex-col items-center justify-center text-white"
                aria-hidden="true"
              >
                <Calendar size={18} className="mb-0.5" />
                <span className="text-[9px] font-semibold tracking-widest uppercase font-sans">
                  TBD
                </span>
              </div>

              {/* Event info */}
              <div className="flex-1 min-w-0 space-y-0.5">
                <h3 className="font-sans font-semibold text-[#1A1917] group-hover:text-[#CC1120] transition-colors text-sm">
                  {event.title}
                </h3>
                <p className="text-xs text-[#8C8B85]">{event.location}</p>
                <p className="text-xs text-[#6B6A65] leading-relaxed pt-1 line-clamp-2">
                  {event.description}
                </p>
              </div>

              <ArrowRight
                size={16}
                className="text-[#B0AFA9] group-hover:text-[#CC1120] transition-colors flex-shrink-0 mt-1"
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

