import type { Partner } from "@/lib/types";
import { cn } from "@/lib/utils";

interface PartnersStripProps {
  partners: Partner[];
  title?: string;
  className?: string;
}

export function PartnersStrip({ partners, title = "Ecosystem & partners", className }: PartnersStripProps) {
  return (
    <div className={cn("w-full bg-white border-t border-b border-surface-gray-border py-8", className)}>
      {title && (
        <p className="text-center text-[11px] font-medium uppercase tracking-[0.12em] text-surface-gray-muted mb-6">
          {title.toUpperCase()}
        </p>
      )}
      <div className="flex flex-wrap items-center justify-center gap-12">
        {partners.map((p) =>
          p.url ? (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-type-body hover:text-brand-blue transition-colors duration-200 ease focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded"
            >
              {p.name}
            </a>
          ) : (
            <span
              key={p.id}
              className="text-[15px] font-semibold text-type-body"
            >
              {p.name}
            </span>
          )
        )}
      </div>
    </div>
  );
}
