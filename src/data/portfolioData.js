// ============================================================
// portfolioData.js — Centralized configuration for Poobathi Rajan's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Poobathi Rajan M",
  firstName: "Poobathi",
  brandName: "POOBATHI",
  title: "AI/ML Enthusiast | Full-Stack Developer",
  location: "Theni, Tamil Nadu, India",
  phone: "+91 9500623957",
  emails: {
    primary: "poobathirajan135@gmail.com",
    secondary: "",
  },
  summary:
    "Ambitious Engineering Student and Full-Stack Developer focused on building smart solutions using React 19, Python, and IoT systems. I specialize in integrating Generative AI models like LLaMA 3.1 into practical applications.",
  resumeUrl: "/Poobathi_Rajan_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/poobathi867",
  linkedin: "https://www.linkedin.com/in/poobathi-rajan-m-8107ba37a/",
  instagram: "https://ig.me/m/nature_lover06666",
};

export const heroContent = {
  greeting: "Hi, I'm Poobathi Rajan",
  titleHighlight: "AI/ML & Full-Stack Developer",
  subtitle:
    "I build smart solutions at the intersection of React 19, Python, and AI, integrating Generative AI models into real-world applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:poobathirajan135@gmail.com?subject=Hiring Inquiry – Portfolio",
  },
  ctaResume: { text: "Download Resume", href: "/Poobathi_Rajan_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Poobathi Rajan M</span>, an ambitious Engineering Student and Full-Stack Developer from Tamil Nadu, dedicated to crafting smart solutions using React 19, Python, and IoT systems. I am passionate about Artificial Intelligence and Machine Learning, constantly learning and applying new technologies to solve real-world problems and build user-centric applications.`,
  techStack: ["Python", "React 19", "AI/ML"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I build intelligent systems",
  description:
    "I follow a structured approach to bridge complex AI models with intuitive, scalable full-stack applications.",
  cards: [
    {
      number: "01",
      title: "Research & Architect",
      text: "Understanding requirements and selecting the right tech stack (like LLaMA 3.1, Groq API, and React) for a robust foundation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Crafting immersive interfaces like 3D dashboards using Three.js and ensuring an accessible user experience.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building scalable Python-FastAPI backends and integrating LLMs and RAG pipelines for real-world functionality.",
    },
    {
      number: "04",
      title: "Deploy & Scale",
      text: "Rigorous testing, optimization, and seamless deployment to scalable cloud infrastructure.",
    },
  ],
  endText: "Ready to Innovate!",
};

export const technicalSkills = {
  categories: [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Generative AI & LLMs", level: 90 },
        { name: "RAG & Vector DBs", level: 85 },
        { name: "TensorFlow & OpenCV", level: 80 },
        { name: "Pandas & Scikit-Learn", level: 85 }
      ]
    },
    {
      title: "Full Stack",
      skills: [
        { name: "React 19", level: 90 },
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "Three.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 90 },
        { name: "FastAPI / Flask", level: 88 },
        { name: "Java", level: 80 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 88 },
        { name: "Firebase", level: 85 }
      ]
    },
    {
      title: "Tools & IoT",
      skills: [
        { name: "IoT Integration", level: 85 },
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]
};

// Hidden for now, kept empty to prevent errors if rendered
export const contentCreation = {
  badge: "",
  heading: "",
  description: "",
  categories: []
};

// Hidden for now
export const leadershipList = [];

export const internshipsList = [
  {
    organization: "HYSAS Technologies Pvt. Ltd.",
    role: "AI Engineering Intern",
    duration: "June 10, 2026 – July 10, 2026",
    skills: ["Generative AI", "RAG", "LLM Orchestration", "Vector Databases", "Embeddings"],
    tech: ["LLMs", "RAG Pipelines", "Vector DBs", "GitHub"]
  }
];

export const softSkillsList = [
  { name: "Problem Solving", icon: "🧩", desc: "Proactive problem solver, tackling complex engineering challenges." },
  { name: "Public Speaking", icon: "🎤", desc: "Showcasing and pitching technical products and ideas effectively to stakeholders." },
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating seamlessly within agile development teams to deliver robust solutions." },
  { name: "Adaptability", icon: "🌟", desc: "Quickly learning and adapting to emerging technologies and modern frameworks." }
];

export const projects = [
  {
    id: "tn-studymate",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "TN StudyMate",
    description:
      "Full-Stack AI-Driven Educational Platform. Currently developing an educational ecosystem using React 19 and Three.js to build immersive 3D dashboards. Integrated with LLaMA 3.1 via Groq API for real-time AI tutoring, alongside a custom Python-based Weighted Scoring Algorithm for career recommendations. Features a secure Firebase backend.",
    techTags: [
      "React 19",
      "Three.js",
      "Python",
      "LLaMA 3.1",
      "Groq API",
      "Firebase"
    ],
    links: {
      github: "https://github.com/poobathi867/TN-StudyMate",
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "edusync",
    number: "02",
    badge: null,
    title: "EduSync",
    description:
      "AI-Powered Learning Management System. Collaborating as Lead Backend Developer on an AI-integrated LMS. Architecting a robust server-side using Python-FastAPI. Building core infrastructure to support LLM-based automated grading and real-time voice recognition labs. Includes flexible MongoDB schema and WebSocket-based collaboration.",
    techTags: ["Python", "FastAPI", "MongoDB", "WebSockets", "LLM", "Voice Recognition"],
    links: {
      github: "https://github.com/keerthan4531-a11y/Edusync-Alpha-app",
      frontendDemo: null,
      backendApi: null,
    },
    isFlagship: false,
  },
  {
    id: "ai-assistant",
    number: "03",
    badge: "Internship Project",
    title: "Enterprise AI Knowledge Assistant",
    description:
      "Developed during my internship at HYSAS Technologies. Designed and developed an Enterprise AI Knowledge Assistant leveraging Retrieval-Augmented Generation (RAG). Architected precise context retrieval, optimized semantic search pipelines with Vector Databases and Embeddings, and built scalable LLM orchestration frameworks.",
    techTags: ["Generative AI", "RAG", "Vector Databases", "LLM Orchestration", "Embeddings"],
    links: {
      github: "https://github.com/poobathi867/RAG-Model",
    },
    isFlagship: false,
  }
];

export const certificates = {
  featured: [
    {
      name: "IIT Madras E-Summit '26 Exhibitor",
      issuer: "IIT Madras",
      icon: "🏆",
    },
    {
      name: "AI Engineering Internship",
      issuer: "HYSAS Technologies",
      icon: "🤖",
    },
    {
      name: "IoT & Hardware Systems Integration",
      issuer: "Certification",
      icon: "⚙️",
    },
    {
      name: "Full-Stack Development",
      issuer: "Certification",
      icon: "💻",
    }
  ],
  all: [
    {
      name: "E-Summit 2k26 Certificate",
      file: "/certificates/E-Summit 2k26.pdf",
      icon: "🏆"
    },
    {
      name: "Full Stack Development Certificate",
      file: "/certificates/Full stack.pdf",
      icon: "💻"
    },
    {
      name: "Hackathon Participation",
      file: "/certificates/Hackathon.pdf",
      icon: "🚀"
    },
    {
      name: "Internship Certificate",
      file: "/certificates/Internship.pdf",
      icon: "📜"
    }
  ],
  viewAllUrl: "#", // Kept for legacy fallback
};

export const education = {
  degree: "B.Tech – Artificial Intelligence & Data Science",
  institution: "Nadar Saraswathi College of Engineering & Technology, Theni",
  cgpa: "Pursuing",
  graduation: "2026 - Present",
  twelfth: "12th Science",
  tenth: "10th",
};

export const footerContent = {
  taglines: [
    "AI/ML Engineering",
    "React 19 · Python · LLaMA 3.1",
    "Smart Educational Solutions",
  ],
  credential: "B.Tech AI & DS",
  copyright: `© ${new Date().getFullYear()} Poobathi Rajan M | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
