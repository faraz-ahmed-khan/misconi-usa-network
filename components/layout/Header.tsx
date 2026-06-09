"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { NAV_ITEMS, NAV_EDUCATION_ITEMS, LINKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);

  const educationActive = NAV_EDUCATION_ITEMS.some((item) => item.href === pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (educationRef.current && !educationRef.current.contains(event.target as Node)) {
        setEducationOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const linkClass = (href: string) =>
    cn(
      "whitespace-nowrap text-[14px] font-medium transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded",
      pathname === href
        ? "text-brand-blue"
        : "text-type-body hover:text-brand-blue"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease",
        "bg-white/90 backdrop-blur-[12px]",
        scrolled && "border-b border-surface-gray-border shadow-nav"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.HOME}
          className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded"
          aria-label="Misconi USA Network home"
        >
          <Image src="/images/logo.png" alt="" width={56} height={56} priority />
        </Link>

        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {NAV_ITEMS.slice(0, 2).map(({ label, href }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}

          <div ref={educationRef} className="relative">
            <button
              type="button"
              onClick={() => setEducationOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1 whitespace-nowrap text-[14px] font-medium transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded",
                educationActive || educationOpen
                  ? "text-brand-blue"
                  : "text-type-body hover:text-brand-blue"
              )}
              aria-expanded={educationOpen}
              aria-haspopup="true"
            >
              More Education
              <svg
                className={cn("h-4 w-4 transition-transform duration-200", educationOpen && "rotate-180")}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {educationOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-[11rem] rounded-card border border-surface-gray-border bg-white py-2 shadow-card">
                {NAV_EDUCATION_ITEMS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "block px-4 py-2.5 text-[14px] font-medium transition-colors duration-200 ease hover:bg-surface-blue-pale hover:text-brand-blue",
                      pathname === href ? "text-brand-blue bg-surface-blue-pale" : "text-type-body"
                    )}
                    onClick={() => setEducationOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={ROUTES.CONTACT} className={linkClass(ROUTES.CONTACT)}>
            Contact
          </Link>
        </nav>

        <div className="hidden lg:block shrink-0">
          <a
            href={LINKS.GYBS}
            target="_blank"
            rel="noopener noreferrer"
            title="Take the Readiness Assessment"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-button bg-brand-blue px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-brand-blue-hover transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Take Assessment
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-button text-type-body hover:bg-surface-gray border-0 transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden border-t border-surface-gray-border bg-white shadow-lg",
          mobileOpen ? "block" : "hidden"
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-button px-4 py-3 text-[15px] font-medium text-type-body hover:bg-surface-blue-pale hover:text-brand-blue transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <p className="px-4 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-type-muted">
            More Education
          </p>
          {NAV_EDUCATION_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-button px-4 py-3 text-[15px] font-medium text-type-body hover:bg-surface-blue-pale hover:text-brand-blue transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href={LINKS.GYBS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-button bg-brand-blue px-4 py-3 text-center text-[14px] font-semibold text-white hover:bg-brand-blue-hover"
            onClick={() => setMobileOpen(false)}
          >
            Take the Readiness Assessment
          </a>
        </nav>
      </div>
    </header>
  );
}
