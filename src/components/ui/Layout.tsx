import { motion, HTMLMotionProps } from 'motion/react';
import React, { ReactNode } from 'react';
import { cn } from '@/src/lib/utils';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
  title,
  subtitle,
  dark = true
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-32 overflow-hidden',
        dark ? 'bg-transparent' : 'bg-slate-900/30',
        className
      )}
    >
      <div className={cn('container mx-auto px-6 relative z-10', containerClassName)}>
        {(title || subtitle) && (
          <div className="mb-10 md:mb-16 max-w-2xl">
            {subtitle && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 block mb-4"
              >
                {subtitle}
              </motion.span>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              >
                {title}
              </motion.h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cyan' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-white text-slate-950 hover:bg-slate-200 shadow-lg shadow-white/5 font-bold',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 border border-slate-800 font-bold',
    outline: 'bg-transparent border border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white transition-all font-bold',
    ghost: 'bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-bold',
    cyan: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400 shadow-lg shadow-cyan-500/20 font-bold',
    white: 'bg-white text-slate-950 hover:bg-slate-200 font-bold'
  };

  const sizes = {
    sm: 'px-4 py-2 text-[10px] uppercase tracking-widest',
    md: 'px-6 py-3 text-xs uppercase tracking-widest',
    lg: 'px-8 py-4 text-xs font-bold uppercase tracking-widest'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className={cn(
        'rounded-lg transition-all duration-400 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface CardProps extends HTMLMotionProps<'div'> {
  hover?: boolean;
  className?: string;
}

export function Card({
  children,
  className,
  hover = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, borderColor: '#22d3ee80' } : {}}
      transition={{ duration: 0.4 }}
      className={cn(
        'bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-400 shadow-xl shadow-cyan-500/5 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
