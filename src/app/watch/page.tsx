import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description: "Watch messages and sermon series from Salvation Church Uganda.",
};

const PLAYLISTS = [
  {
    id: "sunday-service",
    title: "Sunday Service Sermons",
    description: "Messages from our Sunday gatherings.",
    playlistId: "PLpuONVkZDjiF2EVgKsKPcEGy-rJe9z6fv",
    videoId: "oxuA-n8zn1c",
  },
  {
    id: "marriage-series",
    title: "Marriage Sermon Series",
    description: "Teaching and conversations from the Marriage series.",
    playlistId: "PLSB9Ow_MK0JM",
    videoId: "kMkclvHh79s",
  },
] as const;

function VideoBox({
  videoId,
  playlistId,
  title,
  className = "",
}: {
  videoId: string;
  playlistId: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-[#171717] ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?list=${playlistId}&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

export default function WatchPage() {
  const featured = PLAYLISTS[0];

  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#171717]">
      <section className="px-4 sm:px-8 pt-32 sm:pt-36 pb-12 sm:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="eyebrow text-[#CC1120] mb-3">Salvation Church Uganda</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.02]">
              Watch &amp; <span className="italic">Listen.</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <VideoBox
                videoId={featured.videoId}
                playlistId={featured.playlistId}
                title="Sunday Service Sermons — featured message"
                className="rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.14)]"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[11px] font-bold tracking-[0.18em] text-[#CC1120] uppercase mb-4">
                Featured • Sunday Service
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-[1.04]">
                Messages to strengthen your faith.
              </h2>
              <p className="text-sm sm:text-base text-[#66655F] leading-relaxed mt-5 max-w-md">
                Watch the church’s Sunday messages here on the website. Use the playlist controls in the video to choose another message.
              </p>
              <a
                href="#sermon-library"
                className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#CC1120] text-white text-xs font-semibold uppercase tracking-[0.12em] px-5 py-4 mt-7 transition-colors"
              >
                Explore more messages <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <main id="sermon-library" className="bg-white border-t border-[#E7E7E7] pt-10 sm:pt-14 pb-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
            <div>
              <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#CC1120] mb-3">
                Explore the library
              </p>
              <h2 className="font-display text-3xl sm:text-4xl">Sermons &amp; series</h2>
              <p className="text-sm text-[#77766F] mt-3 max-w-xl">
                Choose a collection below. Each video plays here, and you can select other messages from its playlist.
              </p>
            </div>
            <span className="text-xs text-[#8C8B85]">Select a video to watch</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-9">
            {PLAYLISTS.map((playlist) => (
              <article key={playlist.id} className="group min-w-0">
                <VideoBox
                  videoId={playlist.videoId}
                  playlistId={playlist.playlistId}
                  title={`Salvation Church Uganda — ${playlist.title}`}
                  className="rounded-lg"
                />
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl">{playlist.title}</h3>
                    <p className="text-sm text-[#77766F] mt-2">{playlist.description}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F3F4F6] text-[#555] group-hover:bg-[#171717] group-hover:text-white transition-colors">
                    <Play size={13} fill="currentColor" aria-hidden="true" />
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-[#E8E7E1] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl">Join us in person.</h2>
              <p className="text-sm text-[#77766F] mt-2">We would love to welcome you at our Namulanda gathering.</p>
            </div>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 self-start bg-[#171717] hover:bg-[#CC1120] text-white text-xs font-semibold uppercase tracking-[0.12em] px-5 py-4 transition-colors"
            >
              Plan your visit <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
