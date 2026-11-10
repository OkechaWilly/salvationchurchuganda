import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Heart } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function MinistriesPreviewSection() {
  return (
    <section
      className="section-padding bg-[#F2F1EB] border-b border-[#E8E7E1]"
      aria-labelledby="ministries-heading"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <div className="relative aspect-[4/3] overflow-hidden bg-white border border-[#D8D5CC] shadow-sm">
                <Image
                  src="/images/church/Sunday%20school%20kids%2002%20-.jpeg"
                  alt="Children at Sunday School at Salvation Church Uganda"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Visual badge */}
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F08088] block mb-1">
                      Children &amp; Families
                    </span>
                    <p className="font-display text-xl sm:text-2xl font-medium">
                      Sunday School Programme
                    </p>
                  </div>
                  <span className="text-xs bg-black/55 backdrop-blur-xs border border-white/20 px-3 py-1.5 font-semibold text-white/90">
                    Sundays 10:00 AM
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal delay={150}>
              <div className="space-y-5">
                <div className="flex items-center gap-2">
                  <Heart size={14} className="text-[#CC1120]" aria-hidden="true" />
                  <p className="eyebrow text-[#CC1120] tracking-[0.2em]">Life Together</p>
                </div>

                <h2
                  id="ministries-heading"
                  className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1917] font-medium leading-[1.02] tracking-tight"
                >
                  A place for every generation.
                </h2>

                <p className="text-base text-[#6B6A65] leading-relaxed font-sans">
                  While adults gather in the main auditorium for Sunday service, little children have their own dedicated, loving Sunday School programme designed for their age.
                </p>

                <div className="p-5 bg-white border border-[#D8D5CC] space-y-2">
                  <p className="font-display text-lg text-[#1A1917] font-semibold">
                    Bringing children for the first time?
                  </p>
                  <p className="text-xs text-[#6B6A65] leading-relaxed font-sans">
                    Our team will welcome your family, assist you during check-in, and help your children settle comfortably.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="/visit#kids"
                    className="inline-flex items-center gap-2 bg-[#CC1120] hover:bg-[#A50E1A] text-white font-semibold text-xs uppercase tracking-[0.14em] px-6 py-4 transition-colors shadow-xs"
                  >
                    Children &amp; Families <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>

                  <Link
                    href="/ministries"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1917] hover:text-[#CC1120] px-3 py-4 transition-colors"
                  >
                    Explore Ministries <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
