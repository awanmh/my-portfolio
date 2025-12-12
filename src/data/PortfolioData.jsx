// src/data/portfolioData.jsx

// Impor gambar-gambar proyek
import BerandaIbuPintar from '../assets/projects/icon1.png';
import LogoWMJaya from '../assets/projects/icon2.png';
import LogoBelanjaku from '../assets/projects/belanjaku/icon3.png';
import ReconIcon from '../assets/projects/icon4.png';
import SqlIcon from '../assets/projects/icon5.png';
import ScanIcon from '../assets/projects/icon6.png';
import TaskIcon from '../assets/projects/task/icon.png';
import LumosIcon from '../assets/projects/lumos/icon.png';
import AduanIcon from '../assets/projects/pengaduan/icon.png';
import project1_ss1 from '../assets/projects/p1_ss1.png';
import project1_ss2 from '../assets/projects/p1_ss2.png';
import project2_ss1 from '../assets/projects/p2_ss1.png';
import project2_ss2 from '../assets/projects/p2_ss2.png';
import project2_ss3 from '../assets/projects/p2_ss3.png';
import fotoB1 from '../assets/projects/belanjaku/foto1.png';
import fotoB2 from '../assets/projects/belanjaku/foto2.png';
import fotoB3 from '../assets/projects/belanjaku/foto3.png';
import fotoB4 from '../assets/projects/belanjaku/foto4.png';
import fotoB5 from '../assets/projects/belanjaku/foto5.png';
import fotoB6 from '../assets/projects/belanjaku/foto6.png';
import fotoB7 from '../assets/projects/belanjaku/foto7.png';
import fotoB8 from '../assets/projects/belanjaku/foto8.png';
import fotoT1 from '../assets/projects/task/foto1.png';
import fotoT2 from '../assets/projects/task/foto2.png';
import fotoT3 from '../assets/projects/task/foto3.png';
import fotoL1 from '../assets/projects/lumos/foto1.png';
import fotoL2 from '../assets/projects/lumos/foto2.png';
import fotoL3 from '../assets/projects/lumos/foto3.png';
import fotoL4 from '../assets/projects/lumos/foto4.png';
import fotoP1 from '../assets/projects/pengaduan/foto1.png';
import fotoP2 from '../assets/projects/pengaduan/foto2.png';
import fotoP3 from '../assets/projects/pengaduan/foto3.png';
import fotoP4 from '../assets/projects/pengaduan/foto4.png';
import fotoP5 from '../assets/projects/pengaduan/foto5.png';
import fotoP6 from '../assets/projects/pengaduan/foto6.png';
import fotoP7 from '../assets/projects/pengaduan/foto7.png';
import fotoP8 from '../assets/projects/pengaduan/foto8.png';
import project4_ss1 from '../assets/projects/p4_ss1.png';
import project5_ss1 from '../assets/projects/p5_ss1.png';
import project6_ss1 from '../assets/projects/p6_ss1.png';

// Icon FA (Font Awesome)
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaLaptopCode,
  FaCode,
  FaGlobe,
  FaJava,     // ikon Java yang benar
  FaLinux,
  FaGitAlt
} from "react-icons/fa";

// Icon SI (Simple Icons)
import {
  SiTailwindcss,
  SiSpringboot,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiVuedotjs,   // ikon Vue yang benar (bukan FaVuejs / SiVuejs)
  SiPhp,
  SiDart,
  SiFlutter,
  SiGo,
  SiC,
  SiCplusplus,
  SiGnubash,
  SiGooglecloud,
  SiBurpsuite,
  SiBugcrowd,
  SiTensorflow,
  SiDatabricks,
  SiKaggle,
  SiLeetcode,
  SiPostgresql
} from "react-icons/si";

// Icon AI
import { AiFillAndroid, AiOutlineGithub } from "react-icons/ai";

// Icon GI
import { GiShield } from "react-icons/gi";

// Impor gambar sertifikat
import DasarJava from "../assets/certificates/sertifikatDasarJava.png";
import Backend from "../assets/certificates/sertifikatBackend.png";
import ArtificialIntelligence from "../assets/certificates/sertifikatAI.png";
import EthicalHacking from "../assets/certificates/sertifikatEH.png";
import Linux from "../assets/certificates/sertifikatLinux.png";
import Android from "../assets/certificates/sertifikatAndroid.png";
import IBM from "../assets/certificates/sertifikatIBM.png";

export const aboutData = {
  // ... data about tetap sama ...
  name: "Setiawan Muhammad",
  college: "Telkom University",
  status: "Student",
  residence: "Surabaya, Indonesia",
  email: "setiawanmuhammad3@gmail.com",
  cv: "/SetiawanMuhammad_CV.pdf",
  title: "About Me",
  subtitle: "Building, Breaking, and Securing",
  greeting: "Hello There!",
  description: "As an Informatics student fueled by curiosity, I'm passionate about Cyber Security, Software Engineer, and Machine Learning. I thrive on exploring new technologies and continuously sharpen my programming skills especially in crafting secure systems and immersive AI experiences.",
  stats: [
    { id: 1, value: 9, label: "TOTAL PROJECTS", description: "Innovative web solutions crafted" },
    { id: 2, value: 7, label: "CERTIFICATES", description: "Professional skill validated" },
    { id: 3, value: 3, label: "YEARS OF EXPERIENCE", description: "Continuous learning journey" },
  ]
};

export const projects = [
  {
    id: 1,
    title: "Ibu Pintar",
    longDescription: "Aplikasi Ibu Pintar adalah platform web full-stack interaktif yang menghadirkan pengalaman informatif dan komunitas bagi para calon ibu dan ibu muda. Dirancang dengan desain responsif dan antarmuka modern, aplikasi ini menawarkan berbagai fitur utama seperti halaman beranda yang dinamis, sistem artikel dua kolom dengan komentar, forum tanya jawab dengan bidan, serta layanan reservasi berbasis formulir. Didukung oleh carousel interaktif, filter kategori, dan elemen visual yang halus, Ibu Pintar tidak hanya menjadi sumber informasi, tapi juga ruang digital yang memberdayakan dan mendukung perjalanan kehamilan dan pengasuhan secara menyeluruh.",
    images: [project1_ss1, project1_ss2],
    keyFeatures: ["Halaman Beranda Dinamis", "Carousel Artikel Terbaru", "Highlight Layanan Unggulan", "Sistem Artikel Dua Kolom", "Komentar Interaktif", "Forum Tanya Jawab dengan Bidan", "Layanan Reservasi Berbasis Formulir", "Filter Kategori Artikel", "Desain Responsif dan Modern"],
    totalTeknologi: 10,
    fiturUtama: 9,
    demoLink: "https://ibupintar.id/",
    githubLink: "https://github.com/awanmh/Ibu-Pintar.git",
    image: BerandaIbuPintar, 
    description: "Aplikasi Web Ibu Pintar untuk informasi dan komunitas ibu muda",
    tags: ["Vue.js", "Vue Router", "Vuex", "Axios", "Node.js","Express.js", "MySQL", "Sequelize", "CSS3", "Git"],
  },
  {
    id: 2,
    title: "WM Jaya",
    longDescription: "WM Jaya adalah aplikasi manajemen toko sederhana yang dibangun menggunakan Flutter, dirancang untuk menangani operasi CRUD (Create, Read, Update, Delete) dasar untuk bisnis ritel kecil.",
    images: [project2_ss1, project2_ss2, project2_ss3],
    // KUNCI PERBAIKAN: Mengubah string panjang menjadi array of strings
    keyFeatures: [
        "Otentikasi pengguna & reset kata sandi",
        "Dasbor utama terpusat",
        "Manajemen produk & kategori dengan QR code",
        "Manajemen pesanan & pembuatan kwitansi",
        "Pelacakan pembelian bahan bakar",
        "Laporan harian, mingguan, bulanan (grafik & tabel)",
        "Pengaturan aplikasi & cadangan ke Google Drive",
        "Dukungan penuh untuk mode offline (SQLite)",
        "Pembuatan & pencetakan PDF",
        "UI responsif untuk Android & iOS",
        "Keamanan data dengan otentikasi lokal"
    ],
    totalTeknologi: 14,
    fiturUtama: 11,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/wm-jaya",
    image: LogoWMJaya, 
    description: "Aplikasi Manajemen Toko berbasis Flutter untuk UMKM.",
    tags: ["Flutter & Dart", "SQLite (sqflite)", "Provider", "Syncfusion Charts & fl_chart", "PDF & Printing", "Google Sign-In", "Google APIs", "QR Flutter & QR Scanner Plus", "Flutter Secure Storage & Local Aut", "GetIt & Injectable", "Flutter Form Builder", "Intl", "Connectivity Plus", "Logger"],
  },
  {
    id: 3,
    title: "BelanjaKu",
    longDescription: "BelanjaKu dirancang lebih dari sekadar platform e-commerce biasa. Inti dari proyek ini adalah arsitektur halaman produk dinamis yang dibangun di atas kerangka kerja modular berbasis data. Sistem ini menggunakan Master Prompt, sebuah sistem variabel terstruktur yang mampu menghasilkan skenario halaman produk yang realistis dan sadar konteks.",
    images: [fotoB1, fotoB2, fotoB3, fotoB4, fotoB5, fotoB6, fotoB7, fotoB8],
    // KUNCI PERBAIKAN: Mengubah string panjang menjadi array of strings
    keyFeatures: [
      "Bukti Sosial & Kepercayaan Pengguna",
      "Peringkat & Ulasan: Agregat bintang + jumlah ulasan",
      "Metrik Kecepatan Penjualan: Indikator popularitas (misal: Terjual 25rb+)",
      "Identitas Penjual Terverifikasi: Nama toko, lokasi, lencana (Official Store, Power Merchant)",
      "Informasi Produk yang Kaya",
      "Hierarki Visual: Galeri gambar/video berkualitas tinggi",
      "Deskripsi Terstruktur: Deskripsi visual seperti mini landing page",
      "Atribut & Spesifikasi: Daftar lengkap untuk mendukung keputusan & pencarian",
      "Mesin Harga & Promosi Berlapis",
      "Tampilan Harga Dinamis: Harga coret + diskon",
      "Promosi Multi-Lapis: Diskon, cashback, voucher, Kombo Hemat, Flash Sale",
      "Gratis Ongkir: Penawaran pengiriman gratis sebagai pendorong utama",
      "Logistik & Opsi Pengiriman Fleksibel",
      "Pilihan Pengiriman: Instan, Same Day, Reguler, Kargo, COD",
      "Transparansi Biaya & Waktu: Informasi jelas tentang ongkir & estimasi tiba",
      "Keterlibatan & Personalisasi Pengguna",
      "Lencana Status Produk: Terbaru, Paling Laris",
      "Notifikasi Penting: Ingatkan Saya untuk price drop alert"
    ],
    totalTeknologi: 12,
    fiturUtama: 18,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/Materi-Dasar-Bug-Bounty/tree/main/script/reconnaissance",
    image: LogoBelanjaku, 
    description: "Aplikasi e‑commerce dengan arsitektur halaman produk yang dinamis dan berbasis data.",
    tags: [
    "Node.js",
    "TypeScript",
    "Express.js",
    "REST API ",
    "JWT",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Tailwind CSS",
    "Zustand ",
    "Next.js",
    "React.js"
    ],
  },
  {
    id: 4,
    title: "Reconnaissance Script",
    longDescription: "RECON v16.0: Framework DAST modular dan stateful berbasis templat, mendukung crawling canggih, validasi sesi, deteksi tech stack, serta logika deteksi kustom untuk riset keamanan dan blue teaming.",
    images: [project4_ss1],
    // KUNCI PERBAIKAN: Mengubah string panjang menjadi array of strings
    keyFeatures: [
    "AI Neural Engine v17: Analisis kontekstual dengan Google Gemini, prediksi path tersembunyi",
    "Hidden Asset Hunter: Rekonstruksi source code dari .js.map, deteksi Broken Link Hijacking",
    "Infrastructure Killer: Cloud bucket enumeration, port scanning ringan, subdomain takeover",
    "API Hunter: Parsing Swagger/OpenAPI & introspeksi GraphQL",
    "Visual Recon: Screenshot otomatis headless",
    "Secret Scanning: Deteksi API Key, Token, kredensial di HTML/JS",
    "Advanced Template Engine: Deteksi kustom YAML/JSON dengan chaining & extraction"
  ],
    totalTeknologi: 11,
    fiturUtama: 7,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/Materi-Dasar-Bug-Bounty/tree/main/script/reconnaissance",
    image: ReconIcon, 
    description: "Tools penilaian keamanan dinamis (DAST) yang modular, stateful, dan berbasis templat.",
    tags: [
    "Python 3.8+",
    "aiohttp",
    "aiodns",
    "aiosqlite",
    "tqdm",
    "pyppeteer",
    "PyYAML",
    "lxml & BeautifulSoup4",
    "google-generativeai",
    "Modular Plugin System",
    "Wordlists & Signatures"
    ],
  },
  {
    id: 5,
    title: "SQL Script",
    longDescription: "SQLiScanner adalah pemindai keamanan multi-thread canggih yang dirancang untuk mendeteksi, mengidentifikasi, dan secara otomatis mengeksploitasi kerentanan SQL Injection (SQLi) kompleks. Berbeda dengan scanner konvensional yang hanya mencari error, tool ini berfokus pada kerentanan Blind SQLi (Boolean-based & Time-based) yang sulit ditemukan, serta secara otomatis membuktikan dampaknya melalui Proof of Concept (PoC) dengan mengekstraksi data sensitif.",
    images: [project5_ss1],
    keyFeatures: [
      "Modular Plugin System: Tambah jenis serangan baru cukup dengan satu file plugin",
      "Hybrid Engine: Fast Scan (multi-thread requests untuk SQLi, SSRF, RCE) & Deep Scan (Selenium Grid untuk DOM XSS)",
      "Containerized Infrastructure: Docker & Docker Compose memisahkan core scanner dan browser nodes",
      "Resilience: Drain Mode & Retry Logic menjaga scanner tetap berjalan meski Selenium crash",
      "AI-Powered Scanning: Payload kontekstual dengan integrasi OpenAI API untuk bypass WAF",
      "Stealth Mode: Rotasi User-Agent, jitter, dan disguise header untuk menghindari deteksi WAF/IPS",
      "Manual Injection (Repeater Mode): Menargetkan endpoint API spesifik tanpa crawling",
      "Selective Scanning: Menjalankan plugin tertentu saja (misal SSRF, CORS)",
      "Safety Limits: Membatasi jumlah halaman agar tidak looping tak terbatas",
      "Arsenal Serangan: >30 plugin termasuk SQLi, NoSQLi, SSTI, RCE, Log4Shell, Prototype Pollution, GraphQL, JWT None, CSRF, SSRF, XSS",
      "Comprehensive Reporting: JSON report terstruktur dengan severity level (CRITICAL–INFO) dan bukti payload"
    ],
    totalTeknologi: 10,
    fiturUtama: 11,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/Materi-Dasar-Bug-Bounty/tree/main/script/sql",
    image: SqlIcon, 
    description: "Tools pemindai multi-thread untuk mendeteksi dan mengeksploitasi kerentanan SQL Injection kompleks.",
    tags: [
      "Python 3.x",
      "Requests",
      "Multi-threading",
      "SSL Verification",
      "Baseline Analysis",
      "Boolean-Based & Time-Based SQLi Detection",
      "DBMS Fingerprinting",
      "Error-Based Exploitation",
      "Interactive CLI Mode",
      "Proxy & Debug Support"
    ],
  },
  {
    id: 6,
    title: "Scanner Script",
    longDescription: "Platform ini merupakan framework pemindaian kerentanan web yang modular dan dapat diperluas, dirancang untuk mendukung skalabilitas serta deteksi mendalam. Berawal dari skrip sederhana, proyek ini berkembang menjadi sistem berbasis plugin dengan arsitektur hibrida (requests + Selenium) dan infrastruktur ter-container menggunakan Docker.",
    images: [project6_ss1],
    // KUNCI PERBAIKAN: Mengubah string panjang menjadi array of strings
    keyFeatures: [
      "Modular Plugin System: Arsitektur berbasis plugin, mudah menambah jenis serangan baru",
      "Hybrid Engine: Fast Scan (requests + multi-threading untuk SQLi, SSRF, RCE) & Deep Scan (Selenium Grid untuk DOM XSS)",
      "Infrastructure-as-Code: Containerisasi penuh dengan Docker & Docker Compose, memisahkan core scanner dan browser nodes",
      "Anti-Stuck & Resilience: Drain Mode & Retry Logic agar tetap berjalan meski Selenium crash",
      "AI-Powered Scanning: Payload kontekstual dengan integrasi OpenAI API untuk bypass WAF",
      "Stealth Mode: Rotasi User-Agent, jitter, dan disguise header untuk menghindari deteksi WAF/IPS",
      "Manual Injection (Repeater Mode): Targetkan endpoint API spesifik tanpa crawling",
      "Selective Scanning: Jalankan plugin tertentu saja (misal SSRF, CORS)",
      "Safety Limits: Batasi jumlah halaman agar tidak looping tak terbatas",
      "Arsenal Serangan: >30 plugin termasuk SQLi, NoSQLi, SSTI, RCE, Log4Shell, Prototype Pollution, GraphQL, JWT None, CSRF, SSRF, XSS, dll",
      "Pelaporan Lengkap: JSON report terstruktur, kategorisasi risiko (CRITICAL–INFO), bukti payload & URL"
    ],
    totalTeknologi: 10,
    fiturUtama: 11,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/Materi-Dasar-Bug-Bounty/tree/main/script/CSRF%20SSRF%20XSS",
    image: ScanIcon, 
    description: "Tools pemindaian kerentanan web modular yang dapat diperluas, dirancang untuk skalabilitas dan deteksi mendalam.",
    tags: [
      "Python 3.8+",
      "Requests",
      "Multi-threading",
      "Selenium Grid",
      "Docker",
      "OpenAI API",
      "Modular Plugin System",
      "Hybrid Engine",
      "Drain Mode & Retry Logic",
      "JSON"
    ],
  },
  {
    id: 7,
    title: "Simple Task Manager",
    longDescription: "Aplikasi manajemen tugas full-stack yang tangguh, dirancang untuk menampilkan penerapan Clean Architecture, skalabilitas, serta praktik Modern DevOps. Proyek ini mengimplementasikan RESTful API dengan Golang dan antarmuka frontend reaktif menggunakan React (Vite).",
    images: [fotoT3, fotoT2, fotoT1],
    keyFeatures: [
      "Authentication: Login/Register dengan JWT dan hashing password menggunakan Bcrypt",
      "Clean Architecture: Pemisahan Domain, Usecase, Repository, dan Delivery untuk maintainability & testability",
      "Task & Subtasks: CRUD lengkap dengan progress tracking (progress bar untuk subtasks)",
      "Real-time Reminders: Sistem alarm berbasis browser untuk tugas yang mendekati deadline",
      "Recurring Tasks (Automation): Scheduler Cron Job di backend untuk tugas berulang (harian/mingguan)",
      "Dockerized: Lingkungan ter-container penuh (Backend, Frontend, Database) dengan Docker Compose & Nginx",
      "API Documentation: Dokumentasi otomatis dengan Swagger/OpenAPI",
      "Unit Testing: Pengujian unit komprehensif untuk business logic menggunakan Testify & Mockery"
    ],
    totalTeknologi: 13,
    fiturUtama: 8,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/simple-task-manager",
    image: TaskIcon, 
    description: "Aplikasi manajemen tugas, menampilkan Clean Architecture, skalabilitas, dan praktik DevOps modern.",
    tags: [
      "Golang 1.24",
      "Gin Gonic",
      "pgx/v5",
      "Robfig Cron v3",
      "Testify & Mockery",
      "Swaggo",
      "React 19 + Vite",
      "TypeScript",
      "CSS Modules / Custom UI",
      "Axios with Interceptors",
      "PostgreSQL 15",
      "Docker",
      "Nginx"
    ],
  },
  {
    id: 8,
    title: "Lumos",
    longDescription: "Lumos adalah sistem algorithmic trading berbasis Python untuk eksekusi presisi tinggi di pasar Forex. Menggunakan arsitektur multi-threaded, bot ini mampu menangani banyak pasangan mata uang secara simultan tanpa latency, serta menyediakan kontrol penuh melalui integrasi Telegram. Strateginya menggabungkan Continuous Pattern Setup (CPS), Structure Break, dan Sniper Entry (konfirmasi candlestick) dengan manajemen risiko adaptif.",
    images: [fotoL1, fotoL2, fotoL3, fotoL4],
    keyFeatures: [
      "Hybrid Strategy: Menggabungkan Trend Following (HTF) dengan Precision Entry (LTF)",
      "3-Layer Filter: Trend (EMA), Momentum (RSI/ADX), dan Price Action (Engulfing/Pinbar)",
      "Adaptive Trailing Stop: Mengunci profit secara dinamis berdasarkan volatilitas (ATR) atau Fixed Points",
      "Smart SL+: Otomatis memindahkan Stop Loss ke area profit (Break Even) setelah target tertentu",
      "Multi-Threading: Setiap pair berjalan di thread CPU terpisah, eksekusi real-time tanpa antrian",
      "Watchdog System: Mendeteksi crash pada thread dan me-restart worker otomatis tanpa mematikan bot utama",
      "Auto-Reconnect: Pemulihan otomatis jika koneksi ke terminal MT5 terputus",
      "Config Hot-Reload: Ubah parameter (Lot, Risk, Pair) secara live tanpa restart program",
      "Interactive Menu: Dashboard status real-time via Telegram",
      "Live Commands: /start, /stop, /pair, /lot langsung dari chat Telegram",
      "Queue System: Sistem antrian pesan anti-lag dengan Non-blocking I/O",
      "Aesthetic Logs: Laporan Entry, Exit, dan PnL yang rapi serta mudah dibaca"
    ],
    totalTeknologi: 11,
    fiturUtama: 12,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/simple-task-manager",
    image: LumosIcon, 
    description: "LUMOS - Enterprise Forex Trading Bot",
    tags: [
      "Python 3.12",
      "MetaTrader5 API",
      "pandas & pandas_ta",
      "requests",
      "Multi-threading",
      "Watchdog System & Auto-Reconnect",
      "python-telegram-bot",
      "Config Hot-Reload",
      "Aesthetic Logs",
      "Windows OS",
      "VPS Support",
    ],
  },
  {
    id: 9,
    title: "Pengaduan RT-RW",
    longDescription: "Aplikasi Pengaduan RT-RW adalah platform web untuk memudahkan warga melaporkan masalah kepada Ketua RT.",
    images: [fotoP1, fotoP2, fotoP4, fotoP5, fotoP3, fotoP6, fotoP7, fotoP8],
    keyFeatures: [
      "Authentication: Registrasi & login untuk warga dan Ketua RT",
      "Role Management: Pemilihan peran (Warga / RT) saat registrasi",
      "Complaint Management (Warga): Buat, lihat, edit, hapus pengaduan pribadi dengan status & komentar",
      "Complaint Management (RT): Dashboard ringkasan, daftar semua pengaduan, update status, komentar, edit & hapus",
      "Category Management (RT): Tambah, edit, dan hapus kategori pengaduan (contoh: Jalan Rusak, Sampah, Keamanan)",
      "Comment System: Warga dan RT dapat menambahkan komentar pada setiap pengaduan",
      "Responsive UI: Antarmuka modern berbasis Tailwind CSS, optimal di berbagai perangkat",
      "Performance Optimization: Cache & job queue untuk peningkatan kinerja aplikasi (opsional)"
    ],
    totalTeknologi: 14,
    fiturUtama: 8,
    demoLink: "#",
    githubLink: "https://github.com/awanmh/simple-task-manager",
    image: AduanIcon, 
    description: "Aplikasi Pengaduan web untuk memudahkan warga melaporkan masalah kepada Ketua RT",
    tags: [
      "PHP ≥ 8.2",
      "Laravel v12.x",
      "Laravel Breeze (Auth Scaffolding)",
      "MySQL ≥ 8.0",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "Composer",
      "Node.js & npm/yarn",
      "Apache/Nginx",
      "Mailhog (Testing Email)",
      "Storage Link",
      "Artisan CLI",
    ],
  },
];

export const certificates = [
  // ... data sertifikat tetap sama ...
  { id: 1, name: "Sertifikat Dasar Pemrograman Java", image: DasarJava },
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
  { id: 5, name: "Sertifikat Mastering Linux", image: Linux },
  { id: 6, name: "Sertifikat Belajar Android Development", image: Android },
  { id: 7, name: "Code Generation and Optimization Using IBM Granite", image: IBM },
];

export const techStack = [
  // 💻 Pemrograman & Framework
  { id: 1, name: 'HTML5', icon: <FaHtml5 size={48} /> },
  { id: 2, name: 'CSS3', icon: <FaCss3Alt size={48} /> },
  { id: 3, name: 'JavaScript', icon: <FaJsSquare size={48} /> },
  { id: 4, name: 'TypeScript', icon: <SiTypescript size={48} /> },
  { id: 5, name: 'Next.js', icon: <SiNextdotjs size={48} /> },
  { id: 6, name: 'React.js', icon: <FaReact size={48} /> },
  { id: 7, name: 'Vue.js', icon: <SiVuedotjs size={48} /> },
  { id: 8, name: 'Node.js', icon: <FaNodeJs size={48} /> },
  { id: 9, name: 'Express.js', icon: <SiExpress size={48} /> },
  { id: 10, name: 'Laravel', icon: <SiLaravel size={48} /> },
  { id: 11, name: 'Spring Boot', icon: <SiSpringboot size={48} /> },
  { id: 12, name: 'Flutter', icon: <SiFlutter size={48} /> },
  { id: 13, name: 'Dart', icon: <SiDart size={48} /> },
  { id: 14, name: 'PHP', icon: <SiPhp size={48} /> },
  { id: 15, name: 'Python', icon: <FaPython size={48} /> },
  { id: 16, name: 'Java', icon: <FaJava size={48} /> },
  { id: 17, name: 'Go', icon: <SiGo size={48} /> },
  { id: 18, name: 'C', icon: <SiC size={48} /> },
  { id: 19, name: 'C++', icon: <SiCplusplus size={48} /> },
  { id: 20, name: 'Shell Scripting', icon: <SiGnubash size={48} /> },
  { id: 21, name: 'MySQL', icon: <SiMysql size={48} /> },
  { id: 22, name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },

  // ☁️ Cloud & Sistem
  { id: 23, name: 'MongoDB', icon: <SiMongodb size={48} /> },
  { id: 24, name: 'Linux', icon: <FaLinux size={48} /> },
  { id: 25, name: 'Git', icon: <FaGitAlt size={48} /> },
  { id: 26, name: 'GitHub', icon: <AiOutlineGithub size={48} /> },
  { id: 27, name: 'Figma', icon: <FaFigma size={48} /> },

  { id: 28, name: 'Burp Suite', icon: <SiBurpsuite size={48} /> },

  { id: 29, name: 'kaggle', icon: <SiKaggle size={48} /> },

  { id: 30, name: 'PostgreSQL', icon: <SiPostgresql size={48} /> },
];
