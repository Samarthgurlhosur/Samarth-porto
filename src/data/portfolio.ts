/**
 * Central portfolio data — generated from Samarth Gurlhosur's resume and identity.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Samarth Shrikrishna Gurlhosur',
  displayName: 'Samarth Gurlhosur',
  firstName: 'SAMARTH',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A GURLHOSUR ORIGINAL',
  role: 'Generative AI & Agentic AI Developer',
  headline: 'Building Intelligence. Engineering Possibilities.',
  tagline: ['Generative AI', 'Agentic AI', 'Python', 'LLMs', 'FastAPI'],
  heroTags: ['Generative AI', 'Agentic AI', 'Python', 'LLMs', 'RAG', 'FastAPI', 'Multi-Agent Systems'],
  intro:
    "I'm a Computer Science Engineering student and AI developer interested in building intelligent systems that solve real-world problems. My work focuses on Generative AI, Agentic AI, LLM-powered applications, retrieval systems, backend engineering, and AI-driven products. Through my internship and project work, I've explored agent workflows, MCP and A2A communication, RAG pipelines, privacy-focused AI systems, and scalable backend applications.",
  location: 'Gadag, Karnataka, India',
  email: 'samarthgurlhosur864@gmail.com',
  phone: '9606293793',
  graduationYear: '2027',
  links: {
    linkedin: 'https://www.linkedin.com/in/samarth-gurlhosur-981a1b294/',
    github: 'https://github.com/Samarthgurlhosur',
  },
  resumePdf: '/assets/Samarth_Gurlhosur_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Samarth Gurlhosur',
  },
  interests: ['Multi-Agent Systems', 'Model Context Protocol (MCP)', 'Privacy Engineering (DPDP)', 'Autonomous Workflows'],
};

export const education = [
  {
    school: 'GM University',
    place: 'Davangere, Karnataka',
    degree: 'Bachelor of Technology — Computer Science and Engineering',
    period: '2023 – 2027',
    score: 'CGPA 8.2/10',
  },
];

export const experience = [
  {
    company: 'Altimetrik',
    role: 'Artificial Intelligence Intern',
    place: 'Bangalore, India',
    period: 'July 2026 – Present',
    points: [
      'Developed Agentic AI workflows using Python, LangChain, and OpenAI APIs.',
      'Implemented and tested MCP/A2A integrations for agent communication and tool interoperability.',
      'Built FastAPI and REST API services with integrated SQL databases.',
      'Worked with Docker-based development workflows for containerized agent systems.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  badge?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'rice-privacy-gateway',
    title: 'RICE',
    year: '2026',
    genre: 'AI • Cybersecurity • Privacy Engineering',
    logline: 'A local-first DPDP-ready privacy gateway designed to detect, protect, and mask sensitive Indian personal information before external LLM interaction.',
    stack: ['Python', 'FastAPI', 'Microsoft Presidio', 'GLiNER', 'spaCy', 'PyTorch', 'Gemini API', 'Fernet'],
    badge: '🏆 1ST PRIZE · MINEARENA',
    build: [
      'Awarded 1st Prize at Minearena Hackathon, BIET Davangere for designing and developing RICE, a local-first DPDP-ready Privacy Gateway for Indian PII protection.',
      'Engineered a hybrid Named Entity Recognition pipeline pairing Microsoft Presidio and GLiNER with deterministic entity-overlap merging to detect Aadhaar, PAN, and GSTIN numbers.',
      'Implemented Fernet-encrypted local tokenization allowing sensitive data masking before prompting external LLMs with zero outbound leakage and secure de-anonymization.',
    ],
    features: [
      'Indian PII detection (Aadhaar, PAN, GSTIN)',
      'Local-first processing with zero outbound leakage',
      'Hybrid NER pipeline (Presidio + GLiNER)',
      'Deterministic entity-overlap merging',
      'Fernet-encrypted reversible tokenization',
      'Gemini API integration with leakage auditing',
    ],
    metrics: [
      { value: '1st', label: 'Prize · Minearena Hackathon' },
      { value: '100%', label: 'local-first PII masking' },
      { value: '3+', label: 'Indian PII entities detected' },
      { value: '0', label: 'outbound leakage incidents' },
    ],
    github: 'https://github.com/Samarthgurlhosur/RICE',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'trustcharge-ev',
    title: 'TrustCharge',
    year: '2026',
    genre: 'AI • Mobility • Full Stack',
    logline: 'An intelligent EV charging discovery platform helping users find suitable charging stations based on location, connector compatibility, and real-time availability.',
    stack: ['Python', 'FastAPI', 'Next.js', 'PostgreSQL', 'PostGIS', 'Redis', 'REST APIs'],
    build: [
      'Architected geospatial EV station discovery engine using PostGIS indexing and FastAPI for high-speed location-aware queries.',
      'Implemented Redis caching, ETag-based HTTP responses, and strict API validation for real-time station details and connector compatibility checks.',
      'Designed identity, session management, and privacy-focused data controls for EV drivers and charging network operators.',
    ],
    features: [
      'Location-aware station discovery',
      'Geospatial station search with PostGIS',
      'Station detail APIs & schema validation',
      'Connector compatibility & filtering',
      'Redis caching & ETag-based responses',
      'Identity & privacy-focused data controls',
    ],
    metrics: [
      { value: 'PostGIS', label: 'geospatial station indexing' },
      { value: 'Redis', label: 'high-speed caching & ETags' },
      { value: 'FastAPI', label: 'async high-throughput backend' },
      { value: 'Zero', label: 'connector mismatch errors' },
    ],
    palette: { from: '#021814', via: '#095c47', to: '#040d0a', accent: '#46e3a8' },
    motif: 'flow',
  },
  {
    id: 'nyaya-ai',
    title: 'NYAYA AI',
    year: '2026',
    genre: 'AI • LegalTech • RAG',
    logline: 'An AI-powered virtual courtroom platform designed to assist with legal case analysis, legal document exploration, and simulated courtroom interactions.',
    stack: ['Python', 'FastAPI', 'LLM APIs', 'RAG', 'FAISS', 'NLP'],
    build: [
      'Engineered a legal retrieval-augmented generation (RAG) system utilizing FAISS vector index and Python for high-accuracy legal document exploration.',
      'Built interactive simulated courtroom interactions and evidence review pipelines delivering context-aware, citation-backed legal responses.',
      'Integrated FastAPI microservices to process complex legal filings and multi-turn legal inquiries with low latency.',
    ],
    features: [
      'AI-powered legal case analysis',
      'Retrieval-Augmented Generation (RAG)',
      'Legal document exploration & indexing',
      'Context-aware responses & citation matching',
      'Evidence review & analysis pipelines',
      'Simulated courtroom interactions',
    ],
    metrics: [
      { value: 'FAISS', label: 'vector retrieval index' },
      { value: 'RAG', label: 'citation-grounded responses' },
      { value: 'Multi-Turn', label: 'courtroom simulation flows' },
      { value: 'FastAPI', label: 'low-latency inference service' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'shield',
  },
  {
    id: 'ignitron',
    title: 'IGNITRON',
    year: '2025',
    genre: 'Full-Stack Development • Systems',
    logline: 'A hackathon management system developed for IGNITRON, a national-level hackathon recognized by GM University, designed to support up to 10,000 students.',
    stack: ['Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Engineered end-to-end hackathon management platform for IGNITRON, GM University\'s national hackathon, designed to handle up to 10,000 participants.',
      'Implemented QR-code-based team editing, fast on-site verification, and dynamic team registration workflows.',
      'Designed relational SQL schema and role-based administrative dashboards ensuring smooth participant coordination.',
    ],
    features: [
      'End-to-end hackathon workflow management',
      'Team registration & member management',
      'QR-code-based team editing functionality',
      'Designed to scale to 10,000 students',
      'SQL database with normalized schema',
    ],
    metrics: [
      { value: '10,000', label: 'students capacity' },
      { value: 'QR Code', label: 'fast team editing & check-in' },
      { value: 'National', label: 'GM University hackathon' },
      { value: '100%', label: 'on-site reliability' },
    ],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'minearena',
    title: '1st Prize Winner',
    org: 'Minearena Hackathon · BIET Davangere',
    detail: 'Won first prize for developing RICE, a local-first DPDP-ready Privacy Gateway for Indian PII protection and safe LLM interaction.',
    laurel: '1st Prize Winner',
    link: 'https://github.com/Samarthgurlhosur/RICE',
  },
  {
    id: 'vit-chennai',
    title: 'Top 5 Finalist',
    org: 'National Hackathon · VIT Chennai',
    detail: 'Secured Top 5 nationally by building an Augmented Reality system for immersive virtual tours of Indian monuments with AI-powered historical insights.',
    laurel: 'National Top 5',
  },
  {
    id: 'hackathon-coordinator',
    title: 'Hackathon Coordinator',
    org: 'GM University · National Level',
    detail: 'Organized and coordinated a national-level hackathon with diverse technical tracks, managing logistics and mentoring participating teams.',
    laurel: 'Lead Coordinator',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  {
    issuer: 'GM University',
    name: 'Embracing Data Structures and Algorithms for Project Development',
    link: 'https://drive.google.com/file/d/1wKuWyEoiprcLGkNcHioYtSEnnGllt6e5/view?usp=drive_link',
  },
  {
    issuer: 'Apna College',
    name: 'Got in Touch with Data Structures in Java (Nov 2025)',
    link: 'https://drive.google.com/file/d/1NshBELRAHpt9sRrFHVO7UqooKOdpirwL/view?usp=drive_link',
  },
  {
    issuer: 'GM University',
    name: 'Building Industry-Specific Machine Learning Solutions',
    link: 'https://drive.google.com/file/d/1OxMnUhBngD8Lm9wv0wCxBBECzHvU_xpi/view?usp=drive_link',
  },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-genai',
    title: 'AI & Generative AI',
    subtitle: 'Agents, RAG & LLM Orchestration',
    skills: [
      { name: 'Generative AI', mono: 'Ge', note: 'Primary' },
      { name: 'Agentic AI', mono: 'Ag', note: 'Focus' },
      { name: 'LLM Applications', mono: 'Ll' },
      { name: 'LangChain', mono: 'Lc' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'OpenAI API', mono: 'Oa' },
      { name: 'Multi-Agent Systems', mono: 'Ma' },
      { name: 'MCP', mono: 'Mc' },
      { name: 'A2A', mono: 'A2' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the primary language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'High-performance microservices',
    skills: [
      { name: 'FastAPI', mono: 'Fa', note: 'Primary' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Modern interfaces & platforms',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Bootstrap', mono: 'Bs' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Geospatial & relational systems',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'PostGIS', mono: 'Gi' },
      { name: 'SQLAlchemy', mono: 'Sa' },
      { name: 'Redis', mono: 'Rd' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    subtitle: 'Shipping & development workflows',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Bitbucket', mono: 'Bb' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or experience.
 */
export const skillEvidence: Record<string, string[]> = {
  'Generative AI': ['Altimetrik AI Internship', 'RICE Privacy Gateway', 'NYAYA AI'],
  'Agentic AI': ['Altimetrik AI Workflows', 'Multi-Agent Orchestration'],
  'LLM Applications': ['RICE Privacy Gateway', 'NYAYA AI Virtual Courtroom'],
  'OpenAI API': ['Altimetrik AI Internship', 'NYAYA AI'],
  LangChain: ['Altimetrik Agentic AI Workflows'],
  RAG: ['NYAYA AI Virtual Courtroom', 'FAISS Vector Retrieval'],
  'AI Agents': ['Altimetrik Workflows', 'MCP/A2A Integrations'],
  'Multi-Agent Systems': ['Altimetrik Multi-Agent Orchestration', 'A2A Communication'],
  MCP: ['Altimetrik Tool Interoperability & Communication'],
  A2A: ['Altimetrik Agent-to-Agent Protocols'],
  Python: ['RICE', 'TrustCharge', 'NYAYA AI', 'IGNITRON', 'Altimetrik'],
  Java: ['Apna College Data Structures in Java Certification'],
  JavaScript: ['TrustCharge Frontend', 'IGNITRON Management System'],
  SQL: ['IGNITRON Hackathon System', 'TrustCharge', 'Altimetrik Database Services'],
  FastAPI: ['RICE', 'TrustCharge', 'NYAYA AI', 'Altimetrik Microservices'],
  Flask: ['Python Backend Services'],
  'REST APIs': ['TrustCharge EV Platform', 'RICE Gateway', 'Altimetrik Services'],
  React: ['Modern Web Interfaces', 'Full-Stack Applications'],
  'Next.js': ['TrustCharge EV Platform Frontend'],
  'Tailwind CSS': ['Modern Web Platforms & UI Engineering'],
  Bootstrap: ['IGNITRON Web Platform'],
  HTML: ['IGNITRON Platform', 'Web Development'],
  CSS: ['IGNITRON Platform', 'Responsive Interfaces'],
  PostgreSQL: ['TrustCharge EV Platform', 'Relational Schemas'],
  PostGIS: ['TrustCharge Geospatial EV Discovery'],
  SQLAlchemy: ['TrustCharge Python ORM Backend'],
  Redis: ['TrustCharge Caching & ETags'],
  Docker: ['Altimetrik Development Workflows', 'Containerized Deployments'],
  Git: ['Version Control across all repositories'],
  GitHub: ['RICE Open Source Repository', 'Project Management'],
  Bitbucket: ['Altimetrik Version Control'],
  'VS Code': ['Primary Development Environment'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2023 – 2027',
    synopsis: 'Computer Science and Engineering at GM University, Davangere — core algorithms, system design, and software engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'B.Tech in Computer Science and Engineering at GM University, Davangere — maintaining an 8.2/10 CGPA.',
        tags: ['B.Tech CSE', 'GM University', 'CGPA 8.2'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'Algorithmic Mastery',
        description: 'Data Structures and Algorithms in Java & Project Development — mastering arrays, trees, graphs, sorting, searching, recursion, and dynamic programming.',
        tags: ['DSA', 'Java', 'GM University', 'Apna College'],
        runtime: 'Nov 2025',
        palette: amber,
      },
      {
        code: 'S01 E03',
        title: 'Machine Intelligence',
        description: 'Building Industry-Specific Machine Learning Solutions certification at GM University — bridging algorithms with real-world ML.',
        tags: ['ML Solutions', 'GM University'],
        runtime: 'Credential',
        palette: jade,
      },
    ],
  },
  {
    number: 2,
    title: 'The Hackathon Arena',
    period: '2025 – 2026',
    synopsis: 'Competitive hackathons, national podium finishes, and leading large-scale technical challenges.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Champion',
        description: '1st Prize Winner at Minearena Hackathon, BIET Davangere — built RICE, a local-first DPDP-ready Privacy Gateway for Indian PII protection.',
        tags: ['1st Prize', 'Minearena', 'BIET Davangere', 'RICE'],
        runtime: 'Nov 2026',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'The Finalist',
        description: 'Top 5 position in national-level hackathon at VIT Chennai — created an Augmented Reality system for immersive virtual tours of Indian monuments with AI historical insights.',
        tags: ['Top 5', 'VIT Chennai', 'AR', 'AI'],
        runtime: 'Apr 2025',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Coordinator',
        description: 'Organized and coordinated IGNITRON, a national-level hackathon recognized by GM University, managing participants and mentoring technical teams.',
        tags: ['Leadership', 'IGNITRON', 'GM University'],
        runtime: 'National Event',
        palette: amber,
      },
    ],
  },
  {
    number: 3,
    title: 'Agentic AI & Enterprise',
    period: '2026 – Present',
    synopsis: 'Building production AI agents, MCP/A2A integrations, and scalable backend services as an AI Intern at Altimetrik, Bangalore.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Agent Workflows',
        description: 'Developed Agentic AI workflows using Python, LangChain, and OpenAI APIs for autonomous multi-step reasoning.',
        tags: ['Agentic AI', 'LangChain', 'OpenAI', 'Python'],
        runtime: 'Altimetrik',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'MCP & Interoperability',
        description: 'Implemented and tested MCP (Model Context Protocol) and A2A (Agent-to-Agent) integrations for tool interoperability and agent communication.',
        tags: ['MCP', 'A2A', 'Tool Integration'],
        runtime: 'Altimetrik',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Backend & Containers',
        description: 'Built FastAPI and REST API services, integrated SQL databases, and orchestrated Docker-based development workflows.',
        tags: ['FastAPI', 'SQL', 'Docker', 'REST'],
        runtime: 'Altimetrik',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'The Four Originals',
    period: '2025 – 2026',
    synopsis: 'Four standout productions — a privacy gateway, an EV charging platform, a virtual courtroom, and a hackathon management system.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Privacy Shield',
        description: 'RICE — local-first DPDP-ready Indian PII protection combining Microsoft Presidio, GLiNER, and Fernet-encrypted tokenization.',
        tags: ['Privacy Gateway', 'FastAPI', 'Presidio', 'GLiNER'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The EV Navigator',
        description: 'TrustCharge — geospatial EV charging discovery platform with PostGIS, FastAPI, Redis caching, and connector compatibility.',
        tags: ['FastAPI', 'PostGIS', 'Redis', 'Next.js'],
        runtime: '2026',
        palette: jade,
      },
      {
        code: 'S04 E03',
        title: 'The Virtual Court',
        description: 'NYAYA AI — virtual courtroom assistant with FAISS vector retrieval, legal document exploration, and simulated trial flows.',
        tags: ['RAG', 'FAISS', 'FastAPI', 'NLP'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E04',
        title: 'The Scale Engine',
        description: 'IGNITRON — hackathon management platform with QR-based team editing, designed to coordinate up to 10,000 students.',
        tags: ['Python', 'SQL', 'QR Codes', '10K Scale'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Pushing boundaries in autonomous multi-agent systems, privacy-first AI gateways, and scalable intelligent software.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Autonomous Horizons',
        description: 'Exploring Multi-Agent Orchestration, advanced MCP tool routing, and next-generation RAG architectures.',
        tags: ['Multi-Agent', 'MCP', 'Agentic AI'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Featured Original · 1st Prize', title: 'RICE', detail: 'Local-first DPDP Privacy Gateway · Presidio & GLiNER', palette: crimson },
  { label: 'Geospatial Original', title: 'TrustCharge', detail: 'Intelligent EV charging platform · PostGIS & Redis', palette: jade },
  { label: 'LegalTech Original', title: 'NYAYA AI', detail: 'Virtual courtroom assistant · FAISS & RAG', palette: amber },
  { label: 'Scale Original', title: 'IGNITRON', detail: 'Hackathon platform designed for 10,000 students', palette: violet },
  { label: 'Enterprise Arc', title: 'Altimetrik', detail: 'AI Intern · Agentic workflows, LangChain & MCP/A2A', palette: ocean },
  { label: 'Podium Moment', title: 'Minearena 1st', detail: 'Won 1st Prize at BIET Davangere hackathon', palette: crimson },
  { label: 'National Stage', title: 'VIT Chennai', detail: 'Top 5 position · Augmented Reality & AI monument tours', palette: amber },
  { label: 'Leadership', title: 'Coordinator', detail: 'Organized national-level hackathon at GM University', palette: violet },
  { label: 'Academic High', title: 'GM University', detail: 'B.Tech Computer Science & Engineering · CGPA 8.2', palette: jade },
  { label: 'Core Focus', title: 'Agentic AI', detail: 'MCP, tool-use & multi-agent systems', palette: ocean },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · Computer Science',
    lines: ['GM University, Davangere', '2023 – 2027'],
    chips: ['CGPA 8.2 / 10'],
  },
  {
    kicker: 'Specialization',
    title: 'Agentic & Generative AI',
    lines: ['Python, FastAPI, LangChain · Multi-Agent Orchestration', 'MCP & A2A Communication · RAG & Vector Search'],
    chips: ['Python', 'Agentic AI', 'FastAPI', 'LangChain', 'MCP', 'RAG'],
  },
  {
    kicker: 'Experience',
    title: 'Altimetrik AI Intern',
    lines: ['Artificial Intelligence Intern · Bangalore', 'July 2026 – Present', 'Agentic AI workflows, LangChain, MCP/A2A & Docker'],
    chips: ['Altimetrik', 'Bangalore', 'Agentic AI'],
  },
  {
    kicker: 'Projects',
    title: 'Four Originals',
    lines: ['RICE — 1st Prize Minearena · DPDP Privacy Gateway', 'TrustCharge — Geospatial EV Charging with PostGIS', 'NYAYA AI — Virtual Courtroom Assistant with RAG', 'IGNITRON — Hackathon System for 10,000 Students'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['🏆 1st Prize Winner — Minearena Hackathon (BIET Davangere)', '🏅 Top 5 Finalist — National Hackathon (VIT Chennai)', '🎯 National-Level Hackathon Coordinator (GM University)'],
  },
  {
    kicker: 'Certifications',
    title: '3 Key Credentials',
    lines: ['DSA for Project Development — GM University', 'Data Structures in Java — Apna College', 'Industry-Specific ML Solutions — GM University'],
  },
  {
    kicker: 'Mission',
    title: 'Engineering Possibilities',
    lines: ['Turning ideas into intelligent, functional, and privacy-conscious products.'],
  },
];

export type ProfileId = 'samarth' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'samarth',
    name: 'Samarth',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Agentic AI, projects & code first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Hackathons, story & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
