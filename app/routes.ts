import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout.tsx", [
    index("routes/home/route.tsx"),
    route("about", "routes/about/route.tsx"),
    route("works", "routes/works/route.tsx"),
    route("works/:slug", "routes/works/$slug/route.tsx"),
    route("roadmap", "routes/roadmap/route.tsx"),
    route("members", "routes/members/route.tsx"),
    route("events", "routes/events/route.tsx"),
    route("events/:slug", "routes/events/$slug/route.tsx"),
    route("join", "routes/join/route.tsx"),
    route("contact", "routes/contact/route.tsx"),
  ]),
  route("sitemap.xml", "routes/sitemap[.]xml/route.tsx"),
] satisfies RouteConfig;
