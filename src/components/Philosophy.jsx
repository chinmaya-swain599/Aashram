import React from "react";

const Philosophy = () => {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/welcome.jpeg" 
                alt="Our Philosophy" 
                className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 md:mb-8 leading-tight">
              A Culture of <span className="text-amber-600 italic font-serif">Seva</span> and Infinite Love
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              At Sneh Aashram, we believe that old age is not a time of retreat, but a beautiful 
              transition into a life of peace, reflection, and community. Inspired by the 
              age-old tradition of <strong>Seva</strong>, we provide more than just care; 
              we provide a sanctuary where dignity is the default.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Every resident is a treasure chest of wisdom. Our mission is to ensure 
              that this wisdom is respected, and their golden years are filled with 
              the warmth of friendship, spiritual growth, and the highest standards 
              of holistic healthcare.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 border border-stone-100 rounded-2xl hover:bg-stone-50 transition-colors">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Holistic Care</h4>
                  <p className="text-sm text-stone-500">Mind, body, and soul integration.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 border border-stone-100 rounded-2xl hover:bg-stone-50 transition-colors">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">Vibrant Community</h4>
                  <p className="text-sm text-stone-500">Never walk alone in your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
