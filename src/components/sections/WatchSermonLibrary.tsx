"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1917] antialiased">
      <main id="main-content">
        <section className="relative overflow-hidden bg-[#1A1917] text-[#FAF9F6]">
          <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
            <div className="absolute -right-24 -top-40 h-[34rem] w-[34rem] rounded-full border border-white" />
            <div className="absolute -right-10 -top-24 h-[25rem] w-[25rem] rounded-full border border-white" />
            <div className="absolute right-8 top-[-3rem] h-[16rem] w-[16rem] rounded-full border border-white" />
          </div>

          <div className="container-content relative pb-16 pt-32 sm:pb-20 sm:pt-40">
            <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#E36A73]">
                  Salvation Church Uganda
                </p>
                <h1 className="font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#FAF9F6] sm:text-6xl md:text-7xl">
                  Watch <span className="text-[#D8B6B7]">&amp;</span> Listen
                </h1>
              </div>
              <p className="max-w-sm text-sm leading-7 text-white/65 md:pb-1">
                Messages, teaching and moments from our church community.
                Take a moment to watch, listen and grow in faith.
              </p>
            </div>

            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div className="relative aspect-video w-full overflow-hidden bg-black shadow-[0_24px_70px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
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
                    <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/65">
                      {loading ? "Loading the latest messages…" : previewVideo ? "Video preview open" : "Featured message unavailable"}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-start lg:col-span-5">
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E36A73]">
                  {activeVideo ? "Latest message" : "Featured message"}
                </p>
                <h2 className="max-w-xl font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-[#FAF9F6] sm:text-4xl lg:text-[2.8rem]">
                  {activeVideo?.title ?? "Messages to strengthen your faith."}
                </h2>
                <p className="mt-5 text-xs leading-6 text-white/55">
                  {activeVideo
                    ? `${activeVideo.channelTitle} · ${formatDate(activeVideo.publishedAt)}`
                    : "Watch messages from Salvation Church Uganda. The latest videos will appear here as soon as the channel feed is connected."}
                </p>
                <p className="mt-6 border-l border-[#CC1120] pl-4 text-xs leading-6 text-white/65">
                  Choose a message from the library below to watch it here on the website.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-[600px] bg-[#FAF9F6] px-4 pb-24 pt-12 sm:px-8 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-5 border-b border-[#E8E7E1] pb-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#CC1120]">
                  From the church
                </p>
                <h2 className="font-display text-3xl font-medium tracking-tight text-[#1A1917] sm:text-4xl">
                  Recent messages
                </h2>
              </div>

              <div className="flex flex-col gap-3 xs:flex-row sm:flex-row">
                <label className="flex items-center justify-between gap-3 border border-[#D8D6CF] bg-white px-3.5 py-2.5 text-xs text-[#6B6A65]">
                  <span>Sort</span>
                  <button
                    type="button"
                    onClick={() => setSortNewest((value) => !value)}
                    className="flex items-center gap-1.5 font-semibold text-[#1A1917] transition-colors hover:text-[#CC1120]"
                  >
                    {sortNewest ? "Newest first" : "Oldest first"}
                    <ChevronDown size={13} />
                  </button>
                </label>

                <label className="flex min-w-0 items-center gap-2 border border-[#D8D6CF] bg-white px-3.5 py-2.5 text-xs text-[#6B6A65] focus-within:border-[#CC1120]">
                  <Search size={14} aria-hidden="true" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search messages"
                    aria-label="Search sermons"
                    className="w-full min-w-0 bg-transparent text-[#1A1917] outline-none placeholder:text-[#A5A39C] sm:w-36"
                  />
                </label>
              </div>
            </div>

            {loading && (
              <p className="py-8 text-sm text-[#6B6A65]">
                Loading the latest sermons from the church channel…
              </p>
            )}

            {!loading && error && (
              <div className="border border-dashed border-[#D8D6CF] px-6 py-8 text-sm text-[#6B6A65]">
                {error}
              </div>
            )}

            {!loading && !error && library.length === 0 && (
              <p className="py-8 text-sm text-[#6B6A65]">
                {query
                  ? "No sermons match that search."
                  : "The latest message is featured above. More videos will appear here as they are published."}
              </p>
            )}

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {library.map((video, index) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setPreviewVideo(video)}
                  className="group flex flex-col text-left"
                  aria-label={`Play ${video.title}`}
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#E8E7E1]">
                    <img
                      src={video.thumbnail}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/30">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FAF9F6] text-[#1A1917] shadow-lg transition-transform group-hover:scale-110">
                        <Play size={16} fill="currentColor" className="ml-0.5" />
                      </span>
                    </span>
                    <span className="absolute left-3 top-3 bg-[#1A1917]/85 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                      Message {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 border-b border-[#E8E7E1] py-4">
                    <div>
                      <h3 className="font-sans text-sm font-semibold leading-6 text-[#1A1917] transition-colors group-hover:text-[#CC1120]">
                        {video.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] text-[#8C8B85]">
                        {formatDate(video.publishedAt)}
                      </p>
                    </div>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-[#D8D6CF] text-[#6B6A65] transition-colors group-hover:border-[#1A1917] group-hover:bg-[#1A1917] group-hover:text-white">
                      <Play size={10} fill="currentColor" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      {previewVideo && (
        <div
          ref={modalRef}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-3 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={previewVideo.title}
          onClick={(event) => {
            if (event.target === event.currentTarget) setPreviewVideo(null);
          }}
        >
          <div className="w-full max-w-6xl">
            <div className="flex items-center justify-between gap-4 pb-3 text-white">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/55">Now watching</p>
                <h2 className="truncate text-base font-semibold sm:text-lg">{previewVideo.title}</h2>
              </div>
              <button
                ref={closePreviewRef}
                type="button"
                onClick={() => setPreviewVideo(null)}
                aria-label="Close video preview"
                className="shrink-0 border border-white/25 p-2.5 text-white transition hover:bg-white hover:text-black"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative aspect-video w-full overflow-hidden bg-black shadow-2xl">
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
            <p className="pt-3 text-xs text-white/60">
              {previewVideo.channelTitle} · {formatDate(previewVideo.publishedAt)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
