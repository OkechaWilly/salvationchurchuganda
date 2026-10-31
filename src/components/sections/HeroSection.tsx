import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, MapPin, ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] lg:min-h-[96vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] text-white pt-24 pb-16"
      aria-label="Welcome to Salvation Church Uganda"
    >
      {/* ── Background: Vibrant, High-Visibility Church Worship Photography ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/worship-community.jpg"
          alt="Salvation Church Uganda worship gathering"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Cinematic dark tint with vignette to guarantee high-contrast text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Subtle brand red ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#CC1120]/25 blur-[160px] pointer-events-none rounded-full z-[1]"
        aria-hidden="true"
      />

      {/* ── Main Content Container ── */}
      <div className="relative z-10 container-content max-w-5xl mx-auto flex flex-col items-center text-center px-4">
        
        {/* Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#CC1120] animate-pulse" />
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#E8E7E1]">
            Namulanda · Entebbe Road · Uganda
          </span>
        </div>

        {/* Big Editorial Statement Header */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-white font-semibold leading-[1.02] tracking-tight max-w-4xl mx-auto mb-6 drop-shadow-md">
          For God. For People.{" "}
          <span className="italic font-light text-[#D1D0CA] block sm:inline">
            For Uganda.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#E8E7E1] max-w-2xl mx-auto leading-relaxed mb-10 font-normal drop-shadow">
          We are a Jesus church in Namulanda. A welcoming family connected by living faith, 
          worship, and a heart to see our nation encounter the hope and love of Christ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/visit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#1A1917] hover:bg-[#F2F1EB] active:scale-[0.98] font-sans font-semibold px-8 py-4 rounded-full text-sm transition-all shadow-[0_12px_32px_rgba(255,255,255,0.18)]"
          >
            <span>Plan Your Visit</span>
            <ArrowUpRight size={16} className="text-[#1A1917] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/watch"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-black/50 hover:bg-black/70 active:scale-[0.98] border border-white/25 text-white font-sans font-semibold px-8 py-4 rounded-full text-sm backdrop-blur-md shadow-xs transition-all"
          >
            <Play size={14} className="text-[#CC1120] fill-[#CC1120]" />
            <span>Watch Messages</span>
          </Link>
        </div>

        {/* ── Elevation Church Style Segmented Pathways Bar (Frosted glass over background) ── */}
        <div className="mt-14 w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
          
          <Link
            href="/visit"
            className="group p-5 rounded-2xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 hover:border-[#CC1120]/50 hover:shadow-lg transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#CC1120]">First Time?</p>
              <h3 className="text-sm font-bold text-white group-hover:text-[#CC1120] transition-colors">I&apos;m New Here</h3>
              <p className="text-xs text-[#B0AFA9]">Directions, parking, kids &amp; service info</p>
            </div>
            <ChevronRight size={16} className="text-white/60 group-hover:text-[#CC1120] group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/watch"
            className="group p-5 rounded-2xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 hover:border-[#CC1120]/50 hover:shadow-lg transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#CC1120]">Online Church</p>
              <h3 className="text-sm font-bold text-white group-hover:text-[#CC1120] transition-colors">Watch Latest Sermon</h3>
              <p className="text-xs text-[#B0AFA9]">Stream on-demand &amp; explore series</p>
            </div>
            <ChevronRight size={16} className="text-white/60 group-hover:text-[#CC1120] group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/connect"
            className="group p-5 rounded-2xl bg-black/50 hover:bg-black/70 backdrop-blur-md border border-white/15 hover:border-[#CC1120]/50 hover:shadow-lg transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#CC1120]">Get Connected</p>
              <h3 className="text-sm font-bold text-white group-hover:text-[#CC1120] transition-colors">Need Prayer?</h3>
              <p className="text-xs text-[#B0AFA9]">Our pastoral team is standing by with you</p>
            </div>
            <ChevronRight size={16} className="text-white/60 group-hover:text-[#CC1120] group-hover:translate-x-0.5 transition-all" />
          </Link>

        </div>

      </div>

    </section>
  );
}
