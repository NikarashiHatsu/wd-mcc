import { Link } from "react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "~/types";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

interface ProjectCardProps {
  project: Project;
  className?: string;
  size?: "default" | "large" | "wide";
  onPreview?: (project: Project) => void;
}

export function ProjectCard({ project, className, size = "default", onPreview }: ProjectCardProps) {
  const content = (
    <>
      <div className={cn("relative overflow-hidden", size === "large" ? "h-64 md:h-80" : "h-48")}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t opacity-60",
            project.color,
          )}
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2">
          <Badge variant="primary">{project.category}</Badge>
          <span className="text-xs text-zinc-500">{project.year}</span>
        </div>
        <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Lihat detail <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </>
  );

  const cardClass = cn(
    "group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 block w-full text-left",
    size === "large" && "md:col-span-2 md:row-span-2",
    size === "wide" && "md:col-span-2",
    className,
  );

  if (onPreview) {
    return (
      <button type="button" onClick={() => onPreview(project)} className={cardClass}>
        {content}
      </button>
    );
  }

  return (
    <Link to={`/works/${project.slug}`} className={cardClass}>
      {content}
    </Link>
  );
}
