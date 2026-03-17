"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  title: string;
  description: string;
  className?: string;
}

export function VideoSection({ title, description, className }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={cn("", className)}>
      <div className="relative aspect-video max-w-video mx-auto overflow-hidden rounded-video bg-surface-gray">
        {!playing ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[22px] font-semibold text-white">{title}</span>
            </div>
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 rounded-video"
              aria-label="Play video"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm text-brand-blue shadow-lg hover:scale-[1.08] transition-transform duration-200 ease">
                <svg className="ml-1 h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              </span>
            </button>
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-surface-gray text-type-muted text-[15px]">
            Video placeholder — embed your readiness education video here.
          </div>
        )}
      </div>
      <div className="mt-4 text-center max-w-video-caption mx-auto">
        <h3 className="text-subhead font-semibold text-type-heading">{title}</h3>
        <p className="mt-1 text-[15px] text-type-muted leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
