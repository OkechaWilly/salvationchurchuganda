import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Discover ways to connect at Salvation Church Uganda, including Sunday School for little children.",
};

export default function MinistriesPage() {
  return (
    <>
      <section className="bg-[#1A1917] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container-content">
          <p className="eyebrow text-[#CC1120] mb-4">Life Together</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#FAF9F6] leading-[0.98] max-w-3xl">
            Find your place<br />in the life of the church.
          </h1>
          <p className="text-white/65 text-base sm:text-lg max-w-xl mt-6 leading-relaxed">
            Church is more than a Sunday gathering. Discover the ways to connect with the Salvation Church Uganda community.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="ministries-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-stone-200">
              <Image
                src="/images/child-prayer.jpg"
                alt="Illustrative photograph for the Sunday School programme"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <p className="absolute bottom-5 left-5 text-xs text-white uppercase tracking-[0.2em]">Children &amp; Families</p>
            </div>
            <div className="lg:col-span-5 space-y-5">
              <p className="eyebrow text-[#CC1120]">For the little ones</p>
              <h2 id="ministries-heading" className="font-display text-4xl sm:text-5xl text-[#1A1917] leading-[1.05]">
                Sunday School
              </h2>
              <p className="text-stone-600 leading-relaxed">
                While the main church service is taking place, little children have a separate Sunday School programme.
              </p>
              <p className="text-stone-600 leading-relaxed text-sm">
                If you are planning to visit with children, contact the church team for current programme details and arrangements.
              </p>
              <Link
                href="/visit#kids"
                className="inline-flex items-center gap-2 text-[#CC1120] font-semibold text-sm hover:gap-3 transition-all"
              >
                Plan a visit <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="border-t border-[#E3E0D8] mt-16 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display text-2xl text-[#1A1917]">More ways to connect</p>
              <p className="text-sm text-stone-500 mt-1">Details about other ministry groups will be added as they are confirmed by the church.</p>
            </div>
            <Link href="/connect" className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120]">
              Contact the church <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
