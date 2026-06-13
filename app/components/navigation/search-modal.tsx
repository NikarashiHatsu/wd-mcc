import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, FileText, Calendar, Layout } from "lucide-react";
import { useSearchModal } from "~/hooks/useSearchModal";
import { cn } from "~/lib/utils";

const typeIcons = {
  project: FileText,
  event: Calendar,
  page: Layout,
} as const;

export function SearchModal() {
  const { isOpen, close, query, setQuery, results } = useSearchModal();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Pencarian"
            className="fixed inset-x-4 top-[15%] z-[90] mx-auto max-w-xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-5 w-5 shrink-0 text-zinc-400" aria-hidden="true" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari halaman, karya, atau event..."
                  className="flex-1 bg-transparent py-4 text-base outline-none placeholder:text-zinc-400"
                  aria-label="Kata kunci pencarian"
                />
                <button
                  onClick={close}
                  className="rounded-lg p-1.5 hover:bg-muted"
                  aria-label="Tutup pencarian"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="max-h-80 overflow-y-auto p-2" role="listbox">
                {results.length === 0 ? (
                  <li className="px-4 py-8 text-center text-sm text-zinc-500">
                    Tidak ada hasil ditemukan
                  </li>
                ) : (
                  results.map((result) => {
                    const Icon = typeIcons[result.type];
                    return (
                      <li key={result.href + result.title}>
                        <Link
                          to={result.href}
                          onClick={close}
                          className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-muted"
                          role="option"
                        >
                          <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          <div>
                            <p className="font-medium">{result.title}</p>
                            <p className="text-sm text-zinc-500">{result.description}</p>
                          </div>
                        </Link>
                      </li>
                    );
                  })
                )}
              </ul>
              <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                <kbd className={cn("rounded border px-1.5 py-0.5 font-mono")}>⌘K</kbd> untuk buka ·{" "}
                <kbd className="rounded border px-1.5 py-0.5 font-mono">Esc</kbd> untuk tutup
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
