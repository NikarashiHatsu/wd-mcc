import { projects, getProjectBySlug, getFeaturedProjects } from "~/content/projects";
import { roadmapLevels } from "~/content/roadmap";
import { members, getMembersByType } from "~/content/members";
import { events, getEventBySlug, getUpcomingEvents, getPastEvents } from "~/content/events";
import { alumni, faqItems, timelineItems, aboutContent, joinContent } from "~/content/shared";
import { siteConfig } from "~/content/site";

export const contentService = {
  site: siteConfig,
  projects: {
    all: () => projects,
    featured: getFeaturedProjects,
    bySlug: getProjectBySlug,
  },
  roadmap: {
    all: () => roadmapLevels,
  },
  members: {
    all: () => members,
    byType: getMembersByType,
  },
  events: {
    all: () => events,
    upcoming: getUpcomingEvents,
    past: getPastEvents,
    bySlug: getEventBySlug,
  },
  shared: {
    alumni: () => alumni,
    faq: () => faqItems,
    timeline: () => timelineItems,
    about: () => aboutContent,
    join: () => joinContent,
  },
};

export type ContentService = typeof contentService;
