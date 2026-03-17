"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("space-y-0", className)} role="region" aria-label="FAQ">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="border-b border-surface-gray-border py-6"
          >
            <button
              type="button"
              className={cn(
                "flex w-full items-center justify-between gap-4 text-left text-[17px] font-semibold transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-inset rounded",
                isOpen ? "text-brand-blue" : "text-type-heading hover:text-brand-blue"
              )}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span>{item.question}</span>
              <span
                className={cn(
                  "flex h-8 w-8 flex-shrink-0 items-center justify-center text-brand-blue transition-transform duration-[0.25s] ease",
                  isOpen && "rotate-180"
                )}
                aria-hidden
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={cn("overflow-hidden transition-all duration-200 ease", isOpen ? "max-h-[500px]" : "max-h-0")}
            >
              <p className="pt-2 pb-4 text-[16px] text-type-muted leading-[1.7]">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
