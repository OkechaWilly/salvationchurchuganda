"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Play, Radio } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Sermon = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
};

type SermonResponse = { videos?: Sermon[] };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export function LatestSermonSection() {
  const [sermon, setSermon] = useState<Sermon | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadLatest() {
      try {
        const response = await fetch("/api/youtube-sermons");
        if (!response.ok) throw new Error("Unable to load the latest message.");
        const data = (await response.json()) as SermonResponse;
        if (!cancelled) setSermon(data.videos?.[0] ?? null);
      } catch {
        if (!cancelled) setSermon(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadLatest();
    return () => { cancelled = true; };
  }, []);

  return (
    <section
      className="section-padding bg-[#262522] text-white border-b border-[#383734] relative isolate overflow-hidden"
      aria-labelledby="featured-message-heading"
    >
      {/* Subtle atmospheric ambient glow behind the video */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#CC1120]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container-content">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Radio size={14} className="text-[#E05A64] animate-pulse" aria-hidden="true" />
                <p className="eyebrow text-[#E05A64] tracking-[0.2em]">Watch &amp; Listen</p>
              </div>
              <h2
                id="featured-message-heading"
                className="font-display text-4xl sm:text-5xl md:text-6xl text-[#FAF9F6] font-medium tracking-tight"
              >
                A message for the journey.
              </h2>
            </div>
            <Link
              href="/watch"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-[#E05A64] transition-colors"
            >
              Explore all messages
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal delay={100}>
              <Link
                href="/watch"
                aria-label={sermon ? `Watch ${sermon.title}` : "Explore church messages"}
                className="relative aspect-video w-full overflow-hidden bg-black block group shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/15 border border-white/10"
              >
                {sermon ? (
                  <img
                    src={sermon.thumbnail}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <>
                    <img
                      src="/images/church/Choir%20on%20stage1%20-.jpeg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-white/90 text-sm font-medium">
                      {loading ? "Loading the latest message…" : "Explore our sermon library"}
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#CC1120] hover:bg-[#E05A64] text-white flex items-center justify-center shadow-2xl transition-transform group-hover:scale-105">
                    <Play size={22} fill="currentColor" className="ml-1" />
                  </span>
                </div>
                <span className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-black/75 backdrop-blur-xs px-3.5 py-2 border border-white/15">
                  Latest Message
                </span>
              </Link>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 lg:py-4">
            <ScrollReveal delay={200}>
              <div className="space-y-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E05A64]">
                  {sermon ? `${sermon.channelTitle} · ${formatDate(sermon.publishedAt)}` : "Salvation Church Uganda"}
                </p>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#FAF9F6] font-medium leading-[1.05]">
                  {sermon?.title ?? (loading ? "The latest message is on its way." : "Messages for the journey.")}
                </h3>

                <p className="text-base text-white/75 leading-relaxed font-sans">
                  Watch the latest teaching from our Sunday gatherings in Namulanda, and discover truth that anchors your everyday life.
                </p>

                <div className="p-4 bg-white/5 border border-white/10 rounded-none text-xs text-white/60 italic font-serif">
                  &ldquo;So then faith comes by hearing, and hearing by the word of God.&rdquo; — Romans 10:17
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/watch"
                    className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-semibold text-xs uppercase tracking-[0.14em] px-6 py-4 transition-colors shadow-md"
                  >
                    <Play size={12} fill="currentColor" />
                    Watch Message
                  </Link>

                  <Link
                    href="/watch"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/80 hover:text-white px-4 py-4 transition-colors"
                  >
                    Browse Archive <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
