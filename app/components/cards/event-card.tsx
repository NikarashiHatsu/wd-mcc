import { Link } from "react-router";
import { Calendar, MapPin } from "lucide-react";
import type { Event } from "~/types";
import { Badge } from "~/components/ui/badge";
import { formatDate } from "~/lib/utils";

interface EventCardProps {
  event: Event;
}

const typeLabels = {
  workshop: "Workshop",
  competition: "Kompetisi",
  exhibition: "Pameran",
  meetup: "Meetup",
} as const;

export function EventCard({ event }: EventCardProps) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 md:flex-row"
    >
      <div className="relative h-48 shrink-0 overflow-hidden md:h-auto md:w-64">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant={event.status === "upcoming" ? "accent" : "default"}>
            {event.status === "upcoming" ? "Akan Datang" : "Selesai"}
          </Badge>
          <Badge variant="outline">{typeLabels[event.type]}</Badge>
        </div>
        <h3 className="mt-3 font-display text-xl font-semibold group-hover:text-primary">
          {event.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {event.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {formatDate(event.date)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {event.location}
          </span>
        </div>
      </div>
    </Link>
  );
}
