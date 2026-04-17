import React from "react";
import { Link } from "react-router-dom";
import VolunteerHero from "../components/VolunteerHero";
import CTA from "../components/CTA";
import DeftForm from "../components/DeftForm";

function Volunteer({ onVisit, onRegister }) {

  return (
    <main className="bg-white">
      <VolunteerHero onRegister={onRegister} />

      {/* Why Volunteer Section */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-6 md:mb-8 font-serif italic tracking-tight">Why <span className="text-amber-600">Volunteer</span> With Us?</h2>
              <div className="space-y-6">
                {[
                  "Spend meaningful time with senior citizens",
                  "Learn life lessons and wisdom from elders",
                  "Contribute to a social cause that truly matters",
                  "Be part of a compassionate community"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-1 shrink-0">
                       <span className="text-xs">✨</span>
                    </div>
                    <p className="text-stone-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0">
               {/* Main Premium Image */}
               <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border-4 md:border-8 border-white h-[300px] md:h-[450px] group">
                 <img 
                   src="/volunteer2.jpeg" 
                   alt="Volunteer with elders" 
                   className="absolute inset-0 block w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white font-bold italic font-serif text-xl">Creating Smiles</p>
                 </div>
               </div>
               
               {/* Decorative Artistic Elements */}
               <div className="absolute top-6 -right-6 md:top-10 md:-right-10 w-full h-full bg-amber-100 rounded-[2.5rem] -z-10"></div>
               <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 bg-emerald-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute Grid */}
      <section className="py-12 md:py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">Ways You Can <span className="text-amber-500">Contribute</span></h2>
            <p className="text-stone-400 text-sm sm:text-base">Whatever your skills, there is a place for you in our family.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Personal Support", items: ["Storytelling", "Conversations", "Birthdays"] },
              { title: "Activity Engagement", items: ["Wellness", "Music/Art", "Digital Skill"] },
              { title: "Professional Support", items: ["Medical", "Mental Health", "Counseling"] },
              { title: "Support Services", items: ["Awareness", "Fundraising", "Admin"] }
            ].map((cat, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-amber-500">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-stone-400 text-sm flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-stone-600 rounded-full"></span>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-stone-50 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-amber-500/20">
               <svg className="w-24 h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
             </div>
             <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-8 md:mb-12 italic font-serif tracking-tight">Becoming a part of Sneh is <span className="text-amber-600 underline">simple</span></h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
                {[
                  "Fill Registration",
                  "Attend Orientation",
                  "Choose Contribution",
                  "Start Making Difference"
                ].map((step, i) => (
                  <div key={i}>
                    <p className="text-4xl md:text-6xl font-black text-stone-200 mb-2 md:mb-4">{i + 1}</p>
                    <p className="text-stone-900 font-bold text-xs md:text-sm leading-tight">{step}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 relative z-10">
                <button
                  onClick={onRegister}
                  className="px-10 py-5 bg-amber-500 text-stone-900 rounded-2xl font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-xl shadow-amber-900/10 inline-block"
                >
                  Apply to Register Now
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* NEW FEATURE: Volunteer Personas (Who Can Join) */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 mb-4 italic font-serif tracking-tight">❤️ Who Can <span className="text-amber-600">Join?</span></h2>
            <p className="text-stone-600">No special experience is required — just a willingness to care.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Students", "Working Professionals", "Retired Individuals", "NGOs & Corporate"].map((persona, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl text-center shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-stone-900">{persona}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW FEATURE: Internship & Career Opportunities */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-stone-900 rounded-[3rem] p-12 md:p-24 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                   <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block underline">Growth & Impact</span>
                   <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                     Internship & <span className="text-amber-400 italic font-serif">Career</span> Opportunities
                   </h2>
                   <p className="text-stone-400 text-lg mb-10 leading-relaxed">
                     If you are passionate about working in the social sector, Sneh Aashram 
                     can be a meaningful start to your journey. We offer training and 
                     real-world experience.
                   </p>
                    <div className="p-8 bg-white/5 rounded-[2rem] border border-white/10 backdrop-blur-sm relative group overflow-hidden">
                       <p className="text-amber-400 font-bold mb-4 flex items-center gap-2">
                          <span className="w-8 h-px bg-amber-400"></span>
                          Our Primary Intention
                       </p>
                       <h3 className="text-2xl font-bold text-white mb-4 leading-snug lg:max-w-xs">
                          Building a Community of <span className="text-amber-400 font-serif italic">Compassionate Minds</span>
                       </h3>
                       <p className="text-stone-400 text-sm leading-relaxed mb-6">
                          At Sneh Aashram, our mission is to converge professional skill sets with 
                          human empathy. We are looking for individuals who view their career 
                          not just as a job, but as a calling to serve our elders.
                       </p>

                       <ul className="space-y-3 mb-8">
                          {[
                            { label: "High Purpose", text: "Work that touches souls." },
                            { label: "Deep Growth", text: "Learning elder care wisdom." },
                            { label: "Safe Haven", text: "A secondary home for you." }
                          ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                               <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                               <span className="text-white text-[10px] font-black uppercase tracking-wider">{item.label}:</span>
                               <span className="text-stone-500 text-[10px]">{item.text}</span>
                            </li>
                          ))}
                       </ul>

                       <div className="flex flex-col gap-2">
                          <p className="text-stone-500 text-[9px] uppercase font-black tracking-[0.2em]">Select your path to the right</p>
                          <div className="flex items-center gap-4 text-amber-500 group/link cursor-pointer">
                             <span className="font-bold text-lg underline-offset-8 decoration-2 hover:underline transition-all">Join the Mission</span>
                             <svg className="w-8 h-8 transform group-hover/link:translate-x-4 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                             </svg>
                          </div>
                       </div>
                    </div>
                </div>
                
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { title: "Social Work", icon: "🤝" },
                      { title: "HR & Admin", icon: "💼" },
                      { title: "NGO MGMT", icon: "🏛️" },
                      { title: "Outreach", icon: "📢" }
                    ].map((job, i) => (
                      <div key={i} className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                         </div>
                         
                         <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform origin-left">{job.icon}</span>
                         <h4 className="text-white font-bold text-xl mb-1">{job.title}</h4>
                         <div className="flex items-center gap-2">
                            <p className="text-stone-500 text-xs font-medium tracking-wide uppercase">Training Program</p>
                            <span className="h-px w-0 group-hover:w-8 bg-amber-500/50 transition-all duration-500"></span>
                            <span className="text-amber-500 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity" onClick={onRegister}>APPLY</span>
                         </div>
                      </div>
                    ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* NEW FEATURE: Book a Visit Block */}
      <section id="book-visit" className="py-16 lg:py-24 bg-stone-50 border-t border-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100">
            <div className="md:w-1/2">
               <img 
                 src="/miracles.jpeg" 
                 alt="Visit Us" 
                 className="rounded-[2rem] shadow-lg w-full h-[400px] object-cover"
               />
            </div>
            <div className="md:w-1/2">
               <span className="text-amber-600 font-bold tracking-widest uppercase text-xs mb-4 block">Personal Experience</span>
               <h2 className="text-4xl font-bold text-stone-900 mb-6 italic font-serif">Come, see the <span className="text-amber-500 underline">miracles</span> in person.</h2>
               <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                 The best way to understand the impact of Sneh Aashram is to experience it yourself. 
                 We welcome you to visit us, interact with our family, and witness the joy 
                 we create every day.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-stone-800 font-bold">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">✓</div>
                    Guided Tours Available
                  </div>
                  <div className="flex items-center gap-4 text-stone-800 font-bold">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">✓</div>
                    Interact with Residents
                  </div>
               </div>
               <Link to="/contact#contact-form" className="mt-10 px-8 py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all shadow-lg hover:scale-105 inline-block">
                 Book a Visit
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Spirit of Service Showcase */}
      <section className="py-16 lg:py-24 bg-stone-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
              <span className="text-emerald-600 font-black uppercase tracking-[0.3em] text-xs mb-4 block">Creativity in Service</span>
              <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 font-serif italic leading-tight">
                Where service meet <span className="text-emerald-600 underline">Creativity.</span>
              </h2>
              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Volunteering at Sneh Aashram isn't just about tasks—it's about expression. 
                Whether it's painting a mural, singing old melodies, or tending to our 
                healing gardens, your unique creativity brings life to our home.
              </p>
            </div>
            <div className="lg:w-1/2 flex gap-4 items-center">
               <div className="w-1/2 space-y-4">
                  <div className="h-64 rounded-[2rem] overflow-hidden shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    <img src="/music.jpeg" alt="Art session" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 bg-white rounded-3xl shadow-lg border border-stone-100 italic text-stone-600 text-sm">
                    "Every stroke of the brush was a bridge of connection with the residents." — Anaya, Volunteer Artist
                  </div>
               </div>
               <div className="w-1/2 space-y-4 translate-y-12">
                  <div className="p-6 bg-emerald-600 text-white rounded-3xl shadow-xl font-bold leading-snug">
                    "Music doesn't have an age. When we sing together, we are all just one happy family."
                  </div>
                  <div className="h-64 rounded-[2rem] overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                    <img src="/Art.jpeg" alt="Music session" className="w-full h-full object-cover" />
                  </div>
                  
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-stone-100 flex flex-col justify-between group">
               <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🎨</div>
               <div>
                  <h4 className="text-2xl font-bold text-stone-900 mb-4">Art & Expression</h4>
                  <p className="text-stone-500 leading-relaxed">Organize color-therapy sessions or paint murals that tell the stories of our residents.</p>
               </div>
            </div>
            <div className="p-10 bg-stone-900 rounded-[3rem] shadow-2xl flex flex-col justify-between text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
               </div>
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mb-8">🎸</div>
               <div>
                  <h4 className="text-2xl font-bold mb-4 italic font-serif text-emerald-400">Melodic Moments</h4>
                  <p className="text-stone-400 leading-relaxed">Music is a universal language. Bring your instrument and rekindle old memories through song.</p>
               </div>
            </div>
            <div className="p-10 bg-white rounded-[3rem] shadow-sm hover:shadow-2xl transition-all border border-stone-100 flex flex-col justify-between group">
               <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">🌿</div>
               <div>
                  <h4 className="text-2xl font-bold text-stone-900 mb-4">Garden Therapy</h4>
                  <p className="text-stone-500 leading-relaxed">Creative landscaping and organic farming are the most peaceful ways to bond with the earth and our family.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <CTA onVisitHome={onVisit} />
    </main>
  );
}

export default Volunteer;
