import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import profile from '../data/profile.json';

const Footer = () => {
  return (
    <footer className="py-24 px-8 md:px-16 lg:px-32 bg-background-deep relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 text-left mb-24">
          <div className="space-y-12 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black bg-white bg-clip-text text-transparent tracking-tighter" style={{ fontFamily: 'Outfit' }}>
              Let's craft the <span className="opacity-40 italic">Future</span>.
            </h2>
            <p className="max-w-md text-sm text-white/30 leading-relaxed font-black uppercase tracking-[0.2em]">
              4 years of experience building scalable systems with ASP.NET Core & React.js.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-20">
            {[
              { label: 'Map', items: [{ name: 'Home', to: 'hero' }, { name: 'About', to: 'about' }, { name: 'Experience', to: 'experience' }, { name: 'Projects', to: 'projects' }], isScroll: true },
              { label: 'Social', items: [{ name: 'LinkedIn', url: profile.linkedin }, { name: 'GitHub', url: profile.github }], isScroll: false },
            ].map((col, i) => (
              <div key={i} className="space-y-8">
                <h4 className="text-[0.6rem] font-black text-accent-violet uppercase tracking-[0.4em] opacity-40">{col.label}</h4>
                <ul className="space-y-4 font-black text-[0.65rem] uppercase tracking-[0.25em] text-white/30">
                  {col.items.map((item, ii) => (
                    <li key={ii} className="group">
                      {col.isScroll ? (
                        <Link to={item.to} smooth={true} duration={1000} className="group-hover:text-white transition-all cursor-pointer flex items-center gap-2">
                           <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                           {item.name}
                        </Link>
                      ) : (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-all cursor-pointer flex items-center gap-2">
                           <span className="w-1 h-1 bg-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></span>
                           {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 font-black text-[0.6rem] text-white/20 uppercase tracking-[0.4em]">
          <p>© {new Date().getFullYear()} {profile.name}. BUILT WITH PRECISION.</p>
          <div className="flex items-center gap-12">
             <Link to="hero" smooth={true} duration={1500} className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-background-deep transition-all duration-700 cursor-pointer shadow-none hover:shadow-2xl">
                <ArrowUp size={20} />
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
