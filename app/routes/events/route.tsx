import { useState } from "react";
import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { EventCard } from "~/components/cards/event-card";
import { Reveal } from "~/components/shared/reveal";
import { cn } from "~/lib/utils";
import type { Route } from "./+types/route";

export async function loader() {
  return {
    upcoming: contentService.events.upcoming(),
    past: contentService.events.past(),
  };
}

export function meta() {
  return [
    { title: "Event & Kegiatan" },
    { name: "description", content: "Workshop, kompetisi, pameran, dan kegiatan Divisi Web Design WD-MCC." },
  ];
}

export default function EventsPage({ loaderData }: Route.ComponentProps) {
  const { upcoming, past } = loaderData;
  const [view, setView] = useState<"list" | "timeline">("list");
  const [tab, setTab] = useState<"upcoming" | "past">("upcoming");

  const events = tab === "upcoming" ? upcoming : past;

  return (
    <>
      <SEOHead
        title="Event & Kegiatan"
        description="Workshop, kompetisi, pameran, dan kegiatan Divisi Web Design WD-MCC."
        path="/events"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Kegiatan"
              title="Events"
              description="Workshop, kompetisi, pameran karya, dan coding night — semua kegiatan divisi."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setTab("upcoming")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    tab === "upcoming" ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800",
                  )}
                >
                  Akan Datang ({upcoming.length})
                </button>
                <button
                  onClick={() => setTab("past")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    tab === "past" ? "bg-primary text-white" : "bg-zinc-100 dark:bg-zinc-800",
                  )}
                >
                  Selesai ({past.length})
                </button>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setView("list")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    view === "list" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800",
                  )}
                >
                  List
                </button>
                <button
                  onClick={() => setView("timeline")}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    view === "timeline" ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "bg-zinc-100 dark:bg-zinc-800",
                  )}
                >
                  Timeline
                </button>
              </div>
            </div>
          </Reveal>

          {view === "list" ? (
            <div className="space-y-6">
              {events.map((event, i) => (
                <Reveal key={event.id} delay={i * 0.06}>
                  <EventCard event={event} />
                </Reveal>
              ))}
              {events.length === 0 && (
                <p className="py-16 text-center text-zinc-500">Belum ada event di kategori ini.</p>
              )}
            </div>
          ) : (
            <ol className="relative space-y-8" role="list">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" aria-hidden="true" />
              {events.map((event, i) => (
                <Reveal key={event.id} delay={i * 0.06}>
                  <li className="relative pl-12">
                    <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
                    <EventCard event={event} />
                  </li>
                </Reveal>
              ))}
            </ol>
          )}
        </Container>
      </section>
    </>
  );
}
