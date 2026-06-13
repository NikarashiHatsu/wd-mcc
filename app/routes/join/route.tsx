import { Link } from "react-router";
import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/shared/reveal";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Route } from "./+types/route";

export async function loader() {
  return { join: contentService.shared.join() };
}

export function meta() {
  return [
    { title: "Gabung Divisi" },
    { name: "description", content: "Cara bergabung dengan Divisi Web Design WD-MCC — syarat, manfaat, dan proses pendaftaran." },
  ];
}

export default function JoinPage({ loaderData }: Route.ComponentProps) {
  const { join } = loaderData;

  return (
    <>
      <SEOHead
        title="Gabung Divisi"
        description="Cara bergabung dengan Divisi Web Design WD-MCC — syarat, manfaat, dan proses pendaftaran."
        path="/join"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Recruitment"
              title="Join Us"
              description="Tempat belajar web design & development yang seru, praktis, dan supportif. Semua jurusan welcome!"
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold">Proses Pendaftaran</h2>
          </Reveal>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" role="list">
            {join.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="relative rounded-2xl border border-border bg-surface p-6 ">
                  <span className="font-display text-4xl font-bold text-primary/20">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  {i < join.steps.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-zinc-300 lg:block" aria-hidden="true" />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 section-muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { title: "Syarat", items: join.requirements },
              { title: "Ekspektasi Belajar", items: join.expectations },
              { title: "Manfaat", items: join.benefits },
            ].map((section, i) => (
              <Reveal key={section.title} delay={i * 0.1}>
                <article className="rounded-2xl border border-border bg-surface p-8 ">
                  <h2 className="font-display text-xl font-bold">{section.title}</h2>
                  <ul className="mt-6 space-y-3" role="list">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-border bg-surface p-8 text-center  md:p-16">
              <h2 className="font-display text-3xl font-bold">Ready to Join?</h2>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Open recruitment dibuka setiap awal semester. Hubungi pembina divisi atau isi formulir pendaftaran.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg">
                    Hubungi Kami <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <a href={`mailto:${contentService.site.email}?subject=Pendaftaran WD-MCC`}>
                  <Button variant="outline" size="lg">
                    Kirim Email
                  </Button>
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
