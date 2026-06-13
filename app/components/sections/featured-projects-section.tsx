import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectCategory } from "~/types";
import { PROJECT_CATEGORIES } from "~/lib/constants";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { ProjectCard } from "~/components/cards/project-card";
import { Reveal } from "~/components/shared/reveal";
import { useReducedMotion } from "~/hooks/useReducedMotion";
import { cn } from "~/lib/utils";

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

export function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const reducedMotion = useReducedMotion();

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
                  : "bg-muted text-muted-foreground hover:bg-surface-elevated",
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
                    : "bg-muted text-muted-foreground hover:bg-surface-elevated",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout={!reducedMotion}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: reducedMotion ? 0 : i * 0.05 }}
                className={cn(
                  i === 0 && "md:col-span-2 md:row-span-2",
                  i === 2 && "md:col-span-2",
                )}
              >
                <ProjectCard
                  project={project}
                  size={i === 0 ? "large" : i === 2 ? "wide" : "default"}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
