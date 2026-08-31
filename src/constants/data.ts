export const BIO = {
  name: "Ramoliya Zeel Hirenbhai",
  title: "Aspiring AI Engineer",
  tagline: "B.Tech in Artificial Intelligence @ SVNIT Surat",
  contact: {
    email: "zeelspeaks@gmail.com",
    phone: "+91-8980377968",
    github: "https://github.com/ZeelRamoliya07",
    linkedin: "https://www.linkedin.com/in/zeel-ramoliya-b82b992aa/",
  },
  careerObjective: "Aspiring AI Engineer aiming to apply machine learning, deep learning, and software engineering skills to solve real-world problems, while continuously learning and contributing to impactful technological innovations.",
  areasOfInterest: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Software Engineering"
  ],
  keyCourses: {
    coreCS: [
      "Data Structures & Algorithms",
      "Design & Analysis of Algorithms",
      "Computer Organization & Architecture",
      "Operating Systems",
      "Computer Networks",
      "Database Management Systems",
      "Computer Science Fundamentals"
    ],
    aiML: [
      "Artificial Intelligence",
      "Introduction to Machine Learning"
    ]
  }
};

export const PORTFOLIO_TABS = ["projects", "achievements", "certificates"] as const;
export type PortfolioTab = (typeof PORTFOLIO_TABS)[number];

export const ABOUT_TABS = ["Experience", "Education"] as const;
export type AboutTab = (typeof ABOUT_TABS)[number];

export const SKILLS = [
  { name: "C", category: "Languages", score: 85 },
  { name: "C++", category: "Languages", score: 90 },
  { name: "Python", category: "Languages", score: 95 },
  { name: "JavaScript", category: "Languages", score: 80 },
  { name: "TypeScript", category: "Languages", score: 75 },
  { name: "HTML", category: "Frontend", score: 95 },
  { name: "CSS", category: "Frontend", score: 85 },
  { name: "Tailwind CSS", category: "Frontend", score: 90 },
  { name: "React", category: "Frontend", score: 80 },
  { name: "NextJS", category: "Frontend", score: 75 },
  { name: "Django", category: "Backend", score: 70 },
  { name: "MySQL", category: "Databases", score: 85 },
  { name: "PostgreSQL", category: "Databases", score: 75 },
  { name: "SQLite", category: "Databases", score: 80 },
  { name: "Firebase", category: "Backend", score: 70 },
  { name: "Git", category: "Tools", score: 88 },
  { name: "GitHub", category: "Tools", score: 90 },
  { name: "Docker", category: "Tools", score: 65 },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institute: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
    location: "Surat, India",
    period: {
      start: "2024",
      end: "2028",
    },
    grade: "CGPA: 7.86",
    details: [
      "JEE Advanced 2024: All India Rank 14603",
      "JEE Main 2024: 99.35 Percentile, All India Rank 10398"
    ]
  }
] as const;

export const EXPERIENCE = [
  {
    title: "Software Engineer Intern",
    company: "Fastrac",
    type: "Internship",
    location: "Remote / India",
    period: {
      start: "May 2025",
      end: "July 2025",
    },
    bullets: [
      "Built a production-grade WooCommerce shipping plugin supporting multi-delivery workflows and real-time rate computation.",
      "Automated shipment creation, tracking, and cancellation through integration with 3+ external APIs, removing manual operational dependency.",
      "Reduced checkout latency and admin handling time via bulk actions, rate comparison, and caching optimizations."
    ],
    tech: ["PHP", "WooCommerce Plugin Development", "REST APIs"], 
  },
] as const;

export const PROJECTS = [
  {
    title: "DineEase",
    desc: "A full-fledged restaurant management platform, covering bookings, orders, and a customer ratings system.",
    role: "Frontend Developer (Group Project)",
    live: "https://dineease-3ky2.onrender.com/",
    repo: "https://github.com/manavdhamecha77/Hotel-Management",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Django", "SQLite", "Render"],
    bullets: [
      "Designed and implemented responsive, user-friendly UI templates and integrated them with Django views to support end-to-end restaurant operations.",
      "Collaborated with teammates using Git/GitHub for version control and deployed the final application on Render."
    ]
  },
  {
    title: "Prometheus",
    desc: "AI-powered intelligence platform for smart energy grid management.",
    role: "Core Developer",
    live: "",
    repo: "https://github.com/Purv-Kabaria/Prometheus-Adani",
    tech: ["NextJS", "TypeScript", "Python", "Pytorch", "Ollama", "Docker", "SQLite"],
    bullets: [
      "Winner of PowerMind 2026, organized by Adani Group & CDC at NIT Surat, competing against 180+ participants.",
      "Built an AI agent network to coordinate grid load balancing and predict outages."
    ]
  },
  {
    title: "Incognito Chat",
    desc: "Ephemeral private self-destructive chat rooms.",
    role: "Fullstack Developer",
    live: "https://incognito-chat-iota.vercel.app/",
    repo: "https://github.com/manavdhamecha77/Incognito-Chat",
    tech: ["NextJS", "React", "TypeScript", "Tailwind CSS", "Elysia.js", "Upstash Redis", "Zod"],
    bullets: [
      "Designed a real-time web-socket based messaging system that automatically deletes room data after inactivity."
    ]
  },
  {
    title: "Market Microstructure",
    desc: "HFT crypto analytics with AI-based market surveillance.",
    role: "Developer",
    live: "https://trading-hub.live/",
    repo: "https://github.com/Arshad-13/genesis2025",
    tech: ["Python", "FastAPI", "C++", "AWS", "Docker", "DeepLOB CNN Model", "Postgresql"],
    bullets: [
      "Implemented a high-frequency trading analysis dashboard evaluating order book dynamics and depth changes."
    ]
  }
] as const;

export const ACHIEVEMENTS = [
  {
    title: "PowerMind Hackathon 2026 Winner",
    desc: "Winner of PowerMind 2026, organized by Adani Group & CDC at NIT Surat, competing against 180+ participants.",
  },
  {
    title: "Echelon 2026 Winner",
    desc: "Winner of Echelon 2026, a national 24-hour hackathon organized by ISEA & ACM at NIT Surat, competing against 40+ teams.",
  },
  {
    title: "AACL-IJCNLP 2025 Co-Author",
    desc: "Co-authored research papers on Multilingual Grammatical Error Correction in Indic languages and Hindi Word Grouping for Indic NLP at AACL-IJCNLP 2025, IIT Bombay.",
  },
  {
    title: "Genesis 2026 Winner",
    desc: "Winner of Genesis 2026, organized by ACM × CEV × GDSC at NIT Surat.",
  },
] as const;

export const CERTIFICATES = [
  {
    title: "Web Wonders 3.0 Winner",
    link: "https://certificate.givemycertificate.com/c/943fb066-852f-45d4-b302-f4860cea273a", 
    provider: "Nexus NIT Surat",
    year: 2025,
  },
  {
    title: "Python Essentials",
    link: "https://www.credly.com/badges/94ef0ac6-3d2e-4d67-a1d0-91c6ebe0820d",
    provider: "Cisco Networking Academy",
    year: 2025,
  },
  {
    title: "Introduction to Cybersecurity",
    link: "https://www.credly.com/badges/c89f139a-dcdc-4b90-9083-08537cdb1c2c",
    provider: "Cisco Networking Academy",
    year: 2025,
  },
] as const;
