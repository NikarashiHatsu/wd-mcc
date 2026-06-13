import { useState } from "react";
import type { Project, ProjectCategory } from "~/types";
import { PROJECT_CATEGORIES } from "~/lib/constants";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { ProjectCard } from "~/components/cards/project-card";
import { Reveal } from "~/components/shared/reveal";
import { cn } from "~/lib/utils";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 md:py-32" aria-labelledby="featured-projects-heading">
      <Container>
        <Reveal>
          <SectionHeading
            label="Portfolio"
            title="Karya Terpilih"
            description="Project terbaik dari anggota divisi — dari UI design hingga website kompetisi."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
            <button
              role="tab"
              aria-selected={filter === "All"}
              onClick={() => setFilter("All")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                filter === "All"
                  ? "bg-primary text-white"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400",
              )}
            >
              Semua
            </button>
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  filter === cat
                    ? "bg-primary text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05}>
              <ProjectCard
                project={project}
                size={i === 0 ? "large" : i === 2 ? "wide" : "default"}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
