import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import profile from '../data/profile.json';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background-deep relative overflow-hidden px-8">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-24 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold tracking-[0.3em]">Communication</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Let's <span className="text-white/40 italic font-light">Collaborate</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <p className="text-lg md:text-2xl text-text-soft/40 leading-relaxed font-black uppercase tracking-widest max-w-lg">
              Open for <span className="text-white">Full Stack</span> opportunities and technical collaborations.
            </p>

            <div className="space-y-10">
              {[
                { icon: Mail, label: 'Email', value: profile.email, color: 'text-accent-violet' },
                { icon: Phone, label: 'Phone', value: profile.phone, color: 'text-accent-green' },
                { icon: MapPin, label: 'Location', value: profile.location, color: 'text-accent-violet' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-8 group">
                  <div className={`p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white group-hover:text-background-deep transition-all duration-700`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[0.6rem] font-black text-white/30 uppercase tracking-[0.3em] mb-1">{item.label}</h4>
                    <p className="text-lg font-black group-hover:text-accent-violet transition-colors uppercase tracking-widest">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="glass-card p-12 md:p-16 space-y-8"
             onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[0.65rem] font-black text-white/30 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-background-deep/50 border border-white/5 p-5 rounded-2xl focus:border-white focus:bg-white/5 outline-none transition-all placeholder:text-white/10" placeholder="John Doe" />
               </div>
               <div className="space-y-3">
                  <label className="text-[0.65rem] font-black text-white/30 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-background-deep/50 border border-white/5 p-5 rounded-2xl focus:border-white focus:bg-white/5 outline-none transition-all placeholder:text-white/10" placeholder="john@example.com" />
               </div>
            </div>
            
            <div className="space-y-3">
               <label className="text-[0.65rem] font-black text-white/30 uppercase tracking-widest">Message</label>
               <textarea rows="5" className="w-full bg-background-deep/50 border border-white/5 p-5 rounded-2xl focus:border-white focus:bg-white/5 outline-none transition-all placeholder:text-white/10" placeholder="Your project details..."></textarea>
            </div>

            <button className="btn-primary w-full flex items-center justify-center gap-3 text-sm">
               Send Message <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
