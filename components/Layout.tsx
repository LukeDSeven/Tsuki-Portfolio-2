import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path: string, sectionId?: string) => {
    setMobileMenuOpen(false);
    if (path === '/') {
      if (pathname !== '/') {
        navigate('/');
        setTimeout(() => {
           if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
           else window.scrollTo(0, 0);
        }, 100);
      } else {
        if (sectionId) document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo(0, 0);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper text-ink">
      {/* Navbar - Minimal & Top Aligned */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 mix-blend-difference text-white">
        <div className="flex items-start justify-between">
          
          {/* Logo - Updated to just TSUKI */}
          <div 
            className="text-2xl font-display font-bold tracking-tighter cursor-pointer uppercase leading-none"
            onClick={() => handleNavClick('/')}
          >
            Tsuki
          </div>

          {/* Desktop Nav - Split */}
          <div className="hidden md:flex gap-12 font-mono text-sm uppercase tracking-widest">
            <button onClick={() => handleNavClick('/', 'work')} className="hover:text-violet-400 transition-colors">Featured</button>
            <button onClick={() => handleNavClick('/', 'services-section')} className="hover:text-violet-400 transition-colors">Services</button>
            <button onClick={() => handleNavClick('/', 'about-section')} className="hover:text-violet-400 transition-colors">Studio</button>
          </div>

          {/* Right Action */}
          <div className="hidden md:block">
             <button 
               onClick={() => navigate('/contact')}
               className="font-mono text-sm uppercase tracking-widest hover:text-violet-400 transition-colors flex items-center gap-2"
             >
               Commission Us <ArrowUpRight size={14} />
             </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-paper text-ink z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          style={{ mixBlendMode: 'normal' }}
        >
          <button onClick={() => handleNavClick('/', 'work')} className="text-5xl font-display font-bold uppercase hover:italic">Work</button>
          <button onClick={() => handleNavClick('/', 'services-section')} className="text-5xl font-display font-bold uppercase hover:italic">Services</button>
          <button onClick={() => handleNavClick('/', 'about-section')} className="text-5xl font-display font-bold uppercase hover:italic">Studio</button>
          <button onClick={() => handleNavClick('/contact')} className="text-5xl font-display font-bold uppercase hover:italic text-violet-600">Contact</button>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-paper pt-24 pb-8 px-6 border-t border-black/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
             <div>
               <h2 className="font-display text-8xl md:text-[10rem] font-bold leading-none tracking-tighter uppercase">
                 Tsuki
               </h2>
             </div>
             <div className="flex flex-col justify-end items-start md:items-end font-mono text-sm">
               <div className="mb-8 space-y-2 text-right">
                  <p>Based in Brazil</p>
                  <p className="opacity-50">DM for inquiries</p>
               </div>
               <div className="flex gap-6 uppercase tracking-widest">
                  <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-violet-600">Instagram</a>
                  <a href={SITE_CONFIG.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-violet-600">Twitter</a>
               </div>
             </div>
          </div>
          
          <div className="flex justify-between items-end border-t border-black/10 pt-4">
            <div className="font-mono text-xs text-black/40 uppercase">
              © {new Date().getFullYear()} Tsuki Studio.
            </div>
            <div className="font-hand text-xl text-violet-600 -rotate-3">
              Crafted with soul.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};