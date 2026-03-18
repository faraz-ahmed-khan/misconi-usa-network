"use client";

import Link from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS, LINKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LOGO_TEXT = "Misconi USA Network";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease",
        "bg-white/90 backdrop-blur-[12px]",
        scrolled && "border-b border-surface-gray-border shadow-nav"
      )}
      role="banner"
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={ROUTES.HOME}
          className="text-[18px] font-bold text-type-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded"
          aria-label="Misconi USA Network home"
        >
          <Image
              src="/images/logo.png" 
              alt=""
              width={130}                
              height={130}                      
             />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-[15px] font-medium text-type-body transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded",
                pathname === href
                  ? "text-brand-blue"
                  : "hover:text-brand-blue hover:underline underline-offset-4"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={LINKS.GYBS}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-button bg-brand-blue px-5 py-2.5 text-[14px] font-semibold text-white hover:bg-brand-blue-hover transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Visit GYBS
          </a>
        </div>

        <button
          type="button"
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-button text-type-body hover:bg-surface-gray border-0 transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
          "md:hidden border-t border-surface-gray-border bg-white shadow-lg",
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
          <a
            href={LINKS.GYBS}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-button bg-brand-blue px-4 py-3 text-center text-[14px] font-semibold text-white hover:bg-brand-blue-hover"
            onClick={() => setMobileOpen(false)}
          >
            Visit GYBS
          </a>
        </nav>
      </div>
    </header>
  );
}
