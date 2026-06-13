import { Link, data } from "react-router";
import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { Badge } from "~/components/ui/badge";
import { Reveal } from "~/components/shared/reveal";
import { ArrowLeft, Calendar, MapPin, CheckCircle } from "lucide-react";
import { formatDate } from "~/lib/utils";
import type { Route } from "./+types/route";

const typeLabels = {
  workshop: "Workshop",
  competition: "Kompetisi",
  exhibition: "Pameran",
  meetup: "Meetup",
} as const;

export async function loader({ params }: Route.LoaderArgs) {
  const event = contentService.events.bySlug(params.slug!);
  if (!event) throw data("Event not found", { status: 404 });
  return { event };
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData?.event) return [{ title: "Event Not Found" }];
  return [
    { title: loaderData.event.title },
    { name: "description", content: loaderData.event.description },
  ];
}

export default function EventDetailPage({ loaderData }: Route.ComponentProps) {
  const { event } = loaderData;

  return (
    <>
      <SEOHead
        title={event.title}
        description={event.description}
        path={`/events/${event.slug}`}
        image={event.image}
        type="article"
      />

      <article className="pt-32 pb-24">
        <Container>
          <Reveal>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Kembali ke Events
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-3xl">
              <img
                src={event.image}
                alt={event.title}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </Reveal>

          <div className="mt-10 max-w-3xl">
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-2">
                <Badge variant={event.status === "upcoming" ? "accent" : "default"}>
                  {event.status === "upcoming" ? "Akan Datang" : "Selesai"}
                </Badge>
                <Badge variant="outline">{typeLabels[event.type]}</Badge>
              </div>
              <h1 className="mt-4 font-display text-4xl font-bold">{event.title}</h1>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(event.date)}
                  {event.endDate && ` — ${formatDate(event.endDate)}`}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {event.location}
                </span>
              </div>
              <p className="mt-6 text-lg text-muted-foreground">{event.longDescription}</p>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="mt-10 font-display text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 space-y-2" role="list">
                {event.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </article>
    </>
  );
}
