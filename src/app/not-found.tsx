import Link from "next/link";
import { ArrowUpRight, Compass, Home, Clock, Play, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center bg-[#FAF9F6] pt-32 pb-24 px-4 sm:px-8">
      <div className="container-narrow text-center space-y-8">
        <div>
          <p className="eyebrow text-[#CC1120] mb-3 tracking-[0.2em]">404 · Page Not Found</p>
          <h1 className="font-display text-4xl sm:text-6xl text-[#1A1917] font-semibold tracking-tight leading-[1.04]">
            Let us help you find your way.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-lg mx-auto mt-4 leading-relaxed font-sans">
            The page you were looking for doesn&apos;t exist or may have been moved. Here are the most helpful places to go:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
          <Link
            href="/"
            className="p-5 bg-white border border-[#E8E7E1] hover:border-[#CC1120] transition-colors group"
          >
            <div className="flex items-center justify-between text-[#1A1917] group-hover:text-[#CC1120] mb-2 font-semibold">
              <span className="flex items-center gap-2 text-sm font-sans">
                <Home size={15} className="text-[#CC1120]" /> Homepage
              </span>
              <ArrowUpRight size={15} />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Return to the main page of Salvation Church Uganda.
            </p>
          </Link>

          <Link
            href="/visit"
            className="p-5 bg-white border border-[#E8E7E1] hover:border-[#CC1120] transition-colors group"
          >
            <div className="flex items-center justify-between text-[#1A1917] group-hover:text-[#CC1120] mb-2 font-semibold">
              <span className="flex items-center gap-2 text-sm font-sans">
                <Clock size={15} className="text-[#CC1120]" /> Plan Your Visit
              </span>
              <ArrowUpRight size={15} />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Sunday service at 10:00 AM, location, and directions in Namulanda.
            </p>
          </Link>

          <Link
            href="/watch"
            className="p-5 bg-white border border-[#E8E7E1] hover:border-[#CC1120] transition-colors group"
          >
            <div className="flex items-center justify-between text-[#1A1917] group-hover:text-[#CC1120] mb-2 font-semibold">
              <span className="flex items-center gap-2 text-sm font-sans">
                <Play size={15} className="text-[#CC1120]" /> Watch &amp; Listen
              </span>
              <ArrowUpRight size={15} />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Watch recent sermons, teachings, and messages online.
            </p>
          </Link>

          <Link
            href="/connect"
            className="p-5 bg-white border border-[#E8E7E1] hover:border-[#CC1120] transition-colors group"
          >
            <div className="flex items-center justify-between text-[#1A1917] group-hover:text-[#CC1120] mb-2 font-semibold">
              <span className="flex items-center gap-2 text-sm font-sans">
                <Phone size={15} className="text-[#CC1120]" /> Connect &amp; Prayer
              </span>
              <ArrowUpRight size={15} />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed font-sans">
              Speak with our team, request prayer, or message on WhatsApp.
            </p>
          </Link>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1A1917] hover:bg-[#CC1120] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

