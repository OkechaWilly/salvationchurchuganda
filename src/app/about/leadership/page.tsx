import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone } from "lucide-react";
import { CHURCH_CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet the leadership of Salvation Church Uganda in Namulanda.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#1A1917] text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/church/COngregation_8%20-.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.12] opacity-45"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/85 via-[#1A1917]/70 to-[#1A1917]/30" />
        <div className="container-content">
          <p className="eyebrow text-[#E05A64] mb-5">Salvation Church Uganda</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#FAF9F6] leading-[0.98] tracking-tight max-w-4xl">
            Leadership rooted in faith and service.
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mt-7">
            The people who lead and serve are part of the life of our church.
            We are sharing confirmed leadership information here as it is
            made available.
          </p>
        </div>
      </section>

      {/* ── Pastor profile — full editorial layout ────────── */}
      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="pastor-heading">
        <div className="container-content">

          {/* Two-column portrait + text */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-9 md:gap-16 items-start">

            {/* Portrait block */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8E7E1]">
                <Image
                  src="/images/church/Pr%20Nijel%2002%20-.JPG"
                  alt="Pastor Nijel Rawlins, Lead Pastor of Salvation Church Uganda"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1">
                    Lead Pastor
                  </p>
                  <p className="font-display text-2xl text-white">
                    Pastor Nijel Rawlins
                  </p>
                  <p className="text-xs text-white/60 mt-1">
                    Salvation Church Uganda
                  </p>
                </div>
              </div>

              {/* Contact card below portrait */}
              <div className="mt-5 p-5 bg-white border border-[#E8E7E1]">
                <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
                  Reach the church
                </p>
                <a
                  href={`tel:${CHURCH_CONTACT.phoneTel}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[#1A1917] hover:text-[#CC1120] transition-colors"
                >
                  <Phone size={14} className="text-[#CC1120]" aria-hidden="true" />
                  {CHURCH_CONTACT.phone}
                </a>
                {CHURCH_CONTACT.alternatePhone && (
                  <a
                    href={`tel:${CHURCH_CONTACT.alternatePhoneTel}`}
                    className="flex items-center gap-2 text-sm text-stone-500 hover:text-[#CC1120] transition-colors mt-1.5"
                  >
                    <Phone size={14} className="opacity-0" aria-hidden="true" />
                    {CHURCH_CONTACT.alternatePhone}
                  </a>
                )}
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-7 md:pt-2">
              <p className="eyebrow text-[#CC1120] mb-4">Church leadership</p>
              <h2
                id="pastor-heading"
                className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-tight"
              >
                Pastor Nijel Rawlins
              </h2>

              <div className="mt-6 space-y-4 max-w-xl">
                <p className="text-base text-[#6B6A65] leading-relaxed">
                  Pastor Nijel Rawlins leads Salvation Church Uganda. Further
                  details about his ministry, background and leadership team
                  will be added when the church has provided and approved the
                  information.
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-[#E8E7E1] mt-8 pt-8">
                <p className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-5">
                  What we believe
                </p>
                <div className="space-y-4">
                  {[
                    "A community of believers, rooted in faith and love.",
                    "Reaching our neighbourhood and nation with the gospel.",
                    "Raising the next generation in the ways of Jesus.",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CC1120] shrink-0" />
                      <p className="text-sm text-stone-600 leading-relaxed">{line}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/connect"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120] mt-8 hover:gap-3 transition-all"
              >
                Contact the church <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── About church CTA ──────────────────────────────── */}
      <section className="section-padding-sm bg-white border-t border-[#E8E7E1]">
        <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="eyebrow mb-2">Get to know us</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917]">
              Discover the heart of our church.
            </h2>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120] shrink-0"
          >
            About Salvation Church <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
