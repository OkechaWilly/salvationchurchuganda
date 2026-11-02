"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";

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
      className="section-padding bg-white border-b border-[#E8E7E1]"
      aria-labelledby="featured-message-heading"
    >
      <div className="container-content">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-9">
          <div>
            <p className="eyebrow text-[#CC1120] mb-3 tracking-[0.2em]">Watch &amp; Listen</p>
            <h2
              id="featured-message-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1917] font-medium tracking-tight"
            >
              A message for the journey.
            </h2>
          </div>
          <Link
            href="/watch"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#1A1917] hover:text-[#CC1120] transition-colors"
          >
            Explore all messages
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-y border-[#E8E7E1] py-7 lg:py-9">
          <div className="lg:col-span-7">
            <Link
              href="/watch"
              aria-label={sermon ? `Watch ${sermon.title}` : "Explore church messages"}
              className="relative aspect-video w-full overflow-hidden bg-[#1A1917] block group"
            >
              {sermon ? (
                <img
                  src={sermon.thumbnail}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
                  {loading ? "Loading the latest message…" : "Explore our messages"}
                </div>
              )}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#CC1120] flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
                  <Play size={22} fill="currentColor" className="ml-1" />
                </span>
              </div>
              <span className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.18em] font-semibold text-white bg-black/55 px-3 py-2">
                Latest message
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5 lg:py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CC1120] mb-4">
              {sermon ? `${sermon.channelTitle} · ${formatDate(sermon.publishedAt)}` : "Salvation Church Uganda"}
            </p>
            <h3 className="font-display text-4xl sm:text-5xl text-[#1A1917] font-medium leading-[1.02]">
              {sermon?.title ?? (loading ? "The latest message is on its way." : "Messages for the journey.")}
            </h3>
            <p className="text-base text-[#6B6A65] leading-relaxed mt-5">
              Watch the latest teaching from Salvation Church Uganda, and explore more messages in our video library.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-semibold text-xs uppercase tracking-[0.12em] px-5 py-4 transition-colors"
              >
                <Play size={12} fill="currentColor" />
                Watch message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
