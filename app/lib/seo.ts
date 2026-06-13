import type { SEOData } from "~/types";
import { SITE_URL } from "./constants";

export function buildCanonical(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Divisi Web Design Multimedia Creative Club",
    alternateName: "WD-MCC",
    url: SITE_URL,
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: "SMK Negeri 1 Kedawung Cirebon",
    },
    description:
      "Divisi Web Design ekstrakurikuler di SMK Negeri 1 Kedawung Cirebon — tempat belajar desain, coding, dan membangun karya digital.",
  };
}

export function buildWebPageSchema(seo: SEOData) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: seo.title,
    description: seo.description,
    url: buildCanonical(seo.path),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonical(item.path),
    })),
  };
}
