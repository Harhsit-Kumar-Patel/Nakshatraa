import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: 'Philosophy', href: '#philosophy' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenBooking }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#243C2F]/10 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
            <span className="font-heading text-2xl md:text-3xl font-light tracking-[0.12em] text-[#1E221F] hover:text-[#243C2F] transition-colors duration-300">
              NAKSHATRA
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-xs uppercase tracking-widest text-[#79857B] hover:text-[#1E221F] transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Consultation button */}
          <div className="hidden md:block">
            <button
              onClick={onOpenBooking}
              className="px-6 py-2.5 border border-[#243C2F]/20 hover:border-[#243C2F] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all duration-500 hover:bg-[#243C2F] hover:text-[#FDFBF7] text-[#243C2F] cursor-none"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#1E221F] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[64px] bg-[#FDFBF7] border-b border-[#243C2F]/20 shadow-xl z-30 md:hidden p-8 paper-grain">
          <div className="flex flex-col space-y-6 text-left">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-body text-sm font-semibold uppercase tracking-widest text-[#1E221F] hover:text-[#243C2F] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#243C2F]/10">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full text-center px-6 py-3 border border-[#243C2F] text-[#243C2F] rounded-full font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#243C2F] hover:text-[#FDFBF7] transition-all cursor-none"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
