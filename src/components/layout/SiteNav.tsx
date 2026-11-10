"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, CHURCH_CONTACT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);


  useEffect(() => {
    if (!isMobileOpen) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        `a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])`
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previousFocus?.isConnected) previousFocus.focus();
      else menuToggleRef.current?.focus();
    };
  }, [isMobileOpen]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-0"
            : "bg-gradient-to-b from-black/65 via-black/25 to-transparent pt-1 pb-2"
        )}
        role="banner"
      >
        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#CC1120] text-white px-4 py-2 rounded z-[60] text-sm font-semibold"
        >
          Skip to main content
        </a>

        <div className="container-content">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Primary navigation"
          >
            {/* Logo: Swaps between white (transparent hero) and color (scrolled) */}
            <Link
              href="/"
              className="relative flex-shrink-0 flex items-center h-10 w-[160px]"
              aria-label="Salvation Church Uganda — Home"
              onClick={closeMobile}
            >
              {/* White Logo (on dark hero) */}
              <Image
                src="/images/logo-white.png"
                alt="Salvation Church Uganda"
                width={170}
                height={55}
                className={cn(
                  "h-9 md:h-10 w-auto object-contain transition-opacity duration-300 absolute",
                  isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
                priority
              />
              {/* Color Logo (on white scrolled bar) */}
              <Image
                src="/images/logo-color.png"
                alt="Salvation Church Uganda"
                width={170}
                height={55}
                className={cn(
                  "h-9 md:h-10 w-auto object-contain transition-opacity duration-300",
                  isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors rounded-lg",
                        isScrolled
                          ? isActive
                            ? "text-[#CC1120] font-extrabold"
                            : "text-stone-700 hover:text-[#CC1120]"
                          : isActive
                            ? "text-white bg-white/15"
                            : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span
                          className={cn(
                            "absolute bottom-0.5 left-3.5 right-3.5 h-[2px] rounded-full",
                            isScrolled ? "bg-[#CC1120]" : "bg-white"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop right CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${CHURCH_CONTACT.phoneTel}`}
                className={cn(
                  "flex items-center gap-1.5 text-xs font-semibold transition-colors px-2 py-1",
                  isScrolled ? "text-stone-500 hover:text-stone-900" : "text-white/80 hover:text-white"
                )}
                aria-label={`Call us: ${CHURCH_CONTACT.phone}`}
              >
                <Phone size={13} aria-hidden="true" className="text-[#CC1120]" />
                <span className="hidden xl:inline">{CHURCH_CONTACT.phone}</span>
              </a>
              
              <Link
                href="/visit"
                className={cn(
                  "text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-xs",
                  isScrolled
                    ? "bg-[#1A1917] hover:bg-[#CC1120] text-white"
                    : "bg-white text-[#1A1917] hover:bg-stone-100"
                )}
              >
                Plan Your Visit
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              ref={menuToggleRef}
              type="button"
              className={cn(
                "lg:hidden p-2 rounded-lg transition-colors",
                isScrolled ? "text-stone-900 hover:bg-stone-200" : "text-white hover:bg-white/15"
              )}
              onClick={() => setIsMobileOpen((v) => !v)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-drawer"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          isMobileOpen ? "visible" : "invisible"
        )}
      >
        {/* Scrim */}
        <div
          className={cn(
            "absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300",
            isMobileOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={cn(
            "absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl",
            "flex flex-col transition-transform duration-300 ease-out",
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200">
            <Image
              src="/images/logo-color.png"
              alt="Salvation Church Uganda"
              width={140}
              height={48}
              className="h-8 w-auto"
            />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMobile}
              className="p-2 rounded-lg text-stone-600 hover:text-black hover:bg-stone-100 transition-colors"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>

          {/* Panel links */}
          <nav
            className="flex-1 overflow-y-auto py-6 px-4"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobile}
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3.5 text-sm font-bold uppercase tracking-wider rounded-lg transition-colors duration-150",
                        isActive
                          ? "bg-[#F5E5E7] text-[#CC1120]"
                          : "text-stone-800 hover:text-[#CC1120] hover:bg-stone-50"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#CC1120]" aria-hidden="true" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Panel footer CTAs */}
          <div className="px-6 py-6 border-t border-stone-200 space-y-3 bg-[#FAF9F6]">
            <Link
              href="/visit"
              onClick={closeMobile}
              className="flex items-center justify-center w-full bg-[#1A1917] hover:bg-[#CC1120] text-white font-bold uppercase tracking-wider text-xs py-3.5 px-4 rounded-full transition-colors duration-150 shadow-xs"
            >
              Plan Your Visit
            </Link>
            <a
              href={`tel:${CHURCH_CONTACT.phoneTel}`}
              className="flex items-center justify-center gap-2 w-full border border-stone-300 text-stone-800 font-semibold py-3 px-4 rounded-full hover:bg-white transition-colors duration-150 text-xs"
            >
              <Phone size={14} aria-hidden="true" className="text-[#CC1120]" />
              {CHURCH_CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
