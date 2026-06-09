import { cn } from "@/lib/utils";

interface PageHeadingProps {
  title: string;
  description?: React.ReactNode;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

export function PageHeading({
  title,
  description,
  eyebrow,
  centered = false,
  className,
}: PageHeadingProps) {
  return (
    <div className={cn(centered ? "text-center mx-auto" : "max-w-3xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
          {eyebrow}
        </p>
      )}
      <h1 className="heading-page text-balance">{title}</h1>
      {description && (
        <p
          className={cn(
            "mt-5 text-body-lg text-type-body leading-[1.75] max-w-prose",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
