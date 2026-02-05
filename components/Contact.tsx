import React from 'react';
import { Instagram, Twitter, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-paper min-h-[80vh] flex flex-col justify-center items-center">
      <div className="container mx-auto max-w-[1000px] text-center">
        
        <h2 className="text-[12vw] lg:text-[10rem] font-display font-bold uppercase leading-[0.8] tracking-tighter mb-12">
          Let's<br/>Create
        </h2>
        
        <p className="font-serif text-2xl md:text-3xl max-w-2xl mx-auto mb-16 text-black/80">
          Got a track that needs visuals? We take commissions directly via social DMs.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center w-full max-w-2xl mx-auto">
           
           <a 
             href={SITE_CONFIG.socials.instagram}
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 group bg-black text-white p-8 hover:bg-violet-600 transition-all duration-300 flex items-center justify-between"
           >
             <div className="flex items-center gap-4">
               <Instagram size={32} />
               <div className="text-left">
                 <div className="font-mono text-xs uppercase tracking-widest opacity-70">DM us on</div>
                 <div className="font-display font-bold text-2xl uppercase">Instagram</div>
               </div>
             </div>
             <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>

           <a 
             href={SITE_CONFIG.socials.twitter}
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 group bg-white border-2 border-black text-black p-8 hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-between"
           >
             <div className="flex items-center gap-4">
               <Twitter size={32} />
               <div className="text-left">
                 <div className="font-mono text-xs uppercase tracking-widest opacity-70">DM us on</div>
                 <div className="font-display font-bold text-2xl uppercase">Twitter / X</div>
               </div>
             </div>
             <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
           </a>

        </div>

        <div className="mt-16 font-mono text-sm uppercase tracking-widest text-black/40">
          Status: <span className="text-green-600 font-bold animate-pulse">● Open for Commissions</span>
        </div>

      </div>
    </section>
  );
};