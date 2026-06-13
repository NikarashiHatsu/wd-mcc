import { Moon, Sun } from "lucide-react";
import { useTheme } from "~/hooks/useTheme";
import { cn } from "~/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className={cn("rounded-full p-2", className)}
        aria-label="Toggle theme"
        disabled
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "rounded-full p-2 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
      aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );
}
