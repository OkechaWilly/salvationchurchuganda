import Link from "next/link";
import { ArrowRight } from "lucide-react";

// PLACEHOLDER: Ministry list requires confirmation from church leadership.
// Replace these placeholder items with real ministry names, descriptions and icons.
const PLACEHOLDER_MINISTRIES = [
  {
    id: "children",
    name: "Children's Ministry",
    description:
      "A safe, fun and faith-building environment for children from infants through primary school.",
    icon: "👧",
    href: "/ministries/children",
  },
  {
    id: "youth",
    name: "Youth Ministry",
    description:
      "Building the next generation of leaders through fellowship, discipleship and community.",
    icon: "⚡",
    href: "/ministries/youth",
  },
  {
    id: "women",
    name: "Women's Ministry",
    description:
      "A community where women grow in faith, friendship and purpose together.",
    icon: "🌸",
    href: "/ministries/women",
  },
  {
    id: "men",
    name: "Men's Ministry",
    description:
      "Equipping men to lead their families and communities with integrity and faith.",
    icon: "🛡️",
    href: "/ministries/men",
  },
];

export function MinistriesPreviewSection() {
  return (
    <section
      className="section-padding bg-[#FAF9F6]"
      aria-labelledby="ministries-heading"
    >
      <div className="container-content">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="space-y-2">
            <p className="eyebrow">Get Involved</p>
            <h2
              id="ministries-heading"
              className="font-display text-display-lg text-[#1A1917]"
            >
              Find your ministry
            </h2>
          </div>
          <Link
            href="/ministries"
            className="text-sm text-[#6B6A65] hover:text-[#CC1120] transition-colors flex items-center gap-1.5 font-sans whitespace-nowrap"
          >
            All ministries
            <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>

        {/* Ministry grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PLACEHOLDER_MINISTRIES.map((ministry) => (
            <Link
              key={ministry.id}
              href={ministry.href}
              className="group p-6 bg-[#F2F1EB] hover:bg-[#FAF9F6] border border-transparent hover:border-[#E8E7E1] rounded-sm transition-all duration-200 space-y-3"
              aria-label={`${ministry.name} — learn more`}
            >
              <span className="text-3xl" role="img" aria-hidden="true">
                {ministry.icon}
              </span>
              <h3 className="font-sans font-semibold text-[#1A1917] text-sm group-hover:text-[#CC1120] transition-colors">
                {ministry.name}
              </h3>
              <p className="text-xs text-[#6B6A65] leading-relaxed line-clamp-3">
                {ministry.description}
              </p>
              <p className="text-xs text-[#CC1120] font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={11} aria-hidden="true" />
              </p>
            </Link>
          ))}
        </div>

        {/* Note: these are placeholder items pending leadership confirmation */}
      </div>
    </section>
  );
}

