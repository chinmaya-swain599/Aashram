import React from "react";

const team = [
  {
    role: "Medical Director",
    animation: "animate-pulse-slow",
    color: "bg-emerald-50",
    icon: (
      <svg className="w-24 h-24 md:w-32 md:h-32 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2zm0 11h2v.1h-2z" opacity=".3"/>
        <path d="M18 11h-3V8c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h3v3c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-3h3c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zm-1 4h-4v4h-2v-4H7v-2h4V9h2v4h4v2z"/>
      </svg>
    )
  },
  {
    role: "Founder & Visionary",
    animation: "animate-float-slow",
    color: "bg-white",
    icon: (
      <img src="/logo.png" alt="Sneh Aashram" className="w-32 h-32 md:w-40 md:h-40 object-contain p-4" />
    )
  },
  {
    role: "Spiritual Coordinator",
    animation: "animate-spin-slow",
    color: "bg-purple-50",
    icon: (
      <svg className="w-24 h-24 md:w-32 md:h-32 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".3"/>
        <path d="M12 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 10c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4zm-6.17 2c.6-1.07 3.07-1.8 6.17-1.8s5.57.73 6.17 1.8H5.83zM12 11c-1.93 0-3.5 1.57-3.5 3.5S10.07 18 12 18s3.5-1.57 3.5-3.5S13.93 11 12 11zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    )
  }
];

const Team = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-stone-900 mb-6 tracking-tight">The Guardians of <span className="text-amber-600 italic font-serif">Sneh</span></h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our leadership is guided by compassion, wellness, and spiritual harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((member, i) => (
            <div key={i} className="group flex flex-col items-center">
              <div className={`w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full ${member.color} flex items-center justify-center mb-8 shadow-2xl shadow-stone-200 transition-all duration-700 border-2 border-stone-100 group-hover:scale-110 group-hover:shadow-amber-100 ${member.animation}`}>
                {member.icon}
              </div>
              <p className="text-stone-900 font-bold text-sm sm:text-base tracking-[0.3em] uppercase text-center">{member.role}</p>
              <div className="mt-4 w-10 h-0.5 bg-amber-500/30 group-hover:w-16 group-hover:bg-amber-500 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
