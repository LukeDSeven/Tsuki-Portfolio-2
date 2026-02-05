import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  // Taking the single service for MVP
  const service = SERVICES[0];

  return (
    <section id="services-section" className="py-32 px-6 bg-paper relative overflow-hidden border-t border-black/10">
      <div className="absolute inset-0 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to bottom, transparent 99%, rgba(0,0,0,0.03) 100%)', backgroundSize: '100% 40px' }} 
      />

      <div className="container mx-auto max-w-[1200px] relative z-10">
        
        <div className="flex flex-col items-center text-center">
          <h2 className="font-mono text-sm uppercase tracking-widest mb-6 text-violet-600">[ Capabilities ]</h2>
          
          <div className="max-w-4xl">
            <h3 className="text-5xl md:text-7xl font-display font-bold uppercase mb-8 leading-tight">
              {service.title}
            </h3>
            
            <p className="font-serif text-2xl md:text-4xl leading-relaxed text-black/80">
              "{service.description}"
            </p>
            
            <div className="mt-12 w-24 h-1 bg-black mx-auto" />
            
            <p className="mt-8 font-hand text-3xl text-violet-600 rotate-2">
              Ready for your track.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};