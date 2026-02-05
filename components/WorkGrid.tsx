import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const WorkGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // MVP: We only take the first project
  const featuredProject = PROJECTS[0];

  return (
    <section id="work" className="py-24 px-6 bg-paper border-t border-black/10">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* Header - Centered for MVP */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative inline-block">
            <span className="font-hand text-3xl text-violet-600 absolute -top-8 -right-8 rotate-12">
              Latest
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter leading-[0.8]">
              Featured
            </h2>
          </div>
          <div className="font-mono text-sm uppercase tracking-widest text-black/50 mt-8 max-w-md">
             This is our first commissioned animated project — the starting point of Tsuki. More coming soon.
          </div>
        </div>

        {/* Single Featured Project Card */}
        {featuredProject && (
          <div className="flex justify-center">
            <div 
              onClick={() => setSelectedProject(featuredProject)}
              className="group cursor-pointer flex flex-col gap-6 w-full max-w-4xl"
            >
              {/* Image Container - Larger Aspect Ratio */}
              <div className="relative aspect-[16/9] overflow-hidden border border-black/10 bg-black/5 shadow-2xl">
                {/* Overlay Tint */}
                <div className="absolute inset-0 bg-violet-600 mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
                
                <img 
                  src={featuredProject.thumbnail} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                
                {/* Floating Tag */}
                <div className="absolute top-0 left-0 bg-white border-r border-b border-black/10 px-4 py-2 font-mono text-sm uppercase tracking-widest z-20 text-black">
                  Premiere
                </div>

                {/* Hover Icon */}
                <div className="absolute bottom-6 right-6 bg-white text-black p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20 border border-black/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-t border-black/10 pt-6 group-hover:border-violet-600 transition-colors duration-300">
                 <div>
                    <div className="flex gap-4 font-mono text-xs uppercase tracking-widest text-black/50 mb-2">
                      <span>{featuredProject.category}</span>
                      <span>—</span>
                      <span>{featuredProject.year}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-display font-bold uppercase leading-none group-hover:text-violet-600 transition-colors">
                      {featuredProject.title}
                    </h3>
                 </div>
                 <p className="font-serif text-lg text-black/60 max-w-xs text-right hidden md:block">
                   {featuredProject.shortDescription}
                 </p>
              </div>
            </div>
          </div>
        )}

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};