import { Link, data } from "react-router";
import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/shared/reveal";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "~/components/shared/social-icons";
import type { Route } from "./+types/route";

export async function loader({ params }: Route.LoaderArgs) {
  const project = contentService.projects.bySlug(params.slug!);
  if (!project) throw data("Project not found", { status: 404 });
  return { project };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.project) return [{ title: "Project Not Found" }];
  return [
    { title: loaderData.project.title },
    { name: "description", content: loaderData.project.description },
  ];
}

export default function WorkDetailPage({ loaderData }: Route.ComponentProps) {
  const { project } = loaderData;

  return (
    <>
      <SEOHead
        title={project.title}
        description={project.description}
        path={`/works/${project.slug}`}
        image={project.image}
        type="article"
      />

      <article className="pt-32 pb-24">
        <Container>
          <Reveal>
            <Link
              to="/works"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Kembali ke Karya
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <img
                src={project.image}
                alt={project.title}
                className="h-[400px] w-full object-cover md:h-[500px]"
              />
            </div>
          </Reveal>

          <div className="mt-10 grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Reveal delay={0.15}>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">{project.category}</Badge>
                  <span className="text-sm text-zinc-500">{project.year}</span>
                </div>
                <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">{project.title}</h1>
                <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">{project.longDescription}</p>
              </Reveal>
            </div>

            <aside>
              <Reveal delay={0.2}>
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
                  <h2 className="font-display font-semibold">Detail Project</h2>
                  <dl className="mt-4 space-y-3 text-sm">
                    <div>
                      <dt className="text-zinc-500">Siswa</dt>
                      <dd className="font-medium">{project.student}</dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Tools</dt>
                      <dd className="mt-1 flex flex-wrap gap-1">
                        {project.tools.map((t) => (
                          <Badge key={t} variant="outline">{t}</Badge>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-zinc-500">Tags</dt>
                      <dd className="mt-1 flex flex-wrap gap-1">
                        {project.tags.map((t) => (
                          <Badge key={t} variant="accent">{t}</Badge>
                        ))}
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-6 flex flex-col gap-2">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          GitHub <GithubIcon className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
