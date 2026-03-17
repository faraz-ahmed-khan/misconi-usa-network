"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

interface TestimonialsSliderProps {
  testimonials: TestimonialItem[];
  className?: string;
}

export function TestimonialsSlider({ testimonials, className }: TestimonialsSliderProps) {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  if (!current) return null;

  const attribution = [current.role, current.company].filter(Boolean).join(" — ");

  return (
    <div className={cn("relative", className)}>
      <blockquote className="relative rounded-card bg-white p-10 sm:px-12 sm:py-10 max-w-[760px] mx-auto shadow-testimonial">
        <span className="absolute top-6 left-10 text-[80px] font-serif leading-none text-brand-blue/20" aria-hidden>
          &ldquo;
        </span>
        <p className="relative text-[20px] font-medium text-type-heading leading-[1.7] pt-8">
          &ldquo;{current.quote}&rdquo;
        </p>
        <footer className="mt-6 pt-4 border-t border-surface-gray-border">
          <cite className="not-italic text-[14px] text-type-muted">
            {current.author}
            {attribution && ` — ${attribution}`}
          </cite>
        </footer>
      </blockquote>
      {testimonials.length > 1 && (
        <div className="mt-6 flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`View testimonial ${i + 1}`}
              className={cn(
                "rounded-full transition-all duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue",
                i === index ? "h-2.5 w-2.5 bg-brand-blue" : "h-2 w-2 bg-surface-gray-border hover:bg-type-muted"
              )}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
