import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[86svh] lg:min-h-[92svh] flex items-end overflow-hidden bg-[#11100F] text-white pt-28 pb-12 sm:pb-16"
      aria-label="Welcome to Salvation Church Uganda"
    >
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/worship-community.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/15" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-transparent to-black/20" />

      <div className="container-content w-full">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-7">
            <span className="h-px w-9 bg-[#CC1120]" />
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              Namulanda · Entebbe Road · Uganda
            </span>
          </div>

          <h1 className="font-display text-[clamp(3.4rem,8.5vw,7.8rem)] leading-[0.91] tracking-[-0.045em] font-medium text-white max-w-5xl">
            For God.<br />
            For people.<br />
            <span className="italic font-normal text-white/75">For Uganda.</span>
          </h1>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[minmax(0,34rem)_auto] gap-8 md:items-end">
            <p className="font-sans text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              A Jesus church in Namulanda — a welcoming family connected by living faith, worship, and a heart to see our nation encounter the hope and love of Christ.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <Link
                href="/visit"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#1A1917] hover:bg-[#F2F1EB] font-semibold px-6 py-4 text-sm transition-colors"
              >
                Plan your visit
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/watch"
                className="group inline-flex items-center justify-center gap-3 border border-white/45 bg-black/15 text-white hover:bg-white/10 font-semibold px-6 py-4 text-sm transition-colors"
              >
                <Play size={13} fill="currentColor" />
                Watch messages
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 border-t border-white/25 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-2 text-white/75 text-xs">
            <MapPin size={14} className="text-[#E05A64]" aria-hidden="true" />
            <span>Namulanda Assembly, Entebbe Road</span>
          </div>
          <Link
            href="/visit#kids"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-semibold text-white/85 hover:text-white transition-colors"
          >
            Sunday School for little ones
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
