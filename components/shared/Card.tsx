import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-card border border-surface-gray-border bg-white p-8 transition-all duration-200 ease hover:border-brand-blue hover:shadow-card",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn("text-subhead font-bold text-type-heading", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-2 text-[15px] text-type-muted leading-[1.65]", className)}>{children}</p>;
}
