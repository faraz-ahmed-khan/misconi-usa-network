"use client";

import { scrollToId } from "@/lib/utils";
import { LINKS } from "@/lib/constants";
import { Reveal } from "@/components/shared/Reveal";

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 pt-24 pb-20"
      style={{ background: "radial-gradient(ellipse 80% 50% at 100% 0%, rgba(30,58,138,0.04), transparent)" }}
      aria-label="Hero"
    >
      <Reveal className="mx-auto max-w-content w-full" delay={0}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-[clamp(32px,4.2vw,56px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-type-heading max-w-hero-text mx-auto lg:mx-0">
              Understand Readiness. Become Ready. Understand Your Next Step.
            </h1>
            <p className="mt-5 text-body-lg text-type-body max-w-subhead mx-auto lg:mx-0 leading-[1.7]">
              Learn how Misconi USA helps businesses get aligned, prepared, and supported across the national readiness ecosystem.
            </p>
            <p className="mt-4 text-[16px] text-type-muted max-w-subhead-sm mx-auto lg:mx-0 leading-relaxed">
              Readiness is the foundation for contracts, distribution, partnerships, and SBA-aligned programs. Misconi USA Network is where you learn what readiness means, how it works, and how to move confidently into the next stage of your journey.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-start sm:gap-3">
              <button
                type="button"
                onClick={() => scrollToId("readiness-education")}
                className="inline-flex items-center justify-center rounded-button bg-brand-blue px-6 py-3 text-[14px] font-semibold text-white hover:bg-brand-blue-hover hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Learn About Readiness
              </button>
              <a
                href={LINKS.GYBS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-button border-2 border-brand-blue bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Visit GYBS
              </a>
              <a
                href={LINKS.MISCONI_USA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-button border-2 border-brand-blue bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Visit MisconiUSA
              </a>
              <a
                href={LINKS.SBA_READY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-button border-2 border-brand-blue bg-white px-6 py-3 text-[14px] font-semibold text-brand-blue hover:shadow-button hover:-translate-y-0.5 transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2"
              >
                Visit SBAReady
              </a>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-card border border-surface-gray-border bg-white/80 backdrop-blur-sm p-6 shadow-card max-w-sm mx-auto">
              <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-type-muted mb-4">
                Guided progression
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 rounded-full bg-brand-blue" />
                  <div>
                    <p className="text-[14px] font-semibold text-type-heading">Education</p>
                    <p className="text-[13px] text-type-muted">Learn what readiness means.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 rounded-full bg-brand-blue animate-pulse-soft" />
                  <div>
                    <p className="text-[14px] font-semibold text-type-heading">Score</p>
                    <p className="text-[13px] text-type-muted">Activate readiness with your Business Score.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-3 w-3 rounded-full bg-brand-blue" />
                  <div>
                    <p className="text-[14px] font-semibold text-type-heading">Readiness</p>
                    <p className="text-[13px] text-type-muted">Move confidently into your next stage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
