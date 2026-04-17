import React, { useEffect, useRef } from 'react';

const DeftForm = ({ formId = "834a1f1a-1fca-45e4-8998-5628076b27b6" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Re-create the div for deftform to target
      containerRef.current.innerHTML = `
        <div class="deftform" data-form-id="${formId}" data-form-width="100%" data-form-align="center" data-form-auto-height="1"></div>
      `;
      
      if (window.reinitDeftform) {
        // If the script is already loaded globally, reinitialize it cleanly
        setTimeout(() => {
          window.reinitDeftform();
        }, 50);
      } else {
        // Check if script is currently loading to prevent duplicates
        const existingScript = document.getElementById('deftform-script');
        if (!existingScript) {
          const script = document.createElement('script');
          script.id = 'deftform-script';
          script.src = "https://cdn.deftform.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        }
      }
    }
  }, [formId]);

  return (
    <div className="w-full min-h-[600px] bg-white relative rounded-2xl overflow-hidden">
      {/* Skeleton Loader - Background Layer */}
      <div className="absolute inset-0 p-8 space-y-6 animate-pulse bg-white z-0">
        <div className="h-10 bg-stone-100 rounded-lg w-full"></div>
        <div className="h-10 bg-stone-100 rounded-lg w-full"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-10 bg-stone-100 rounded-lg"></div>
          <div className="h-10 bg-stone-100 rounded-lg"></div>
        </div>
        <div className="h-24 bg-stone-100 rounded-lg w-full"></div>
        <div className="h-12 bg-emerald-100 rounded-lg w-1/3"></div>
      </div>
      
      {/* Real Form - Foreground Layer */}
      <div 
        ref={containerRef} 
        className="relative z-10 w-full min-h-[600px] bg-white"
      ></div>
    </div>
  );
};

export default DeftForm;
