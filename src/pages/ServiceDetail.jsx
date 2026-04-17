import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import CTA from "../components/CTA";

const servicesData = {
  healthcare: {
    title: "Healthcare Excellence",
    subtitle: "Comprehensive Medical Support for a Worry-Free Life",
    description: "At Sneh Aashram, your health is our sacred priority. We provide a seamless integration of modern medical care and compassionate personal attention, ensuring that every resident feels safe, supported, and vital.",
    image: "/Healthcare.jpeg",
    features: [
      {
        title: "24/7 Nursing Care",
        desc: "Qualified nursing staff available round the clock for immediate assistance and monitoring.",
        icon: "🩺"
      },
      {
        title: "Specialized Geriatric Care",
        desc: "Doctors specializing in elderly care provide personalized health management plans.",
        icon: "👨‍⚕️"
      },
      {
        title: "Emergency Response",
        desc: "Equipped with modern emergency facilities and a dedicated ambulance on standby.",
        icon: "🚑"
      },
      {
        title: "Physiotherapy & Rehab",
        desc: "Regular sessions to maintain mobility, strength, and overall physical well-being.",
        icon: "💪"
      }
    ],
    details: [
      "Regular health checkups and blood tests conducted on-site.",
      "Strict medication management and adherence tracking.",
      "Tie-ups with leading super-specialty hospitals for advanced care.",
      "Electronic health records for every resident for seamless tracking."
    ],
    commitment: "We strive to ensure that every medical need is met with promptness and a smile, because health is the greatest wealth at any age."
  },
  dining: {
    title: "Nutritional Dining",
    subtitle: "Savor the Taste of Health and Happiness",
    description: "We believe that good food is the foundation of a good life. Our culinary team focuses on creating meals that are not only nutritionally balanced but also a delight to the senses, using the freshest organic ingredients.",
    image: "/Hygienic.jpeg",
    features: [
      {
        title: "Farm-to-Table Organic",
        desc: "Most vegetables and grains are sourced from our own organic garden or local farms.",
        icon: "🥦"
      },
      {
        title: "Personalized Diets",
        desc: "Meals customized according to medical conditions like diabetes, hypertension, or allergies.",
        icon: "🥗"
      },
      {
        title: "Community Dining",
        desc: "Beautifully designed dining halls that encourage social interaction and shared joy.",
        icon: "🍽️"
      },
      {
        title: "Festive Treats",
        desc: "Special menus during festivals and birthdays to keep life vibrant and celebratory.",
        icon: "🍰"
      }
    ],
    details: [
      "Nutritionists oversee the weekly menu planning.",
      "Focus on low-oil, low-spice yet flavorful preparations.",
      "Herbal teas and fresh juices served throughout the day.",
      "Traditional recipes that offer a 'home-away-from-home' feeling."
    ],
    commitment: "Dining is more than just feeding the body; it's about nourishing the soul and fostering community through shared meals."
  },
  wellness: {
    title: "Spiritual Wellness",
    subtitle: "Finding Peace and Purpose in Every Breath",
    description: "Spiritual health is as vital as physical health. Sneh Aashram provides an environment that nurtures the soul, offering various avenues for meditation, reflection, and inner growth.",
    image: "/yoga2.jpeg",
    features: [
      {
        title: "Daily Meditation",
        desc: "Guided sessions in our serene meditation hall to reduce stress and enhance clarity.",
        icon: "🧘"
      },
      {
        title: "Yoga Classes",
        desc: "Gentle yoga routines tailored for senior citizens to improve flexibility and vitality.",
        icon: "☀️"
      },
      {
        title: "Spiritual Discourses",
        desc: "Regular talks by espiritual leaders and scholars on various philosophical themes.",
        icon: "📖"
      },
      {
        title: "Temple & Prayer",
        desc: "An in-house prayer room and organized visits to nearby sacred places.",
        icon: "🛕"
      }
    ],
    details: [
      "Serene atmosphere with plenty of greenery and quiet corners.",
      "Library stocked with spiritual and motivational literature.",
      "One-on-one counseling for mental peace and emotional support.",
      "Evening bhajan and kirtan sessions for community harmony."
    ],
    commitment: "In the silence of meditation and the harmony of prayer, our residents find the strength to embrace every day with gratitude."
  },
  recreation: {
    title: "Recreational Activities",
    subtitle: "Active Days and Joyful Ways",
    description: "Retirement is the beginning of a new chapter of exploration. We offer a wide range of activities that keep our residents engaged, creative, and socially connected.",
    image: "/Activities.jpeg",
    features: [
      {
        title: "Arts & Crafts",
        desc: "Unleash creativity through painting, pottery, and traditional handicraft sessions.",
        icon: "🎨"
      },
      {
        title: "Community Gardening",
        desc: "A chance to connect with nature and nurture blooming life in our gardens.",
        icon: "🌱"
      },
      {
        title: "Indoor Games",
        desc: "Library, chess, carrom, and other games that keep the mind sharp and active.",
        icon: "🃏"
      },
      {
        title: "Cultural Excursions",
        desc: "Regular trips to museums, parks, and cultural events in the city.",
        icon: "🎭"
      }
    ],
    details: [
      "Evening music and dance therapy sessions.",
      "Movie screenings in our mini-theater once a week.",
      "Book clubs and discussion groups for intellectual stimulation.",
      "Celebration of all major national and cultural festivals."
    ],
    commitment: "We believe that joy has no age limit, and our activities are designed to spark laughter and lifelong learning."
  }
};

const ServiceDetail = ({ onVisit }) => {
  const { slug } = useParams();
  const service = servicesData[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[2000ms] scale-105 hover:scale-100">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          {/* Multi-layer overlay for better text/navbar visibility */}
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/90 via-stone-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-8 md:mt-12">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight uppercase font-serif">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-light text-stone-100 max-w-2xl mx-auto italic">
              "{service.subtitle}"
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-10 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-8 font-serif italic leading-tight">
                A Life of <span className="text-amber-600">Dignity</span> & Compassionate Care
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
                {service.description}
              </p>
              
              <div className="space-y-6">
                {service.details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 text-stone-700 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="mt-1.5 flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium text-stone-800">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-10 bg-amber-50 rounded-[2.5rem] border border-amber-100 italic text-stone-800 text-xl relative group shadow-inner transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute -top-6 -left-2 text-8xl text-amber-200/50 group-hover:scale-110 transition-transform font-serif leading-none">“</div>
                <p className="relative z-10 leading-relaxed font-serif">
                  {service.commitment}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center lg:items-start lg:text-left hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-amber-50 group-hover:bg-amber-100 transition-colors rounded-3xl flex items-center justify-center mb-6 text-5xl transform group-hover:rotate-12 transition-transform">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed group-hover:text-stone-800 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
              
              <div className="md:col-span-2 mt-8">
                <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="/family1.jpeg"
                    alt="Comfortable Environment"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-amber-600/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-auto">
        <CTA />
      </div>

      {/* Navigation Footer */}
      <div className="bg-white py-12 border-t border-stone-100 flex flex-col items-center gap-6">
        <p className="text-stone-400 font-medium">Want to explore another service?</p>
        <div className="flex flex-wrap justify-center gap-4 px-6 text-center">
            <Link to="/#facilities" className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-all px-6 py-3 bg-amber-50 rounded-full group hover:shadow-lg">
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                View All Facilities
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
