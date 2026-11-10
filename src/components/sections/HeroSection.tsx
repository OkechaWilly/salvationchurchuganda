"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, MapPin, Clock } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/images/church/Worship1%20-.jpeg",
    caption: "Worship at Salvation Church Uganda",
    label: "Worship & Praise",
  },
  {
    src: "/images/church/COngregation_1%20-.jpeg",
    caption: "A church family gathered together in fellowship",
    label: "Community of Faith",
  },
  {
    src: "/images/church/Main%20church%20interior%20with%20congretation3%20-.jpeg",
    caption: "Sunday Service in Namulanda, Entebbe Road",
    label: "Namulanda Sanctuary",
  },
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
      className="relative isolate min-h-[82svh] lg:min-h-[92svh] flex items-end overflow-hidden bg-[#11100F] text-white"
      aria-label="Welcome to Salvation Church Uganda"
    >
      {/* Background slide images with subtle slow-zoom transition */}
      <div className="absolute inset-0 -z-20">
        {HERO_IMAGES.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out motion-reduce:transition-none ${
                isActive ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden="true"
            >
              <Image
                src={slide.src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover object-center brightness-[1.12] transition-transform duration-[7000ms] ease-out motion-reduce:transform-none ${
                  isActive ? "scale-[1.04]" : "scale-100"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Atmospheric scrim overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#11100F]/90 via-[#11100F]/30 to-black/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

      {/* Hero content */}
      <div className="container-content w-full pb-14 sm:pb-18 lg:pb-24 pt-36">
        <div className="max-w-4xl">
          {/* Location & Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-black/40 backdrop-blur-md border border-white/15 text-white/90 text-[11px] font-semibold uppercase tracking-[0.18em] mb-7">
            <span className="flex items-center gap-1.5 text-[#F08088]">
              <MapPin size={12} aria-hidden="true" />
              Namulanda, Entebbe Road
            </span>
            <span className="text-white/40">·</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock size={12} aria-hidden="true" />
              Sundays 10:00 AM
            </span>
          </div>

          <h1 className="font-display text-[clamp(3.8rem,9.5vw,8.5rem)] leading-[0.9] tracking-[-0.045em] font-medium text-white drop-shadow-sm">
            For God.<br />
            For people.<br />
            <span className="italic font-normal text-white/85">For Uganda.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-xl mt-6 leading-relaxed font-sans">
            A Jesus church rooted in authentic worship, biblical teaching, and a genuine family culture where everyone has a place.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10">
            <Link
              href="/visit"
              className="inline-flex items-center justify-center bg-white text-[#1A1917] hover:bg-[#FAF9F6] font-bold text-xs uppercase tracking-[0.14em] px-7 py-4 transition-all shadow-lg hover:shadow-xl"
            >
              Plan Your Visit
            </Link>

            <Link
              href="/watch"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs uppercase tracking-[0.14em] px-6 py-4 backdrop-blur-xs transition-colors"
            >
              <Play size={13} fill="currentColor" aria-hidden="true" />
              Watch Online
            </Link>
          </div>
        </div>

        {/* Carousel controls & caption indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-12 sm:mt-16 pt-6 border-t border-white/15">
          <p className="text-xs text-white/70 font-sans tracking-wide">
            <span className="text-[#F08088] font-semibold uppercase tracking-wider text-[11px] mr-2">
              {HERO_IMAGES[activeSlide].label}
            </span>
            {HERO_IMAGES[activeSlide].caption}
          </p>

          <div className="flex items-center gap-2" aria-label="Hero image slides">
            {HERO_IMAGES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide: ${slide.label}`}
                aria-pressed={index === activeSlide}
                className={`h-[3px] transition-all duration-300 ${
                  index === activeSlide
                    ? "w-12 bg-white"
                    : "w-5 bg-white/35 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
