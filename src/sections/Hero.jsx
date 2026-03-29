import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-scroll';
import profile from '../data/profile.json';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#0F172A]">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-accent-violet/10 blur-[150px] rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-accent-green/5 blur-[150px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 text-center lg:text-left min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-[3rem] border border-white/5 p-2 relative shadow-2xl glass-card transition-all duration-700 hover:rotate-3 group">
            <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex items-center justify-center overflow-hidden relative">
              {profile.profileImage ? (
                <img src={profile.profileImage} alt={profile.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <span className="text-6xl md:text-8xl font-black text-white/5">{profile.name[0]}</span>
              )}
            </div>
          </div>
        </motion.div>

        <div className="space-y-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start"
          >

            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black leading-[1.1] mb-8 tracking-tighter text-white" style={{ fontFamily: 'Outfit' }}>
              {profile.name}
            </h1>

            <p className="text-lg md:text-xl font-medium text-text-soft/60 leading-relaxed mb-10 max-w-xl">
              Building scalable <span className="text-white">full-stack systems</span> with ASP.NET Core & React.js, focusing on performance-driven solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-[0.6rem] font-black uppercase tracking-[0.2em] text-white/40">
              <span className="flex items-center gap-2 border border-white/5 py-2.5 px-5 rounded-full hover:border-white/20 transition-colors">
                <MapPin size={12} className="text-accent-violet" /> {profile.location}
              </span>
              <span className="flex items-center gap-2 border border-white/5 py-2.5 px-5 rounded-full hover:border-white/20 transition-colors">
                <Mail size={12} className="text-accent-violet" /> {profile.email}
              </span>
              <span className="flex items-center gap-2 border border-white/5 py-2.5 px-5 rounded-full hover:border-white/20 transition-colors">
                <Phone size={12} className="text-accent-green" /> {profile.phone}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-6"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link to="projects" smooth={true} duration={1200} className="btn-primary w-full sm:w-auto text-center cursor-pointer min-w-[200px] flex items-center justify-center gap-2 group text-sm">
                View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href={profile.resumeLink} download className="btn-outline w-full sm:w-auto text-center cursor-pointer min-w-[200px] flex items-center justify-center gap-2 group text-sm">
                Resume <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6 ml-lg-4">
              {[
                { icon: Linkedin, url: profile.linkedin },
                { icon: Github, url: profile.github },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white/5 rounded-full border border-white/5 hover:bg-white hover:text-background-deep hover:-translate-y-1 transition-all duration-500 shadow-xl"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default Hero;
