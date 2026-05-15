import { Project, Service, Experience, Testimonial, TechSkill } from './types';

export const TRANSLATED_PROJECTS: Record<'en' | 'it', Project[]> = {
  en: [
    {
      id: '1',
      title: 'Fonda Mentis',
      description: 'A presentation for a local event in my town, developed in just a few days, fully tailored to the client’s requirements and designed to ensure direct engagement with the public.',
      image: '/images/fondamentis.png',
      tags: ['CSS3', 'Javascript', 'Tailwind', 'API'],
      category: 'Frontend',
      problemSolved: 'Need for a clear and engaging presentation for a local event with tight deadlines and direct interaction requirements with the public.',
      results: 'Delivered a complete presentation in a few days, aligned with client requirements and optimized for public engagement during the event.',
      links: { demo: 'https://fondamentis.netlify.app/', github: '#', caseStudy: '#' }
    },
    {
      id: '2',
      title: 'SubSense',
      description: 'A full-stack platform for centralized management of digital subscriptions. Track costs, monitor deadlines, and optimize budget with an AI-powered interface.',
      image: '/images/subsense.png',
      tags: ['React 19', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind'],
      category: 'Full-stack',
      problemSolved: 'Users lose track of active subscriptions, leading to unwanted renewals and lack of visibility on recurring costs.',
      results: 'Unified dashboard with AI analysis of spending, alternative suggestions, and a secure, polished UX.',
      links: { demo: 'https://subsensedemo.netlify.app/', github: 'https://github.com/christiansaccani/subsense', caseStudy: '#' }
    },
  ],
  it: [
    {
      id: '1',
      title: 'Fonda Mentis',
      description: 'Una presentazione per un evento locale, sviluppata in pochi giorni, su misura per le esigenze del cliente e progettata per garantire un coinvolgimento diretto del pubblico.',
      image: '/images/fondamentis.png',
      tags: ['CSS3', 'Javascript', 'Tailwind', 'API'],
      category: 'Frontend',
      problemSolved: 'Necessità di una presentazione chiara e coinvolgente per un evento locale con scadenze strette e requisiti di interazione diretta con il pubblico.',
      results: 'Presentazione completa consegnata in pochi giorni, allineata ai requisiti del cliente e ottimizzata per il coinvolgimento del pubblico durante l\'evento.',
      links: { demo: 'https://fondamentis.netlify.app/', github: '#', caseStudy: '#' }
    },
    {
      id: '2',
      title: 'SubSense',
      description: 'Una piattaforma full-stack per la gestione centralizzata degli abbonamenti digitali. Monitora costi, scadenze e ottimizza il budget con un\'interfaccia potenziata dall\'IA.',
      image: '/images/subsense.png',
      tags: ['React 19', 'TypeScript', 'Firebase', 'Gemini AI', 'Tailwind'],
      category: 'Full-stack',
      problemSolved: 'Gli utenti perdono traccia degli abbonamenti attivi, portando a rinnovi indesiderati e mancanza di visibilità sui costi ricorrenti.',
      results: 'Dashboard unificata con analisi IA delle spese, suggerimenti di alternative e una UX sicura e curata.',
      links: { demo: 'https://subsensedemo.netlify.app/', github: 'https://github.com/christiansaccani/subsense', caseStudy: '#' }
    },
  ]
};

export const TRANSLATED_SERVICES: Record<'en' | 'it', Service[]> = {
  en: [
    { id: '1', title: 'Professional Showcase Websites', icon: 'Globe', description: 'High-impact web presence for local businesses looking to attract more customers and build trust.' },
    { id: '2', title: 'Custom Web Applications', icon: 'AppWindow', description: 'Bespoke software solutions designed to automate your business processes and increase operational efficiency.' },
    { id: '3', title: 'AI Assistants & Chatbots', icon: 'MessageSquare', description: 'Intelligent conversational agents for automated customer support and high-quality lead generation.' },
    { id: '4', title: 'Website Restyling', icon: 'RefreshCcw', description: 'Modernizing legacy websites to improve brand image, user experience, and conversion rates.' },
    { id: '5', title: 'Maintenance & Support', icon: 'ShieldCheck', description: 'Ongoing security updates, bug fixes, and technical support to keep your digital assets running perfectly.' },
    { id: '6', title: 'Performance Optimization', icon: 'Zap', description: 'In-depth analysis and refactoring to achieve lightning-fast load times and superior Core Web Vitals.' }
  ],
  it: [
    { id: '1', title: 'Siti Vetrina Professionali', icon: 'Globe', description: 'Presenza web ad alto impatto per attività locali che vogliono attirare più clienti e costruire fiducia.' },
    { id: '2', title: 'Web App Personalizzate', icon: 'AppWindow', description: 'Soluzioni software su misura progettate per automatizzare i processi aziendali e aumentare l\'efficienza operativa.' },
    { id: '3', title: 'Assistenti AI & Chatbot', icon: 'MessageSquare', description: 'Agenti conversazionali intelligenti per il supporto clienti automatizzato e la generazione di lead di alta qualità.' },
    { id: '4', title: 'Restyling Siti Web', icon: 'RefreshCcw', description: 'Modernizzazione di siti web esistenti per migliorare l\'immagine del brand, l\'esperienza utente e i tassi di conversione.' },
    { id: '5', title: 'Manutenzione & Supporto', icon: 'ShieldCheck', description: 'Aggiornamenti di sicurezza costanti, risoluzione di bug e supporto tecnico per mantenere le tue risorse digitali in perfetta forma.' },
    { id: '6', title: 'Ottimizzazione Performance', icon: 'Zap', description: 'Analisi approfondita e refactoring per ottenere tempi di caricamento fulminei e Core Web Vitals superiori.' }
  ]
};

export const TRANSLATED_EXPERIENCES: Record<'en' | 'it', Experience[]> = {
  en: [
    { id: '1', company: 'Self-Employed', role: 'Full-Stack Web Developer', duration: '2025 - Present', description: 'Delivered high-impact digital solutions for diverse clients, ranging from startups to established businesses.', type: 'Freelance' },
    { id: '2', company: 'Metal Service Centre', role: 'Frontend Software Architect', duration: '2024 - 2025', description: 'Specialized in building UI systems and improving accessibility for high-traffic platforms of productions.', type: 'Work' },
    { id: '3', company: 'SiWeb', role: 'Full-Stack Web Developer', duration: '2022 - 2023', description: 'Started my career focusing on PHP/MySQL backends and clean HTML/CSS implementations.', type: 'Work' }
  ],
  it: [
    { id: '1', company: 'Libero Professionista', role: 'Sviluppatore Web Full-Stack', duration: '2025 - Presente', description: 'Soluzioni digitali ad alto impatto per diversi clienti, dalle startup alle aziende consolidate.', type: 'Freelance' },
    { id: '2', company: 'Metal Service Centre', role: 'Frontend Software Architect', duration: '2024 - 2025', description: 'Specializzato nella creazione di sistemi UI e nel miglioramento dell\'accessibilità per piattaforme ad alto traffico.', type: 'Work' },
    { id: '3', company: 'SiWeb', role: 'Sviluppatore Web Full-Stack', duration: '2022 - 2023', description: 'Inizio carriera focalizzato su backend PHP/MySQL e implementazioni pulite HTML/CSS.', type: 'Work' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [];

export const TECH_SKILLS: TechSkill[] = [
  { name: 'Python', level: 90, icon: 'Terminal', description: 'Data analysis, automation scripting, and backend development.' },
  { name: 'Java', level: 85, icon: 'Coffee', description: 'Enterprise-level applications and object-oriented programming.' },
  { name: 'React', level: 90, icon: 'Atom', description: 'Building complex reactive UIs with Hooks and Context.' },
  { name: 'Next.js', level: 85, icon: 'Navigation', description: 'SSR/SSG expert for SEO-driven architectures.' },
  { name: 'Vue.js', level: 80, icon: 'Hexagon', description: 'Efficient component-based development with Vue 3.' },
  { name: 'JavaScript', level: 95, icon: 'Braces', description: 'Expert in ES6+, ASYNC/AWAIT, and DOM manipulation.' },
  { name: 'MySQL', level: 88, icon: 'Database', description: 'Optimized schema design and complex query profiling.' },
  { name: 'HTML5/CSS3', level: 98, icon: 'FileCode', description: 'Semantic structures and advanced Tailwind/SASS styling.' }
];

export const GENERAL_SKILLS: { name: string; level: number }[] = [];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/christian-saccani-a9445a208/',
  github: 'https://github.com/christiansaccani',
  email: 'christian.saccani99@gmail.com'
};
