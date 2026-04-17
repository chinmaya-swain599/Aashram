import React from "react";
import { Link } from "react-router-dom";


const services = [
  {
    id: "medical-care",
    slug: "healthcare",
    title: "Healthcare Excellence",
    description: "Round-the-clock medical supervision, regular health checkups, and specialized geriatric care.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A3.333 3.333 0 01183.333 19h-12c-1.838 0-3.333-1.495-3.333-3.333 0-1.838 1.495-3.333 3.333-3.333 1.838 0 3.333 1.495 3.333 3.333z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "/Healthcare.jpeg"
  },
  {
    id: "organic-dining",
    slug: "dining",
    title: "Nutritional Dining",
    description: "Customized, chef-prepared meals using organic ingredients tailored to individual dietary needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: "/organic1.jpeg"
  },
  {
    id: "spiritual-wellness",
    slug: "wellness",
    title: "Spiritual Wellness",
    description: "Daily yoga, meditation sessions, and spiritual discourses for mental peace and clarity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707" />
      </svg>
    ),
    image: "/yoga.jpeg"
  },
  {
    id: "cultural-events",
    slug: "recreation",
    title: "Recreational Activities",
    description: "Library, indoor games, community gardening, and regular cultural excursions.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/activites.jpeg"
  }
];


const Services = () => {
  return (
    <section id="facilities" className="py-12 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 md:mb-6 tracking-tight">Designed for <span className="text-amber-600 italic font-serif">Living</span> Fully</h2>
          <p className="text-lg text-stone-600">

            We provide a comprehensive range of services tailored to ensure that 
            every resident enjoys a life of comfort and joy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index}
              id={service.id}
              className="block group bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-500 border border-stone-100 scroll-mt-24"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white p-2 bg-amber-500 rounded-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-amber-600 font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                  Learn More <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
