export type ProjectCategory = "UI Design" | "Website" | "School Project" | "Competition";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  year: number;
  student: string;
  featured: boolean;
  image: string;
  color: string;
  tools: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface RoadmapLevel {
  level: number;
  title: string;
  description: string;
  duration: string;
  topics: RoadmapTopic[];
}

export interface RoadmapTopic {
  name: string;
  description: string;
  resources: { title: string; url: string }[];
}

export interface Member {
  id: string;
  name: string;
  role: string;
  batch: string;
  bio: string;
  skills: string[];
  avatar: string;
  type: "core" | "active" | "alumni";
  social?: { github?: string; instagram?: string; linkedin?: string };
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  endDate?: string;
  location: string;
  type: "workshop" | "competition" | "exhibition" | "meetup";
  status: "upcoming" | "past";
  image: string;
  highlights: string[];
}

export interface Alumni {
  id: string;
  name: string;
  batch: string;
  role: string;
  quote: string;
  currentPath: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  institution: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  address: string;
  social: {
    instagram: string;
    github: string;
    youtube: string;
  };
}

export interface SEOData {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}
