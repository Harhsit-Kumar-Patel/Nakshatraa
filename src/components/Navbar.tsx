import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatedBackground } from './core/animated-background';
import { GlowEffect } from './core/glow-effect';

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
            ? 'bg-[#030510]/85 backdrop-blur-lg border-b border-[#D4AF37]/10 py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="flex items-center space-x-2">
            <span className="font-heading text-2xl md:text-3xl font-light tracking-[0.12em] text-[#F8F7F4] hover:text-[#D4AF37] transition-colors duration-300">
              NAKSHATRA
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            <AnimatedBackground
              className="rounded-full bg-[#D4AF37]/10"
              transition={{
                type: 'spring',
                bounce: 0.15,
                duration: 0.3,
              }}
              enableHover
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  data-id={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-xs uppercase tracking-widest text-[#B8B5C4] hover:text-[#F8F7F4] transition-colors duration-300 font-medium px-4 py-2"
                >
                  {link.name}
                </a>
              ))}
            </AnimatedBackground>
          </nav>

          {/* Consultation button */}
          <div className="hidden md:block relative group">
            <GlowEffect
              colors={['#D4AF37', '#8B7BB3', '#C67B5C', '#1B1035']}
              mode="colorShift"
              blur="soft"
              duration={4}
              scale={0.9}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
            />
            <button
              onClick={onOpenBooking}
              className="relative px-6 py-2.5 border border-[#D4AF37]/20 hover:border-[#D4AF37] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_12px_#D4AF37] text-[#D4AF37] bg-[#0A0E1F] z-10 cursor-pointer"
            >
              Consultation
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#F8F7F4] p-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer Overlay inside header */}
        {isMobileMenuOpen && (
          <div className="absolute inset-x-0 top-full bg-[#0A0E1F]/95 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-xl z-30 md:hidden p-8 paper-grain">
            <div className="flex flex-col space-y-6 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-body text-sm font-semibold uppercase tracking-widest text-[#F8F7F4] hover:text-[#D4AF37] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#D4AF37]/10">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_10px_#D4AF37] transition-all "
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
