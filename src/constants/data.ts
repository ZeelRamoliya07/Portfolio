export const BIO = {
  name: "Ramoliya Zeel Hirenbhai",
  title: "Aspiring AI Engineer",
  tagline: "Bachelor of Technology in Artificial Intelligence @ Sardar Vallabhbhai National Institute of Technology, Surat",
  contact: {
    email: "zeelspeaks@gmail.com",
    phone: "+91-8980377968",
    github: "https://github.com/ZeelRamoliya07", // Default placeholder from context
    linkedin: "https://www.linkedin.com/in/zeel-ramoliya-b82b992aa/", // Default placeholder from context
  },
  careerObjective: "Aspiring AI Engineer aiming to apply machine learning, deep learning, and software engineering skills to solve real-world problems, while continuously learning and contributing to impactful technological innovations.",
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
    grade: "CGPA: 7.86",
    details: [
      "JEE Advanced 2024: All India Rank 14603",
      "JEE Main 2024: 99.35 Percentile, All India Rank 10398"
    ]
  }
] as const;

export const PROJECTS = [
  {
    title: "DineEase",
    desc: "Built the front-end for a full-fledged restaurant management platform covering bookings, orders, and a customer ratings system.",
    role: "Frontend Developer (Group Project)",
    live: "", // Demo/Repo link placeholders
    repo: "https://github.com/ZeelRamoliya07/DineEase", 
    tech: ["HTML", "Tailwind CSS", "JavaScript", "Django"],
    bullets: [
      "Designed and implemented responsive, user-friendly UI templates and integrated them with Django views to support end-to-end restaurant operations.",
      "Collaborated with teammates using Git/GitHub for version control and deployed the final application on Render."
    ]
  }
] as const;
