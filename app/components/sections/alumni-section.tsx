import type { Alumni } from "~/types";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Reveal } from "~/components/shared/reveal";
import { Quote } from "lucide-react";

interface AlumniSectionProps {
  alumni: Alumni[];
}

export function AlumniSection({ alumni }: AlumniSectionProps) {
  return (
    <section className="py-24 md:py-32" aria-labelledby="alumni-heading">
      <Container>
        <Reveal>
          <SectionHeading
            label="Alumni"
            title="Cerita dari Alumni"
            description="Mereka yang pernah belajar di divisi ini — dan sekarang melangkah lebih jauh."
            align="center"
          />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {alumni.map((person, i) => (
            <Reveal key={person.id} delay={i * 0.1}>
              <blockquote className="relative rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <Quote className="h-8 w-8 text-primary/30" aria-hidden="true" />
                <p className="mt-4 text-zinc-700 dark:text-zinc-300">&ldquo;{person.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={person.avatar}
                    alt={person.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <cite className="not-italic font-display font-semibold">{person.name}</cite>
                    <p className="text-sm text-zinc-500">Batch {person.batch} · {person.currentPath}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
