import React from "react";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import Team from "../components/Team";
import CTA from "../components/CTA";

function About({ onVisit }) {
  return (
    <main className="bg-white">
      <AboutHero />

      <MissionVision />

      {/* NEW FEATURE: Core Values Section (Inlined) */}
      <section className="py-12 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">Our Core <span className="text-amber-500">Values</span></h2>
            <p className="text-stone-400 text-sm sm:text-base">The pillars that support everything we do at Sneh Aashram.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Care with Dignity", desc: "Every individual lives with happiness, comfort, and unwavering respect." },
              { title: "Emotional Support", desc: "Building meaningful connections and providing companion-driven emotional care." },
              { title: "Safe Environment", desc: "A secure, loving 'home away from home' for absolute peace of mind." }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all text-center group">
                <div className="w-12 h-1 alpha rounded-full bg-amber-500 mx-auto mb-6 group-hover:w-24 transition-all"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 italic font-serif text-amber-500">{v.title}</h3>
                <p className="text-stone-300 leading-relaxed font-light text-sm sm:text-base">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-stone-200 italic font-serif">
              "We believe that aging should not be a phase of loneliness, but a chapter 
              filled with warmth, care, and meaningful connections."
            </p>
          </div>

        </div>
      </section>

      <Team />

      {/* NEW FEATURE: Statistics Section (Inlined) */}
      <section className="py-12 md:py-20 bg-amber-500 text-stone-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Residents", value: "100+" },
              { label: "Expert Staff", value: "20+" },
              { label: "Years of Seva", value: "5+" },
              { label: "Lives Touched", value: "500+" }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">{s.value}</p>
                <p className="text-stone-800 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA onVisitHome={onVisit} />
    </main>
  );
}


export default About;