import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Sun,
  BookOpen,
  Flame,
  Users,
  Megaphone,
  Droplets,
  UserCheck,
  Moon,
} from "lucide-react";
import { WEEKLY_GATHERINGS, MONTHLY_GATHERINGS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find out about gatherings and events at Salvation Church Uganda in Namulanda.",
};

// Icon mapping for each weekly gathering
const weeklyIcons = [Sun, BookOpen, Flame, Users] as const;

// Icon mapping for each monthly gathering
const monthlyIcons = [Megaphone, Droplets, UserCheck, Moon] as const;

// Accent colours per weekly card (warm editorial palette)
const weeklyAccents = [
  { bg: "bg-[#CC1120]", text: "text-white", badge: "bg-white/15" },
  { bg: "bg-[#1A1917]", text: "text-white", badge: "bg-white/10" },
  { bg: "bg-[#F2F1EB]", text: "text-[#1A1917]", badge: "bg-[#1A1917]/8" },
  { bg: "bg-[#E8E7E1]", text: "text-[#1A1917]", badge: "bg-[#1A1917]/8" },
] as const;

export default function EventsPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden bg-[#1A1917] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/church/Worship2%20-.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.12] opacity-45"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/85 via-[#1A1917]/70 to-[#1A1917]/30" />
        <div className="container-content">
          <p className="eyebrow text-[#E05A64] mb-5">Life Together</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#FAF9F6] leading-[0.96] max-w-3xl">
            Gather. Grow.<br />
            <span className="italic text-white/65">Be part of it.</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-xl mt-7 leading-relaxed">
            Find a gathering that fits your week — from Sunday service to
            midweek prayer, there is a place for you here.
          </p>
        </div>
      </section>

      {/* ── Photo strip ──────────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4 h-48 md:h-56">
        {[
          { src: "/images/church/Choir%20on%20stage2%20-.jpeg", alt: "Church choir leading worship" },
          { src: "/images/church/Baptism%20certification%20day4%20-.jpeg", alt: "Baptism gathering" },
          { src: "/images/church/Worship2%20-.jpeg", alt: "Sunday worship" },
          { src: "/images/church/Pastor%20praying%20for%20people%20-.jpeg", alt: "Prayer ministry" },
        ].map((img) => (
          <div key={img.src} className="relative overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#1A1917]/20" />
          </div>
        ))}
      </div>

      {/* ── Weekly Gatherings ─────────────────────────────── */}
      <section className="section-padding bg-[#FAF9F6]">
        <div className="container-content">
          <div className="mb-12">
            <p className="eyebrow text-[#CC1120] mb-3">Every week</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A1917]">
              Regular gatherings
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl text-base leading-relaxed">
              Four anchors through the week — worship, the Word, intercession,
              and corporate prayer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEEKLY_GATHERINGS.map((g, i) => {
              const Icon = weeklyIcons[i];
              const accent = weeklyAccents[i];
              const isLight =
                accent.bg === "bg-[#F2F1EB]" ||
                accent.bg === "bg-[#E8E7E1]";
              return (
                <div
                  key={g.day}
                  className={`${accent.bg} ${accent.text} p-7 flex flex-col justify-between gap-6 group`}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span
                      className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${accent.badge}`}
                    >
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest font-semibold ${
                        isLight ? "text-stone-500" : "text-white/50"
                      }`}
                    >
                      {g.day}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className={`font-display text-2xl leading-tight mb-2 ${
                        isLight ? "text-[#1A1917]" : "text-white"
                      }`}
                    >
                      {g.name}
                    </h3>
                    <p
                      className={`text-sm font-medium tabular-nums ${
                        isLight ? "text-stone-600" : "text-white/70"
                      }`}
                    >
                      {g.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Monthly Gatherings ───────────────────────────── */}
      <section className="section-padding bg-[#F2F1EB]">
        <div className="container-content">
          <div className="mb-12">
            <p className="eyebrow text-[#CC1120] mb-3">Throughout the month</p>
            <h2 className="font-display text-4xl sm:text-5xl text-[#1A1917]">
              Monthly gatherings
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl text-base leading-relaxed">
              Special moments woven into the rhythm of each month — from
              outreach on the streets to overnight worship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {MONTHLY_GATHERINGS.map((g, i) => {
              const Icon = monthlyIcons[i];
              return (
                <div
                  key={g.name}
                  className="bg-white border border-[#E8E7E1] p-7 flex gap-5 group hover:border-[#CC1120]/30 hover:shadow-sm transition-all duration-300"
                >
                  {/* Icon column */}
                  <div className="shrink-0 w-11 h-11 bg-[#FAF9F6] border border-[#E8E7E1] rounded-full flex items-center justify-center text-[#CC1120] group-hover:bg-[#CC1120] group-hover:text-white group-hover:border-[#CC1120] transition-all duration-300">
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-1">
                      {g.frequency}
                    </p>
                    <h3 className="font-display text-2xl text-[#1A1917] leading-tight">
                      {g.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-sm text-stone-500 mt-7 max-w-xl leading-relaxed">
            For exact dates and times of monthly gatherings, contact the church
            team — we would be glad to let you know.
          </p>
        </div>
      </section>

      {/* ── Location reminder ────────────────────────────── */}
      <section className="section-padding bg-[#1A1917]">
        <div className="container-content flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow text-[#E05A64] mb-3">Find us</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white max-w-lg leading-tight">
              We meet at Namulanda,{" "}
              <span className="italic text-white/55">near Kajjansi</span>
            </h2>
            <p className="text-white/55 text-sm mt-4 max-w-sm leading-relaxed">
              Along Entebbe Road, Wakiso District. First time? We will be glad
              to welcome you — reach out before you come.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1A1917] hover:bg-[#FAF9F6] px-6 py-4 text-sm font-semibold transition-colors"
            >
              Plan your visit <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white hover:border-white/60 px-6 py-4 text-sm font-semibold transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
