import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { CHURCH_CONTACT, CHURCH_LOCATION, CHURCH_SOCIAL } from "@/lib/constants";
import { PrayerRequestForm } from "@/components/sections/PrayerRequestForm";

export const metadata: Metadata = {
  title: "Connect & Prayer Requests",
  description:
    "Get in touch with Salvation Church Uganda. Submit a prayer request, ask a question, or connect with our pastoral team.",
};

function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

export default function ConnectPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative isolate min-h-[48svh] md:min-h-[54svh] flex items-end overflow-hidden bg-[#1A1917] text-white">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/church/Worship3%20-.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.12]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/90 via-[#1A1917]/65 to-[#1A1917]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1A1917]/40 via-transparent to-transparent" />
        <div className="container-content w-full py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow text-[#F08088] mb-5">We&apos;re Here For You</p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.94] tracking-tight text-[#FAF9F6]">
              Connect With Us
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
              Whether you have a question, need prayer, or want to speak with our pastoral team — our door and hearts are open.
            </p>
          </div>
        </div>
      </section>

      {/* Main Connect Section */}
      <section className="section-padding bg-white border-b border-stone-200">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Contact Info + Authentic Hands on Bible Photo */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* User's uploaded prayer photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-stone-200 shadow-sm">
                <Image
                  src="/images/church/Pastor%20praying%20for%20people%20-.jpeg"
                  alt="A pastor praying with members of the church"
                  fill
                  className="object-cover brightness-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#FAF9F6] font-bold">Pastoral Care</p>
                  <p className="font-display text-lg font-semibold">&ldquo;The prayer of a righteous person is powerful and effective.&rdquo; — James 5:16</p>
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl text-[#1A1917] font-semibold mb-5">
                  Direct Contact Information
                </h2>

                <div className="space-y-4">
                  <a
                    href={`tel:${CHURCH_CONTACT.phoneTel}`}
                    className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-stone-200 hover:border-[#CC1120]/40 transition-colors group"
                    aria-label={`Call us: ${CHURCH_CONTACT.phone}`}
                  >
                    <div className="w-10 h-10 bg-[#F5E5E7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC1120] transition-colors">
                      <Phone size={16} className="text-[#CC1120] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-sans">Telephone</p>
                      <p className="font-bold text-sm text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                        {CHURCH_CONTACT.phone}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-[#FAF9F6] border border-stone-200">
                    <div className="w-10 h-10 bg-[#F5E5E7] flex items-center justify-center flex-shrink-0">
                      <MapPin size={16} className="text-[#CC1120]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-sans">Location</p>
                      <p className="font-bold text-sm text-[#1A1917]">
                        {CHURCH_LOCATION.address}
                      </p>
                      <p className="text-xs text-stone-500">{CHURCH_LOCATION.city}</p>
                    </div>
                  </div>

                  <a
                    href={CHURCH_SOCIAL.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-stone-200 hover:border-[#CC1120]/40 transition-colors group"
                    aria-label="Salvation Church Uganda on YouTube (opens in a new tab)"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#F5E5E7] flex items-center justify-center flex-shrink-0 group-hover:bg-[#CC1120] transition-colors">
                      <YoutubeIcon size={16} className="text-[#CC1120] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-sans">YouTube Channel</p>
                      <p className="font-bold text-sm text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                        @salvationchurchug
                      </p>
                    </div>
                  </a>
                </div>
              </div>

            </div>

            {/* Right: Prayer Request Form */}
            <div id="prayer" className="lg:col-span-7 bg-[#FAF9F6] p-7 sm:p-9 border border-stone-200 shadow-xs">
              <PrayerRequestForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
