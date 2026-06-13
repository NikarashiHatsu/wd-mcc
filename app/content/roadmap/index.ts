import type { RoadmapLevel } from "~/types";

export const roadmapLevels: RoadmapLevel[] = [
  {
    level: 1,
    title: "Fondasi Web",
    description: "Membangun dasar HTML, CSS, dan Tailwind untuk struktur dan styling halaman web.",
    duration: "8–10 minggu",
    topics: [
      {
        name: "HTML",
        description: "Struktur semantik, form, accessibility dasar.",
        resources: [
          { title: "MDN HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { title: "freeCodeCamp Responsive Web", url: "https://www.freecodecamp.org" },
        ],
      },
      {
        name: "CSS",
        description: "Layout flexbox & grid, typography, responsive design.",
        resources: [
          { title: "CSS Tricks Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
          { title: "MDN CSS Grid", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout" },
        ],
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first styling, design tokens, dark mode.",
        resources: [
          { title: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs" },
          { title: "Tailwind UI Components", url: "https://tailwindcss.com/plus/ui-blocks" },
        ],
      },
    ],
  },
  {
    level: 2,
    title: "Interaktivitas",
    description: "Menambahkan logika dan responsivitas dengan JavaScript modern.",
    duration: "10–12 minggu",
    topics: [
      {
        name: "JavaScript",
        description: "DOM manipulation, events, async, ES6+ syntax.",
        resources: [
          { title: "JavaScript.info", url: "https://javascript.info" },
          { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        ],
      },
      {
        name: "Responsive Design",
        description: "Mobile-first, breakpoints, touch-friendly UI.",
        resources: [
          { title: "Responsive Web Design Basics", url: "https://web.dev/learn/design" },
          { title: "A List Apart — Responsive", url: "https://alistapart.com" },
        ],
      },
    ],
  },
  {
    level: 3,
    title: "Framework Modern",
    description: "Membangun aplikasi web dengan React dan ekosistemnya.",
    duration: "12–14 minggu",
    topics: [
      {
        name: "React",
        description: "Components, hooks, state management, routing.",
        resources: [
          { title: "React Official Docs", url: "https://react.dev" },
          { title: "React Router Tutorial", url: "https://reactrouter.com" },
        ],
      },
    ],
  },
  {
    level: 4,
    title: "Profesional & Deploy",
    description: "UI/UX design thinking dan deployment ke production.",
    duration: "8–10 minggu",
    topics: [
      {
        name: "UI/UX",
        description: "User research, wireframing, prototyping, design system.",
        resources: [
          { title: "Figma Learn", url: "https://www.figma.com/resource-library/" },
          { title: "Laws of UX", url: "https://lawsofux.com" },
        ],
      },
      {
        name: "Deployment",
        description: "Git workflow, CI/CD, hosting, performance optimization.",
        resources: [
          { title: "Vercel Docs", url: "https://vercel.com/docs" },
          { title: "web.dev Performance", url: "https://web.dev/performance" },
        ],
      },
    ],
  },
];
