import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { CHURCH_LOCATION, CHURCH_CONTACT } from "@/lib/constants";

export function VisitCtaSection() {
  return (
    <section
      className="section-padding bg-[#F4F3F0] text-[#1A1917] border-b border-stone-200"
      aria-labelledby="gather-heading"
    >
      <div className="container-content">
        
        {/* Elevation Clean White Card Container */}
        <div className="rounded-3xl bg-white border border-stone-200 p-8 sm:p-12 lg:p-16 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#F5E5E7] text-[#CC1120] text-[11px] font-sans font-bold uppercase tracking-widest">
                Gatherings in Namulanda
              </span>

              <h2
                id="gather-heading"
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1917] font-semibold leading-[1.08] tracking-tight"
              >
                Join Us in Person{" "}
                <span className="italic font-light text-stone-500 block sm:inline">
                  This Sunday.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-normal">
                Whether you are exploring faith or looking for a home church along Entebbe Road, 
                our hospitality team will be ready to welcome you, your friends, and your family.
              </p>

              {/* What to Expect checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Warm, relaxed atmosphere</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Safe, vibrant kids environment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Inspiring live worship</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#CC1120]" />
                  <span>Practical, biblical teaching</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/visit"
                  className="group inline-flex items-center gap-2 bg-[#1A1917] text-white hover:bg-[#CC1120] font-sans font-semibold px-7 py-3.5 rounded-full text-sm transition-all shadow-xs"
                >
                  <span>Plan Your Visit</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>

                <a
                  href={`tel:${CHURCH_CONTACT.phoneTel}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-stone-50 transition-colors"
                >
                  <span>Call {CHURCH_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Card / Location Highlight Card */}
            <div className="lg:col-span-5 bg-[#FAF9F6] border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-stone-200 pb-4 space-y-1">
                <p className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#CC1120]">
                  Physical Campus
                </p>
                <h3 className="font-display text-2xl text-stone-900 font-semibold">
                  Namulanda Assembly
                </h3>
              </div>

              <div className="space-y-4 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#CC1120] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-900 font-medium">{CHURCH_LOCATION.address}</p>
                    <p className="text-xs text-stone-500">{CHURCH_LOCATION.city}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-[#CC1120] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-stone-900 font-medium">Sunday Physical Gatherings</p>
                    <p className="text-xs text-stone-500">Morning &amp; Midday services (call for current schedules)</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CHURCH_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-stone-100 text-xs font-semibold text-stone-900 border border-stone-200 transition-colors shadow-xs"
                >
                  <MapPin size={14} className="text-[#CC1120]" />
                  Open in Google Maps
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
