import { motion } from 'motion/react';
import { Section, Card, Button } from '../ui/Layout';
import { TESTIMONIALS, SOCIAL_LINKS } from '@/src/constants';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

/*export function Testimonials() {
  return (
    <Section id="testimonials" subtitle="Feedback" title="Trusted by Industry Leaders">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <Card key={t.id} className="p-10 flex flex-col justify-between">
            <div>
               <MessageSquare className="text-neutral-800 mb-8" size={40} strokeWidth={1} />
               <p className="text-lg font-light leading-relaxed mb-10 italic text-neutral-300">
                 "{t.content}"
               </p>
            </div>
            <div className="flex items-center gap-4 pt-8 border-t border-neutral-900">
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-12 h-12 rounded-full grayscale border border-neutral-800"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-medium">{t.name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600">{t.role} @ {t.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}*/

export function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Section id="contact" subtitle="Connection" title="Let's Build Something Exceptional">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <p className="text-2xl font-light text-neutral-400 max-w-md">
            Interested in collaboration or have a project that needs a expert hand? 
            Reach out via my socials or the contact form.
          </p>
          
          <div className="space-y-6">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-6 group">
              <div className="p-4 bg-neutral-900 rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">Email</p>
                <p className="text-xl font-light">{SOCIAL_LINKS.email}</p>
              </div>
            </a>
            
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="p-4 bg-neutral-900 rounded-full group-hover:bg-blue-600 transition-all">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">LinkedIn</p>
                <p className="text-xl font-light">/in/christiansaccani</p>
              </div>
            </a>
            
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
              <div className="p-4 bg-neutral-900 rounded-full group-hover:bg-neutral-700 transition-all">
                <Github size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold mb-1">GitHub</p>
                <p className="text-xl font-light">/christiansaccani</p>
              </div>
            </a>
          </div>
        </div>

        <Card className="p-10 lg:p-16 border-neutral-900">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1">Message</label>
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Briefly describe your project..."
                className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-6 py-4 focus:outline-none focus:border-white transition-colors resize-none"
                required
              />
            </div>
            
            <Button 
               type="submit" 
               size="lg" 
               className="w-full"
               disabled={formState === 'sending' || formState === 'sent'}
            >
              {formState === 'idle' && (
                <>Send Message <Send size={18} /></>
              )}
              {formState === 'sending' && (
                <>Sending...</>
              )}
              {formState === 'sent' && (
                <>Message Sent Successfully!</>
              )}
              {formState === 'error' && (
                <>Error Sending Message. Retry?</>
              )}
            </Button>
            {formState === 'sent' && (
              <p className="text-center text-xs text-green-500 font-bold uppercase tracking-widest animate-pulse">
                I'll get back to you shortly!
              </p>
            )}
          </form>
        </Card>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-neutral-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-light tracking-[0.3em] uppercase block mb-4 cursor-pointer">
              Christian <span className="text-neutral-600">Saccani</span>
            </a>
            <p className="text-neutral-500 text-sm max-w-xs font-light">
              Crafting scalable digital experiences with precision and passion.
            </p>
          </div>
          
          <div className="flex gap-12">
             <div className="space-y-4">
               <p className="text-[10px] uppercase tracking-widest text-neutral-700 font-bold">Navigation</p>
               <ul className="space-y-2 text-xs text-neutral-400">
                 <li><a href="#home" className="hover:text-white transition-colors cursor-pointer">Home</a></li>
                 <li><a href="#projects" className="hover:text-white transition-colors cursor-pointer">Works</a></li>
                 <li><a href="#services" className="hover:text-white transition-colors cursor-pointer">Services</a></li>
               </ul>
             </div>
             <div className="space-y-4">
               <p className="text-[10px] uppercase tracking-widest text-neutral-700 font-bold">Resources</p>
               <ul className="space-y-2 text-xs text-neutral-400">
                 <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Resume</a></li>
               </ul>
             </div>
          </div>
          
          <div className="flex gap-4">
             {[
               { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
               { Icon: Github, href: SOCIAL_LINKS.github },
               { Icon: Mail, href: `mailto:${SOCIAL_LINKS.email}` }
             ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center text-neutral-500 hover:text-white hover:border-white transition-all cursor-pointer">
                  <Icon size={18} />
                </a>
             ))}
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-neutral-950 flex flex-col md:flex-row justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-neutral-700">
          <p>© 2026 Christian Saccani. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
