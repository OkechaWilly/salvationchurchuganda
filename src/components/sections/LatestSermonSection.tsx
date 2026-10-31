import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";
import { CHURCH_SOCIAL } from "@/lib/constants";

export function LatestSermonSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6] border-b border-stone-200"
      aria-labelledby="featured-message-heading"
    >
      <div className="container-content">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-stone-200">
          <div>
            <p className="eyebrow text-[#CC1120] mb-2 tracking-[0.2em]">Latest Message</p>
            <h2
              id="featured-message-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#1A1917] font-semibold tracking-tight"
            >
              Hurt By Community
            </h2>
          </div>
          
          <Link
            href="/watch"
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 hover:text-[#CC1120] transition-colors"
          >
            <span>View All Messages</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Elevation Large Format Media Feature Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
          
          {/* 16:9 Thumbnail / Video Player */}
          <div className="lg:col-span-7">
            <Link
              href="/watch"
              className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black block group shadow-md"
            >
              <Image
                src="/images/worship-community.jpg"
                alt="Latest Sermon: Hurt By Community"
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Central Nucleus/Elevation Play Pill */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#CC1120] shadow-xl group-hover:scale-110 group-hover:bg-white transition-all">
                  <Play size={24} fill="#CC1120" className="ml-1" />
                </div>
              </div>

              <div className="absolute top-4 left-4">
                <span className="bg-[#CC1120] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                  Current Series: Wounded
                </span>
              </div>
            </Link>
          </div>

          {/* Right Editorial Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-stone-500">
                Speaker: <strong className="text-stone-900">Pastor Nijel Rawlins</strong> · Scripture: <strong className="text-stone-900">Psalm 147:3</strong>
              </p>
              <h3 className="font-display text-2xl sm:text-3xl text-stone-900 font-semibold leading-snug">
                How do you respond when wounded by the people closest to you?
              </h3>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              Have you been hurt by community? In this timely teaching, Pastor Nijel examines how to reconcile broken trust, keep your heart open before God, and step onto the road of authentic healing and freedom.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/watch"
                className="inline-flex items-center gap-2 bg-[#1A1917] hover:bg-[#CC1120] text-white font-sans font-semibold text-xs px-6 py-3.5 rounded-full transition-colors shadow-xs"
              >
                <Play size={13} fill="white" />
                <span>Watch Full Message</span>
              </Link>

              <a
                href={CHURCH_SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-stone-300 hover:border-stone-400 text-stone-800 text-xs font-semibold px-5 py-3.5 rounded-full transition-colors bg-stone-50"
              >
                <span>YouTube</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
