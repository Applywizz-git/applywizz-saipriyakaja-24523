import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import profile from '../data/profile.json';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-background-slate/5 relative overflow-hidden px-8">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold tracking-[0.3em]">Foundation</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Academic <span className="text-white/40 italic font-light">Background</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        {profile.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 md:p-20 relative group hover:border-accent-violet/40 cursor-default flex flex-col items-center text-center overflow-hidden transition-all duration-700"
          >
            <div className="absolute top-0 right-0 p-12 text-white/5 group-hover:text-accent-violet/20 transition-all select-none">
              <GraduationCap size={150} />
            </div>

            <div className="flex flex-col gap-10 relative z-10 items-center">
              <span className="badge tracking-widest text-[0.6rem]">
                Tech Foundation
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-4xl tracking-tighter uppercase group-hover:scale-110 transition-transform duration-700">
                {edu.degree}
              </h3>
              <p className="text-lg md:text-2xl font-bold bg-gradient-to-r from-accent-violet to-accent-green bg-clip-text text-transparent opacity-80 group-hover:opacity-100 transition-opacity">
                {edu.institution}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
