import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, ChevronDown, CheckCircle2 } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Everything you need to know before your first visit to Salvation Church Uganda — location, service times, parking, children's ministry and what to expect.",
};

const FAQ_ITEMS = [
  {
    q: "What should I wear?",
    a: "Come as you are. We want you to be comfortable. Some people dress up in traditional or formal wear, others come casual — both are completely welcome.",
  },
  {
    q: "How long is the Sunday service?",
    a: "Our Sunday services typically run between 90 minutes and 2 hours, including vibrant worship and the practical biblical message.",
  },
  {
    q: "Is there a dedicated programme for children?",
    a: "Yes! We have an engaging children's ministry where kids learn the Bible, sing, and participate in fun, faith-building activities with caring leaders.",
  },
  {
    q: "Where do I park?",
    a: "We have dedicated parking marshals along the church perimeter in Namulanda to guide you smoothly as soon as you arrive.",
  },
  {
    q: "Do I need to register before attending?",
    a: "No registration is needed! Simply show up and our hospitality team will meet you at the entrance with a warm welcome.",
  },
];

export default function VisitPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-[#FAF9F6] border-b border-stone-200 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content text-center space-y-4">
          <p className="eyebrow text-[#CC1120] tracking-[0.2em]">We&apos;re Expecting You</p>
          <h1 className="font-display text-4xl sm:text-6xl text-[#1A1917] font-semibold tracking-tight">
            Plan Your Visit
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto font-sans leading-relaxed">
            Taking that first step is the hardest part. We want to make the rest
            as seamless and welcoming as possible.
          </p>
        </div>
      </div>

      {/* Location + Times */}
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

              {/* Service times */}
              <div id="service-times" className="space-y-3">
                <div className="flex items-start gap-3.5 bg-[#FAF9F6] p-6 rounded-2xl border border-stone-200">
                  <Clock size={22} className="text-[#CC1120] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-[#1A1917]">
                      Sunday Services Schedule
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      Physical morning services and mid-week prayer gatherings in Namulanda.
                      Call our office for current service times or to connect with our team.
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

            {/* Map / Church Image Embed */}
            <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <Image
                src="/images/worship-community.jpg"
                alt="Salvation Church Uganda Fellowship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/80 font-bold">Campus Location</span>
                <p className="font-display text-2xl font-semibold">Namulanda, Entebbe Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Children & Family Section with User's Uploaded Child Prayer Photo */}
      <section
        id="kids"
        className="section-padding bg-[#FAF9F6] border-b border-stone-200"
        aria-labelledby="kids-heading"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* User's child prayer image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src="/images/child-prayer.jpg"
                alt="Child praying over the Bible at Salvation Church Uganda"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Text description */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F5E5E7] text-[#CC1120] text-xs font-bold uppercase tracking-wider">
                Children &amp; Families
              </span>
              <h2 id="kids-heading" className="font-display text-3xl sm:text-4xl text-[#1A1917] font-semibold leading-tight">
                A Loving Environment for Your Children to Flourish
              </h2>
              <p className="text-stone-600 leading-relaxed font-sans">
                At Salvation Church Uganda, we believe the next generation is not just the church of tomorrow, 
                they are part of the church today. Every Sunday, we provide a warm, safe, and age-tailored space 
                where children can encounter God&apos;s Word, sing, and make lifelong friends.
              </p>
              
              <div className="space-y-2.5 text-xs font-semibold text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Caring and verified children&apos;s teachers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Interactive Bible lessons &amp; crafts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Secure check-in and check-out protocol</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What to expect FAQ */}
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

            <div className="space-y-3" role="list">
              {FAQ_ITEMS.map((item, i) => (
                <details
                  key={i}
                  className="group bg-[#FAF9F6] border border-stone-200 rounded-xl overflow-hidden"
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

      {/* Final Action CTA */}
      <section className="section-padding-sm bg-[#1A1917] text-white" aria-label="Visit call to action">
        <div className="container-content text-center space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl text-white font-semibold">
            Ready to join us? We&apos;ll be watching for you.
          </h2>
          <p className="text-white/70 font-sans text-sm max-w-md mx-auto">
            Have a question before you come or need assistance with directions? We&apos;d love to help.
          </p>
          <div className="pt-2">
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-bold uppercase tracking-wider px-7 py-3.5 rounded-full transition-all text-xs shadow-xs"
            >
              Get in Touch with Our Team →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
