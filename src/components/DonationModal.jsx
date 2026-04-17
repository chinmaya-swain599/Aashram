import React, { useState } from "react";

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [amount, setAmount] = useState("");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const donationPlans = [
    { id: 1, title: "Day of Nutrition", amount: "500", desc: "Provide high-quality organic meals for one resident for a full day.", icon: "🍱" },
    { id: 2, title: "Medical Care Kit", amount: "1500", desc: "Essential medicines and weekly checkup for an elderly person.", icon: "🏥" },
    { id: 3, title: "Warmth & Comfort", amount: "2500", desc: "New bedding, clothes, and personal care items for a resident.", icon: "🛏️" },
    { id: 4, title: "Sponsor a Smile", amount: "5000", desc: "Full care and specialized activities for a resident for one month.", icon: "❤️" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-stone-950/90 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row max-h-[90vh]">
         {/* Left Column - Impact Story */}
         <div className="w-full md:w-[35%] bg-stone-900 relative p-12 flex flex-col justify-end min-h-[300px]">
            <img 
              src="/Contribution.jpeg" 
              alt="Elderly Smile"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
            <div className="relative z-10">
               <div className="w-12 h-1 bg-amber-500 mb-6 font-black tracking-widest uppercase">Spirit of Giving</div>
               <h3 className="text-3xl font-bold text-white mb-4 italic font-serif leading-tight">Your Kindness <br/><span className="text-amber-400">Creates Home.</span></h3>
               <p className="text-stone-300 leading-relaxed text-sm">
                 Every contribution directly supports our mission to provide 
                 dignity, peace, and family to those who have given so much to society.
               </p>
            </div>
         </div>

         {/* Right Column - Donation Form */}
         <div className="w-full md:w-[65%] p-8 md:p-16 overflow-y-auto">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h4 className="text-2xl font-bold text-stone-900">Make a Contribution</h4>
                  <p className="text-stone-500 text-sm">Choose how you would like to help today.</p>
               </div>
               <button 
                 onClick={onClose}
                 className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all font-bold"
               >
                 ✕
               </button>
            </div>

            {/* Impact Highlights */}
            <div className="grid grid-cols-3 gap-4 mb-10">
               {[
                 { label: "Health", icon: "🏥", desc: "Medical Care" },
                 { label: "Food", icon: "🍱", desc: "Organic Meals" },
                 { label: "Aashram", icon: "🏡", desc: "Warmth & Shelter" }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center p-4 bg-stone-50 rounded-2xl border border-stone-100 italic transition-all hover:bg-white hover:shadow-md">
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-900 mb-1">{item.label}</p>
                    <p className="text-[8px] text-stone-400 leading-tight">{item.desc}</p>
                 </div>
               ))}
            </div>

            {/* Dummy QR & Positive Message */}
            <div className="flex flex-col items-center justify-center p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-100 text-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/20 blur-2xl rounded-full translate-x-12 -translate-y-12"></div>
               
               {/* Realistic Dummy QR Code Image */}
               <div className="relative z-10 w-64 h-64 bg-white p-6 rounded-3xl shadow-2xl mb-8 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center border-4 border-amber-100">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=SnehAashramDonation" 
                    alt="Dummy QR Code" 
                    className="w-full h-full object-contain grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-stone-100 shadow-sm opacity-100 group-hover:opacity-0 transition-opacity">
                       <span className="text-[8px] font-bold text-stone-400 uppercase tracking-[0.2em]">Sample QR Code</span>
                    </div>
                  </div>
               </div>

               <p className="relative z-10 text-stone-900 font-bold text-lg mb-2 italic font-serif">
                 "Your kindness is the sun that warms <span className="text-amber-600">our family's heart</span>."
               </p>
               <p className="relative z-10 text-stone-500 text-[10px] leading-relaxed max-w-xs">
                 Scan to share the spirit of giving. Your contribution brings infinite smiles, 
                 health, and peace to our elders at Sneh Aashram. Thank you so much!
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DonationModal;
