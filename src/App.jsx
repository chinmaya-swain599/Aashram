import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Volunteer from "./pages/Volunteer";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import DonationModal from "./components/DonationModal";
import DayInLifeModal from "./components/DayInLifeModal";
import VolunteerModal from "./components/VolunteerModal";

function App() {
  const location = useLocation();
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  // Prevent background scroll
  useEffect(() => {
    if (isDonationModalOpen || isVisitModalOpen || isVolunteerModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isDonationModalOpen, isVisitModalOpen, isVolunteerModalOpen]);

  // Handle scrolling on navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      
      // Use a more robust approach to scroll to element
      const scrollToElement = (retryCount = 0) => {
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay for content to settle, especially with iframes
          setTimeout(() => {
            const yOffset = -100; // Adjust for sticky navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }, 150);
        } else if (retryCount < 10) {
          // If element not found, retry after a short delay
          setTimeout(() => scrollToElement(retryCount + 1), 100);
        }
      };

      scrollToElement();
    } else {
      // For general navigation without hash, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]); // Listen to both path and hash changes

  const openDonation = () => setIsDonationModalOpen(true);
  const openVisit = () => setIsVisitModalOpen(true);
  const openVolunteer = () => setIsVolunteerModalOpen(true);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home onDonate={openDonation} onVisit={openVisit} />} />
        <Route path="/about" element={<About onVisit={openVisit} />} />
        <Route path="/volunteer" element={<Volunteer onVisit={openVisit} onRegister={openVolunteer} />} />
        <Route path="/contact" element={<Contact onVisit={openVisit} />} />
        <Route path="/services/:slug" element={<ServiceDetail onVisit={openVisit} />} />
      </Routes>

      <Footer onDonate={openDonation} />
      
      <DonationModal 
        isOpen={isDonationModalOpen} 
        onClose={() => setIsDonationModalOpen(false)} 
      />

      <DayInLifeModal 
        isOpen={isVisitModalOpen} 
        onClose={() => setIsVisitModalOpen(false)} 
      />
      
      <VolunteerModal 
        isOpen={isVolunteerModalOpen} 
        onClose={() => setIsVolunteerModalOpen(false)} 
      />
    </>
  );
}

export default App;