import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import profile from '../data/profile.json';

const Certification = () => {
  return (
    <section id="certification" className="section-padding bg-background-deep relative overflow-hidden px-8">
      <div className="container mx-auto px-6 relative z-10 lg:px-24 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold tracking-[0.3em]">Credentials</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Professional <span className="text-white/40 italic font-light">Validation</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-accent-green/30 flex group h-full items-center gap-8 transition-all duration-700 hover:scale-[1.03] shadow-none hover:shadow-2xl"
            >
              <div className="p-5 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:bg-accent-green group-hover:text-background-deep transition-all duration-700">
                <Award size={28} />
              </div>
              <p className="text-sm font-black text-text-soft/60 group-hover:text-white transition-all leading-relaxed uppercase tracking-widest">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
