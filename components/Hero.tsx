import React, { useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { ShowreelModal } from './ShowreelModal';

// --- CONFIGURAÇÃO DA MÁSCARA (SHAPE) ---

// OPÇÃO 1: Imagem PNG (Textura/Brush/Grunge)
const MASK_IMAGE_URL = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Brush_stroke.png/800px-Brush_stroke.png";

// CONFIGURAÇÃO DO VÍDEO
const BACKGROUND_VIDEO_URL = "/video.mp4";
const FULL_SHOWREEL_URL = "/video.mp4";

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")` }}
      />

      <div className="relative z-10 w-full max-w-[1800px] px-4 md:px-6 flex flex-col items-center justify-center">
        
        {/* Container do Vídeo Mascarado */}
        <div 
          className="relative w-full max-w-[98vw] md:max-w-[96vw] aspect-[16/9] md:aspect-[2.6/1] transition-transform duration-700 ease-out pointer-events-none"
          style={{ 
            transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px) scale(1.02)` 
          }}
        >
          <div 
             className="w-full h-full bg-slate-900 transition-transform duration-500 relative overflow-hidden"
             style={{
               maskImage: `url('${MASK_IMAGE_URL}')`,
               WebkitMaskImage: `url('${MASK_IMAGE_URL}')`,
               maskSize: 'contain', 
               WebkitMaskSize: 'contain',
               maskRepeat: 'no-repeat',
               WebkitMaskRepeat: 'no-repeat',
               maskPosition: 'center',
               WebkitMaskPosition: 'center',
             }}
          >
             {!videoError ? (
               <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error("Erro ao carregar vídeo:", e);
                  setVideoError(true);
                }}
              >
                <source src={BACKGROUND_VIDEO_URL} type="video/mp4" />
              </video>
             ) : (
               <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white/50 font-mono text-sm p-4 text-center">
                  VIDEO NOT FOUND: /public/video.mp4
               </div>
             )}
            
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Updated Main CTA: PLAY */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 focus:outline-none cursor-pointer w-full"
          aria-label="Play Showreel"
          style={{ 
            transform: `translate(calc(-50% + ${mousePos.x * 20}px), calc(-50% + ${mousePos.y * 20}px))` 
          }}
        >
          <div className="text-white drop-shadow-lg flex justify-center">
            <h1 className="text-[12vw] md:text-[10vw] leading-[0.9] font-hand font-bold tracking-wide opacity-100 relative overflow-hidden transform -rotate-2 py-4 px-8">
              <span className="block transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full group-hover:opacity-0 group-hover:blur-sm">
                PLAY
              </span>
              <span className="absolute top-4 left-0 w-full text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-full opacity-0 blur-sm group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-0 text-violet-400">
                PLAY
              </span>
            </h1>
          </div>
        </button>

        {/* Decoration Elements */}
        <div className="absolute top-[20%] right-[5%] hidden lg:block mix-blend-multiply animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
          <p className="font-display font-bold text-slate-800 text-lg rotate-12 bg-white/50 backdrop-blur px-4 py-2">
            PURE • VISUAL • NOISE
          </p>
        </div>

        <div className="absolute bottom-[20%] left-[5%] hidden lg:block mix-blend-multiply animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
           <div className="w-24 h-24 rounded-full border border-slate-900 flex items-center justify-center animate-[spin_10s_linear_infinite]">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-900">Showreel • 2026 • </span>
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

      <ShowreelModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoSrc={FULL_SHOWREEL_URL} 
      />

    </section>
  );
};