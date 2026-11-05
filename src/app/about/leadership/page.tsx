import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Leadership",
  description:
    "Meet the leadership of Salvation Church Uganda in Namulanda.",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-[#1A1917] text-white pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="container-content">
          <p className="eyebrow text-[#E05A64] mb-5">Salvation Church Uganda</p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-[#FAF9F6] leading-[0.98] tracking-tight max-w-4xl">
            Leadership rooted in faith and service.
          </h1>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mt-7">
            The people who lead and serve are part of the life of our church. We are sharing confirmed leadership information here as it is made available.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="pastor-heading">
        <div className="container-content">
          <div className="max-w-3xl border-t border-[#D8D5CC] pt-7">
            <p className="eyebrow text-[#CC1120] mb-4">Church leadership</p>
            <h2 id="pastor-heading" className="font-display text-4xl sm:text-5xl text-[#1A1917]">
              Pastor Nijel Rawlins
            </h2>
            <p className="text-[#6B6A65] leading-relaxed mt-5 max-w-2xl">
              Pastor Nijel Rawlins leads Salvation Church Uganda. Further details about his ministry, background and leadership team will be added when the church has provided and approved the information.
            </p>
            <Link href="/connect" className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120] mt-7">
              Contact the church <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-white border-t border-[#E8E7E1]">
        <div className="container-content flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="eyebrow mb-2">Get to know us</p>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A1917]">Discover the heart of our church.</h2>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-[#CC1120]">
            About Salvation Church <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
