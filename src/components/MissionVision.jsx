import React from "react";

const MissionVision = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-6 font-serif italic text-amber-600 tracking-tight">Our Mission</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              Sneh Aashram aims to bridge the gap in today’s fast-paced world by building 
              a “home away from home,” where every resident is treated like family.
            </p>
            <div className="space-y-4">
              {[
                "To provide quality care and support for senior citizens",
                "To build a nurturing and homely environment",
                "To promote emotional well-being and social engagement",
                "To ensure dignity, safety, and respect for all residents"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-stone-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl h-[250px] md:h-[400px]">
            <img 
              src="/mission.jpeg" 
              alt="Mission" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[250px] md:h-[400px]">

            <img 
              src="/vision.jpeg" 
              alt="Vision" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-6 font-serif italic text-amber-600 tracking-tight">Our Vision</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We envision a world where every elderly person is celebrated as a 
              living library of wisdom. Sneh Aashram aspires to be the global benchmark 
              for geriatric care, where the focus moves from "managing old age" to 
              "thriving in wisdom."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
