// ============================================================
// DATA — All portfolio content
// Single source of truth — imported by all section components
// ============================================================

import type { Project, Certification, FeaturedCert, Experience, Skill, NavLink } from '@/types'

export const personalInfo = {
  name: 'Devasya Gupta',
  firstName: 'Devasya',
  lastName: 'Gupta',
  email: 'GuptaDeva700@gmail.com',
  phone: '+91-9638114882',
  linkedin: 'https://linkedin.com/in/devasya-gupta',
  github: 'https://github.com/devasyagupta',
  githubUsername: 'devasyagupta',
  degree: 'B.Tech CS, GLS University (2023–2027)',
  location: 'Ahmedabad, Gujarat',
  title: 'ML Engineer & Full-Stack Developer',
  seeking: 'SWE / AI-ML Internship',
}

export const heroCopy = {
  lines: [
    'Hi there,',
    "I'm Devasya Gupta",
    '• AI-ML Engineer',
    '• Full-Stack Developer',
    '• CS @ GLS University',
    '',
    'Welcome to DG-Linux 1.0 LTS',
    "++ Scroll or type 'help' to get started",
    'User: ~$ ',
  ],
}

export const aboutBio = `I am a Computer Science undergraduate at GLS University, Ahmedabad with a strong interest in building practical and reliable software systems. My academic journey and projects have helped me develop a solid foundation in programming, problem-solving, and understanding how software works beyond just writing code.

I have a profound interest in various types of software development, including Python, Java, machine learning and full-stack development. I'm a huge enthusiast of desk setups and PCs. In my free time, I enjoy playing and analyzing chess games, thrifting, playing video games, and trying local foods.`

export const technologies: string[] = [
  'AI & ML',
  'HTML & CSS',
  'Git, GitHub & Streamlit',
  'MySQL & JDBC',
  'Python 3.x & Java',
  'OOPS & Problem Solving',
  'TensorFlow & scikit-learn',
  'NLP & TF-IDF',
]

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'ML / AI',
    items: ['TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'NLP', 'CNNs', 'TF-IDF', 'Supervised Learning'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub', 'MySQL', 'VS Code', 'Netlify', 'Jupyter Notebook', 'Streamlit'],
  },
  {
    category: 'Concepts',
    items: ['OOP', 'Data Structures', 'REST APIs', 'Version Control', 'Feature Engineering', 'Model Evaluation'],
  },
]

export const featuredCerts: FeaturedCert[] = [
  { title: 'Google AI Certification', issuer: 'Google' },
  { title: 'Software Engineering Job Simulation', issuer: 'JP Morgan Chase & Co. (Forage)' },
  { title: 'Forward Leadership Program', issuer: 'McKinsey & Company' },
]

export const certifications: Certification[] = [
  {
    category: 'Foundations 2025',
    year: '2025',
    courses: [
      { name: 'Hour of AI – Computer Science Foundations', credits: 1.0 },
      { name: 'Green Skills and Artificial Intelligence', credits: 1.0 },
    ],
  },
  {
    category: 'Industry Exposure',
    year: '2023',
    courses: [
      { name: 'JP Morgan Virtual Experience Program', credits: 1.0 },
      { name: 'McKinsey Forward Program', credits: 1.0 },
    ],
  },
  {
    category: 'Applied Skills',
    year: '2024',
    courses: [
      { name: 'Tata ESG Virtual Experience Program', credits: 1.0 },
    ],
  },
  {
    category: 'Advanced AI',
    year: '2025',
    courses: [
      { name: 'AI Agents Intensive Course with Google & Kaggle', credits: 1.0 },
    ],
  },
]

export const experiences: Experience[] = [
  {
    company: 'Metrix Healthcare India',
    role: 'Intern',
    period: 'Jan 2023 – Nov 2025',
    location: 'Ahmedabad, GJ',
    companyUrl: '#',
    bullets: [
      'Automated internal data workflows with Python scripting, cutting manual processing overhead across operations teams.',
      'Maintained structured documentation pipelines, improving cross-team data consistency and handoff efficiency by 20%.',
      'Collaborated with technical and ops stakeholders to apply OOP principles to real-world business workflow challenges.',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'hireloop',
    title: 'HireLoop',
    year: '2025',
    dates: 'June 2025 – Present',
    status: 'active',
    image: '/hireloop.png',
    tags: ['Python', 'NLP', 'TF-IDF', 'scikit-learn', 'Logistic Regression', 'JavaScript', 'HTML', 'CSS'],
    description:
      'An AI-powered resume tailoring platform that matches resumes to job descriptions, generates ATS-friendly resumes and personalized cover letters. Architected an end-to-end ML pipeline using TF-IDF vectorization and cosine similarity scoring, with a JavaScript UI for resume upload/parsing and Python backend for skill extraction and gap analysis.',
    github: 'https://github.com/devasyagupta',
  },
  {
    id: 'fake-news',
    title: 'Fake News Detection System',
    year: '2025',
    dates: 'Aug 2025 – Dec 2025',
    image: '/fake-news.png',
    tags: ['Python', 'Machine Learning', 'NLP', 'scikit-learn', 'Pandas'],
    description:
      'A machine learning based system that classifies news articles as real or fake using text preprocessing, feature extraction, and supervised learning models. Benchmarked Logistic Regression vs. Passive Aggressive Classifier with cross-validation to select the optimal production model.',
    github: 'https://github.com/devasyagupta',
  },
  {
    id: 'satellite',
    title: 'Satellite Image Classification',
    year: '2025',
    dates: 'June 2025 – Aug 2025',
    image: '/satellite.jpg',
    tags: ['Python', 'Deep Learning', 'TensorFlow', 'CNN', 'Streamlit'],
    description:
      'A deep learning project that classifies land cover types from satellite images, enabling environmental analysis and monitoring through image-based predictions. Built using convolutional neural networks with a Streamlit interface for real-time classification.',
    github: 'https://github.com/devasyagupta',
  },
  {
    id: 'restaurant-rec',
    title: 'Restaurant Recommendation System',
    year: '2025–2026',
    dates: 'Dec 2025 – Feb 2026',
    image: '/restaurant.png',
    tags: ['Python', 'scikit-learn', 'Pandas', 'TF-IDF', 'Cosine Similarity'],
    description:
      'Content-based recommendation engine that matches user preferences to restaurants via TF-IDF vectorization and cosine similarity. Feature-engineered restaurant data with NLP techniques and designed a ranked top-N retrieval system for personalized suggestions.',
    github: 'https://github.com/devasyagupta',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio',
    year: '2026',
    dates: 'Mar 2026',
    isSelfReferential: true,
    tags: ['Next.js', 'TypeScript', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    description:
      'Designed and built from scratch. Chromatic glassmorphism aesthetic with animated ambient backgrounds, GSAP scroll-triggered animations, a full CSS custom property design system, and edh.dev-inspired editorial layout.',
    github: 'https://github.com/devasyagupta',
  },
]

export const navLinks: NavLink[] = [
  { label: '/home', href: '#hero' },
  { label: '/about', href: '#about' },
  { label: '/certifications', href: '#certifications' },
  { label: '/experience', href: '#experience' },
  { label: '/projects', href: '#projects' },
]
