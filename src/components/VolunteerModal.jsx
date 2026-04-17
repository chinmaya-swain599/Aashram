import React, { useEffect, useState } from "react";

const VolunteerModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setResult(""); // Reset result on open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    // Explicitly add access_key directly here
    formData.append("access_key", "026b37c3-9fdd-4efc-aefd-6b62ecdf2c19");
    formData.append("subject", "New Volunteer Registration");
    formData.append("from_name", "Sneh Aashram Volunteer Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Registration successful! Welcome to the family.");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible">
        
        {/* Left Side: Visual & Quote */}
        <div className="w-full md:w-[40%] relative min-h-[300px] md:min-h-full">
          <img 
            src="/volunteer2.jpeg" 
            alt="Volunteer" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Subtle gradient overlay to darken the bottom/corners */}
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/40 to-transparent"></div>
          
          <div className="relative h-full flex flex-col justify-between p-8 md:p-14 z-10">
            <div className="w-12 h-1.5 bg-emerald-400 rounded-full mb-12"></div>
            
            <div className="mt-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-[1.1] tracking-tight">
                Change a <span className="text-emerald-400 italic font-serif">Life</span>,<br />
                Starting with<br />
                Yours.
              </h2>
              
              <div className="bg-emerald-950/80 border border-white/20 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400"></div>
                <p className="text-white text-base md:text-lg mb-6 italic leading-relaxed font-semibold">
                  "The best way to find yourself is to lose yourself in the service of others."
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-px w-10 bg-emerald-400/50"></div>
                   <p className="text-emerald-400 text-xs font-black tracking-[0.3em] uppercase">
                    Mahatma Gandhi
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[60%] p-8 md:p-14 relative bg-white flex flex-col min-h-[500px]">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-stone-50 hover:bg-stone-100 rounded-full flex items-center justify-center text-stone-400 hover:text-stone-900 transition-all z-20 group"
          >
            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <header className="mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3 tracking-tight">
              <span className="italic font-serif">Volunteer</span> <span className="text-emerald-600">Registration</span>
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <p className="text-stone-500 text-sm font-medium">Join our 500+ member family.</p>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto pr-2">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input type="text" name="name" required placeholder="e.g. Rahul Sharma" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-emerald-500 transition-colors text-stone-900 font-bold placeholder-stone-300" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input type="email" name="email" required placeholder="name@company.com" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-emerald-500 transition-colors text-stone-900 font-bold placeholder-stone-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Contact Number</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXX XXX XXX" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-emerald-500 transition-colors text-stone-900 font-bold placeholder-stone-300" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Preferred Category</label>
                  <select name="category" required className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-emerald-500 transition-colors text-stone-900 font-bold cursor-pointer">
                    <option value="" disabled selected>Select category...</option>
                    <option value="Daily Compassion Care">Daily Compassion Care</option>
                    <option value="Medical & Health">Medical & Health</option>
                    <option value="Art & Expression Therapy">Art & Expression Therapy</option>
                    <option value="Event Planning & Logistics">Event Planning & Logistics</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Interest Note</label>
                <textarea name="interest_note" rows="3" placeholder="Short note on why you'd like to join..." className="w-full px-5 py-4 bg-stone-50 rounded-2xl border border-transparent outline-none focus:border-emerald-200 focus:bg-white transition-all text-stone-900 text-sm resize-none"></textarea>
              </div>

              {result && (
                <div className={`p-4 rounded-xl font-bold text-center border text-sm ${result.includes("successful") ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-stone-50 text-stone-600 border-stone-200"}`}>
                  {result}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 text-white font-bold rounded-2xl transition-all shadow-xl flex justify-center items-center gap-3 ${isSubmitting ? 'bg-stone-300' : 'bg-emerald-700 hover:bg-emerald-600 hover:shadow-emerald-700/30'}`}
              >
                {isSubmitting ? "Processing..." : "Confirm & Join Family"}
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                )}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-stone-400 text-xs shadow-sm">
            By submitting, you agree to our <span className="font-bold text-emerald-600 cursor-pointer">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
