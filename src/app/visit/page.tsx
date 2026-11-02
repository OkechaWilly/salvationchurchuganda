import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, ChevronDown } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT } from "@/lib/constants";

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
    a: "Please contact the church for the current service schedule and details about the length of each gathering.",
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
      <div className="bg-[#FAF9F6] border-b border-stone-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content text-center space-y-4">
          <p className="eyebrow text-[#CC1120] tracking-[0.2em]">Come Experience the Difference</p>
          <h1 className="font-display text-4xl sm:text-6xl text-[#1A1917] font-semibold tracking-tight">
            Plan Your Visit
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Join us in Namulanda for a Sunday gathering. Whether you are visiting for the first time or looking for a church community, we would be glad to welcome you.
          </p>
        </div>
      </div>

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
                <div className="flex items-start gap-3.5 text-stone-700 bg-[#FAF9F6] p-6 rounded-2xl border border-stone-200">
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
                <div className="flex items-start gap-3.5 bg-[#FAF9F6] p-6 rounded-2xl border border-stone-200">
                  <Clock size={22} className="text-[#CC1120] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-[#1A1917]">
                      Sunday Services Schedule
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      We have morning and midday Sunday gatherings. Please call the church for the current start times.
                    </p>
                    <a
                      href={`tel:${CHURCH_CONTACT.phoneTel}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#CC1120] hover:underline"
                    >
                      <Phone size={13} aria-hidden="true" />
                      {CHURCH_CONTACT.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative aspect-video lg:aspect-square w-full overflow-hidden bg-stone-100 border border-stone-200">
              <Image
                src="/images/worship-community.jpg"
                alt="Salvation Church Uganda gathering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/80 font-bold">Find Us</span>
                <p className="font-display text-2xl font-semibold">Namulanda, Entebbe Road</p>
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
                src="/images/child-prayer.jpg"
                alt="Children at a church gathering"
                fill
                className="object-cover object-top"
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
