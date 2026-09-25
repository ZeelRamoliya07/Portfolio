export const BIO = {
  name: "RAMOLIYA ZEEL HIRENBHAI",
  avatar: "/profile.jpg", // Place your photo named profile.jpg inside the public/ folder
  title: "B.Tech in Artificial Intelligence",
  tagline: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
  contact: {
    email: "zeelspeaks@gmail.com",
    phone: "+91-8980377968",
    github: "https://github.com/ZeelRamoliya07",
    linkedin: "https://www.linkedin.com/in/zeel-ramoliya",
    location: "Surat, India",
  },
  profile: "B.Tech Artificial Intelligence student at SVNIT Surat with a strong foundation in machine learning, software engineering, FastAPI, React, and data systems.",
  careerObjective: "B.Tech Artificial Intelligence student at SVNIT Surat passionate about building scalable AI/ML pipelines, full-stack web applications, and backend systems. Experienced with FastAPI, React, machine learning model evaluation, and automated testing.",
  areasOfInterest: [
    "Artificial Intelligence",
    "Machine Learning",
    "Full-Stack Web Development",
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
  // Languages
  { name: "C", category: "Languages", score: 85 },
  { name: "C++", category: "Languages", score: 88 },
  { name: "Python", category: "Languages", score: 95 },
  { name: "JavaScript", category: "Languages", score: 85 },
  // ML/AI
  { name: "NumPy", category: "ML/AI", score: 90 },
  { name: "Pandas", category: "ML/AI", score: 90 },
  { name: "Scikit-learn", category: "ML/AI", score: 88 },
  { name: "Matplotlib", category: "ML/AI", score: 85 },
  { name: "Seaborn", category: "ML/AI", score: 85 },
  { name: "Jupyter Notebook", category: "ML/AI", score: 90 },
  // Backend/Data
  { name: "FastAPI", category: "Backend/Data", score: 90 },
  { name: "MySQL", category: "Backend/Data", score: 85 },
  { name: "REST APIs", category: "Backend/Data", score: 92 },
  { name: "Pydantic", category: "Backend/Data", score: 88 },
  // Systems/Tools
  { name: "React.js", category: "Systems/Tools", score: 88 },
  { name: "Tailwind CSS", category: "Systems/Tools", score: 90 },
  { name: "AWS", category: "Systems/Tools", score: 80 },
  { name: "Git & GitHub", category: "Systems/Tools", score: 90 },
  { name: "Pytest", category: "Systems/Tools", score: 85 },
  { name: "Playwright", category: "Systems/Tools", score: 82 },
] as const;

export const EDUCATION = [
  {
    degree: "B.Tech in Artificial Intelligence",
    institute: "Sardar Vallabhbhai National Institute of Technology (SVNIT), Surat",
    period: {
      start: "2024",
      end: "2028",
    },
    grade: "CGPA: 7.86 (Present)",
    details: [
      "Relevant Coursework: Data Structures & Algorithms, Design & Analysis of Algorithms, Computer Organization & Architecture, Operating Systems, Computer Networks, Database Management Systems, Computer Science Fundamentals, Artificial Intelligence, Introduction to Machine Learning."
    ]
  }
] as const;

export const ACHIEVEMENTS = [
  "JEE Advanced 2024: All India Rank 14603",
  "JEE Main 2024: 99.35 Percentile, All India Rank 10398"
] as const;

export const RESPONSIBILITIES = [
  { title: "Executive", organization: "ACM Student Chapter, NIT Surat", period: "Sept 2025 – Present" },
  { title: "Co-Head", organization: "Mindbend, NIT Surat", period: "Oct 2025 – Present" }
] as const;

export const PROJECTS = [
  {
    title: "ServiceHub - Business Management SaaS Platform",
    desc: "A full-stack business management SaaS platform managing workflow from customer service requests to employee assignment and completion.",
    role: "Full Stack Developer",
    status: "Completed",
    live: "",
    repo: "https://github.com/ZeelRamoliya07",
    tech: ["React.js", "Tailwind CSS", "FastAPI", "MySQL", "REST API", "AWS", "Pytest", "Playwright"],
    bullets: [
      "Built a full-stack business management SaaS platform managing the workflow from customer service requests through employee assignment, appointments, and completion.",
      "Developed a RESTful FastAPI backend with role-based access control, database integration, and structured business logic for service-based businesses.",
      "Built a responsive React and Tailwind CSS frontend integrated with backend APIs for dynamic, database-driven operations and analytics.",
      "Implemented automated testing and deployment workflows using Pytest, Playwright, AWS, and Git/GitHub."
    ]
  },
  {
    title: "Customer Churn Prediction",
    desc: "An end-to-end machine learning pipeline for predicting customer churn with complete evaluation and structured experiments.",
    role: "ML Developer",
    status: "Completed",
    live: "",
    repo: "https://github.com/ZeelRamoliya07",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    bullets: [
      "Developed an end-to-end machine learning pipeline for predicting customer churn, covering data preprocessing, exploratory analysis, feature preparation, model training, and evaluation.",
      "Used NumPy and Pandas for data manipulation and analysis, with Scikit-learn for supervised classification and model evaluation.",
      "Compared classification models using Precision, Recall, F1-Score, ROC-AUC, and confusion matrices to evaluate predictive performance.",
      "Structured the project into reproducible data-processing, modeling, evaluation, and experiment components for systematic ML development."
    ]
  },
  {
    title: "Fraud Detection System",
    desc: "An end-to-end fraud detection system for highly imbalanced credit card transaction data with optimized decision thresholds.",
    role: "Full Stack ML Developer",
    status: "Completed",
    live: "",
    repo: "https://github.com/ZeelRamoliya07",
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "FastAPI", "React", "Tailwind CSS", "REST API", "Pytest"],
    bullets: [
      "Built an end-to-end fraud detection system for highly imbalanced credit-card transaction data with validation, preprocessing, stratified splitting, and model evaluation.",
      "Compared Logistic Regression, Decision Tree, and Random Forest models using Precision, Recall, F1-Score, PR-AUC, ROC-AUC, and confusion matrices.",
      "Optimized the Random Forest decision threshold from 0.50 to 0.70, increasing precision from 75.26% to 88.61% while reducing false positives from 24 to 9 on the evaluation set.",
      "Exposed the trained ML pipeline through a FastAPI REST API and built a React frontend for transaction analysis with fraud probability and risk-level outputs."
    ]
  }
] as const;

