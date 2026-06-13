import { SITE_URL } from "~/lib/constants";
import { contentService } from "~/services/content";

export async function loader() {
  const staticPages = [
    "",
    "/about",
    "/works",
    "/roadmap",
    "/members",
    "/events",
    "/join",
    "/contact",
  ];

  const projectPages = contentService.projects.all().map((p) => `/works/${p.slug}`);
  const eventPages = contentService.events.all().map((e) => `/events/${e.slug}`);

  const urls = [...staticPages, ...projectPages, ...eventPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path || "/"}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
