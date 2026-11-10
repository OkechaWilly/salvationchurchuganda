import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT, WEEKLY_GATHERINGS, MONTHLY_GATHERINGS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Plan your first visit to Salvation Church Uganda — find our location, Sunday service information and details about Sunday School for little children.",
};

const FAQ_ITEMS = [
  {
    q: "What should I wear?",
    a: "Come as you are. We want you to be comfortable. Some people dress up in traditional or formal wear, others come casual — both are completely welcome.",
  },
  {
    q: "How long is the Sunday service?",
    a: "Sunday Service runs from 10:00 AM to 1:00 PM. The church also gathers during the week for Bible Study and prayer. See the gathering schedule on this page for details.",
  },
  {
    q: "Is there a programme for children?",
    a: "Yes. Salvation Church Uganda has a separate Sunday School programme for little children while the main church service is taking place. Please contact the church for details about the programme and arrangements.",
  },
  {
    q: "Where do I park?",
    a: "Please contact the church team for current parking information before your visit.",
  },
  {
    q: "Do I need to register before attending?",
    a: "Please get in touch with the church if you have any questions before coming. The team will be happy to assist.",
  },
];

export default function VisitPage() {
  return (
    <>
      <section className="relative isolate min-h-[52svh] md:min-h-[58svh] flex items-end overflow-hidden bg-[#1A1917] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/church/Main%20church%20interior%20with%20congretation5%20-.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.12]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/85 via-[#1A1917]/55 to-[#1A1917]/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1A1917]/45 via-transparent to-[#1A1917]/10" />
        <div className="container-content w-full py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/80 mb-5">Come Experience the Difference</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.94] tracking-tight text-white">
              Plan Your Visit
            </h1>
            <p className="text-base sm:text-lg text-white/85 max-w-xl mt-6 leading-relaxed">
              Join us in Namulanda for a Sunday gathering. Whether you are visiting for the first time or looking for a church community, we would be glad to welcome you.
            </p>
          </div>
        </div>
      </section>

      <section
        id="location"
        className="section-padding bg-white border-b border-stone-200"
        aria-labelledby="location-heading"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-2">Where to find us</p>
                <h2 id="location-heading" className="font-display text-3xl text-[#1A1917] font-semibold mb-4">
                  Location &amp; Directions
                </h2>
                <div className="flex items-start gap-4 text-stone-700 bg-[#FAF9F6] p-6 border border-stone-200">
                  <MapPin size={22} className="text-[#CC1120] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="font-bold text-base text-[#1A1917]">{CHURCH_LOCATION.address}</p>
                    <p className="text-sm text-stone-500">{CHURCH_LOCATION.city}</p>
                    <a
                      href={CHURCH_LOCATION.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-[#CC1120] hover:underline pt-2 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div id="service-times" className="space-y-3">
                <div className="flex items-start gap-4 bg-[#FAF9F6] p-6 border border-stone-200">
                  <Clock size={22} className="text-[#CC1120] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-[#1A1917]">
                      Sunday Services Schedule
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Sunday Service takes place every Sunday from 10:00 AM to 1:00 PM. You are welcome to join us.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={`tel:${CHURCH_CONTACT.phoneTel}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC1120] hover:underline"
                      >
                        <Phone size={13} aria-hidden="true" />
                        {CHURCH_CONTACT.phone}
                      </a>
                      {CHURCH_CONTACT.alternatePhone && (
                        <span className="text-xs text-stone-400">· {CHURCH_CONTACT.alternatePhone}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl text-[#1A1917] font-semibold mb-3">Weekly Gatherings</h3>
                  <div className="divide-y divide-stone-200 border-y border-stone-200">
                    {WEEKLY_GATHERINGS.map((g) => (
                      <div key={g.day} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3">
                        <div><p className="text-xs uppercase tracking-wider text-stone-500">{g.day}</p><p className="font-semibold text-sm text-[#1A1917]">{g.name}</p></div>
                        <p className="text-sm text-stone-600 tabular-nums">{g.time}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-[#1A1917] font-semibold mb-3">Monthly Gatherings</h3>
                  <div className="divide-y divide-stone-200 border-y border-stone-200">
                    {MONTHLY_GATHERINGS.map((g) => (
                      <div key={g.name} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-3">
                        <p className="font-semibold text-sm text-[#1A1917]">{g.name}</p><p className="text-xs text-stone-500">{g.frequency}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-500 mt-3">For details about monthly gathering times, please contact the church.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-[16/10] lg:aspect-[4/3] w-full overflow-hidden bg-stone-100 border border-stone-200">
                <iframe
                  src={CHURCH_LOCATION.embedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Salvation Church Uganda location map"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 border border-stone-200">
                <Image
                  src="/images/church/COngregation_9%20-.jpeg"
                  alt="Salvation Church Uganda gathering in Namulanda"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-white/80 font-bold">Worship with us</span>
                  <p className="font-display text-xl font-semibold">Namulanda, Entebbe Road</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="kids"
        className="section-padding bg-[#FAF9F6] border-b border-stone-200"
        aria-labelledby="kids-heading"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] overflow-hidden bg-stone-200">
              <Image
                src="/images/church/Sunday%20sch5%20-.jpeg"
                alt="Children at a church gathering"
                fill
                className="object-cover object-top brightness-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Children &amp; Families
              </span>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <p className="eyebrow text-[#CC1120]">A place for little ones</p>
              <h2 id="kids-heading" className="font-display text-4xl sm:text-5xl text-[#1A1917] font-semibold leading-[1.08]">
                Sunday School
              </h2>
              <p className="text-stone-600 leading-relaxed font-sans text-base">
                While the main church gathers for service, little children have a separate Sunday School programme of their own.
              </p>
              <p className="text-stone-600 leading-relaxed font-sans text-sm">
                Visiting with children? Get in touch with the church team before you arrive and they can share the current Sunday School arrangements with you.
              </p>
              <Link
                href="/connect"
                className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-semibold px-6 py-3.5 transition-colors text-xs uppercase tracking-wider"
              >
                Ask about Sunday School <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="what-to-expect"
        className="section-padding bg-white border-b border-stone-200"
        aria-labelledby="expect-heading"
      >
        <div className="container-content">
          <div className="container-narrow mx-0 space-y-8">
            <div>
              <p className="eyebrow mb-2">First time questions</p>
              <h2 id="expect-heading" className="font-display text-3xl sm:text-4xl text-[#1A1917] font-semibold">
                What to expect
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group bg-[#FAF9F6] border border-stone-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-4.5 cursor-pointer list-none font-sans font-bold text-sm text-[#1A1917] hover:text-[#CC1120] transition-colors select-none">
                    {item.q}
                    <ChevronDown
                      size={16}
                      className="text-stone-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 pt-4">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-[#1A1917] text-white" aria-label="Visit call to action">
        <div className="container-content text-center space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold">
            We&apos;d love to welcome you.
          </h2>
          <p className="text-white/70 font-sans text-sm max-w-md mx-auto">
            Have a question before you come or need assistance with directions? Get in touch with our team.
          </p>
          <div className="pt-2">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-bold uppercase tracking-wider px-7 py-3.5 transition-all text-xs"
            >
              Get in Touch with Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
