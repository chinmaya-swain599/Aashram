import React, { useState } from "react";

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedPlan, setSelectedPlan] = useState(null);

  const donationPlans = [
    { id: 1, title: "Day of Nutrition", amount: "500", desc: "Provide high-quality organic meals for one resident.", icon: "🍱" },
    { id: 2, title: "Medical Care Kit", amount: "1500", desc: "Essential medicines and weekly checkup for an elder.", icon: "🏥" },
    { id: 3, title: "Warmth & Comfort", amount: "2500", desc: "New bedding, clothes, and personal care items.", icon: "🛏️" },
    { id: 4, title: "Sponsor a Smile", amount: "5000", desc: "Full care and specialized activities for one month.", icon: "❤️" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-stone-950/90 backdrop-blur-2xl"
        onClick={onClose}
      ></div>
      
      <div className="relative z-10 w-full max-w-5xl bg-stone-50 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row max-h-[90vh]">
         {/* Left Column - Impact Story */}
         <div className="w-full md:w-[35%] bg-stone-900 relative p-10 md:p-12 flex flex-col justify-end min-h-[250px] md:min-h-[600px]">
            <img 
              src="/Contribution.jpeg" 
              alt="Elderly Smile"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent"></div>
            <div className="relative z-10">
               <div className="w-12 h-1 bg-amber-500 mb-6 font-black tracking-widest uppercase">Spirit of Giving</div>
               <h3 className="text-3xl font-bold text-white mb-4 italic font-serif leading-tight">Your Kindness <br/><span className="text-amber-400">Creates Home.</span></h3>
               <p className="text-stone-300 leading-relaxed text-sm">
                 Every contribution directly supports our mission to provide 
                 dignity, peace, and family to those who have given so much to society.
               </p>
            </div>
         </div>

         {/* Right Column - Form and Features */}
         <div className="w-full md:w-[65%] p-6 md:p-12 overflow-y-auto bg-stone-50">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-stone-900 mb-1">Make a Contribution</h4>
                  <p className="text-stone-500 text-sm">Choose how you would like to help today.</p>
               </div>
               <button 
                 onClick={onClose}
                 className="w-10 h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-all font-bold group"
               >
                 <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
               </button>
            </div>

            {/* Quick Sponsorship Plans */}
            <div className="mb-10">
               <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-stone-300"></span>
                  <h5 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-stone-400">Impact Plans</h5>
                  <span className="flex-1 h-px bg-stone-300"></span>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {donationPlans.map((plan) => (
                    <div 
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedPlan === plan.id 
                          ? 'border-amber-500 bg-amber-50 shadow-md transform scale-[1.02]' 
                          : 'border-white bg-white hover:border-amber-300 shadow-sm hover:shadow-md'
                      }`}
                    >
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-2xl">{plan.icon}</span>
                          <span className={`${selectedPlan === plan.id ? 'text-amber-700' : 'text-stone-900'} font-bold text-lg`}>₹{plan.amount}</span>
                       </div>
                       <h6 className="font-bold text-stone-800 text-sm mb-1">{plan.title}</h6>
                       <p className="text-[11px] text-stone-500 leading-tight">{plan.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 mb-6">
               <span className="w-8 h-px bg-stone-300"></span>
               <h5 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-stone-400">Payment Options</h5>
               <span className="flex-1 h-px bg-stone-300"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
               {/* Fixed QR Code Section */}
               <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col items-center justify-center text-center">
                  <h6 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                    Scan to Donate
                  </h6>
                  <div className="w-48 h-48 rounded-2xl bg-white border-2 border-amber-200 shadow-inner overflow-hidden flex items-center justify-center">
                     <img 
                       src="/QR.jpeg" 
                       alt="UPI QR Code" 
                       className="w-full h-full object-cover scale-[1.3] md:scale-[1.35]"
                     />
                  </div>
                  <p className="text-[10px] text-stone-500 mt-5 font-medium leading-relaxed max-w-[180px]">
                    Accepts Google Pay, PhonePe, Paytm, and all UPI apps.
                  </p>
               </div>

               {/* New Feature: Bank Details Section */}
               <div className="bg-stone-900 rounded-3xl p-6 shadow-xl flex flex-col justify-center text-left text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-2xl rounded-full translate-x-8 -translate-y-8"></div>
                  
                  <h6 className="font-bold text-amber-400 mb-6 flex items-center gap-2 relative z-10 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    Bank Transfer (NEFT/RTGS)
                  </h6>
                  
                  <div className="space-y-4 relative z-10">
                     <div>
                        <p className="text-[9px] text-stone-400 uppercase tracking-wider font-black mb-1">Account Name</p>
                        <p className="font-bold text-sm tracking-wide">Sneh Aashram Foundation</p>
                     </div>
                     <div>
                        <p className="text-[9px] text-stone-400 uppercase tracking-wider font-black mb-1">Account Number</p>
                        <p className="font-bold text-sm tracking-[0.2em] text-emerald-400 bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/10 select-all">40310049843</p>
                     </div>
                     <div className="flex gap-6">
                        <div>
                           <p className="text-[9px] text-stone-400 uppercase tracking-wider font-black mb-1">IFSC Code</p>
                           <p className="font-bold text-xs tracking-wider select-all">SBIN0012056</p>
                        </div>
                        <div>
                           <p className="text-[9px] text-stone-400 uppercase tracking-wider font-black mb-1">Bank</p>
                           <p className="font-bold text-xs tracking-wide">State Bank of India</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DonationModal;
