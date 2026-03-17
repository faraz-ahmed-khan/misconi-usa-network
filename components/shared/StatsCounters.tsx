import { cn } from "@/lib/utils";

export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

interface StatsCountersProps {
  stats: StatItem[];
  className?: string;
}

export function StatsCounters({ stats, className }: StatsCountersProps) {
  return (
    <div className={cn("w-full bg-brand-blue py-12 md:py-16", className)}>
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                "text-center text-white",
                i > 0 && "lg:border-l border-[rgba(255,255,255,0.15)]"
              )}
            >
              <div className="text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-none">
                {stat.value}
              </div>
              <div className="mt-2 text-[12px] sm:text-[13px] lg:text-[14px] font-medium text-stats-label">
                {stat.label}
              </div>
              {stat.description && (
                <p className="mt-1 text-[11px] sm:text-[12px] lg:text-[13px] text-stats-sublabel">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
