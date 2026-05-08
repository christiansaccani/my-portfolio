/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Navbar, Hero } from './components/sections/Hero';
import { About, TechStack, Projects } from './components/sections/PortfolioContent';
import { Services, Experience } from './components/sections/ProfessionalDetails';
import { Contact, Footer } from './components/sections/FooterContact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-x-hidden">
      <div className="immersive-bg" />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 240 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-[1px] bg-white"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-[10px] uppercase tracking-[0.5em] text-center font-light"
              >
                Initialising Experience
              </motion.p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Services />
            <Experience />
            {/* <DetailedSkills /> */}
            {/* <Testimonials /> */}
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
