import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the heart and community of Salvation Church Uganda in Namulanda, Entebbe Road.",
};

const VALUES = [
  {
    number: "01",
    title: "Authentic Worship",
    text: "Gathering in worship and making space to encounter the presence of God.",
  },
  {
    number: "02",
    title: "Next Generation & Families",
    text: "Making room for children, young people and families in the life of the church.",
  },
  {
    number: "03",
    title: "The Word & Prayer",
    text: "Growing through practical gospel teaching, Scripture and prayer.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#1A1917] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/church/Main%20church%20interior%20with%20congretation4%20-.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.12] opacity-50"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/85 via-[#1A1917]/65 to-[#1A1917]/25" />
        <div className="container-content relative z-10">
          <p className="eyebrow text-[#E05A64] mb-5">Come Experience the Difference</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] text-[#FAF9F6] leading-[0.94] tracking-tight max-w-5xl">
            A community shaped by the presence of Jesus.
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mt-8">
            We are a Jesus church in Namulanda — a welcoming family connected
            by living faith, worship, and a heart to see our nation encounter
            the hope and love of Christ.
          </p>
        </div>
      </section>

      {/* ── Mission quote ─────────────────────────────────── */}
      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="mission-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">Why we are here</p>
              <h2 id="mission-heading" className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-[1.05]">
                Our purpose.
              </h2>
            </div>
            <div className="lg:col-span-8">
              {/* Large decorative open-quote */}
              <p
                aria-hidden="true"
                className="font-display text-[8rem] leading-none text-[#CC1120]/15 select-none -mb-6"
              >
                &ldquo;
              </p>
              <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] leading-[1.15]">
                We exist to be a community where anyone can experience the
                grace, truth, and transforming presence of Jesus.
              </blockquote>
              <p className="text-sm text-[#8C8B85] mt-6 font-sans">
                The heart of Salvation Church Uganda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photo collage strip ───────────────────────────── */}
      <div className="grid grid-cols-3 h-56 md:h-72">
        {[
          {
            src: "/images/church/Worship2%20-.jpeg",
            alt: "Sunday worship at Salvation Church Uganda",
            position: "object-center",
          },
          {
            src: "/images/church/COngregation_8%20-.jpeg",
            alt: "The congregation gathered together",
            position: "object-top",
          },
          {
            src: "/images/church/Pastor%20praying%20for%20people%20-.jpeg",
            alt: "Pastor praying for the people",
            position: "object-center",
          },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 33vw, 33vw"
              className={`object-cover ${img.position}`}
            />
            <div className="absolute inset-0 bg-[#1A1917]/20" />
          </div>
        ))}
      </div>

      {/* ── Values ───────────────────────────────────────── */}
      <section className="section-padding bg-white border-y border-[#E8E7E1]" aria-labelledby="values-heading">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">What matters to us</p>
            <h2 id="values-heading" className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-tight">
              The life we share.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {VALUES.map((value) => (
              <article key={value.number} className="border-t-2 border-[#CC1120]/30 pt-6">
                <p className="text-xs tracking-[0.2em] text-[#CC1120] font-bold uppercase mb-5">
                  {value.number}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl text-[#1A1917]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed mt-3 max-w-xs">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership portrait ───────────────────────────── */}
      <section className="section-padding bg-[#F2F1EB]" aria-labelledby="leadership-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 items-center">
            {/* Portrait */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-[3/4] max-h-[520px] overflow-hidden bg-[#E8E7E1]">
                <Image
                  src="/images/church/Pr%20Nijel%2001%20-.jpeg"
                  alt="Pastor Nijel Rawlins, Lead Pastor of Salvation Church Uganda"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 block mb-1">
                    Lead Pastor
                  </span>
                  <p className="font-display text-xl text-white">
                    Pastor Nijel Rawlins
                  </p>
                </div>
              </div>
              {/* Offset accent block */}
              <div className="hidden md:block absolute -bottom-5 -right-5 w-20 h-20 bg-[#CC1120]/10 -z-10" />
            </div>

            {/* Text */}
            <div className="md:col-span-7">
              <p className="eyebrow mb-4">Our leadership</p>
              <h2
                id="leadership-heading"
                className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-tight"
              >
                Pastor Nijel Rawlins
              </h2>
              <p className="text-base text-[#6B6A65] leading-relaxed mt-6 max-w-xl">
                Salvation Church Uganda is led by Pastor Nijel Rawlins. Our
                church is a community shaped by worship, the gospel, prayer,
                and a shared desire to see people encounter the hope and love
                of Christ.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Link
                  href="/about/leadership"
                  className="inline-flex items-center gap-2 bg-[#1A1917] text-white hover:bg-[#CC1120] px-6 py-3.5 text-sm font-semibold transition-colors"
                >
                  About our leadership <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
                <Link
                  href="/connect"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120] hover:gap-3 transition-all"
                >
                  Connect with us <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-padding-sm bg-[#1A1917] text-white">
        <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="eyebrow text-[#E05A64] mb-2">Come and be part of it</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white">
              We would love to welcome you.
            </h2>
          </div>
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 bg-white text-[#1A1917] px-6 py-4 text-sm font-semibold hover:bg-[#F2F1EB] transition-colors shrink-0"
          >
            Plan your visit <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
