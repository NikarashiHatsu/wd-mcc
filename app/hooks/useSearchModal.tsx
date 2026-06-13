import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { contentService } from "~/services/content";

interface SearchResult {
  type: "project" | "event" | "page";
  title: string;
  description: string;
  href: string;
}

interface SearchContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  query: string;
  setQuery: (q: string) => void;
  results: SearchResult[];
}

const SearchContext = createContext<SearchContextValue | null>(null);

function buildSearchIndex(): SearchResult[] {
  const pages: SearchResult[] = [
    { type: "page", title: "Beranda", description: "Halaman utama WD-MCC", href: "/" },
    { type: "page", title: "Tentang Divisi", description: "Visi, misi, dan budaya divisi", href: "/about" },
    { type: "page", title: "Karya", description: "Galeri project siswa", href: "/works" },
    { type: "page", title: "Roadmap Belajar", description: "Kurikulum pembelajaran", href: "/roadmap" },
    { type: "page", title: "Anggota", description: "Tim core, aktif, dan alumni", href: "/members" },
    { type: "page", title: "Event", description: "Kegiatan dan acara divisi", href: "/events" },
    { type: "page", title: "Gabung", description: "Cara mendaftar divisi", href: "/join" },
    { type: "page", title: "Kontak", description: "Hubungi divisi", href: "/contact" },
  ];

  const projectResults: SearchResult[] = contentService.projects.all().map((p) => ({
    type: "project" as const,
    title: p.title,
    description: p.description,
    href: `/works/${p.slug}`,
  }));

  const eventResults: SearchResult[] = contentService.events.all().map((e) => ({
    type: "event" as const,
    title: e.title,
    description: e.description,
    href: `/events/${e.slug}`,
  }));

  return [...pages, ...projectResults, ...eventResults];
}

const searchIndex = buildSearchIndex();

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  }, []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

  useEffect(() => {
    if (!query.trim()) {
      setResults(searchIndex.slice(0, 8));
      return;
    }
    const q = query.toLowerCase();
    setResults(
      searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q),
      ),
    );
  }, [query]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [toggle, close]);

  return (
    <SearchContext.Provider value={{ isOpen, open, close, toggle, query, setQuery, results }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchModal() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearchModal must be used within SearchProvider");
  return ctx;
}
