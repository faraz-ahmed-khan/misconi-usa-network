import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({ id, title, subtitle, className, centered }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", centered && "text-center mx-auto", className)}>
      <h2 id={id} className="text-section font-bold text-type-heading">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-body-lg text-type-muted leading-[1.75]", centered && "text-center")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
