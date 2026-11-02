import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { CHURCH_SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Watch & Listen",
  description:
    "Watch messages from Salvation Church Uganda and explore teaching from the church.",
};

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
            Spend time with messages from Salvation Church Uganda. Watch, reflect and continue the conversation beyond Sunday.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="featured-message">
        <div className="container-content">
          <div className="flex items-end justify-between gap-6 mb-9">
            <div>
              <p className="eyebrow text-[#CC1120] mb-3">Featured message</p>
              <h2 id="featured-message" className="font-display text-3xl sm:text-4xl text-[#1A1917]">
                From the church
              </h2>
            </div>
            <a
              href={CHURCH_SOCIAL.youtubeVideos}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#1A1917] hover:text-[#CC1120]"
            >
              Sermon archive <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <article className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-[#E8E7E1]">
            <div className="lg:col-span-7 relative aspect-video bg-[#1A1917]">
              <Image
                src="/images/worship-community.jpg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <a
                href={CHURCH_SOCIAL.youtubeVideos}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the Salvation Church Uganda YouTube channel to watch messages"
                className="absolute inset-0 flex items-center justify-center group"
              >
                <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white text-[#CC1120] flex items-center justify-center shadow-xl transition-transform group-hover:scale-105">
                  <Play size={23} fill="currentColor" className="ml-1" aria-hidden="true" />
                </span>
              </a>
              <span className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.18em] font-semibold text-white bg-black/55 px-3 py-2">
                Watch on YouTube
              </span>
            </div>

            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#CC1120] mb-4">
                Pastor Nijel Rawlins <span className="text-[#B0AFA9] px-1">/</span> Psalm 147:3
              </p>
              <h3 className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-[1.02]">
                Hurt By Community
              </h3>
              <p className="text-sm sm:text-base text-[#6B6A65] leading-relaxed mt-5">
                A teaching on reconciling broken trust, keeping your heart open before God, and finding the path towards healing and freedom.
              </p>
              <a
                href={CHURCH_SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start bg-[#1A1917] hover:bg-[#CC1120] text-white font-semibold text-xs uppercase tracking-[0.12em] px-5 py-4 mt-7 transition-colors"
              >
                Browse sermon archive <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </article>

          <p className="text-xs text-[#8C8B85] mt-6">
            Explore the church’s YouTube sermon archive for more messages, teachings and recorded services.
          </p>
        </div>
      </section>
    </>
  );
}
