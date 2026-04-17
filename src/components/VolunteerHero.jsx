import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const VolunteerHero = ({ onRegister }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const storyChapters = [
    {
      title: "The Vision of Sneh",
      text: "Sneh Aashram was born from a simple yet profound realization: that our elders are the roots of our society, and they deserve a life of bloom, not just survival.",
      icon: "🌱"
    },
    {
      title: "A Family of 500+",
      text: "From medical professionals to artistic students, our community has grown into a vast network of hearts, all committed to one goal — spreading love.",
      icon: "❤️"
    },
    {
      title: "Sustainable Care",
      text: "We focus on holistic wellness, incorporating organic farming, spiritual growth, and world-class geriatric care into every single day.",
      icon: "✨"
    }
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-stone-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd99713b8ecb?auto=format&fit=crop&q=80&w=2000"
          alt="Volunteer Banner"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-stone-950/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Direct Impact Service
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Where Your <span className="text-emerald-400 italic font-serif">Service</span> <br className="hidden md:block" />Touches a Soul.
            </h1>

            <p className="text-lg sm:text-xl text-stone-200 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0">
              Volunteering at Sneh Aashram is about more than just tasks — it's about
              bonding, feeding, learning, and sharing joy with our elders who
              await your warmth.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={onRegister}
                className="px-10 py-5 bg-emerald-500 text-stone-900 rounded-2xl font-bold text-lg hover:bg-emerald-400 transition-all hover:scale-105 shadow-xl shadow-emerald-900/40 inline-block"
              >
                Apply to Help
              </button>
            </div>
          </div>

          {/* RESPONSIBLE FIX: Impact Card visible on all devices */}
          <div className="w-full lg:w-1/3 mt-8 md:mt-12 lg:mt-0 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl animate-in fade-in slide-in-from-right-10 duration-1000">
              <div className="flex -space-x-3 mb-6">
                {[
                  "/abtar1.png", 
                  "/abtar2.png",
                  "/abtar3.png",
                  "/abtar4.png"
                ].map((imgSrc, i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-emerald-500 overflow-hidden bg-stone-100 shrink-0">
                    <img src={imgSrc} alt={`Volunteer ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center text-stone-900 font-bold text-xs">+500</div>
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl mb-2">Joining the Helping Hands</h4>
              <p className="text-stone-300 text-sm leading-relaxed mb-6">
                Join our active community of 500+ volunteers making a difference every single day.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {["Meal Support", "Physical Therapy", "Emotional Comfort"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-emerald-400 text-[10px] md:text-xs font-bold font-serif italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Modal (Stories) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-10">
          <div
            className="absolute inset-0 bg-stone-950/95 backdrop-blur-2xl"
            onClick={() => setIsModalOpen(false)}
          ></div>

          <div className="relative z-10 w-full max-w-6xl aspect-video md:aspect-[21/9] bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row animate-in fade-in zoom-in duration-500">
            {/* Left - Visual Side */}
            <div className="w-full md:w-1/2 h-full relative">
              <img
                src="https://images.unsplash.com/photo-1516627145497-ae6b583f7831?auto=format&fit=crop&q=80&w=1200"
                alt="Aashram Life"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="w-20 h-20 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 animate-pulse mb-6 mx-auto">
                    <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z" /></svg>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2 italic font-serif">Sneh Aashram</h4>
                  <p className="text-stone-400 text-sm tracking-widest uppercase">The Cinematic Journey</p>
                </div>
              </div>
            </div>

            {/* Right - Content Side */}
            <div className="w-full md:w-1/2 bg-stone-900/50 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-emerald-400 italic font-serif">Legacy</span></h3>
                  <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-stone-500 hover:text-white transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <div className="space-y-8">
                {storyChapters.map((chapter, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{chapter.icon}</div>
                    <div>
                      <h5 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{chapter.title}</h5>
                      <p className="text-stone-400 text-sm leading-relaxed">{chapter.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 bg-emerald-500 text-stone-900 rounded-xl font-bold hover:bg-emerald-400 transition-all"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default VolunteerHero;
