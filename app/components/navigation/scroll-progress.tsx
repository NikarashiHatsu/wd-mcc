import { useScrollProgress } from "~/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-0.5 bg-primary transition-none"
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progress scroll halaman"
    />
  );
}
