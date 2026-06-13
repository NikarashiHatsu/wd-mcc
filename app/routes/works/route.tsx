import { useState } from "react";
import { Link } from "react-router";
import { contentService } from "~/services/content";
import { PROJECT_CATEGORIES } from "~/lib/constants";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { ProjectCard } from "~/components/cards/project-card";
import { Modal } from "~/components/ui/modal";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/shared/reveal";
import { Search, ExternalLink } from "lucide-react";
import { cn } from "~/lib/utils";
import type { Project, ProjectCategory } from "~/types";
import type { Route } from "./+types/route";

export async function loader() {
  return { projects: contentService.projects.all() };
}

export function meta() {
  return [
    { title: "Karya Kami" },
    { name: "description", content: "Galeri project web design dari anggota divisi WD-MCC." },
  ];
}

export default function WorksPage({ loaderData }: Route.ComponentProps) {
  const { projects } = loaderData;
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [preview, setPreview] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCategory = category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <SEOHead
        title="Karya Kami"
        description="Galeri project web design dari anggota divisi WD-MCC."
        path="/works"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Portfolio"
              title="Our Works"
              description="Karya-karya digital dari siswa divisi — UI design, website, project sekolah, hingga kompetisi."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative max-w-md flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Cari project..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-primary dark:border-zinc-800 dark:bg-zinc-900"
                  aria-label="Cari project"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategory("All")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    category === "All" ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800",
                  )}
                >
                  Semua
                </button>
                {PROJECT_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      category === cat ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800",
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {filtered.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.04}>
                <div className="mb-6 break-inside-avoid">
                  <ProjectCard project={project} onPreview={setPreview} />
                </div>
              </Reveal>
            ))}
          </div>

          <Modal open={!!preview} onClose={() => setPreview(null)} title={preview?.title ?? ""}>
            {preview && (
              <div>
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="mb-4 h-48 w-full rounded-xl object-cover"
                />
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">{preview.category}</Badge>
                  {preview.tags.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">{preview.description}</p>
                <Link to={`/works/${preview.slug}`} onClick={() => setPreview(null)}>
                  <Button className="mt-6">
                    Lihat Detail <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}
          </Modal>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-zinc-500">Tidak ada project yang cocok dengan filter.</p>
          )}
        </Container>
      </section>
    </>
  );
}
