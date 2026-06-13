import type { Alumni, FAQItem, TimelineItem } from "~/types";

export const alumni: Alumni[] = [
  {
    id: "1",
    name: "Rizki Pratama",
    batch: "2022",
    role: "Junior Web Developer",
    quote:
      "Divisi Web Design mengubah cara saya melihat teknologi. Dari tidak tahu HTML sampai bisa kerja di startup — semua berawal dari ekstrakurikuler ini.",
    currentPath: "Web Developer @ Startup Cirebon",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    id: "2",
    name: "Maya Sari",
    batch: "2021",
    role: "UI Designer",
    quote:
      "Di sini saya belajar bahwa desain bukan cuma soal cantik — tapi soal menyelesaikan masalah. Skill Figma dan design thinking saya bawa sampai kuliah.",
    currentPath: "Freelance UI Designer & D3 Desain Komunikasi Visual",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    id: "3",
    name: "Eko Prasetyo",
    batch: "2020",
    role: "Frontend Developer",
    quote:
      "WD-MCC adalah tempat pertama saya belajar coding serius. Komunitasnya supportif, mentornya sabar, dan project-projectnya nyata — bukan cuma teori.",
    currentPath: "Frontend Developer @ E-Commerce Jakarta",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "Apakah harus sudah bisa coding untuk gabung?",
    answer:
      "Tidak! Divisi ini menerima siswa dari berbagai level. Yang penting punya minat dan semangat belajar. Kami punya roadmap terstruktur dari nol hingga mahir.",
  },
  {
    id: "2",
    question: "Berapa kali pertemuan dalam seminggu?",
    answer:
      "Pertemuan rutin setiap Senin dan Kamis sore (15:30–17:30). Di luar itu ada sesi optional workshop, coding night, dan project deadline sesuai kebutuhan.",
  },
  {
    id: "3",
    question: "Jurusan apa saja yang bisa gabung?",
    answer:
      "Semua jurusan di SMK N 1 Kedawung boleh gabung — TKJ, RPL, MM, dan jurusan lain. Web design adalah skill universal yang berguna di mana saja.",
  },
  {
    id: "4",
    question: "Apakah ada biaya untuk gabung?",
    answer:
      "Gratis! Divisi ini fully funded oleh sekolah. Yang perlu disiapkan hanya laptop (bisa pinjam lab sekolah) dan semangat belajar.",
  },
  {
    id: "5",
    question: "Bisa ikut lomba setelah gabung?",
    answer:
      "Pasti! Divisi rutin mendaftarkan tim ke berbagai lomba web design tingkat kabupaten, provinsi, hingga nasional. Mentor akan membimbing persiapan lomba.",
  },
  {
    id: "6",
    question: "Apa bedanya dengan pelajaran TI di kelas?",
    answer:
      "Pelajaran TI di kelas fokus kurikulum umum. Di divisi, kamu belajar web design & development secara praktis, ber-project nyata, dan dibimbing mentor yang passionate.",
  },
];

export const timelineItems: TimelineItem[] = [
  {
    id: "1",
    year: "2018",
    title: "Divisi Didirikan",
    description: "Web Design Multimedia Creative Club resmi dibentuk sebagai ekstrakurikuler sekolah.",
  },
  {
    id: "2",
    year: "2020",
    title: "Juara Pertama",
    description: "Tim divisi meraih juara 3 lomba web design tingkat provinsi Jawa Barat.",
  },
  {
    id: "3",
    year: "2022",
    title: "50+ Anggota Aktif",
    description: "Jumlah anggota aktif melewati 50 siswa dari berbagai jurusan.",
  },
  {
    id: "4",
    year: "2024",
    title: "Design System Sekolah",
    description: "Meluncurkan design system reusable untuk seluruh proyek digital sekolah.",
  },
  {
    id: "5",
    year: "2025",
    title: "Juara 2 Kabupaten",
    description: "Meraih juara 2 lomba web design tingkat kabupaten Cirebon.",
  },
  {
    id: "6",
    year: "2026",
    title: "Roadmap React & Beyond",
    description: "Memperkenalkan kurikulum React modern dan deployment untuk anggota tingkat lanjut.",
  },
];

export const aboutContent = {
  vision:
    "Menjadi divisi ekstrakurikuler terdepan yang melahirkan generasi web designer dan developer kreatif, siap bersaing di era digital.",
  mission: [
    "Menyediakan pembelajaran web design & development yang terstruktur dan praktis.",
    "Membangun portofolio nyata melalui proyek sekolah, kompetisi, dan kolaborasi.",
    "Menciptakan komunitas belajar yang kolaboratif, inklusif, dan inspiratif.",
    "Menghubungkan siswa dengan industri dan peluang karir di bidang digital.",
  ],
  culture: [
    {
      title: "Belajar Bareng",
      description: "Senior bimbing junior. Tidak ada pertanyaan bodoh — semua belajar di sini.",
    },
    {
      title: "Build in Public",
      description: "Setiap proyek dipamerkan. Progress di-share, feedback diterima terbuka.",
    },
    {
      title: "Kreatif & Eksperimental",
      description: "Bebas explore ide gila. Yang penting belajar dari prosesnya.",
    },
    {
      title: "Deadline Culture",
      description: "Project deadline bukan beban — tapi latihan disiplin profesional.",
    },
  ],
  activityFlow: [
    { step: "01", title: "Orientasi", description: "Perkenalan divisi, roadmap, dan expectations." },
    { step: "02", title: "Fundamentals", description: "HTML, CSS, Tailwind — fondasi web design." },
    { step: "03", title: "Project Mini", description: "Landing page pertama sebagai milestone." },
    { step: "04", title: "JavaScript", description: "Interaktivitas dan logika web modern." },
    { step: "05", title: "Team Project", description: "Proyek kelompok untuk event atau sekolah." },
    { step: "06", title: "React & Beyond", description: "Framework modern dan deployment." },
  ],
  mentors: [
    {
      name: "Pak Budi Wijaya, S.Kom",
      role: "Pembina Divisi",
      bio: "Guru TKJ dengan 10+ tahun pengalaman. Passionate mentoring siswa di bidang web development.",
    },
    {
      name: "Mas Andi Pratama",
      role: "Mentor Alumni",
      bio: "Alumni 2019, sekarang full-stack developer. Kembali mentoring siswa setiap bulan.",
    },
  ],
  philosophy: [
    {
      title: "Learn by Doing",
      description: "Teori 20%, praktik 80%. Setiap konsep langsung diterapkan di project nyata.",
    },
    {
      title: "Progress over Perfection",
      description: "Lebih baik deploy versi 1.0 daripada menunggu sempurna selamanya.",
    },
    {
      title: "Community First",
      description: "Skill bisa dipelajari sendiri, tapi komunitas yang supportif adalah keunggulan kami.",
    },
  ],
};

export const joinContent = {
  requirements: [
    "Siswa aktif SMK N 1 Kedawung Cirebon (semua jurusan)",
    "Minat terhadap desain web dan/atau coding",
    "Komitmen hadir minimal 2x pertemuan per minggu",
    "Bawa laptop sendiri (opsional — lab sekolah tersedia)",
    "Semangat belajar dan mau berkontribusi ke komunitas",
  ],
  expectations: [
    "Menyelesaikan project mini dalam 4 minggu pertama",
    "Aktif di sesi belajar dan coding night",
    "Mau membantu anggota baru setelah level intermediate",
    "Menjaga etika dan reputasi divisi di kompetisi/lomba",
  ],
  benefits: [
    "Roadmap belajar terstruktur dari nol hingga React",
    "Mentoring langsung dari pembina dan alumni",
    "Portofolio nyata dari project sekolah & kompetisi",
    "Akses workshop, coding night, dan event eksklusif",
    "Networking dengan alumni yang sudah bekerja di industri",
    "Sertifikat keaktifan untuk beasiswa dan CV",
  ],
  steps: [
    { title: "Isi Formulir", description: "Daftar online melalui form pendaftaran di halaman ini." },
    { title: "Tes Mini", description: "Tes HTML/CSS sederhana — bukan ujian, cuma lihat level dasar." },
    { title: "Wawancara", description: "Ngobrol singkat 10 menit tentang motivasi dan minat kamu." },
    { title: "Orientasi", description: "Welcome session, kenalan tim, dan mulai roadmap Level 1." },
  ],
};
