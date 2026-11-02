import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const MINISTRIES = [
  {
    id: "children",
    name: "Sunday School",
    description: "A separate programme for little children while the main church service is taking place.",
    href: "/visit#kids",
    image: "/images/child-prayer.jpg",
    imageAlt: "Illustrative photograph for Sunday School",
    featured: true,
  },
  {
    id: "youth",
    name: "Youth Ministry",
    description: "Learn more about the youth ministry at Salvation Church Uganda.",
    href: "/ministries",
    image: "/images/worship-community.jpg",
    imageAlt: "Illustrative church community photograph",
  },
  {
    id: "women",
    name: "Women's Ministry",
    description: "Find out more about the women's ministry at Salvation Church Uganda.",
    href: "/ministries",
    image: "/images/hands-bible-prayer.jpg",
    imageAlt: "Illustrative photograph for church ministries",
  },
  {
    id: "men",
    name: "Men's Ministry",
    description: "Find out more about the men's ministry at Salvation Church Uganda.",
    href: "/ministries",
    image: "/images/worship-community.jpg",
    imageAlt: "Illustrative church community photograph",
  },
];

export function MinistriesPreviewSection() {
  return (
    <section
      className="section-padding bg-white border-t border-[#E8E7E1]"
      aria-labelledby="ministries-heading"
    >
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10 md:mb-14">
          <div className="space-y-3 max-w-2xl">
            <p className="eyebrow text-[#CC1120]">Life Together</p>
            <h2
              id="ministries-heading"
              className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1A1917] leading-[1.05]"
            >
              There&apos;s a place for you here.
            </h2>
          </div>
          <Link
            href="/ministries"
            className="inline-flex items-center gap-2 text-sm text-[#1A1917] hover:text-[#CC1120] transition-colors font-semibold whitespace-nowrap"
          >
            Explore ministries <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {MINISTRIES.map((ministry) => (
            <Link
              key={ministry.id}
              href={ministry.href}
              className={`group block ${ministry.featured ? "sm:col-span-2 lg:col-span-2" : ""}`}
              aria-label={`${ministry.name} — learn more`}
            >
              <div className={`relative overflow-hidden bg-[#E8E7E1] ${ministry.featured ? "aspect-[16/9]" : "aspect-[4/5]"}`}>
                <Image
                  src={ministry.image}
                  alt={ministry.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes={ministry.featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/75 mb-2">
                    {ministry.featured ? "Children & Families" : "Get Connected"}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                    {ministry.name}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mt-2 max-w-md">
                    {ministry.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mt-4 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-xs text-[#8C8B85] mt-5">
          Ministry information is being updated. Contact the church for current details.
        </p>
      </div>
    </section>
  );
}
