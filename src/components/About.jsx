import React from 'react';
import stackImage from '../assets/about/yusuf-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 flex flex-col items-center justify-center gap-3 w-32 h-32 md:w-36 md:h-36 transform hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 group cursor-pointer hover:border-[#3776AB]">
    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[swipe_1s_ease-in-out_forwards] z-0 pointer-events-none transition-all duration-700 group-hover:translate-x-[150%]"></div>
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      alt="Python" 
      className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 relative z-10" 
    />
    <span className="text-xs font-black text-white uppercase tracking-widest group-hover:text-[#3776AB] transition-colors relative z-10">Python</span>
  </div>
);

const ReactIcon = () => (
  <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 flex flex-col items-center justify-center gap-3 w-32 h-32 md:w-36 md:h-36 transform hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 group cursor-pointer hover:border-[#61dafb]">
    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[swipe_1s_ease-in-out_forwards] z-0 pointer-events-none transition-all duration-700 group-hover:translate-x-[150%]"></div>
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      alt="React 19" 
      className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180 relative z-10" 
    />
    <span className="text-xs font-black text-white uppercase tracking-widest group-hover:text-[#61dafb] transition-colors relative z-10">React 19</span>
  </div>
);

const JavaIcon = () => (
  <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] p-4 flex flex-col items-center justify-center gap-3 w-32 h-32 md:w-36 md:h-36 transform hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-all duration-300 group cursor-pointer hover:border-[#EA2D2E]">
    <div className="absolute inset-0 -translate-x-[150%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[swipe_1s_ease-in-out_forwards] z-0 pointer-events-none transition-all duration-700 group-hover:translate-x-[150%]"></div>
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" 
      alt="Java" 
      className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110 relative z-10" 
    />
    <span className="text-xs font-black text-white uppercase tracking-widest group-hover:text-[#EA2D2E] transition-colors relative z-10">Java</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src="/cartoon1.png" 
                  alt="Poobathi Rajan — AI/ML & Full-Stack Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-6 md:gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600">
              <JavaIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
