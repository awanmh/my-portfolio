// src/data/portfolioData.js
// import projectImage1 from '../assets/projects/project-1.png';
// import projectImage2 from '../assets/projects/project-2.png';

export const aboutData = {
  name: "Setiawan Muhammad",
  university: "Telkom University",
  status: "Mahasiswa Aktif",
  domicile: "Surabaya, Indonesia",
  email: "setiawanmuhammad3@gmail.com",
  cv: "/cv_setiawan_muhammad.pdf",
  yearsExperience: 2,
  totalProjects: 15,
};

export const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Toko",
    image: "https://via.placeholder.com/400x250.png?text=Project+1", // Ganti dengan path gambar Anda nanti
    description: "Aplikasi kasir dan manajemen stok untuk UMKM berbasis web dengan React dan Node.js.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/awanmh/wm-jaya",
  },
  {
    id: 2,
    title: "Website tentang Ibu Hamil",
    image: "https://via.placeholder.com/400x250.png?text=Project+2",
    description: "Laporan analisis mendalam mengenai perilaku malware 'X' dan cara mitigasinya.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/awanmh/Ibu-Pintar",
  },
];

export const certificates = [ // <-- PASTIKAN ADA 'export' DI SINI
  { id: 1, name: "Sertifikat Keamanan Siber Dasar" },
  { id: 2, name: "Sertifikat Pengembang Web Full-Stack" },
];

