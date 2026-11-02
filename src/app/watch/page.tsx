import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description:
    "Watch messages and sermon series from Salvation Church Uganda, directly on our website.",
};

const PLAYLISTS = [
  {
    id: "sunday-service",
    title: "Sunday Service Sermons",
    description: "Messages from our Sunday gatherings.",
    playlistId: "PLpuONVkZDjiF2EVgKsKPcEGy-rJe9z6fv",
    firstVideoId: "oxuA-n8zn1c",
  },
  {
    id: "marriage-series",
    title: "Marriage Sermon Series",
    description: "Explore messages from the Marriage series.",
    playlistId: "PLSB9Ow_MK0JM",
    firstVideoId: "kMkclvHh79s",
  },
] as const;

function YouTubePlaylist({
  playlistId,
  title,
  className = "",
}: {
  playlistId: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-video w-full overflow-hidden bg-[#171717] ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}&amp;rel=0`}
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
  return (
    <>
      <section className="bg-[#1A1917] pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-content">
          <p className="eyebrow text-[#E05A64] mb-5">Watch &amp; Listen</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF9F6] leading-[0.94] tracking-tight max-w-4xl">
            Words to carry<br /><span className="italic text-white/65">with you.</span>
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-xl mt-7 leading-relaxed">
            Watch messages from Salvation Church Uganda, take time to reflect, and revisit the teaching throughout your week.
          </p>
        </div>
      </section>

      <main className="bg-[#FAF9F6]">
        <section className="section-padding" aria-labelledby="featured-message">
          <div className="container-content">
            <div className="flex items-end justify-between gap-6 mb-8">
              <div>
                <p className="eyebrow text-[#CC1120] mb-3">Start watching</p>
                <h2 id="featured-message" className="font-display text-3xl sm:text-4xl text-[#1A1917]">
                  Latest from our Sunday gatherings
                </h2>
              </div>
              <span className="hidden sm:block text-xs text-[#8C8B85]">Sunday Service Sermons</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-8">
                <YouTubePlaylist
                  playlistId={PLAYLISTS[0].playlistId}
                  title="Salvation Church Uganda — Sunday Service Sermons playlist"
                  className="shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
                />
              </div>
              <div className="lg:col-span-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CC1120] mb-4">
                  Featured playlist
                </p>
                <h3 className="font-display text-3xl sm:text-4xl text-[#1A1917] leading-[1.04]">
                  Sunday Service Sermons
                </h3>
                <p className="text-sm text-[#6B6A65] leading-relaxed mt-5">
                  Catch up on messages from our Sunday gatherings. Choose a message from the playlist and watch it right here.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-[#E8E7E1] section-padding" aria-labelledby="sermon-playlists">
          <div className="container-content">
            <div className="max-w-2xl mb-10">
              <p className="eyebrow text-[#CC1120] mb-3">Explore the messages</p>
              <h2 id="sermon-playlists" className="font-display text-3xl sm:text-4xl text-[#1A1917]">
                Sermon playlists
              </h2>
              <p className="text-sm sm:text-base text-[#6B6A65] mt-4 leading-relaxed">
                Browse a collection, choose the message you want, and watch without leaving the church website.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {PLAYLISTS.map((playlist) => (
                <article key={playlist.id} className="min-w-0">
                  <YouTubePlaylist
                    playlistId={playlist.playlistId}
                    title={`Salvation Church Uganda — ${playlist.title}`}
                    className="mb-5"
                  />
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl text-[#1A1917]">
                        {playlist.title}
                      </h3>
                      <p className="text-sm text-[#77766F] mt-2">{playlist.description}</p>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.14em] text-[#9A9992] border border-[#E8E7E1] px-3 py-2 shrink-0">
                      Playlist
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="eyebrow text-[#CC1120] mb-3">Stay connected</p>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917]">
                There is more to discover.
              </h2>
              <p className="text-sm text-[#6B6A65] mt-3">
                Find out more about gathering with us in Namulanda.
              </p>
            </div>
            <Link
              href="/visit"
              className="inline-flex items-center gap-2 self-start bg-[#1A1917] hover:bg-[#CC1120] text-white font-semibold text-xs uppercase tracking-[0.12em] px-5 py-4 transition-colors"
            >
              Plan your visit <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
