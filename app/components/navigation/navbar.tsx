import { useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";
import { NAV_LINKS } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { ThemeSwitcher } from "./theme-switcher";
import { useSearchModal } from "~/hooks/useSearchModal";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { open: openSearch } = useSearchModal();

  return (
    <>
      <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2">
        <nav
          className="glass flex items-center justify-between rounded-full border border-zinc-200/60 px-4 py-2 shadow-lg dark:border-zinc-800/60"
          aria-label="Navigasi utama"
        >
          <Link
            to="/"
            className="font-display text-lg font-bold tracking-tight"
            aria-label="WD-MCC Beranda"
          >
            <span className="gradient-text">WD</span>
            <span className="text-zinc-900 dark:text-zinc-100">-MCC</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex" role="list">
            {NAV_LINKS.slice(0, 6).map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              onClick={openSearch}
              className="rounded-full p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Buka pencarian"
            >
              <Search className="h-5 w-5" />
            </button>
            <ThemeSwitcher />
            <button
              className="rounded-full p-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            className="fixed top-20 right-4 left-4 z-50 glass rounded-2xl border border-zinc-200 p-4 shadow-xl dark:border-zinc-800 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            aria-label="Menu mobile"
          >
            <ul className="space-y-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-zinc-100 dark:hover:bg-zinc-800",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
