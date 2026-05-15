import { motion } from 'motion/react';
import { Section, Card } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { TRANSLATED_PROJECTS, TECH_SKILLS, SOCIAL_LINKS } from '@/src/constants';
import { Button } from '../ui/Layout';
import { ArrowUpRight, Github, ExternalLink, Filter } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/src/lib/LanguageContext';

export function About() {
  const { t, language } = useLanguage();
  return (
    <Section id="about" subtitle={t('about.subtitle')} title={t('about.title')}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square max-w-md mx-auto lg:mx-0 group cursor-pointer"
        >
          {/* Dashboard Aside style Profile */}
          <div className="absolute inset-0 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-sm shadow-xl shadow-cyan-500/5 -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
          <div className="relative h-full w-full rounded-2xl overflow-hidden bg-slate-900 p-4 border border-slate-800">
             <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-500 p-1">
                <img 
                   src="/images/christiansaccani.jpeg" 
                   alt="Christian Saccani" 
                   className="w-full h-full rounded-2xl object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 bg-slate-950"
                   referrerPolicy="no-referrer"
                />
             </div>
          </div>
          
          {/* Info Card Overlay */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 bg-cyan-500 text-slate-950 p-6 rounded-2xl shadow-2xl hidden md:block"
          >
            <p className="text-3xl font-bold mb-0 leading-none">4+</p>
            <p className="text-[9px] uppercase tracking-wider font-extrabold whitespace-nowrap">
               {language === 'en' ? 'Years Experience' : 'Anni di Esperienza'}
            </p>
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-300">
            {t('about.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400">
            <div className="space-y-4">
              <h4 className="text-white font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">1</span>
                Problem Solving
              </h4>
              <p className="text-sm leading-relaxed italic">
                 {language === 'en' ? "I don't just write code. When I build, I aim for the best functional solution." : "Non scrivo solo codice. Quando costruisco, punto alla migliore soluzione funzionale."}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">2</span>
                Product Mindset
              </h4>
              <p className="text-sm leading-relaxed italic">
                {language === 'en' ? "Every line of code is written with the end product and business ROI in mind." : "Ogni riga di codice è scritta pensando al prodotto finale e al ROI aziendale."}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">3</span>
                Full-Stack Mastery
              </h4>
              <p className="text-sm leading-relaxed italic">
                {language === 'en' ? "From optimized MySQL schemas to fluid React interfaces." : "Dagli schemi MySQL ottimizzati alle interfacce React fluide."}
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-medium flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center text-[10px]">4</span>
                {t('about.passion')}
              </h4>
              <p className="text-sm leading-relaxed italic">
                {t('about.passionDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function TechStack() {
  const { t } = useLanguage();
  return (
    <Section id="tech" subtitle={t('projects.techSubtitle')} title={t('projects.techTitle')}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TECH_SKILLS.map((skill, index) => (
          <Card key={skill.name} className="p-8 group">
            <div className="mb-6 flex justify-between items-start">
              <div className="p-3 bg-slate-800/50 rounded-xl border border-slate-700 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all duration-300">
                <Icon name={skill.icon} size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{skill.name}</h3>
            <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
              {skill.description}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Projects() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState('All');
  
  const categories = [
    { id: 'All', label: t('projects.all') },
    { id: 'Full-stack', label: t('projects.fullstack') },
    { id: 'Frontend', label: t('projects.frontend') }
  ];

  const projects = TRANSLATED_PROJECTS[language];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <Section id="projects" subtitle={t('projects.subtitle')} title={t('projects.title')}>
      {/* Filtering Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-16 pb-6 border-b border-slate-800">
        <div className="flex items-center gap-2 text-slate-500 mr-4">
          <Filter size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">{language === 'en' ? 'Filter' : 'Filtra'}:</span>
        </div>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer",
              filter === cat.id 
                ? "bg-cyan-500 text-slate-950" 
                : "text-slate-500 hover:text-white bg-slate-900/50 border border-slate-800"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="group flex flex-col hover:bg-slate-800/50">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-500" />
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-cyan-500/10 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20">
                  {project.category}
                </span>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[8px] font-bold uppercase py-0.5 px-1.5 rounded bg-slate-800 text-slate-500">#{tag}</span>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="space-y-4 mb-8 pt-6 border-t border-slate-800">
                <div>
                   <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 mb-1">{language === 'en' ? 'Problem' : 'Problema'}</p>
                   <p className="text-[10px] text-slate-500 italic line-clamp-2">{project.problemSolved}</p>
                </div>
                <div>
                   <p className="text-[9px] font-bold uppercase tracking-widest text-slate-600 mb-1">{language === 'en' ? 'Result' : 'Risultato'}</p>
                   <p className="text-[10px] text-slate-500 italic line-clamp-2">{project.results}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">               
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" variant="outline" className="w-full text-[9px]">
                    {t('projects.viewDemo')} <ExternalLink size={10} />
                  </Button>
                </a>
                <a href={project.links.github === '#' ? SOCIAL_LINKS.github : project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button size="sm" variant="outline" className="w-full text-[9px]">
                    {t('projects.viewRepo')} <Github size={10} />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
         <div className="py-20 text-center text-neutral-600">
            <p className="text-xl font-light tracking-widest uppercase">{language === 'en' ? 'No projects found in this category' : 'Nessun progetto trovato in questa categoria'}</p>
         </div>
      )}
    </Section>
  );
}
