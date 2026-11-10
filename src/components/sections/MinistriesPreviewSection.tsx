import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function MinistriesPreviewSection() {
  return (
    <section
      className="section-padding bg-white border-t border-[#E8E7E1]"
      aria-labelledby="ministries-heading"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 relative aspect-[4/3] overflow-hidden bg-[#E8E7E1]">
            <Image
              src="/images/church/Sunday%20school%20kids%2002%20-.jpeg"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
              Children &amp; Families
            </p>
          </div>

          <div className="lg:col-span-5">
            <p className="eyebrow text-[#CC1120] mb-4">Life Together</p>
            <h2
              id="ministries-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1917] leading-[1.02]"
            >
              A place for every generation.
            </h2>
            <h3 className="font-display text-2xl sm:text-3xl text-[#1A1917] mt-7">
              Sunday School
            </h3>
            <p className="text-sm text-[#6B6A65] leading-relaxed mt-3">
              Little children have a separate Sunday School programme while the main church service is taking place.
            </p>
            <Link
              href="/visit#kids"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120] mt-6 hover:gap-3 transition-all"
            >
              Children &amp; families <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <p className="text-xs text-[#8C8B85] mt-7 border-t border-[#E8E7E1] pt-5">
              For information about other groups, please contact the church.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
