import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Clock, Phone } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT } from "@/lib/constants";

export function VisitCtaSection() {
  return (
    <section
      className="section-padding bg-[#F2F1EB] text-[#1A1917] border-b border-[#E8E7E1]"
      aria-labelledby="gather-heading"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white">
          <div className="lg:col-span-7 p-7 sm:p-10 lg:p-14 flex flex-col justify-center">
            <p className="eyebrow text-[#CC1120] mb-5">Come as you are</p>
            <h2
              id="gather-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#1A1917] font-medium leading-[1.02] tracking-tight"
            >
              There&apos;s a seat for you.
            </h2>
            <p className="text-base text-[#6B6A65] leading-relaxed max-w-xl mt-6">
              Whether you are exploring faith or looking for a church community along Entebbe Road, you are welcome to join a Sunday gathering at Salvation Church Uganda.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mt-8 pt-7 border-t border-[#E8E7E1]">
              <div className="flex items-start gap-3">
                <MapPin size={17} className="text-[#CC1120] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1917]">Namulanda Assembly</p>
                  <p className="text-xs text-[#8C8B85] mt-1">{CHURCH_LOCATION.address}, {CHURCH_LOCATION.city}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={17} className="text-[#CC1120] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1917]">Sunday gatherings</p>
                  <p className="text-xs text-[#8C8B85] mt-1">10:00 AM – 1:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2">
                <Phone size={17} className="text-[#CC1120] mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#1A1917]">Questions before you visit?</p>
                  <a href={`tel:${CHURCH_CONTACT.phoneTel}`} className="text-xs text-[#CC1120] mt-1 inline-block hover:underline">
                    {CHURCH_CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-8">
              <Link
                href="/visit"
                className="group inline-flex items-center gap-3 bg-[#1A1917] text-white hover:bg-[#CC1120] font-semibold px-6 py-4 text-sm transition-colors"
              >
                Plan your visit
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/visit#kids" className="text-sm font-semibold text-[#1A1917] hover:text-[#CC1120] transition-colors">
                Visiting with children?
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[300px] sm:min-h-[420px] bg-[#1A1917]">
            <Image
              src="/images/church/COngregation_9%20-.jpeg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover brightness-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
            <div className="absolute bottom-7 left-7 right-7 text-white">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/75 mb-2">Salvation Church Uganda</p>
              <p className="font-display text-3xl sm:text-4xl leading-tight">Namulanda, Entebbe Road</p>
              <a
                href={CHURCH_LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] mt-5 border-b border-white/50 pb-2 hover:border-white transition-colors"
              >
                Open in Google Maps <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
