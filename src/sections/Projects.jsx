import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { ExternalLink, Monitor } from 'lucide-react';
import profile from '../data/profile.json';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background-deep relative overflow-hidden">
      <div className="container mx-auto relative z-10 px-6 max-w-7xl h-full">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="flex flex-col items-center mb-12 text-center"
        >
          <div className="badge mb-6 uppercase tracking-widest text-[0.6rem] font-bold tracking-[0.3em]">Portfolio</div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight" style={{ fontFamily: 'Outfit' }}>
             Selected <span className="text-white/40 italic font-light">Works</span>
          </h2>
          <div className="accent-line"></div>
        </motion.div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-20"
        >
          {profile.projects.map((project, index) => (
            <SwiperSlide key={index} className="max-w-[400px] lg:max-w-[550px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-10 md:p-14 relative h-full flex flex-col group overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 hover:shadow-2xl"
              >
                 <div className="absolute top-0 right-0 p-10 text-white/5 group-hover:text-accent-violet/10 transition-colors">
                    <Monitor size={100} />
                 </div>
                 
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, ti) => (
                    <span key={ti} className="badge tracking-widest text-[0.55rem]">
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tighter text-white group-hover:text-accent-violet transition-colors">{project.title}</h3>
                
                <ul className="space-y-4 mb-10 text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-all">
                  {project.details.map((detail, di) => (
                    <li key={di} className="flex gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet group-hover:bg-white flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-3 font-black uppercase text-[0.6rem] tracking-[0.3em] text-accent-violet hover:text-white transition-all group-hover:translate-x-3 duration-500 mt-auto">
                    View Project <ExternalLink size={14} />
                </button>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
