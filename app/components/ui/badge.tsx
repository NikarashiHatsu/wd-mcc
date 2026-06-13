import { cn } from "~/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "accent" && "bg-amber-400/20 text-amber-700 dark:text-amber-300",
        variant === "outline" && "border border-border",
        className,
      )}
    >
      {children}
    </span>
  );
}
