import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background-slate/5 relative overflow-hidden px-8">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold tracking-[0.3m]">Tech Stack</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Expertise <span className="text-white/40 italic font-light">& Tooling</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(profile.technical_skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card hover:border-accent-violet/30 p-10 flex flex-col group h-full transition-all duration-700 hover:scale-[1.03] shadow-none hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="w-1.5 h-8 bg-gradient-to-b from-accent-violet to-accent-green rounded-full group-hover:scale-y-125 transition-transform duration-700"></span>
                <h3 className="text-lg font-black text-white uppercase tracking-widest select-none">{category}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map((skill, si) => (
                  <span
                    key={si}
                    className="badge tracking-widest text-[0.55rem] hover:bg-white hover:text-background-deep transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
