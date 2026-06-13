import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Badge } from "~/components/ui/badge";
import { Reveal } from "~/components/shared/reveal";
import { CTASection } from "~/components/sections/cta-section";
import { Clock, ExternalLink } from "lucide-react";
import type { Route } from "./+types/route";

export async function loader() {
  return { levels: contentService.roadmap.all() };
}

export function meta() {
  return [
    { title: "Learning Roadmap" },
    { name: "description", content: "Kurikulum pembelajaran web design & development dari nol hingga React." },
  ];
}

export default function RoadmapPage({ loaderData }: Route.ComponentProps) {
  const { levels } = loaderData;

  return (
    <>
      <SEOHead
        title="Learning Roadmap"
        description="Kurikulum pembelajaran web design & development dari nol hingga React."
        path="/roadmap"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Kurikulum"
              title="Learning Roadmap"
              description="Perjalanan belajar terstruktur dari HTML dasar hingga deployment — dirancang untuk siswa SMK."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="relative space-y-12">
            <div className="absolute left-8 top-0 hidden bottom-0 w-px bg-gradient-to-b from-primary via-amber-400 to-sky-500 md:block" aria-hidden="true" />

            {levels.map((level, i) => (
              <Reveal key={level.level} delay={i * 0.1}>
                <article className="relative md:pl-20">
                  <div className="absolute left-4 hidden h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-white md:flex">
                    {level.level}
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <Badge variant="primary">Level {level.level}</Badge>
                        <h2 className="mt-3 font-display text-2xl font-bold">{level.title}</h2>
                        <p className="mt-2 text-zinc-600 dark:text-zinc-400">{level.description}</p>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm dark:bg-zinc-800">
                        <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                        {level.duration}
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {level.topics.map((topic) => (
                        <div
                          key={topic.name}
                          className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-950"
                        >
                          <h3 className="font-display font-semibold">{topic.name}</h3>
                          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{topic.description}</p>
                          <ul className="mt-3 space-y-1" role="list">
                            {topic.resources.map((res) => (
                              <li key={res.url}>
                                <a
                                  href={res.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                >
                                  {res.title} <ExternalLink className="h-3 w-3" />
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
