"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown, Play, Search, X } from "lucide-react";

type Sermon = {
  id: string;
  title: string;
  publishedAt: string;
  thumbnail: string;
  channelTitle: string;
};

type SermonResponse = { videos?: Sermon[]; error?: string };

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function WatchSermonLibrary() {
  const [videos, setVideos] = useState<Sermon[]>([]);
  const [activeVideo, setActiveVideo] = useState<Sermon | null>(null);
  const [previewVideo, setPreviewVideo] = useState<Sermon | null>(null);
  const [query, setQuery] = useState("");
  const [sortNewest, setSortNewest] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const closePreviewRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!previewVideo) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closePreviewRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setPreviewVideo(null);
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll<HTMLElement>(
        "button:not([disabled]), iframe, a[href], [tabindex]:not([tabindex='-1'])"
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [previewVideo]);

  useEffect(() => {
    let cancelled = false;

    async function loadVideos() {
      try {
        const response = await fetch("/api/youtube-sermons", { cache: "no-store" });
        const data = (await response.json()) as SermonResponse;
        if (!response.ok) throw new Error(data.error || "Unable to load sermons.");
        if (!cancelled) {
          const list = data.videos ?? [];
          setVideos(list);
          setActiveVideo(list[0] ?? null);
          if (list.length === 0) setError("No public videos were found on the church channel yet.");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load sermons right now.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadVideos();
    return () => { cancelled = true; };
  }, []);

  const library = useMemo(() => {
    const latest = videos.slice(1);
    const filtered = latest.filter((video) =>
      video.title.toLowerCase().includes(query.toLowerCase())
    );
    return [...filtered].sort((a, b) =>
      sortNewest
        ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        : new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    );
  }, [videos, query, sortNewest]);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1917] font-sans antialiased">
      <section className="relative isolate overflow-hidden bg-[#1A1917] text-white px-4 sm:px-8 pt-36 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/images/church/Worship2%20-.jpeg" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-35" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1A1917]/95 via-[#1A1917]/80 to-[#1A1917]/55" />
        <div className="max-w-6xl mx-auto">
        <div className="mb-7">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#E05A64] uppercase mb-3">
            Salvation Church Uganda
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-normal tracking-tight leading-[0.94] text-[#FAF9F6]">
            Watch &amp; Listen
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full bg-black overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.24)] ring-1 ring-white/15">
              {activeVideo && !previewVideo ? (
                <iframe
                  key={activeVideo.id}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-white/70 text-sm">
                  {loading ? "Loading the latest messages…" : previewVideo ? "Video preview open" : "Featured message unavailable"}
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-[11px] font-bold tracking-[0.2em] text-[#E05A64] uppercase">
              {activeVideo ? "Latest message" : "Featured"}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.9rem] font-normal tracking-tight text-[#FAF9F6] leading-[1.08]">
              {activeVideo?.title ?? "Messages to strengthen your faith."}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              {activeVideo
                ? `${activeVideo.channelTitle} · ${formatDate(activeVideo.publishedAt)}`
                : "Watch messages from Salvation Church Uganda. The latest videos will appear here as soon as the channel feed is connected."}
            </p>
            <p className="text-xs text-white/55">
              Select any message below to play it in this featured player.
            </p>
          </div>
        </div>
        </div>
      </section>

      <main className="bg-[#FAF9F6] border-t border-[#E8E7E1] min-h-[600px] pt-12 sm:pt-16 pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#CC1120] mb-2">
                Salvation Church Uganda
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-normal tracking-tight text-[#1A1917]">
                Recent messages
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 bg-white border border-[#E8E7E1] px-3.5 py-2.5 text-xs text-[#6B6A65]">
                <span>Sort:</span>
                <button type="button" onClick={() => setSortNewest((value) => !value)} className="font-semibold text-[#1A1917] flex items-center gap-1">
                  {sortNewest ? "Newest first" : "Oldest first"} <ChevronDown size={12} />
                </button>
              </label>
              <label className="flex items-center gap-2 bg-white border border-[#E8E7E1] px-3.5 py-2.5 text-xs text-[#6B6A65]">
                <Search size={13} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search sermons"
                  aria-label="Search sermons"
                  className="w-28 sm:w-36 bg-transparent outline-none text-[#1A1917] placeholder:text-[#A5A39C]"
                />
              </label>
            </div>
          </div>

          {loading && (
            <p className="text-sm text-gray-500 py-8">Loading the latest sermons from the church channel…</p>
          )}

          {!loading && error && (
            <div className="border border-dashed border-gray-300 rounded-xl px-6 py-8 text-sm text-gray-600">
              {error}
            </div>
          )}

          {!loading && !error && library.length === 0 && (
            <p className="text-sm text-gray-500 py-8">
              {query ? "No sermons match that search." : "The latest message is featured above. More videos will appear here as they are published."}
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {library.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setPreviewVideo(video)}
                className="text-left group flex flex-col space-y-3"
                aria-label={`Play ${video.title}`}
              >
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  {/* YouTube supplies the real thumbnail URL for each video. */}
                  <img
                    src={video.thumbnail}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <span className="w-12 h-12 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={17} fill="currentColor" className="ml-0.5" />
                    </span>
                  </span>
                </div>
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div>
                    <h3 className="font-semibold text-sm text-[#1A1917] group-hover:text-[#CC1120] transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-[#8C8B85] mt-1.5">
                      {formatDate(video.publishedAt)}
                    </p>
                  </div>
                  <span className="w-6 h-6 border border-[#D8D5CC] flex items-center justify-center text-[#8C8B85] group-hover:bg-[#1A1917] group-hover:text-white group-hover:border-[#1A1917] transition-colors shrink-0">
                    <Play size={10} fill="currentColor" />
                  </span>
                </div>
              </button>
            ))}
          </div>

     </div>
      </main>

      {previewVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-3 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={previewVideo.title}
          onClick={(event) => { if (event.target === event.currentTarget) setPreviewVideo(null); }}
        >
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-between gap-4 pb-3 text-white">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">Now watching</p>
                <h2 className="truncate text-base sm:text-lg font-semibold">{previewVideo.title}</h2>
              </div>
              <button ref={closePreviewRef} type="button" onClick={() => setPreviewVideo(null)} aria-label="Close video preview" className="shrink-0 rounded-full border border-white/25 p-2.5 text-white transition hover:bg-white hover:text-black">
                <X size={20} />
              </button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-2xl">
              <iframe
                key={previewVideo.id}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${previewVideo.id}?autoplay=1&rel=0`}
                title={previewVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="pt-3 text-xs text-white/60">{previewVideo.channelTitle} · {formatDate(previewVideo.publishedAt)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
