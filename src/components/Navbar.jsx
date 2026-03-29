import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import profile from '../data/profile.json';

const sections = [
  { name: 'About', to: 'about' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Skills', to: 'skills' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out px-8 md:px-16 ${
        isScrolled ? 'py-4 bg-background-deep/80 backdrop-blur-3xl' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center bg-white/5 border border-white/10 rounded-full px-8 py-4 px-lg-12 shadow-2xl backdrop-blur-xl">
        <Link to="hero" smooth={true} className="cursor-pointer group flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-background-deep group-hover:scale-110 transition-transform duration-500">
            {profile.name[0]}
          </div>
          <span className="text-sm font-black tracking-[0.3em] uppercase hidden md:inline-block">
            {profile.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center space-x-12">
          {sections.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              smooth={true}
              duration={1000}
              spy={true}
              activeClass="!text-white opacity-100"
              className="nav-link"
            >
              {section.name}
            </Link>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden p-3 hover:bg-white/5 rounded-full transition-colors"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-background-deep z-[101] flex flex-col items-center justify-center space-y-12 transition-all duration-700 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <button onClick={() => setIsOpen(false)} className="absolute top-12 right-12 p-4 text-accent-violet">
          <X size={40} />
        </button>
        {sections.map((section) => (
          <Link
            key={section.to}
            to={section.to}
            smooth={true}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-black uppercase tracking-[0.2em] hover:text-accent-violet transition-colors"
          >
            {section.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
