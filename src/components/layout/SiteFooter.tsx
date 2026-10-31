import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";

function YoutubeIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}
import { NAV_LINKS, CHURCH_CONTACT, CHURCH_LOCATION, CHURCH_SOCIAL, CHURCH_NAME } from "@/lib/constants";

const FOOTER_SECTIONS = [
  {
    title: "Visit",
    links: [
      { label: "Plan Your Visit", href: "/visit" },
      { label: "Location & Directions", href: "/visit#location" },
      { label: "What to Expect", href: "/visit#what-to-expect" },
      { label: "Children & Families", href: "/visit#kids" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Leadership", href: "/about/leadership" },
      { label: "Ministries", href: "/ministries" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Watch Sermons", href: "/watch" },
      { label: "Prayer Requests", href: "/connect#prayer" },
      { label: "Contact Us", href: "/connect" },
      { label: "Give", href: "/give" },
    ],
  },
];

const CURRENT_YEAR = 2026;

export function SiteFooter() {
  const currentYear = CURRENT_YEAR;

  return (
    <footer
      className="bg-[#1A1917] text-[#FAF9F6]"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer content */}
      <div className="container-content section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" aria-label={`${CHURCH_NAME} — Home`}>
              <Image
                src="/images/logo-white.png"
                alt={CHURCH_NAME}
                width={160}
                height={54}
                className="h-12 w-auto"
              />
            </Link>

            <p className="text-[#8C8B85] text-sm leading-relaxed max-w-xs">
              A community of believers rooted in the gospel, serving Namulanda
              and beyond.
            </p>

            {/* Contact */}
            <div className="space-y-2.5">
              <a
                href={`tel:${CHURCH_CONTACT.phoneTel}`}
                className="flex items-center gap-2.5 text-sm text-[#B0AFA9] hover:text-white transition-colors"
                aria-label={`Phone: ${CHURCH_CONTACT.phone}`}
              >
                <Phone size={14} aria-hidden="true" className="text-[#CC1120] flex-shrink-0" />
                {CHURCH_CONTACT.phone}
              </a>
              <span className="flex items-start gap-2.5 text-sm text-[#B0AFA9]">
                <MapPin size={14} aria-hidden="true" className="text-[#CC1120] flex-shrink-0 mt-0.5" />
                <span>
                  {CHURCH_LOCATION.address}
                  <br />
                  {CHURCH_LOCATION.city}
                </span>
              </span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CHURCH_SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[#8C8B85] hover:text-[#CC1120] transition-colors"
                aria-label="Salvation Church Uganda on YouTube (opens in a new tab)"
              >
                <YoutubeIcon size={16} />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-[#6B6A65] mb-4 font-sans">
                {section.title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#B0AFA9] hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2C2B28]">
        <div className="container-content py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#6B6A65]">
            © {currentYear} {CHURCH_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-[#44433F]">
            Built by{" "}
            <a
              href="https://tatenopictures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C8B85] transition-colors"
            >
              Tateno Pictures
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
