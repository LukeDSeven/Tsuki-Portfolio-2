import React, { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
      // Reset play state when opening a new project
      setIsPlaying(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose, project]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6">
      <div 
        className="absolute inset-0 bg-white/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[1400px] h-full md:h-auto md:max-h-[95vh] bg-paper shadow-2xl flex flex-col md:border border-black overflow-hidden animate-slide-up">
        
        {/* Header Bar */}
        <div className="flex justify-between items-center p-6 border-b border-black/10 bg-paper z-20">
          <div className="font-mono text-xs uppercase tracking-widest text-black/50">
            Ref: {project.slug}
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors border border-black/10"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
           <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full">
              
              {/* Media Side - Clickable for Video */}
              <div 
                className="bg-black relative aspect-video lg:aspect-auto lg:h-full lg:border-r border-black/10 group cursor-pointer"
                onClick={() => setIsPlaying(true)}
              >
                 {isPlaying && project.videoUrl ? (
                   <iframe
                     width="100%"
                     height="100%"
                     src={`https://www.youtube.com/embed/${project.videoUrl}?autoplay=1`}
                     title={project.title}
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     className="absolute inset-0 w-full h-full"
                   />
                 ) : (
                   <>
                     <img 
                       src={project.thumbnail} 
                       alt={project.title}
                       className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                     />
                     <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                       <div className="font-display font-bold text-white text-xl uppercase border border-white px-6 py-3 flex items-center gap-3 backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-colors">
                         <Play size={20} fill="currentColor" /> Play Video
                       </div>
                     </div>
                   </>
                 )}
              </div>

              {/* Info Side */}
              <div className="p-8 md:p-16 flex flex-col justify-between bg-paper">
                 <div>
                   <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-none mb-6">
                     {project.title}
                   </h2>
                   
                   <div className="flex flex-wrap gap-4 mb-12 font-mono text-sm uppercase tracking-widest">
                      <span className="bg-black text-white px-2 py-1">{project.category}</span>
                      <span className="border border-black px-2 py-1">{project.year}</span>
                      <span className="border border-black px-2 py-1">{project.client || 'Client Work'}</span>
                   </div>

                   <p className="font-serif text-xl md:text-2xl leading-relaxed text-black/80 mb-12">
                     {project.fullDescription}
                   </p>
                 </div>

                 <div className="grid grid-cols-2 gap-8 border-t border-black/10 pt-8">
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Credits</h4>
                      <ul className="space-y-1 font-medium text-sm">
                        {project.credits.map((c, i) => <li key={i}>{c}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-mono text-xs uppercase tracking-widest text-black/40 mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((t, i) => (
                           <span key={i} className="text-sm border-b border-black/20">{t}</span>
                        ))}
                      </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};