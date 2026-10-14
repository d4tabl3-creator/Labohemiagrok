import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center border border-primary font-display text-sm text-primary",
        className,
      )}
      aria-hidden="true"
    >
      LB
    </span>
  );
}
