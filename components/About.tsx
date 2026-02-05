import React from 'react';
// TOOLS_LIST removed from import as it is no longer used

export const About: React.FC = () => {
  return (
    <section id="about-section" className="py-32 px-6 bg-paper border-y border-black/10">
      <div className="container mx-auto max-w-[1200px]">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 relative hidden lg:block">
             {/* Updated to square aspect ratio for the logo */}
             <div className="aspect-square border border-black p-2 -rotate-2 bg-white">
               <img 
                 src="/logo.png" 
                 alt="Tsuki Studio Logo" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-center">
             <h2 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.85] tracking-tight mb-12">
               Indie<br/>
               <span className="text-violet-600">Studio.</span>
             </h2>
             
             <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
               <p>
                 We’re an indie motion design and 2D animation studio focused on helping artists bring their music to life through visual storytelling. 
               </p>
               <p className="text-black/60">
                 We collaborate closely with musicians who need expressive, cinematic visuals for their music videos. No corporate layers, just pure creativity.
               </p>
             </div>

             {/* Tools list removed as requested */}
          </div>
        </div>

      </div>
    </section>
  );
};