import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      services: 'Services',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: 'Digital Architect',
      status: 'AVAILABLE FOR HIRE',
      title: 'CREATING VALUE',
      subtitle: 'THROUGH INNOVATION',
      description: 'Full-Stack Developer specializing in high-performance web solutions and scalable digital architectures.',
      cta: 'Explore Works',
    },
    about: {
      title: 'About Me',
      subtitle: 'My Story',
      description: 'I am a passionate Full-Stack Developer with a focus on creating meaningful digital experiences. With a background in technical architecture and a keen eye for design, I bridge the gap between complex backend logic and intuitive frontend interfaces.',
      passion: 'Scalability First',
      passionDesc: 'Architecting for growth is non-negotiable. I use modern paradigms like Next.js, Python, and Java to ensure your system evolves with your users.',
    },
    projects: {
      title: 'Selected Works',
      subtitle: 'Portfolio',
      techTitle: 'Technologies and Frameworks',
      techSubtitle: 'Toolkit',
      all: 'All',
      fullstack: 'Full-stack',
      frontend: 'Frontend',
      backend: 'Backend',
      viewDemo: 'Live',
      viewRepo: 'Repo',
    },
    services: {
      title: 'How I Create Value',
      subtitle: 'Services',
    },
    experience: {
      title: 'Practical Expertise',
      subtitle: 'Timeline',
      present: 'Present',
    },
    contact: {
      title: 'Let\'s Build Something',
      subtitle: 'Get in Touch',
      description: 'I\'m always open to discussing new projects, creative ideas or opportunities to be part of your visions.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: 'Message Sent!',
      error: 'Error! Try again.',
    },
    footer: {
      rights: 'All rights reserved.',
      navigation: 'Navigation',
      resources: 'Resources',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      resume: 'Resume',
    }
  },
  it: {
    nav: {
      about: 'Chi Sono',
      projects: 'Progetti',
      services: 'Servizi',
      experience: 'Esperienza',
      contact: 'Contatti',
    },
    hero: {
      greeting: 'Architetto Digitale',
      status: 'DISPONIBILE PER PROGETTI',
      title: 'CREARE VALORE',
      subtitle: 'ATTRAVERSO L\'INNOVAZIONE',
      description: 'Sviluppatore Full-Stack specializzato in soluzioni web ad alte prestazioni e architetture digitali scalabili.',
      cta: 'Esplora i Lavori',
    },
    about: {
      title: 'Chi Sono',
      subtitle: 'La Mia Storia',
      description: 'Sono uno sviluppatore Full-Stack appassionato alla creazione di esperienze digitali significative. Con un background in architettura tecnica e un occhio attento al design, colmo il divario tra la complessa logica backend e le interfacce frontend intuitive.',
      passion: 'Scalabilità al primo posto',
      passionDesc: 'Progettare per la crescita è fondamentale. Utilizzo paradigmi moderni come Next.js, Python e Java per garantire che il tuo sistema si evolva con i tuoi utenti.',
    },
    projects: {
      title: 'Lavori Selezionati',
      subtitle: 'Portfolio',
      techTitle: 'Tecnologie e Framework',
      techSubtitle: 'Strumenti',
      all: 'Tutti',
      fullstack: 'Full-stack',
      frontend: 'Frontend',
      backend: 'Backend',
      viewDemo: 'Live',
      viewRepo: 'Repo',
    },
    services: {
      title: 'Come Creo Valore',
      subtitle: 'Servizi',
    },
    experience: {
      title: 'Esperienza Pratica',
      subtitle: 'Timeline',
      present: 'Presente',
    },
    contact: {
      title: 'Costruiamo Qualcosa',
      subtitle: 'Contattami',
      description: 'Sono sempre aperto a discutere nuovi progetti, idee creative o opportunità per far parte delle tue visioni.',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Messaggio',
      sending: 'Invio...',
      sent: 'Messaggio Inviato!',
      error: 'Errore! Riprova.',
    },
    footer: {
      rights: 'Tutti i diritti riservati.',
      navigation: 'Navigazione',
      resources: 'Risorse',
      privacy: 'Privacy Policy',
      terms: 'Termini di Servizio',
      resume: 'Resume',
    }
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
