import { motion } from 'motion/react';
import { Section, Card } from '../ui/Layout';
import { Icon } from '../ui/Icon';
import { TRANSLATED_SERVICES, TRANSLATED_EXPERIENCES, GENERAL_SKILLS } from '@/src/constants';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/src/lib/LanguageContext';

export function Services() {
  const { language, t } = useLanguage();
  const services = TRANSLATED_SERVICES[language];

  return (
    <Section id="services" subtitle={t('services.subtitle')} title={t('services.title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="p-10 group relative border-neutral-900/50">
            <div className="mb-8 p-4 bg-neutral-900/50 rounded-2xl w-fit group-hover:bg-white group-hover:text-black transition-all duration-500">
              <Icon name={service.icon} size={32} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-light mb-4">{service.title}</h3>
            <p className="text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
              {service.description}
            </p>
            
            {/* Background number decoration */}
            <span className="absolute top-6 right-8 text-5xl font-bold opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
              0{service.id}
            </span>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  const { language, t } = useLanguage();
  const experiences = TRANSLATED_EXPERIENCES[language];

  return (
    <Section id="experience" subtitle={t('experience.subtitle')} title={t('experience.title')}>
      <div className="max-w-4xl mx-auto space-y-12 relative before:absolute before:hidden md:before:block before:left-1/2 before:top-0 before:bottom-0 before:w-[1px] before:bg-neutral-900">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
              "relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16",
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            )}
          >
            {/* Timeline Dot */}
            <div className="absolute hidden md:block md:left-1/2 md:-translate-x-1/2 top-0 w-[11px] h-[11px] rounded-full bg-white border-4 border-black z-10" />

            {/* Date and Company */}
            <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2 block">{exp.duration}</span>
              <h3 className="text-2xl font-light mb-1">{exp.company}</h3>
              <p className="text-white/60 font-medium tracking-wide uppercase text-[10px]">{exp.role}</p>
            </div>

            {/* Description */}
            <div className={cn(
              "bg-neutral-900/30 p-8 rounded-2xl border border-neutral-900/50 backdrop-blur-sm group hover:border-neutral-800 transition-colors",
              index % 2 === 0 ? "md:order-2" : "md:order-1"
            )}>
              <span className="inline-block px-3 py-1 bg-neutral-800 text-[10px] uppercase tracking-widest rounded-full mb-4 text-neutral-400">
                {exp.type}
              </span>
              <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* export function DetailedSkills() {
  return (
    <Section id="skills" subtitle="Competence" title="Technical Mastery">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          {GENERAL_SKILLS.map((skill, index) => (
            <div key={skill.name} className="space-y-4">
              <div className="flex justify-between items-end">
                <h4 className="text-sm uppercase tracking-widest font-medium text-neutral-400">{skill.name}</h4>
                <span className="text-2xl font-light">{skill.level}%</span>
              </div>
              <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={cn(
                    "h-full rounded-full transition-all duration-300",
                    index % 2 === 0 ? "bg-cyan-500" : "bg-indigo-500"
                  )}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Clean Code', value: '100%' },
            { label: 'Cloud Scalability', value: 'High' },
            { label: 'Responsive Design', value: 'Native' },
            { label: 'Security Protocols', value: 'Modern' }
          ].map((stat) => (
            <div key={stat.label} className="p-8 border border-neutral-900 rounded-3xl flex flex-col justify-center items-center text-center group hover:bg-neutral-900/20 transition-all cursor-pointer">
              <p className="text-4xl md:text-5xl font-light mb-4 text-white group-hover:scale-110 transition-transform duration-500">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
*/