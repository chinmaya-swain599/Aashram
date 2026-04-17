import React from "react";

const DayInLifeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const dailySchedule = [
    { time: "06:00 AM", activity: "Sunrise Yoga & Meditation", icon: "🧘" },
    { time: "08:30 AM", activity: "Fresh Organic Breakfast", icon: "🥗" },
    { time: "11:00 AM", activity: "Interactive Skill Workshops", icon: "🎨" },
    { time: "01:30 PM", activity: "Nutritional Family Lunch", icon: "🍱" },
    { time: "04:00 PM", activity: "Garden Walks & Tea Time", icon: "☕" },
    { time: "07:00 PM", activity: "Evening Prayers & Bhajans", icon: "🙏" }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-stone-950/90 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row max-h-[90vh]">
         {/* Left Column - Atmosphere */}
         <div className="w-full md:w-[40%] bg-stone-900 relative p-12 flex flex-col justify-end min-h-[300px]">
            <img 
              src="/Home.jpeg" 
              alt="Cozy Interior"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent"></div>
            <div className="relative z-10">
               <h3 className="text-4xl font-bold text-white mb-4 italic font-serif leading-tight">Welcome to <br/><span className="text-amber-400">Our Sanctuary</span></h3>
               <p className="text-stone-300 leading-relaxed text-sm">
                 Step into a world where every corner is filled with warmth, 
                 and every face tells a story of a life well-lived.
               </p>
            </div>
         </div>

         {/* Right Column - Timeline */}
         <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h4 className="text-2xl font-bold text-stone-900">A Day in Our Life</h4>
                  <p className="text-stone-500 text-sm">Experience the rhythm of peace and joy.</p>
               </div>
               <button 
                 onClick={onClose}
                 className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all"
               >
                 ✕
               </button>
            </div>

            <div className="space-y-8 relative">
               {/* Vertical Line */}
               <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-dashed bg-stone-200 border-l border-dashed"></div>
               
               {dailySchedule.map((item, i) => (
                 <div key={i} className="flex gap-6 relative group">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-amber-500 flex items-center justify-center text-xl z-10 group-hover:bg-amber-500 transition-colors duration-300">
                       {item.icon}
                    </div>
                    <div className="pt-1">
                       <p className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-1">{item.time}</p>
                       <h5 className="text-lg font-bold text-stone-900">{item.activity}</h5>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 p-8 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-between gap-6 flex-wrap">
               <div className="max-w-[200px]">
                  <p className="text-xs text-stone-400 uppercase font-black tracking-widest mb-2">Visit Invitation</p>
                  <p className="text-sm font-medium text-stone-700">We host open house sessions every Sunday.</p>
               </div>
               <button 
                 onClick={onClose}
                 className="px-8 py-3 bg-stone-900 text-white rounded-xl font-bold hover:scale-105 transition-all text-sm"
               >
                 Close Window
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DayInLifeModal;
