import type { Project } from "~/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "portal-sekolah-modern",
    title: "Portal Sekolah Modern",
    description: "Redesign portal informasi sekolah dengan UI yang clean dan responsif.",
    longDescription:
      "Proyek ini merupakan redesign portal informasi SMK Negeri 1 Kedawung dengan fokus pada aksesibilitas dan mobile-first design. Tim terdiri dari 3 siswa yang mengerjakan wireframe, UI design, hingga implementasi frontend menggunakan HTML, CSS, dan JavaScript vanilla.",
    category: "Website",
    tags: ["Responsive", "UI/UX", "School"],
    year: 2025,
    student: "Tim Portal — Arya, Dina, Fajar",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    color: "from-sky-500/20 to-blue-600/20",
    tools: ["Figma", "HTML", "CSS", "JavaScript"],
    liveUrl: "#",
  },
  {
    id: "2",
    slug: "e-commerce-umkm",
    title: "E-Commerce UMKM Lokal",
    description: "Platform jual-beli produk UMKM Kedawung dengan desain modern.",
    longDescription:
      "Website e-commerce untuk mendukung UMKM lokal di sekitar Kedawung. Fitur utama meliputi katalog produk, keranjang belanja, dan halaman profil penjual. Dibangun sebagai proyek kompetisi tingkat kabupaten.",
    category: "Competition",
    tags: ["E-Commerce", "React", "Competition"],
    year: 2025,
    student: "Rizki Pratama",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    color: "from-amber-400/20 to-orange-500/20",
    tools: ["React", "Tailwind CSS", "Figma"],
    githubUrl: "#",
  },
  {
    id: "3",
    slug: "dashboard-absensi",
    title: "Dashboard Absensi Digital",
    description: "UI dashboard absensi siswa dengan visualisasi data interaktif.",
    longDescription:
      "Desain UI dashboard untuk sistem absensi digital sekolah. Menampilkan statistik kehadiran, grafik bulanan, dan filter per kelas. Proyek fokus pada data visualization dan design system.",
    category: "UI Design",
    tags: ["Dashboard", "Data Viz", "Figma"],
    year: 2024,
    student: "Siti Nurhaliza",
    featured: true,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-violet-500/20 to-purple-600/20",
    tools: ["Figma", "FigJam"],
  },
  {
    id: "4",
    slug: "landing-page-bakti-sosial",
    title: "Landing Page Bakti Sosial",
    description: "Halaman promosi kegiatan bakti sosial divisi ke sekolah.",
    longDescription:
      "Landing page untuk kampanye bakti sosial tahunan divisi Web Design. Menggunakan animasi scroll dan layout asymmetrical untuk nuansa kreatif yang tetap informatif.",
    category: "School Project",
    tags: ["Landing Page", "Animation", "Social"],
    year: 2024,
    student: "Tim Bakti — 5 anggota",
    featured: false,
    image: "https://images.unsplash.com/photo-1531489875580-3fd67fe5d4c8?w=800&q=80",
    color: "from-emerald-500/20 to-teal-600/20",
    tools: ["HTML", "CSS", "GSAP"],
  },
  {
    id: "5",
    slug: "portfolio-siswa-v2",
    title: "Portfolio Siswa v2",
    description: "Template portfolio personal untuk siswa divisi Web Design.",
    longDescription:
      "Template portfolio yang bisa dikustomisasi oleh setiap anggota divisi. Dilengkapi dark mode, section projects, dan contact form. Dijadikan starter kit untuk anggota baru.",
    category: "Website",
    tags: ["Portfolio", "Template", "Dark Mode"],
    year: 2025,
    student: "Budi Santoso",
    featured: true,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    color: "from-rose-500/20 to-pink-600/20",
    tools: ["React", "Tailwind CSS", "Framer Motion"],
    githubUrl: "#",
  },
  {
    id: "6",
    slug: "design-system-sekolah",
    title: "Design System Sekolah",
    description: "Komponen UI reusable untuk proyek-proyek sekolah.",
    longDescription:
      "Design system berisi komponen button, card, form, dan navigation yang konsisten dengan identitas visual sekolah. Dokumentasi lengkap di Figma untuk digunakan seluruh divisi.",
    category: "UI Design",
    tags: ["Design System", "Components", "Figma"],
    year: 2024,
    student: "Mentor & Tim Core",
    featured: false,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    color: "from-zinc-500/20 to-zinc-700/20",
    tools: ["Figma", "Storybook"],
  },
  {
    id: "7",
    slug: "lomba-web-design-jabar",
    title: "Juara 2 Lomba Web Design Jabar",
    description: "Website edukasi literasi digital untuk remaja.",
    longDescription:
      "Proyek kompetisi tingkat provinsi Jawa Barat. Website edukasi tentang literasi digital dengan ilustrasi custom, quiz interaktif, dan konten yang engaging untuk remaja SMA/SMK.",
    category: "Competition",
    tags: ["Competition", "Education", "Provinsi"],
    year: 2025,
    student: "Tim Lomba — 4 anggota",
    featured: true,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    color: "from-amber-400/30 to-yellow-500/20",
    tools: ["React", "Tailwind CSS", "Illustrator"],
    liveUrl: "#",
  },
  {
    id: "8",
    slug: "website-perpustakaan",
    title: "Website Perpustakaan Digital",
    description: "Sistem katalog buku digital perpustakaan sekolah.",
    longDescription:
      "Proyek kolaboratif dengan perpustakaan sekolah. Fitur pencarian buku, kategori, dan detail buku. Dikerjakan sebagai tugas akhir semester oleh kelas XI.",
    category: "School Project",
    tags: ["Library", "Search", "School"],
    year: 2024,
    student: "Kelas XI WD — 2024",
    featured: false,
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b33?w=800&q=80",
    color: "from-indigo-500/20 to-blue-600/20",
    tools: ["HTML", "CSS", "JavaScript", "PHP"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
