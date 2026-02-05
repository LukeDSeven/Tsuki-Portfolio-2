import React, { useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

// CONFIGURAÇÃO DO VÍDEO
// Assumindo que o vídeo está na raiz da pasta public com o nome 'video.mp4'
const BACKGROUND_VIDEO_URL = "/video.mp4";

export const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - width / 2) / width;
    const y = (e.clientY - height / 2) / height;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-[#E8E8E6] overflow-hidden py-20"
    >
      {/* SVG Clip Path Definition */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            {/* Organic/Rough Rectangle Shape */}
            <path d="M0.04 0.12 C 0.15 0.02 0.35 -0.01 0.55 0.02 C 0.75 0.05 0.96 0.08 0.98 0.25 C 1.00 0.45 0.97 0.65 0.94 0.85 C 0.92 0.95 0.85 0.99 0.65 0.98 C 0.45 0.97 0.25 0.99 0.10 0.92 C 0.02 0.88 -0.02 0.65 0.01 0.45 C 0.02 0.30 0.00 0.20 0.04 0.12 Z" />
          </clipPath>
        </defs>
      </svg>

      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}
      />

      <div className="relative z-10 w-full max-w-[1800px] px-4 md:px-6 flex flex-col items-center justify-center">
        
        {/* Container do Vídeo Mascarado via SVG */}
        <div 
          className="relative w-full max-w-[98vw] md:max-w-[96vw] aspect-[16/9] md:aspect-[2.6/1] transition-transform duration-700 ease-out pointer-events-none"
          style={{ 
            transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) scale(1.02)` 
          }}
        >
          <div 
             className="w-full h-full flex items-center justify-center transition-transform duration-500 relative bg-black/5"
             style={{
               clipPath: 'url(#hero-clip)',
               WebkitClipPath: 'url(#hero-clip)',
             }}
          >
             {!videoError ? (
               <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-110" // scale-110 ensures coverage of the irregular edges
                onError={(e) => {
                  console.error("Erro ao carregar vídeo:", e);
                  setVideoError(true);
                }}
              >
                <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
              </video>
             ) : (
               <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white/50 font-mono text-sm p-4 text-center">
                  VIDEO ERROR
               </div>
             )}
             
             {/* Optional grain overlay inside the shape */}
             <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

      </div>

      <div className="absolute bottom-10 w-full text-center z-20 animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
        <button 
          onClick={scrollToWork}
          className="group flex flex-col items-center justify-center gap-2 mx-auto text-slate-900 hover:text-violet-600 transition-colors"
        >
          <span className="uppercase text-xs tracking-[0.3em] font-bold">Featured Project</span>
          <ArrowDown size={20} className="animate-bounce" />
        </button>
      </div>

    </section>
  );
};