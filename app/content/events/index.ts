import type { Event } from "~/types";

export const events: Event[] = [
  {
    id: "1",
    slug: "workshop-react-2026",
    title: "Workshop React untuk Pemula",
    description: "Workshop intensif React dasar untuk anggota divisi tingkat pemula.",
    longDescription:
      "Workshop sehari penuh yang membahas konsep React modern: components, hooks, state, dan props. Dipandu oleh Tech Lead divisi dengan hands-on project mini portfolio. Peserta diharapkan sudah memahami HTML, CSS, dan JavaScript dasar.",
    date: "2026-03-15",
    location: "Lab Komputer 2, SMK N 1 Kedawung",
    type: "workshop",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    highlights: [
      "Hands-on coding session",
      "Project mini portfolio",
      "Sertifikat kehadiran",
      "Materi PDF untuk semua peserta",
    ],
  },
  {
    id: "2",
    slug: "pameran-karya-2026",
    title: "Pameran Karya Digital 2026",
    description: "Exhibition karya terbaik divisi Web Design di aula sekolah.",
    longDescription:
      "Acara tahunan untuk memamerkan karya terbaik anggota divisi kepada seluruh siswa, guru, dan tamu undangan. Setiap anggota bisa submit 1–2 karya untuk dipamerkan. Ada sesi demo live dan voting karya favorit.",
    date: "2026-05-20",
    endDate: "2026-05-21",
    location: "Aula SMK N 1 Kedawung",
    type: "exhibition",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    highlights: [
      "Pameran 30+ karya digital",
      "Live demo session",
      "Voting karya favorit",
      "Door prize untuk pengunjung",
    ],
  },
  {
    id: "3",
    slug: "lomba-web-design-kabupaten",
    title: "Lomba Web Design Tingkat Kabupaten",
    description: "Tim divisi meraih juara 2 lomba web design Cirebon 2025.",
    longDescription:
      "Tim terdiri dari 4 anggota divisi berhasil meraih juara 2 dalam lomba web design tingkat kabupaten Cirebon. Karya yang dilombakan adalah website edukasi literasi digital untuk remaja dengan fitur quiz interaktif.",
    date: "2025-11-08",
    location: "Disdik Kabupaten Cirebon",
    type: "competition",
    status: "past",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    highlights: [
      "Juara 2 — 15 tim peserta",
      "Website edukasi literasi digital",
      "Mentoring intensif 2 bulan",
      "Hadiah dan sertifikat provinsi",
    ],
  },
  {
    id: "4",
    slug: "open-recruitment-2025",
    title: "Open Recruitment Anggota Baru 2025",
    description: "Penerimaan anggota baru divisi Web Design tahun ajaran 2025/2026.",
    longDescription:
      "Kegiatan rekrutmen anggota baru dengan tes mini HTML/CSS dan wawancara singkat. Dari 45 pendaftar, 20 siswa diterima sebagai anggota baru divisi. Sesi orientasi dan perkenalan roadmap belajar.",
    date: "2025-08-12",
    location: "Ruang Multimedia, SMK N 1 Kedawung",
    type: "meetup",
    status: "past",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    highlights: [
      "45 pendaftar, 20 diterima",
      "Tes HTML/CSS mini",
      "Orientasi roadmap belajar",
      "Welcome kit divisi",
    ],
  },
  {
    id: "5",
    slug: "workshop-figma-ui-2025",
    title: "Workshop Figma & UI Design",
    description: "Workshop desain UI dengan Figma untuk seluruh anggota divisi.",
    longDescription:
      "Workshop half-day yang membahas dasar-dasar UI design: layout, typography, color theory, dan prototyping di Figma. Setiap peserta membuat mockup landing page sebagai tugas akhir workshop.",
    date: "2025-10-05",
    location: "Lab Komputer 1, SMK N 1 Kedawung",
    type: "workshop",
    status: "past",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    highlights: [
      "Dasar UI/UX design",
      "Hands-on Figma",
      "Mockup landing page",
      "Design critique session",
    ],
  },
  {
    id: "6",
    slug: "coding-night-2025",
    title: "Coding Night — Build Together",
    description: "Malam coding bersama untuk menyelesaikan proyek kelompok.",
    longDescription:
      "Event informal divisi di mana anggota berkumpul untuk coding bersama, saling review kode, dan menyelesaikan proyek kelompok. Snack dan minuman disediakan. Atmosfer kolaboratif yang fun!",
    date: "2025-09-20",
    endDate: "2025-09-21",
    location: "Lab Komputer 2, SMK N 1 Kedawung",
    type: "meetup",
    status: "past",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    highlights: [
      "Coding marathon 12 jam",
      "Code review bersama",
      "Snacks & networking",
      "3 proyek selesai",
    ],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents() {
  return events.filter((e) => e.status === "upcoming");
}

export function getPastEvents() {
  return events.filter((e) => e.status === "past");
}
