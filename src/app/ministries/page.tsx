import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Ministries",
  description:
    "Discover the ministries at Salvation Church Uganda — find your place to belong and serve.",
};

const PLACEHOLDER_MINISTRIES = [
  { id: "children", name: "Children's Ministry", icon: "👧", desc: "[Description pending]", href: "/ministries/children" },
  { id: "youth", name: "Youth Ministry", icon: "⚡", desc: "[Description pending]", href: "/ministries/youth" },
  { id: "women", name: "Women's Ministry", icon: "🌸", desc: "[Description pending]", href: "/ministries/women" },
  { id: "men", name: "Men's Ministry", icon: "🛡️", desc: "[Description pending]", href: "/ministries/men" },
];

export default function MinistriesPage() {
  return (
    <>
      <div className="bg-[#1A1917] pt-32 pb-14 md:pt-40 md:pb-16">
        <div className="container-content text-center space-y-4">
          <p className="eyebrow text-[#CC1120]">Get Involved</p>
          <h1 className="font-display text-display-xl text-[#FAF9F6]">
            Ministries
          </h1>
          <p className="text-[#8C8B85] text-lg max-w-xl mx-auto font-sans">
            There&apos;s a place for you to belong, grow, and serve here.
          </p>
        </div>
      </div>

      <section className="section-padding bg-[#FAF9F6]" aria-labelledby="ministries-page-heading">
        <div className="container-content space-y-10">
          <h2 id="ministries-page-heading" className="sr-only">All Ministries</h2>
          <p className="text-sm text-[#8C8B85] bg-[#FFF8E7] border border-[#FFD54F] rounded px-4 py-3 max-w-xl">
            ℹ️ Ministry details are pending confirmation from church leadership.
            These placeholders will be replaced with real names, descriptions and contacts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLACEHOLDER_MINISTRIES.map((m) => (
              <Link
                key={m.id}
                href={m.href}
                className="group p-7 bg-[#F2F1EB] hover:bg-white border border-transparent hover:border-[#E8E7E1] hover:shadow-sm rounded-sm transition-all duration-200 space-y-3"
                aria-label={`${m.name} — learn more`}
              >
                <span className="text-4xl" role="img" aria-hidden="true">{m.icon}</span>
                <h3 className="font-sans font-semibold text-[#1A1917] group-hover:text-[#CC1120] transition-colors">
                  {m.name}
                </h3>
                <p className="text-sm text-[#6B6A65]">{m.desc}</p>
                <p className="text-xs text-[#CC1120] font-semibold flex items-center gap-1">
                  Learn more <ArrowRight size={11} aria-hidden="true" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

