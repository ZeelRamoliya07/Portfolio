export const BIO = {
  name: "Ramoliya Zeel Hirenbhai",
  avatar: "/profile.jpg", // Place your photo named profile.jpg inside the public/ folder
  title: "Aspiring AI Engineer",
  tagline: "Bachelor of Technology in Artificial Intelligence @ Sardar Vallabhbhai National Institute of Technology, Surat",
  contact: {
    email: "zeelspeaks@gmail.com",
    phone: "+91-8980377968",
    github: "https://github.com/ZeelRamoliya07",
    linkedin: "https://www.linkedin.com/in/zeel-ramoliya",
  },
  profile: "B.Tech Artificial Intelligence student at SVNIT Surat with a strong interest in artificial intelligence, emerging technologies, and technical problem-solving. I enjoy exploring how AI systems work and communicating complex ideas in a clear and accessible way. Seeking opportunities to strengthen my technical, research, and writing abilities while building toward a career as an AI Engineer.",
  careerObjective: "B.Tech Artificial Intelligence student at SVNIT Surat with a strong interest in artificial intelligence, emerging technologies, and technical problem-solving. I enjoy exploring how AI systems work and communicating complex ideas in a clear and accessible way. Seeking opportunities to strengthen my technical, research, and writing abilities while building toward a career as an AI Engineer.",
  areasOfInterest: [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Structures & Algorithms"
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

export const SKILLS = [
  { name: "C", category: "Programming Languages", score: 85 },
  { name: "C++", category: "Programming Languages", score: 90 },
  { name: "Python", category: "Programming Languages", score: 92 },
  { name: "MySQL", category: "Databases", score: 85 },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech, Artificial Intelligence",
    institute: "Sardar Vallabhbhai National Institute of Technology, Surat",
    period: {
      start: "2024",
      end: "2028",
    },
    grade: "CGPA: 7.86 (Present)",
    details: []
  }
] as const;

export const ACHIEVEMENTS = [
  "JEE Advanced 2024: All India Rank 14603",
  "JEE Main 2024: 99.35 Percentile, All India Rank 10398"
] as const;

export const RESPONSIBILITIES = [
  { title: "Executive", organization: "ACM Student Chapter, NIT Surat", period: "Sept 2025 - Present" },
  { title: "Co-Head", organization: "Mindbend, NIT Surat", period: "Oct 2025 - Present" }
] as const;

export const PROJECTS = [
  {
    title: "Reward Poisoning Detection in RLHF",
    desc: "Exploring the problem of poisoned or manipulated preference data in Reinforcement Learning from Human Feedback (RLHF).",
    role: "Academic Project",
    status: "Ongoing",
    live: "",
    repo: "",
    tech: ["RLHF", "Reinforcement Learning", "AI Safety", "Python"],
    bullets: [
      "Exploring the problem of poisoned or manipulated preference data in Reinforcement Learning from Human Feedback (RLHF).",
      "Investigating approaches for detecting potential poisoning and understanding its impact on model behavior.",
      "Analyzing vulnerabilities in RLHF systems and developing defense mechanisms against adversarial attacks on preference data."
    ]
  },
  {
    title: "Clinical-E2: Explainable EEG-to-Emotion Reasoning",
    desc: "Exploring explainability and reasoning approaches for EEG-based emotion recognition.",
    role: "Academic Project",
    status: "Ongoing",
    live: "",
    repo: "",
    tech: ["Explainable AI", "EEG", "Deep Learning", "Python"],
    bullets: [
      "Exploring explainability and reasoning approaches for EEG-based emotion recognition.",
      "Studying how AI predictions can be made more interpretable and clinically meaningful.",
      "Implementing interpretable ML techniques to generate human-readable explanations for emotion classification from brain signals."
    ]
  },
  {
    title: "Semi-Supervised Learning for Multi-Label Cardiovascular Disease Prediction",
    desc: "Exploring semi-supervised learning for predicting multiple cardiovascular conditions from clinical data.",
    role: "Academic Project",
    status: "Ongoing",
    live: "",
    repo: "",
    tech: ["Semi-Supervised Learning", "Machine Learning", "Healthcare AI", "Python"],
    bullets: [
      "Exploring semi-supervised learning for predicting multiple cardiovascular conditions from clinical data.",
      "Investigating challenges involved in multi-label prediction and learning from partially labeled datasets.",
      "Developing robust models that leverage unlabeled data to improve prediction accuracy for rare cardiovascular disease combinations."
    ]
  },
  {
    title: "DineEase – Restaurant Management System",
    desc: "Built the front-end for a restaurant management platform using HTML, Tailwind CSS, and JavaScript on top of a Django backend.",
    role: "Frontend Developer (Group Project)",
    status: "Completed",
    live: "",
    repo: "https://github.com/ZeelRamoliya07/DineEase",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Django", "Render"],
    bullets: [
      "Built the front-end for a restaurant management platform using HTML, Tailwind CSS, and JavaScript on top of a Django backend, covering bookings, orders, and customer ratings.",
      "Designed responsive UI templates and integrated them with Django views to support end-to-end restaurant operations.",
      "Collaborated with teammates using Git/GitHub and deployed the application on Render."
    ]
  }
] as const;

