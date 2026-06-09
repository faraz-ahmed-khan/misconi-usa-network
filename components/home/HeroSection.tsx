"use client";

import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-24 pb-20"
      style={{ background: "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(30,58,138,0.04), transparent)" }}
      aria-label="Hero"
    >
      <Reveal className="mx-auto max-w-content w-full text-center" delay={0}>
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
          Misconi USA Network
        </p>
        <h1 className="heading-display max-w-hero-text mx-auto">
          Network Readiness &amp; SBA Education
        </h1>
        <p className="mt-6 text-body-lg text-type-body max-w-subhead mx-auto leading-[1.7]">
          Your pathway to business readiness, SBA alignment, and opportunity preparation begins here.
        </p>
        <p className="mt-4 text-[16px] text-type-muted max-w-subhead-sm mx-auto leading-relaxed">
          The Misconi USA Network is your education center for understanding business readiness, SBA requirements,
          documentation, funding, procurement, and opportunity preparation. Whether you&apos;re building your
          foundation or preparing for future opportunities, this library gives you the knowledge you need to move
          forward with confidence.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
          <Link
            href={ROUTES.READINESS}
            className="inline-flex items-center justify-center rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Explore Readiness Education
          </Link>
          <Link
            href={ROUTES.SBA}
            className="inline-flex items-center justify-center rounded-button border-2 border-brand-blue bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
          >
            Explore SBA Education
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
