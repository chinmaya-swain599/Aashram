import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ onVisitHome }) => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-amber-500 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-stone-900/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl px-2">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-stone-900 mb-6 md:mb-8 leading-tight tracking-tight">
              Ready to Share the <span className="italic font-serif">Warmth?</span>
            </h2>
            <p className="text-lg sm:text-xl text-stone-800 mb-10 md:mb-12 leading-relaxed">
              Whether you want to find a home for your loved ones, volunteer your time, 
              or support us through donations—every bit of 'Sneh' (Love) counts.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact#contact-form" className="group relative px-8 md:px-12 py-5 md:py-6 bg-stone-900 text-white rounded-[2rem] font-bold text-lg md:text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(28,25,23,0.3)] hover:shadow-[0_30px_60px_rgba(28,25,23,0.5)] border-2 border-stone-800 flex items-center justify-center gap-4">
                <span className="relative z-10 flex items-center gap-4">
                  Book Your Visit 
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              {/* Visit Our Home Button - Right Side */}
              <button 
                onClick={onVisitHome}
                className="group px-8 md:px-12 py-5 md:py-6 bg-white/20 backdrop-blur-md text-stone-950 border-2 border-white/50 rounded-[2rem] font-bold text-lg md:text-xl transition-all hover:bg-white/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-4 shadow-xl"
              >
                Visit Our Home
                <svg className="w-5 h-5 md:w-6 md:h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </button>
            </div>
            
            <p className="mt-12 text-stone-700 font-medium flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-stone-400"></span>
              Join over 500+ supporters worldwide
              <span className="w-8 h-[1px] bg-stone-400"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
