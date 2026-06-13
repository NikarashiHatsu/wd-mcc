import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Reveal } from "~/components/shared/reveal";
import { CTASection } from "~/components/sections/cta-section";
import { Target, Eye, Users, BookOpen } from "lucide-react";
import type { Route } from "./+types/route";

export async function loader() {
  return { about: contentService.shared.about() };
}

export function meta() {
  return [
    { title: "Tentang Divisi" },
    { name: "description", content: "Visi, misi, budaya, dan filosofi pembelajaran Divisi Web Design WD-MCC." },
  ];
}

export default function AboutPage({ loaderData }: Route.ComponentProps) {
  const { about } = loaderData;

  return (
    <>
      <SEOHead
        title="Tentang Divisi"
        description="Visi, misi, budaya, dan filosofi pembelajaran Divisi Web Design WD-MCC."
        path="/about"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Tentang Kami"
              title="Divisi Web Design"
              description="Ekstrakurikuler kreatif di SMK Negeri 1 Kedawung Cirebon — tempat belajar web design & development secara praktis."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal>
              <article className="rounded-2xl border border-border bg-surface p-8 ">
                <Eye className="h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-bold">Visi</h2>
                <p className="mt-3 text-muted-foreground">{about.vision}</p>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <article className="rounded-2xl border border-border bg-surface p-8 ">
                <Target className="h-8 w-8 text-primary" aria-hidden="true" />
                <h2 className="mt-4 font-display text-2xl font-bold">Misi</h2>
                <ul className="mt-3 space-y-2" role="list">
                  {about.mission.map((item) => (
                    <li key={item} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary">→</span> {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24 section-muted">
        <Container>
          <Reveal>
            <SectionHeading label="Budaya" title="Culture Kami" description="Nilai-nilai yang membentuk komunitas WD-MCC." />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.culture.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="rounded-2xl border border-border bg-surface p-6 ">
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading label="Alur" title="Activity Flow" description="Perjalanan belajar dari orientasi hingga deployment." />
          </Reveal>
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" role="list">
            {about.activityFlow.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <li className="flex gap-4 rounded-2xl border border-border bg-surface p-6 ">
                  <span className="font-display text-3xl font-bold text-primary/30">{step.step}</span>
                  <div>
                    <h3 className="font-display font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 section-muted">
        <Container>
          <Reveal>
            <SectionHeading label="Mentor" title="Tim Pembina & Mentor" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {about.mentors.map((mentor, i) => (
              <Reveal key={mentor.name} delay={i * 0.1}>
                <article className="rounded-2xl border border-border bg-surface p-8 ">
                  <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-xl font-semibold">{mentor.name}</h3>
                  <p className="text-sm text-primary">{mentor.role}</p>
                  <p className="mt-3 text-muted-foreground">{mentor.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading label="Filosofi" title="Learning Philosophy" />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {about.philosophy.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="rounded-2xl border border-border bg-surface p-8 ">
                  <BookOpen className="h-6 w-6 text-amber-500" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
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
