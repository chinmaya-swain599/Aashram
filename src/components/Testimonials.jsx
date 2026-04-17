import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "I found a second family here. The staff doesn't just treat me like a resident; they treat me like their own grandfather.",
    author: "Mr. Purnachandra sahoo",
    role: "Resident for 3 Years",
    image: "data:image/jpeg;base64,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"
  },
  {
    quote: "The peace I found in the morning yoga sessions and the evening library time is something I missed for decades in the city.",
    author: "Mrs. Damayanti Sahoo",
    role: "Resident for 1.5 Years",
    image: "data:image/png;base64,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"
  }
];

const moreStories = [
  {
    title: "The Joy of Community Gardening",
    desc: "Our organic garden is a sanctuary of life and growth. Every morning, residents find peace while nurturing the soil. It's not just about the plants; it's about the shared laughter, the connection with nature, and the pride of seeing life bloom through their own care.",
    extra: "We currently grow over 15 varieties of organic vegetables and 20 types of medicinal herbs, ensuring our 'Seed-to-Table' kitchen is always fresh.",
    image: "/Gardening.jpeg"
  },
  {
    title: "Musical Evenings & Bhajans",
    desc: "Music transcends age and brings souls together. Our Friday evening sessions are the highlight of the week, where residents engage in soulful bhajans and classical music. It's a time of pure devotion and community harmony.",
    extra: "Professional teachers visit twice a week to conduct light vocal music therapy, which has shown remarkable improvements in the emotional well-being of our family.",
    image: "/Bhajan.jpeg"
  }
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-stone-900 text-white overflow-hidden relative">
      {/* Decorative texture or glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-amber-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Resident Stories</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Voices of <span className="text-amber-400 italic font-serif">Happiness</span>
            </h2>
            <p className="text-stone-400 text-base sm:text-lg mb-8">
              Don't just take our word for it. Hear from the beautiful souls who call Sneh Aashram their home.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition-all font-bold group flex items-center gap-3"
            >
              Read More Stories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative">
                <div className="text-amber-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.418.913-4.001 3.633-4.001 5.842h4v10h-9.995z" />
                  </svg>
                </div>
                <p className="text-xl text-stone-200 mb-8 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-amber-400/30" />
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-stone-500 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 backdrop-blur-sm">
          <div 
            className="absolute inset-0 bg-stone-950/80"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative z-10 bg-white text-stone-900 w-full max-w-6xl h-full max-h-[95vh] md:max-h-[90vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col scale-100 animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold font-serif italic text-stone-900">Life at Sneh Aashram</h3>
                <p className="text-stone-500 text-xs md:text-sm">A journey of peace, laughter, and belonging.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-stone-50/30">
               <div className="grid grid-cols-1 gap-16 md:gap-24">
                  {moreStories.map((story, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                       <div className="w-full md:w-1/2">
                         <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative group">
                           <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                         </div>
                       </div>
                       <div className="w-full md:w-1/2">
                          <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-3 block">Activity Highlights</span>
                          <h4 className="text-3xl md:text-4xl font-bold mb-6 text-stone-900 italic font-serif leading-tight">{story.title}</h4>
                          <p className="text-stone-600 text-lg leading-relaxed mb-6">{story.desc}</p>
                          <div className="p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-400">
                             <p className="text-amber-900 text-sm italic font-medium leading-relaxed">{story.extra}</p>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-24 p-8 md:p-16 bg-stone-900 rounded-[3rem] text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full"></div>
                  <div className="relative z-10">
                    <h4 className="text-3xl md:text-5xl font-bold mb-6 italic font-serif text-white">“We don't count the days, we make the <span className="text-amber-400">days count.</span>”</h4>
                    <p className="text-stone-400 text-lg max-w-3xl mx-auto leading-relaxed">
                      Every resident brings a unique story to our family. At Sneh Aashram, 
                      we ensure these stories continue to be written with joy, dignity, 
                      and the warmth of a true home.
                    </p>
                  </div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-white text-center border-t border-stone-100 sticky bottom-0 z-20">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="px-12 py-4 bg-stone-900 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-xl shadow-stone-900/20"
               >
                 Close & Return
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
