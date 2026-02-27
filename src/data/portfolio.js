// Portfolio data — engineering narrative schema
// This file is the CMS. No component changes needed to add a project.

// Project images
import LogoWMJaya from '../assets/projects/WM_Jaya/icon2.png';
import LogoBelanjaku from '../assets/projects/belanjaku/icon3.png';
import TaskIcon from '../assets/projects/task/icon.png';
import LumosIcon from '../assets/projects/lumos/icon.png';
import AduanIcon from '../assets/projects/pengaduan/icon.png';
import project2_ss1 from '../assets/projects/WM_Jaya/p2_ss1.png';
import project2_ss2 from '../assets/projects/WM_Jaya/p2_ss2.png';
import project2_ss3 from '../assets/projects/WM_Jaya/p2_ss3.png';
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
import logoAK from '../assets/projects/AdminKilas/logo.png';
import pAK1 from '../assets/projects/AdminKilas/pic1.png';
import pAK2 from '../assets/projects/AdminKilas/pic2.png';
import pAK3 from '../assets/projects/AdminKilas/pic3.png';
import pAK4 from '../assets/projects/AdminKilas/pic4.png';
import pAK5 from '../assets/projects/AdminKilas/pic5.png';
import pAK6 from '../assets/projects/AdminKilas/pic6.png';
import logoAurix from '../assets/projects/Aurix/logo.jpg';
import logoMM from '../assets/projects/MoneyMaker/logo.png';
import pMM1 from '../assets/projects/MoneyMaker/pic1.png';
import logoPentara from '../assets/projects/Pentara/logoPentera.jpg';
import pP1 from '../assets/projects/Pentara/step1.png';
import pP2 from '../assets/projects/Pentara/step2.png';
import pP3 from '../assets/projects/Pentara/step3.png';
import pP4 from '../assets/projects/Pentara/step4.png';
import pP5 from '../assets/projects/Pentara/step5.png';
import pP6 from '../assets/projects/Pentara/step6.png';
import pP7 from '../assets/projects/Pentara/step7.png';
import logoVeritas from '../assets/projects/Veritas/logo.png';
import pV1 from '../assets/projects/Veritas/pic1.png';
import pV2 from '../assets/projects/Veritas/pic2.png';
import logoPB from '../assets/projects/profile_business/logo.png';
import pPB1 from '../assets/projects/profile_business/pic1.png';
import pPB2 from '../assets/projects/profile_business/pic2.png';
import pPB3 from '../assets/projects/profile_business/pic3.png';
import pPB4 from '../assets/projects/profile_business/pic4.png';
import logoSC from '../assets/projects/sentiment_core/logo.png';
import fSC1 from '../assets/projects/sentiment_core/foto1.png';
import fSC2 from '../assets/projects/sentiment_core/foto2.png';
import logoSS from '../assets/projects/serenity_spa/logo.png';
import pSS1 from '../assets/projects/serenity_spa/pic1.png';
import pSS2 from '../assets/projects/serenity_spa/pic2.png';
import pSS3 from '../assets/projects/serenity_spa/pic3.png';
import pSS4 from '../assets/projects/serenity_spa/pic4.png';
import pSS5 from '../assets/projects/serenity_spa/pic5.png';
import pSS6 from '../assets/projects/serenity_spa/pic6.png';
import pSS7 from '../assets/projects/serenity_spa/pic7.png';

// Certificates
import DasarJava from '../assets/certificates/sertifikatDasarJava.png';
import Backend from '../assets/certificates/sertifikatBackend.png';
import ArtificialIntelligence from '../assets/certificates/sertifikatAI.png';
import EthicalHacking from '../assets/certificates/sertifikatEH.png';
import Linux from '../assets/certificates/sertifikatLinux.png';
import Android from '../assets/certificates/sertifikatAndroid.png';
import IBM from '../assets/certificates/sertifikatIBM.png';

// ─── Projects ────────────────────────────────────────────
export const projects = [
  {
    id: 'belanjaku',
    title: 'BelanjaKu',
    category: 'fullstack',
    year: '2025',
    problem:
      'E-commerce product pages are static templates that cannot adapt to product context or user behavior.',
    challenge:
      'Building a modular page architecture that generates realistic, context-aware product pages without manual configuration per SKU.',
    decision:
      'Designed a Master Prompt system with structured variables that procedurally assemble product page sections based on product metadata.',
    impact:
      '18 dynamic features across 12 integrated technologies. Zero manual page creation per product.',
    image: LogoBelanjaku,
    images: [fotoB1, fotoB2, fotoB3, fotoB4, fotoB5, fotoB6, fotoB7, fotoB8],
    tags: [
      'Node.js',
      'TypeScript',
      'Express.js',
      'Next.js',
      'React',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Tailwind CSS',
      'Zustand',
      'JWT',
      'REST API',
    ],
    demoLink: '#',
    githubLink: 'https://github.com/awanmh/BelanjaKu',
  },
  {
    id: 'task-manager',
    title: 'Simple Task Manager',
    category: 'fullstack',
    year: '2025',
    problem:
      'Task management tools lack Clean Architecture enforcement, making codebases difficult to test and scale.',
    challenge:
      'Implementing domain-driven design in Go with strict separation of concerns, while maintaining a reactive frontend.',
    decision:
      'Adopted Clean Architecture with Golang backend (Gin, pgx, Cron) and React frontend. Dockerized entire stack with Nginx reverse proxy.',
    impact:
      'Full CRUD with subtask tracking, recurring tasks via Cron, JWT auth, and comprehensive unit testing with Testify.',
    image: TaskIcon,
    images: [fotoT3, fotoT2, fotoT1],
    tags: [
      'Go',
      'Gin',
      'PostgreSQL',
      'React',
      'TypeScript',
      'Docker',
      'Nginx',
      'Swagger',
      'Testify',
      'Cron',
    ],
    demoLink: '#',
    githubLink: 'https://github.com/awanmh/simple-task-manager',
  },
  {
    id: 'lumos',
    title: 'Lumos',
    category: 'ml',
    year: '2024',
    problem:
      'Manual forex trading cannot match the speed and consistency of algorithmic execution across multiple currency pairs.',
    challenge:
      'Building a multi-threaded trading bot with real-time signal processing, adaptive risk management, and remote control.',
    decision:
      'Engineered a Python bot using MetaTrader5 API with per-pair threading, watchdog recovery, and Telegram command interface.',
    impact:
      'Multi-pair simultaneous execution, auto-reconnect, config hot-reload, and adaptive trailing stop based on ATR volatility.',
    image: LumosIcon,
    images: [fotoL1, fotoL2, fotoL3, fotoL4],
    tags: ['Python', 'MetaTrader5', 'pandas', 'Threading', 'Telegram Bot', 'Technical Analysis'],
    demoLink: '#',
    githubLink: 'https://github.com/awanmh/Lumos',
  },
  {
    id: 'wm-jaya',
    title: 'WM Jaya',
    category: 'mobile',
    year: '2024',
    problem:
      'Small retail businesses lack affordable, offline-capable inventory and sales management tools.',
    challenge:
      'Building a fully offline-first mobile application with QR code scanning, PDF generation, and Google Drive backup.',
    decision:
      'Built with Flutter using SQLite for local persistence, Provider for state management, and Google Sign-In for cloud backup.',
    impact:
      '14 technologies integrated. Full CRUD, QR scanning, reporting with charts, PDF receipts, and offline-first architecture.',
    image: LogoWMJaya,
    images: [project2_ss1, project2_ss2, project2_ss3],
    tags: ['Flutter', 'Dart', 'SQLite', 'Provider', 'Google APIs', 'QR Scanner', 'PDF Generation'],
    demoLink: '#',
    githubLink: 'https://github.com/awanmh/wm-jaya',
  },
  {
    id: 'pengaduan',
    title: 'Pengaduan RT-RW',
    category: 'fullstack',
    year: '2024',
    problem:
      'Community complaint systems are slow and opaque: residents lack visibility into complaint status and resolution progress.',
    challenge:
      'Building a role-based complaint management platform with separate interfaces for residents and RT administrators.',
    decision:
      'Used Laravel with Breeze auth scaffolding, Blade templates, and MySQL. Implemented role-based access control at registration.',
    impact:
      'Full complaint lifecycle management with status tracking, category management, and comment system for 2 user roles.',
    image: AduanIcon,
    images: [fotoP1, fotoP2, fotoP4, fotoP5, fotoP3, fotoP6, fotoP7, fotoP8],
    tags: ['PHP', 'Laravel', 'MySQL', 'Blade', 'Tailwind CSS', 'Alpine.js', 'Vite'],
    demoLink: '#',
    githubLink: 'https://github.com/awanmh/PengaduanMasyarakatRT-RW',
  },
  {
    id: 'adminkilas',
    title: 'AdminKilas',
    category: 'fullstack',
    year: '2024',
    problem: 'Administrative panel needed for managing business operations efficiently.',
    longDescription: 'Admin dashboard for business operations management.',
    image: logoAK,
    images: [pAK1, pAK2, pAK3, pAK4, pAK5, pAK6],
    tags: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'aurix',
    title: 'Aurix',
    category: 'ml',
    year: '2025',
    problem:
      'Crypto arbitrage detection requires real-time multi-exchange data aggregation and low-latency decision making.',
    longDescription: 'Real-time crypto arbitrage detection and analysis system.',
    image: logoAurix,
    images: [],
    tags: ['Python', 'Go', 'Redis', 'Docker'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'moneymaker',
    title: 'MoneyMaker',
    category: 'ml',
    year: '2024',
    problem:
      'Automated trading requires reliable order execution with real-time PnL tracking and risk controls.',
    longDescription: 'Trading bot with automated execution and portfolio management.',
    image: logoMM,
    images: [pMM1],
    tags: ['Go', 'REST API'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'pentara',
    title: 'Pentara',
    category: 'security',
    year: '2024',
    problem:
      'Penetration testing workflows are fragmented across multiple tools without unified reporting.',
    longDescription: 'Penetration testing automation and reporting framework.',
    image: logoPentara,
    images: [pP1, pP2, pP3, pP4, pP5, pP6, pP7],
    tags: ['Python', 'Shell', 'Linux', 'Security'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'veritas',
    title: 'Veritas',
    category: 'security',
    year: '2024',
    problem:
      'Vulnerability assessment reports lack structured, actionable formatting for remediation teams.',
    longDescription: 'Vulnerability assessment and structured reporting tool.',
    image: logoVeritas,
    images: [pV1, pV2],
    tags: ['Python', 'Security', 'OWASP'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'profile-business',
    title: 'Profile Business',
    category: 'fullstack',
    year: '2024',
    problem: 'Small businesses need professional web presence without complex CMS overhead.',
    longDescription: 'Professional business profile website.',
    image: logoPB,
    images: [pPB1, pPB2, pPB3, pPB4],
    tags: ['React', 'Tailwind CSS', 'Vite'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'sentiment-core',
    title: 'Sentiment Core',
    category: 'ml',
    year: '2024',
    problem:
      'Social media sentiment analysis lacks real-time processing and visual feedback for decision makers.',
    longDescription: 'Sentiment analysis engine for social media data.',
    image: logoSC,
    images: [fSC1, fSC2],
    tags: ['Python', 'TensorFlow', 'NLP'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    id: 'serenity-spa',
    title: 'Serenity Spa',
    category: 'fullstack',
    year: '2024',
    problem:
      'Spa businesses need online booking systems with appointment management and service catalog.',
    longDescription: 'Spa management and booking platform.',
    image: logoSS,
    images: [pSS1, pSS2, pSS3, pSS4, pSS5, pSS6, pSS7],
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demoLink: '#',
    githubLink: '#',
  },
];

// ─── Certificates ────────────────────────────────────────
export const certificates = [
  { id: 1, name: 'Dasar Pemrograman Java', issuer: 'Dicoding', year: '2023', image: DasarJava },
  {
    id: 2,
    name: 'Backend Development with JavaScript',
    issuer: 'Dicoding',
    year: '2023',
    image: Backend,
  },
  {
    id: 3,
    name: 'Dasar Kecerdasan Buatan',
    issuer: 'Dicoding',
    year: '2024',
    image: ArtificialIntelligence,
  },
  {
    id: 4,
    name: 'Ethical Hacking from Scratch',
    issuer: 'Udemy',
    year: '2024',
    image: EthicalHacking,
  },
  { id: 5, name: 'Mastering Linux', issuer: 'Udemy', year: '2023', image: Linux },
  { id: 6, name: 'Android Development', issuer: 'Dicoding', year: '2023', image: Android },
  { id: 7, name: 'Code Generation with IBM Granite', issuer: 'IBM', year: '2024', image: IBM },
];

// ─── Technologies (Tech Stack) ────────────────────────
export const technologies = [
  {
    category: 'Languages & Frameworks',
    skills: [
      'JavaScript/TypeScript',
      'Python',
      'Go',
      'PHP',
      'React',
      'Next.js',
      'Node.js',
      'Express.js',
      'Laravel',
      'Flutter',
    ],
  },
  {
    category: 'Infrastructure & Databases',
    skills: [
      'Docker',
      'Linux (Debian/Ubuntu)',
      'Nginx',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'SQLite',
    ],
  },
  {
    category: 'Security & Machine Learning',
    skills: [
      'Penetration Testing',
      'OWASP Top 10',
      'TensorFlow',
      'Pandas',
      'Reverse Engineering (Basic)',
      'Algorithmic Trading (MetaTrader5)',
    ],
  },
];
