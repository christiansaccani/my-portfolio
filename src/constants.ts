import { Project, Service, Experience, Testimonial, TechSkill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Fonda Mentis',
    description: 'A presentation for a local event in my town, developed in just a few days, fully tailored to the client’s requirements and designed to ensure direct engagement with the public.',
    image: '/images/fondamentis.png',
    tags: ['CSS3', 'Javascript', 'Tailwind', 'API'],
    category: 'Frontend',
    problemSolved: 'Need for a clear and engaging presentation for a local event with tight deadlines and direct interaction requirements with the public.',
    results: 'Delivered a complete presentation in a few days, aligned with client requirements and optimized for public engagement during the event.',
    links: { demo: 'https://es-d-97270538620260509-019dfe17-8afc-74dc-aff2-6a44be3da1b0.codepen.dev/', github: '#', caseStudy: '#' }
  },
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Custom Websites', icon: 'Globe', description: 'Bespoke, high-performance websites built with modern frameworks to capture your brand\'s unique identity.' },
  { id: '2', title: 'E-commerce Development', icon: 'ShoppingBag', description: 'Scalable online stores with optimized conversion funnels and secure payment implementations.' },
  { id: '3', title: 'Web Applications', icon: 'AppWindow', description: 'Complex, business-oriented web tools designed for scalability, security, and exceptional user experience.' },
  { id: '4', title: 'API Integrations', icon: 'Link', description: 'Seamlessly connecting your digital ecosystem with robust, well-documented API architectures.' },
  { id: '5', title: 'Maintenance', icon: 'ShieldCheck', description: 'Ongoing support, security updates, and performance monitoring to keep your products running smoothly.' },
  { id: '6', title: 'Performance Optimization', icon: 'Zap', description: 'Analyzing and refactoring codebases to achieve lightning-fast load times and perfect SEO scores.' }
];

export const EXPERIENCES: Experience[] = [
  { id: '1', company: 'Self-Employed', role: 'Full-Stack Web Developer', duration: '2025 - Present', description: 'Delivered high-impact digital solutions for diverse clients, ranging from startups to established businesses.', type: 'Freelance' },
  { id: '2', company: 'Metal Service Centre', role: 'Frontend Software Architect', duration: '2024 - 2025', description: 'Specialized in building UI systems and improving accessibility for high-traffic platforms of productions.', type: 'Work' },
  { id: '3', company: 'SiWeb', role: 'Full-Stack Web Developer', duration: '2022 - 2023', description: 'Started my career focusing on PHP/MySQL backends and clean HTML/CSS implementations.', type: 'Work' }
];

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
