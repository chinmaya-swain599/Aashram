import React, { useState } from 'react';

const DeftForm = ({ formId = "834a1f1a-1fca-45e4-8998-5628076b27b6" }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);

    // Using the provided formId as the access_key
    formData.append("access_key", formId);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Submitted Successfully. We will get back to you shortly!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Submit Error", error);
      setResult("Form submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-white relative rounded-2xl">
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-stone-700 mb-2">Full Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required 
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-stone-900"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-stone-700 mb-2">Email Address <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              name="email" 
              id="email"
              required 
              placeholder="john@example.com"
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-stone-900"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-stone-700 mb-2">Phone Number</label>
            <input 
              type="tel" 
              name="phone" 
              id="phone"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-stone-900"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-stone-700 mb-2">Subject</label>
          <input 
            type="text" 
            name="subject" 
            id="subject"
            placeholder="How can we help?"
            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-stone-900"
          />
        </div>

        <div>
           <label htmlFor="message" className="block text-sm font-bold text-stone-700 mb-2">Message <span className="text-red-500">*</span></label>
           <textarea 
             name="message" 
             id="message"
             required 
             rows="5"
             placeholder="Your message here..."
             className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all text-stone-900 resize-none"
           ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-lg flex justify-center items-center gap-2 ${isSubmitting ? 'bg-stone-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-600/30'}`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          {!isSubmitting && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          )}
        </button>
      </form>

      {result && (
        <div className={`mt-6 p-4 rounded-xl font-bold text-center border ${result.includes("Successfully") ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "bg-stone-100 text-stone-700 border-stone-200"}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default DeftForm;
