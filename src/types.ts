export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'Full-stack' | 'Frontend' | 'Backend' | 'E-commerce' | 'SaaS';
  problemSolved: string;
  results: string;
  links: {
    demo: string;
    github: string;
    caseStudy: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  type: 'Work' | 'Freelance' | 'Collaboration' | 'Project';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface TechSkill {
  name: string;
  level: number;
  icon: string;
  description: string;
}
