// src/data/portfolioData.js
import project1_ss1 from '../assets/projects/p1_ss1.png';
import project1_ss5 from '../assets/projects/p1_ss5.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiSpringboot, SiLaravel, SiMongodb, SiMysql } from 'react-icons/si';
import DasarJava from "../assets/certificates/sertifikatDasarJava.png";
import Backend from "../assets/certificates/sertifikatBackend.png";
import ArtificialIntelligence from "../assets/certificates/sertifikatAI.png";
import EthicalHacking from "../assets/certificates/sertifikatEH.png";
import Linux from "../assets/certificates/sertifikatLinux.png";
import Android from "../assets/certificates/sertifikatAndroid.png";



export const aboutData = {
  // Data lama yang masih dipakai
  name: "Setiawan Muhammad",
  college: "Telkom University", // Ganti 'university' menjadi 'college' agar lebih sesuai
  status: "Student",
  residence: "Surabaya, Indonesia", // Ganti 'domicile' menjadi 'residence'
  email: "setiawanmuhammad3@gmail.com",
  cv: "/CV_Setiawan_Muhammad.pdf",
  
  // Data baru sesuai desain
  title: "About Me",
  subtitle: "Building, Breaking, and Securing",
  greeting: "Hello There!",
  description: "As an Informatics student fueled by curiosity, I'm passionate about cybersecurity, backend engineering, and game development. I thrive on exploring new technologies and continuously sharpen my programming skills—especially in crafting secure systems and immersive gaming experiences.",

  // Statistik (kita ubah menjadi array of objects)
  stats: [
    { id: 1, value: 5, label: "TOTAL PROJECTS", description: "Innovative web solutions crafted" },
    { id: 2, value: 6, label: "CERTIFICATES", description: "Professional skill validated" },
    { id: 3, value: 3, label: "YEARS OF EXPERIENCE", description: "Continuous learning journey" },
  ]
};

// ... sisa data (projects, certificates) tetap sama ...

export const projects = [
  {
    id: 1,
    title: "Sistem Manajemen Toko",
    // Data baru untuk halaman detail
    longDescription: "Deskripsi yang lebih panjang tentang sistem manajemen toko...",
    images: [project1_ss1, project1_ss5], // Array gambar untuk carousel
    keyFeatures: ["Manajemen Stok Real-time", "Laporan Penjualan Otomatis", "Manajemen Pelanggan"],
    totalTeknologi: 9,
    fiturUtama: 4,
    demoLink: "#", // Ganti dengan link demo
    githubLink: "https://github.com/awanmh/wm-jaya",
    // Data lama yang masih dipakai di kartu
    image: "https://via.placeholder.com/400x250.png?text=Project+1", 
    description: "Aplikasi kasir dan manajemen stok untuk UMKM...",
    tags: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const certificates = [
  {
    id: 1,
    name: "Sertifikat Dasar Pemrograman Java",
    image: DasarJava,
  },
  {
    id: 2,
    name: "Sertifikat Belajar Backend dengan Javascript",
    image: Backend,
  },
  {
    id: 3,
    name: "Sertifikat Dasar Kecerdasan Buatan",
    image: ArtificialIntelligence,
  },
  {
    id: 4,
    name: "Sertifikat Belajar Etjikal Hacking from Stratch",
    image: EthicalHacking,
  },
  {
    id: 5,
    name: "Sertifikat Mastering Linux",
    image: Linux,
  },
  {
    id: 6,
    name: "Sertifikat Belajar Android Development",
    image: Android,
  },
];

export const techStack = [
  { id: 1, name: 'HTML5', icon: <FaHtml5 size={48} /> },
  { id: 2, name: 'CSS3', icon: <FaCss3Alt size={48} /> },
  { id: 3, name: 'JavaScript', icon: <FaJsSquare size={48} /> },
  { id: 4, name: 'React', icon: <FaReact size={48} /> },
  { id: 5, name: 'Node.js', icon: <FaNodeJs size={48} /> },
  { id: 6, name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },
  { id: 7, name: 'Java', icon: <FaJava size={48} /> },
  { id: 8, name: 'Spring Boot', icon: <SiSpringboot size={48} /> },
  { id: 9, name: 'Laravel', icon: <SiLaravel size={48} /> },
  { id: 10, name: 'MongoDB', icon: <SiMongodb size={48} /> },
  { id: 11, name: 'MySQL', icon: <SiMysql size={48} /> },
  { id: 12, name: 'Linux', icon: <FaLinux size={48} /> },
];

