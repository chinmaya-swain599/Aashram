import React from "react";

const Hero = ({ onDonate }) => {
  return (
    <section className="relative min-h-screen py-12 md:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Home1.jpeg"
          alt="Serene Aashram Environment"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-950/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-28 md:mt-12">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 backdrop-blur-md px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-amber-200 text-xs font-bold uppercase tracking-widest">
              A Place of Peace and Dignity
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Where Every <span className="text-amber-400 italic font-serif">Sunset</span> is a New Beginning
          </h1>


          {/* Subtext */}
          <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-2xl">
            Sneh Aashram provides a nurturing environment where our elders live with
            respect, comfort, and the warmth of a true family. Experience care
            that goes beyond health.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onDonate}
              className="group relative px-10 py-5 bg-amber-500 text-stone-900 font-bold rounded-xl overflow-hidden transition-all hover:bg-amber-400 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                Donate
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-xl hover:bg-white/20 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>View Facilities</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Simple Features Indicators - RESTORED & VISIBILITY FIXED */}
          <div className="mt-2 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-4">
            <div>
              <p className="text-amber-400 text-2xl font-bold mb-1">24/7</p>
              <p className="text-white text-sm font-medium opacity-90">Medical Care</p>
            </div>
            <div>
              <p className="text-amber-400 text-2xl font-bold mb-1">Organic</p>
              <p className="text-white text-sm font-medium opacity-90">Dietary Plans</p>
            </div>
            <div>
              <p className="text-amber-400 text-2xl font-bold mb-1">Spiritual</p>
              <p className="text-white text-sm font-medium opacity-90">Wellness Programs</p>
            </div>
            <div>
              <p className="text-amber-400 text-2xl font-bold mb-1">1:2</p>
              <p className="text-white text-sm font-medium opacity-90">Staff Ratio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-amber-500/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
    </section>
  );
};

export default Hero;
