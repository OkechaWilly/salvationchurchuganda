import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const FEATURES = [
  {
    number: "01",
    title: "Worship",
    description: "Gathering around the presence of God through heartfelt worship.",
    image: "/images/worship-community.jpg",
    href: "/watch",
    link: "Watch a service",
    imagePosition: "object-center",
  },
  {
    number: "02",
    title: "Sunday School",
    description: "A separate programme for little children while the main church service is taking place.",
    image: "/images/child-prayer.jpg",
    href: "/visit#kids",
    link: "For children & families",
    imagePosition: "object-top",
  },
  {
    number: "03",
    title: "The Word & Prayer",
    description: "A community shaped by Scripture, prayer, and the transforming presence of Jesus.",
    image: "/images/hands-bible-prayer.jpg",
    href: "/connect#prayer",
    link: "Connect with us",
    imagePosition: "object-center",
  },
];

export function WelcomeSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6] border-b border-[#E8E7E1]"
      aria-labelledby="house-statement-heading"
    >
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end pb-14 lg:pb-16 border-b border-[#E8E7E1]">
          <div className="lg:col-span-7">
            <p className="eyebrow tracking-[0.22em] text-[#CC1120] mb-5">Our Heart &amp; House</p>
            <h2
              id="house-statement-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#1A1917] font-medium leading-[1.02] tracking-tight"
            >
              A place to encounter the grace, truth, and transforming presence of Jesus.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="font-sans text-base text-[#6B6A65] leading-relaxed">
              Salvation Church Uganda is a community rooted in deep worship, practical gospel teaching, and a genuine family culture that welcomes you as you are.
            </p>
            <p className="font-sans text-sm text-[#8C8B85] mt-4">
              Led by Pastor Nijel Rawlins.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-[#1A1917] hover:text-[#CC1120] transition-colors"
            >
              Get to know us <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {FEATURES.map((feature) => (
            <article key={feature.number} className="group">
              <Link href={feature.href} className="block">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#E8E7E1]">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover transition-transform duration-700 group-hover:scale-[1.035] ${feature.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.18em] text-white border border-white/50 px-3 py-1.5">
                    {feature.number}
                  </span>
                </div>
                <div className="pt-5 flex items-start justify-between gap-4 border-b border-[#E8E7E1] pb-5">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl text-[#1A1917] font-medium group-hover:text-[#CC1120] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#6B6A65] leading-relaxed mt-2 max-w-sm">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#CC1120] mt-4">
                      {feature.link} <ArrowUpRight size={13} aria-hidden="true" />
                    </span>
                  </div>
                  <span className="text-xs text-[#B0AFA9] font-medium">{feature.number}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
