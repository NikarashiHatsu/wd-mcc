import { contentService } from "~/services/content";
import { siteConfig } from "~/content/site";
import { SEOHead } from "~/components/shared/seo-head";
import { HeroSection } from "~/components/sections/hero-section";
import { FeaturedProjectsSection } from "~/components/sections/featured-projects-section";
import { TimelineSection } from "~/components/sections/timeline-section";
import { AlumniSection } from "~/components/sections/alumni-section";
import { FAQSection } from "~/components/sections/faq-section";
import { CTASection } from "~/components/sections/cta-section";
import type { Route } from "./+types/route";

export async function loader() {
  return {
    featuredProjects: contentService.projects.featured(),
    timeline: contentService.shared.timeline(),
    alumni: contentService.shared.alumni(),
    faq: contentService.shared.faq(),
  };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: siteConfig.name },
    { name: "description", content: siteConfig.description },
  ];
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  const { featuredProjects, timeline, alumni, faq } = loaderData;

  return (
    <>
      <SEOHead
        title={siteConfig.name}
        description={siteConfig.description}
        path="/"
      />
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <TimelineSection items={timeline} />
      <AlumniSection alumni={alumni} />
      <FAQSection items={faq} />
      <CTASection />
    </>
  );
}
