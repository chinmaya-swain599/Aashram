import React from "react";

const AboutHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-stone-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1516627145497-ae6b583f7831?auto=format&fit=crop&q=80&w=2000" 
          alt="About Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Our Story</span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
          A Legacy of <span className="text-amber-400 italic font-serif">Compassion</span>
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-stone-300 leading-relaxed">
          Sneh Aashram Old Age Home is not just an initiative — it is a heartfelt 
          mission built on compassion, respect, and humanity. We are dedicated 
          to creating a safe, loving, and dignified environment for our elders.
        </p>

      </div>
      
      {/* Elegant curve divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] fill-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(111%+1.3px)] h-[60px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutHero;
