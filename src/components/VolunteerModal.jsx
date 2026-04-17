import React, { useEffect } from "react";
import DeftForm from "./DeftForm";

const VolunteerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Left Side: Visual & Quote */}
        <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full">
          <img 
            src="/volunteer2.jpeg" 
            alt="Volunteer" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to darken the bottom/corners */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent"></div>
          
          <div className="relative h-full flex flex-col justify-between p-8 md:p-14 z-10">
            <div className="w-12 h-1.5 bg-emerald-400 rounded-full mb-12"></div>
            
            <div className="mt-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-[1.1] tracking-tight">
                Change a <span className="text-emerald-400 italic font-serif">Life</span>,<br />
                Starting with<br />
                Yours.
              </h2>
              
              <div className="bg-emerald-950/80 border border-white/20 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400"></div>
                <p className="text-white text-base md:text-lg mb-6 italic leading-relaxed font-semibold">
                  "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-px w-10 bg-emerald-400/50"></div>
                   <p className="text-emerald-400 text-xs font-black tracking-[0.3em] uppercase">
                    Mahatma Gandhi
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[60%] p-8 md:p-14 relative bg-white flex flex-col min-h-[500px]">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-stone-50 hover:bg-stone-100 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all z-20 group"
          >
            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <header className="mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 tracking-tight">
              <span className="italic font-serif">Volunteer</span> <span className="text-emerald-600">Registration</span>
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-stone-500 text-sm font-medium">Join our 500+ member family.</p>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto">
            <DeftForm formId="834a1f1a-1fca-45e4-8998-5628076b27b6" />
          </div>

          <p className="mt-8 text-center text-stone-400 text-[10px] uppercase font-black tracking-[0.2em]">
            Reliable form delivery via DeftForm
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
