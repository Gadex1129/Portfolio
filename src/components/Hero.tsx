import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = ['Full-Stack Engineer', 'Web3 Engineer', 'Blockchain Developer', 'UI/UX Designer'];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
    //eslint-disable-next-line
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
      <div className="particle-background" />
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 p-1 shadow-2xl shadow-emerald-500/20">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-br from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                LH
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
          Leono Harber DDS
        </h1>

        <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 h-16 flex items-center justify-center">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            {roles[roleIndex].substring(0, charIndex)}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting exceptional digital experiences with modern technologies.
          Specialized in building scalable web applications and decentralized solutions.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 border-2 border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-slate-800 border-2 border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:flex.lucky555@gmail.com"
            className="p-3 rounded-full bg-slate-800 border-2 border-slate-700 text-slate-300 hover:border-emerald-500 hover:text-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent text-emerald-400 font-semibold rounded-full border-2 border-emerald-500 hover:bg-emerald-500/10 hover:shadow-lg transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-slate-500 hover:text-emerald-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
