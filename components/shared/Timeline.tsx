import { cn } from "@/lib/utils";

export interface TimelineStep {
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("relative", className)}>
      {steps.map((step, i) => (
        <div
          key={i}
          className="group relative flex gap-6 pb-10 last:pb-0"
        >
          <div className="relative flex flex-col items-center flex-shrink-0">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue text-[15px] font-bold text-white z-10">
              {i + 1}
            </div>
            {i < steps.length - 1 && (
              <div
                className={cn(
                  "w-0.5 flex-1 min-h-[24px] mt-2",
                  i === steps.length - 2 ? "bg-gradient-to-b from-brand-blue to-surface-gray-border" : "bg-surface-gray-border"
                )}
                aria-hidden
              />
            )}
          </div>
          <div className="min-w-0 border-l-2 border-surface-gray-border pl-6 group-hover:border-brand-blue transition-colors duration-200 ease -ml-px">
            <h3 className="text-subhead font-semibold text-type-heading">{step.title}</h3>
            <p className="mt-1 text-[15px] text-type-muted leading-[1.6]">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
