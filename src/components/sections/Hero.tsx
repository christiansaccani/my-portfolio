import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '../ui/Layout';
import { ArrowRight, Download, Mail, Globe, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/src/lib/LanguageContext';

export function Hero() {
  const { scrollY } = useScroll();
  const { language, t } = useLanguage();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background with parallax effect */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
          alt="Abstract tech background"
          className="w-full h-full object-cover opacity-10 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <div className="text-[10px] flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700 backdrop-blur-sm shadow-xl shadow-cyan-500/5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-slate-300 font-bold tracking-[0.2em] uppercase">{t('hero.status')}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-white"
        >
          Christian <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Saccani</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl font-medium text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-xs block mb-4">{t('hero.greeting')}</span>
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" variant="white" className="bg-white text-slate-950" onClick={() => scrollToSection('projects')}>
            {t('hero.cta')}
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-slate-600 font-bold">{language === 'en' ? 'Scroll' : 'Scorri'}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-800 to-transparent" />
      </motion.div>
    </section>
  );
}

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  React.useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: t('nav.about'), href: '#home' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6',
          isScrolled || isMenuOpen ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-[0.1em] uppercase group flex items-center gap-2 cursor-pointer">
            <div className="rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold px-4 py-2">
              CS Portfolio
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white hover:text-cyan-400"
            >
              <Globe size={14} />
              {language === 'en' ? 'English' : 'Italiano'}
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
              className="text-white"
            >
              <Globe size={16} />
            </Button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0,
          x: isMenuOpen ? 0 : '100%' 
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-slate-950 md:hidden flex flex-col items-center justify-center gap-8"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-bold uppercase tracking-[0.2em] text-white hover:text-cyan-400 transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="mt-8 flex flex-col items-center gap-4">
           <Button 
              variant="outline"
              size="lg"
              onClick={() => {
                setLanguage(language === 'en' ? 'it' : 'en');
                setIsMenuOpen(false);
              }}
            >
              <Globe size={16} className="mr-2" />
              {language === 'en' ? 'Switch to Italian' : 'Passa a Inglese'}
            </Button>
            <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
              CLOSE
            </Button>
        </div>
      </motion.div>
    </>
  );
}
