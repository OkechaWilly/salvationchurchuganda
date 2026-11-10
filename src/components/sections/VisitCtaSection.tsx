import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Clock, Phone, MessageSquare } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT } from "@/lib/constants";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function VisitCtaSection() {
  const whatsappUrl = `https://wa.me/256774707220?text=${encodeURIComponent(
    "Hello Salvation Church Uganda, I am planning to visit and would like more details."
  )}`;

  return (
    <section
      className="section-padding bg-white text-[#1A1917] border-b border-[#E8E7E1]"
      aria-labelledby="gather-heading"
    >
      <div className="container-content">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[#E8E7E1] shadow-xs overflow-hidden bg-white">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <p className="eyebrow text-[#CC1120] mb-5 tracking-[0.2em]">Come as you are</p>
              <h2
                id="gather-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1A1917] font-medium leading-[1.02] tracking-tight"
              >
                There&apos;s a seat for you.
              </h2>
              <p className="text-base text-[#6B6A65] leading-relaxed max-w-xl mt-5 font-sans">
                Whether you are exploring faith for the first time or looking for a church family along Entebbe Road, you will find open doors, authentic worship, and genuine fellowship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-8 pt-7 border-t border-[#E8E7E1]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5E5E7] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={15} className="text-[#CC1120]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1917]">Namulanda Assembly</p>
                    <p className="text-xs text-[#8C8B85] mt-0.5">{CHURCH_LOCATION.address}, {CHURCH_LOCATION.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F5E5E7] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={15} className="text-[#CC1120]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1917]">Sunday Service</p>
                    <p className="text-xs text-[#8C8B85] mt-0.5">10:00 AM – 1:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:col-span-2">
                  <div className="w-8 h-8 rounded-full bg-[#F5E5E7] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone size={15} className="text-[#CC1120]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1A1917]">Questions before visiting?</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1 text-xs">
                      <a href={`tel:${CHURCH_CONTACT.phoneTel}`} className="text-[#CC1120] font-semibold hover:underline">
                        {CHURCH_CONTACT.phone}
                      </a>
                      <span className="text-stone-300">·</span>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] font-semibold hover:underline"
                      >
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <Link
                  href="/visit"
                  className="group inline-flex items-center gap-2 bg-[#1A1917] text-white hover:bg-[#CC1120] font-semibold px-7 py-4 text-xs uppercase tracking-[0.14em] transition-colors shadow-xs"
                >
                  Plan Your Visit
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/visit#kids"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A1917] hover:text-[#CC1120] px-4 py-4 transition-colors"
                >
                  Children &amp; Sunday School
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[460px] bg-[#1A1917] overflow-hidden">
              <Image
                src="/images/church/Main%20church%20interior%20with%20congretation4%20-.jpeg"
                alt="Congregation gathered at Salvation Church Uganda"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover brightness-[1.08] transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#F08088] font-bold mb-2">
                  Come Experience The Difference
                </p>
                <p className="font-display text-3xl sm:text-4xl leading-tight">
                  Namulanda, Entebbe Road
                </p>
                <a
                  href={CHURCH_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] mt-5 border-b border-white/50 pb-1.5 hover:border-white transition-colors"
                >
                  Get Directions in Google Maps <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
