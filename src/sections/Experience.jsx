import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import profile from '../data/profile.json';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background-slate/5 relative overflow-hidden px-8">
      <div className="container mx-auto px-6 relative overflow-hidden max-w-7xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold">Career Timeline</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Professional <span className="text-white/40 italic font-light">Experience</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="relative border-l-2 border-white/5 ml-4 md:mx-auto md:max-w-4xl space-y-20">
          {profile.experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-12 group"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full group-hover:scale-150 transition-transform duration-500 shadow-xl shadow-white/20 border-2 border-background-deep z-10 animate-pulse">
              </div>

              <div className="glass-card p-10 md:p-12 relative transition-all duration-700 hover:scale-[1.02] border border-white/5 hover:border-white/20 shadow-none hover:shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-white group-hover:text-background-deep transition-all duration-700">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{job.role}</h3>
                      <p className="text-accent-violet font-bold text-sm tracking-widest uppercase">{job.company}</p>
                    </div>
                  </div>
                  <div className="px-5 py-2 bg-white/5 rounded-full border border-white/10 font-black text-[0.6rem] uppercase tracking-widest text-white/40 group-hover:bg-white group-hover:text-background-deep transition-colors">
                    {job.dates}
                  </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-6">
                  {job.highlights.map((item, hi) => (
                    <li key={hi} className="flex gap-3 text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0 group-hover:bg-white"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
