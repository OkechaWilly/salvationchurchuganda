import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the heart and community of Salvation Church Uganda in Namulanda, Entebbe Road.",
};

const VALUES = [
  {
    number: "01",
    title: "Authentic Worship",
    text: "Gathering in worship and making space to encounter the presence of God.",
  },
  {
    number: "02",
    title: "Next Generation & Families",
    text: "Making room for children, young people and families in the life of the church.",
  },
  {
    number: "03",
    title: "The Word & Prayer",
    text: "Growing through practical gospel teaching, Scripture and prayer.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative z-10 isolate flex min-h-[560px] items-end bg-[#1A1917] text-[#FAF9F6] sm:min-h-[610px] lg:min-h-[640px]">
        <Image
          src="/images/worship-community.jpg"
          alt="The Salvation Church Uganda community gathered in worship"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#151412]/95 via-[#151412]/75 to-[#151412]/35" />
        <div className="absolute inset-0 -z-0 bg-gradient-to-t from-[#151412]/80 via-transparent to-[#151412]/20" />

        <div className="container-content relative z-10 w-full pb-12 pt-32 sm:pb-14 sm:pt-40 lg:pb-16">
          <div className="max-w-5xl lg:max-w-[68%] lg:pr-5">
            <p className="eyebrow mb-6 text-[#E05A64]">Come Experience the Difference</p>
            <h1 className="max-w-5xl font-display text-5xl font-medium leading-[0.94] tracking-[-0.035em] text-[#FAF9F6] sm:text-6xl md:text-7xl lg:text-[5.2rem]">
              A community shaped by the presence of Jesus.
            </h1>
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/25 pt-6 sm:mt-10 sm:grid-cols-12 sm:gap-10 sm:pt-7">
              <p className="max-w-2xl text-sm leading-7 text-white/85 sm:col-span-8 sm:text-base sm:leading-8">
                We are a Jesus church in Namulanda — a welcoming family connected by living faith, worship, and a heart to see our nation encounter the hope and love of Christ.
              </p>
              <div className="sm:col-span-4 sm:flex sm:justify-end sm:self-end">
                <a href="#our-heart" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:text-[#F07A82]">
                  Discover who we are <ArrowDown size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <p className="mt-9 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:mt-12 lg:max-w-[68%]">
            Salvation Church Uganda <span className="mx-2 text-[#E05A64]">/</span> Namulanda
          </p>
        </div>

        <div className="absolute -bottom-16 right-[max(2rem,calc((100vw-80rem)/2))] z-20 hidden h-[390px] w-[29%] max-w-[350px] border border-[#FAF9F6]/70 bg-[#FAF9F6] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.22)] md:block lg:h-[450px] lg:w-[27%]">
          <div className="relative h-full w-full overflow-hidden bg-[#E8E7E1]">
            <Image
              src="/images/child-prayer.jpg"
              alt="A church prayer moment"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 30vw, 350px"
            />
          </div>
        </div>
      </section>

      <section id="our-heart" className="section-padding scroll-mt-20 bg-[#FAF9F6]" aria-labelledby="mission-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow mb-4">Why we are here</p>
              <h2 id="mission-heading" className="font-display text-4xl leading-[1.04] text-[#1A1917] sm:text-5xl">
                Our heart.
              </h2>
              <p className="mt-5 max-w-xs text-sm leading-7 text-[#6B6A65]">
                Our purpose is to make room for people to encounter Jesus, grow in faith and share in the life of the church.
              </p>
            </div>
            <div className="lg:col-span-8">
              <p className="border-l-2 border-[#CC1120] pl-6 font-display text-3xl leading-[1.16] tracking-[-0.02em] text-[#1A1917] sm:pl-8 sm:text-4xl lg:text-[3.25rem]">
                “We exist to be a community where anyone can experience the grace, truth, and transforming presence of Jesus.”
              </p>
              <p className="mt-7 pl-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8C8B85] sm:pl-8">
                The heart of Salvation Church Uganda
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-y border-[#E8E7E1] bg-white" aria-labelledby="values-heading">
        <div className="container-content">
          <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <p className="eyebrow mb-3">What matters to us</p>
              <h2 id="values-heading" className="font-display text-4xl leading-tight text-[#1A1917] sm:text-5xl">
                The life we share.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#6B6A65] md:col-span-5 md:justify-self-end">
              Our life together is shaped by worship, care for the next generation, the teaching of Scripture and prayer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            {VALUES.map((value) => (
              <article key={value.number} className="border-t border-[#D8D5CC] pt-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#CC1120]">{value.number}</p>
                <h3 className="mt-6 font-display text-2xl leading-tight text-[#1A1917] sm:text-3xl">{value.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-[#6B6A65]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F2F1EB]" aria-labelledby="leadership-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-12 md:gap-14">
            <div className="relative aspect-[4/5] max-h-[560px] overflow-hidden bg-[#D8D6CF] md:col-span-5">
              <Image
                src="/images/worship-community.jpg"
                alt="Salvation Church Uganda"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              <span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                Our church family
              </span>
            </div>
            <div className="md:col-span-7 md:py-8">
              <p className="eyebrow mb-4">Our leadership</p>
              <h2 id="leadership-heading" className="max-w-xl font-display text-4xl leading-[1.04] text-[#1A1917] sm:text-5xl">
                Led with faith. Built in community.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6B6A65]">
                Salvation Church Uganda is led by Pastor Nijel Rawlins. Our church is a community shaped by worship, the gospel, prayer, and a shared desire to see people encounter the hope and love of Christ.
              </p>
              <Link href="/about/leadership" className="mt-8 inline-flex items-center gap-3 border-b border-[#CC1120] pb-2 text-sm font-semibold text-[#1A1917] transition-colors hover:text-[#CC1120]">
                Get to know our leadership <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding-sm bg-[#1A1917] text-white">
        <div className="container-content flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow mb-2 text-[#E05A64]">Come and be part of it</p>
            <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl">
              We would love to welcome you.
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/60">
              Whether you are new to church or looking for a place to grow, there is a place for you here.
            </p>
          </div>
          <Link href="/visit" className="inline-flex shrink-0 items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#1A1917] transition-colors hover:bg-[#F2F1EB]">
            Plan your visit <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
