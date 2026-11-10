"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const HERO_IMAGES = [
  { src: "/images/church/Worship1%20-.jpeg", alt: "Worship at Salvation Church Uganda" },
  { src: "/images/church/COngregation_1%20-.jpeg", alt: "A moment of prayer and reflection" },
  { src: "/images/church/Main%20church%20interior%20with%20congretation3%20-.jpeg", alt: "Children and families in the life of the church" },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_IMAGES.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="relative isolate min-h-[78svh] lg:min-h-[88svh] flex items-end overflow-hidden bg-[#11100F] text-white"
      aria-label="Welcome to Salvation Church Uganda"
    >
      <div className="absolute inset-0 -z-20">
        {HERO_IMAGES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
            aria-hidden="true"
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/35 via-transparent to-transparent" />

      <div className="container-content w-full pb-12 sm:pb-16 lg:pb-20 pt-32">
        <div className="max-w-4xl">
          <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-white/75 mb-6">
            Salvation Church Uganda
          </p>

          <h1 className="font-display text-[clamp(3.6rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.045em] font-medium text-white">
            For God.<br />
            For people.<br />
            <span className="italic font-normal text-white/80">For Uganda.</span>
          </h1>

          <Link
            href="/visit"
            className="inline-flex items-center justify-center mt-9 sm:mt-11 bg-white text-[#1A1917] hover:bg-[#F2F1EB] font-semibold px-7 py-4 text-sm transition-colors"
          >
            Plan your visit
          </Link>
        </div>

        <div className="flex items-center gap-2 mt-12 sm:mt-16" aria-label="Hero image slides">
          {HERO_IMAGES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-pressed={index === activeSlide}
              className={`h-[3px] transition-all duration-300 ${index === activeSlide ? "w-10 bg-white" : "w-5 bg-white/45 hover:bg-white/75"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
