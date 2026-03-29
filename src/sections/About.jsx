import React from 'react';
import { motion } from 'framer-motion';
import profile from '../data/profile.json';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-deep relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.01] to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-6">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold">About Me</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Professional <span className="text-white/40 italic font-light">Summary</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="glass-card p-10 md:p-16 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors">
               <div className="absolute top-0 left-0 w-1 h-full bg-accent-violet/20 group-hover:bg-accent-violet transition-all"></div>
               {profile.summary.split('\n\n').map((paragraph, index) => (
                 <p key={index} className="text-lg md:text-xl font-medium leading-[1.8] text-text-soft/60 mb-8 last:mb-0 hover:text-white transition-colors duration-500">
                   {paragraph}
                 </p>
               ))}
               <div className="absolute bottom-10 right-10 text-4xl font-black text-white/5 uppercase select-none group-hover:opacity-10 transition-opacity">Architect</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            {[
              { label: '4', sub: 'Years Experience', unit: 'EXP' },
              { label: '20', sub: 'Faster API Responses', unit: '%' },
              { label: '40', sub: 'Optimized Processing', unit: '%' },
              { label: '35', sub: 'Reduced Issues', unit: '%' }
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col justify-center p-10 border border-white/5 bg-white/5 rounded-[2rem] hover:bg-white hover:text-background-deep transition-all duration-500 ease-in-out cursor-default"
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-black">{stat.label}</span>
                  <span className="text-sm font-black tracking-widest opacity-40 uppercase">{stat.unit}</span>
                </div>
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 duration-500">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
