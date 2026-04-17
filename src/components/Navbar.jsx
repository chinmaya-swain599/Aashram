import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Volunteering", path: "/volunteer" },
  ];

  const isLinkActive = (path) => {
    const [basePath] = path.split("#");
    if (basePath === "/") {
      return location.pathname === "/";
    }
    return location.pathname === basePath;
  };

  const handleLinkClick = (path) => {
    if (path.includes("#")) {
      const [basePath, hash] = path.split("#");
      if (location.pathname === basePath || (basePath === "/" && location.pathname === "")) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-1" : "py-3"
      }`}>
        <div className="container mx-auto px-6">
          <div className={`flex justify-between items-center transition-all duration-500 border rounded-2xl px-4 md:px-8 py-2 md:py-3 ${
            isScrolled 
              ? "bg-white/90 backdrop-blur-lg border-stone-200 shadow-xl" 
              : "bg-white/10 backdrop-blur-md border-white/20"
          }`}>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 md:gap-4 group/logo">
              <img 
                src="/logo.png" 
                alt="Sneh Aashram" 
                className={`transition-all duration-300 object-contain rounded-full bg-white p-1 shadow-lg shrink-0 ${
                  isScrolled ? "h-8 w-8 md:h-12 md:w-12" : "h-10 w-10 md:h-16 md:w-16"
                }`}
              />
              <span className={`text-lg sm:text-xl md:text-3xl font-bold tracking-tighter transition-colors ${
                isScrolled ? "text-stone-900" : "text-white"
              }`}>
                Sneh <span className="text-amber-500 font-serif italic font-medium drop-shadow-sm">Aashram</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => handleLinkClick(link.path)}
                  className={`font-medium transition-all duration-300 relative py-1 ${
                    isScrolled 
                      ? isLinkActive(link.path) ? "text-amber-600" : "text-stone-600 hover:text-amber-600"
                      : isLinkActive(link.path) ? "text-amber-400" : "text-stone-100 hover:text-amber-400"
                  }`}
                >
                  {link.name}
                  {isLinkActive(link.path) && (
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-500 ${
                      isScrolled ? "bg-amber-600" : "bg-amber-400"
                    }`}></span>
                  )}
                </Link>
              ))}

              <Link to="/contact" className={`px-6 py-2 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-lg ${
                location.pathname === "/contact"
                  ? "bg-amber-600 text-white"
                  : isScrolled 
                    ? "bg-stone-900 text-white shadow-stone-900/20" 
                    : "bg-amber-500 text-stone-900 shadow-amber-500/20 hover:bg-amber-400"
              }`}>
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 transition-colors ${isScrolled ? "text-stone-900" : "text-white"}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-900 transition-transform duration-500 md:hidden overflow-y-auto ${
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-10 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => handleLinkClick(link.path)}
              className={`text-2xl font-bold transition-colors ${
                isLinkActive(link.path) ? "text-amber-500 underline underline-offset-8" : "text-white hover:text-amber-500"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link 
            to="/contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-2xl font-bold transition-colors ${
              location.pathname === "/contact" ? "text-white underline underline-offset-8" : "text-amber-500 hover:text-white"
            }`}
          >
            Contact Us
          </Link>
          
          <div className="mt-auto pt-10 border-t border-white/10">
            <p className="text-stone-500 text-sm mb-4 italic font-serif">A Place of Peace & Dignity</p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">f</div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white">ig</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;