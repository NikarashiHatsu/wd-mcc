import type { TimelineItem } from "~/types";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Reveal } from "~/components/shared/reveal";

interface TimelineSectionProps {
  items: TimelineItem[];
}

export function TimelineSection({ items }: TimelineSectionProps) {
  return (
    <section className="py-24 md:py-32 section-muted" aria-labelledby="timeline-heading">
      <Container>
        <Reveal>
          <SectionHeading
            label="Perjalanan"
            title="Timeline Divisi"
            description="Dari divisi kecil hingga komunitas kreatif dengan puluhan anggota aktif."
          />
        </Reveal>

        {/* Desktop: horizontal scroll */}
        <div className="hidden md:block">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin">
            {items.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <article className="w-72 shrink-0 snap-start rounded-2xl border border-border bg-surface p-6">
                  <p className="font-display text-3xl font-bold text-primary">{item.year}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <ol className="relative space-y-8 md:hidden" role="list">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.08}>
              <li className="relative pl-12">
                <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
                <p className="font-display text-2xl font-bold text-primary">{item.year}</p>
                <h3 className="mt-1 font-display font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
