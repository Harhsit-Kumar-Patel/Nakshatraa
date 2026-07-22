import type { MouseEvent } from 'react';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer className="bg-[#FAF9F6] text-[#1C2A20] py-20 relative overflow-hidden">
      
      {/* Decorative layout border lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-[#1C2A20]/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Top block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-[#1C2A20]/5 pb-12">
          <div className="text-left">
            <span className="font-heading text-2xl tracking-[0.15em] font-light block mb-2 text-[#1C2A20]">
              NAKSHATRAA
            </span>
            <span className="font-body text-[9px] uppercase tracking-widest text-[#A25A38] font-medium block">
              Guiding Life with Timeless Wisdom
            </span>
          </div>

          <div className="flex flex-wrap gap-8 font-body text-xs uppercase tracking-widest text-[#1C2A20]/75 text-left">
            <a href="#philosophy" onClick={(e) => handleLinkClick(e, '#philosophy')} className="hover:text-[#A25A38] transition-colors cursor-none">Philosophy</a>
            <a href="#experiences" onClick={(e) => handleLinkClick(e, '#experiences')} className="hover:text-[#A25A38] transition-colors cursor-none">Experiences</a>
            <a href="#testimonials" onClick={(e) => handleLinkClick(e, '#testimonials')} className="hover:text-[#A25A38] transition-colors cursor-none">Reflections</a>
            <a href="#faq" onClick={(e) => handleLinkClick(e, '#faq')} className="hover:text-[#A25A38] transition-colors cursor-none">FAQ</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')} className="hover:text-[#A25A38] transition-colors cursor-none">Contact</a>
          </div>
        </div>

        {/* Bottom copyright & disclaimer block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left text-[#1C2A20]/45 font-body text-xs font-light">
          
          <div className="lg:col-span-4 space-y-3">
            <p>&copy; {currentYear} Nakshatraa. All rights reserved.</p>
            <p className="text-[10px]">Bespoke digital design for conscious clarity.</p>
          </div>

          <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-[#1C2A20]/5 pt-6 lg:pt-0 lg:pl-12 space-y-3 leading-relaxed text-[10px]">
            <p className="text-[#A25A38]/70 font-semibold uppercase tracking-wider text-[9px]">
              Disclaimer & Intent
            </p>
            <p>
              Nakshatraa is a life guidance and consultation practice. Our services offer supportive perspectives, reflections, and insights derived from calculations to assist in making personal choices.
            </p>
            <p>
              We recognize that outcomes are shaped by individual decisions, efforts, and circumstances. We do not claim guaranteed results, 100% predictive accuracy, or absolute forecasts. Our consultations are designed to empower personal agency, and are not a substitute for professional clinical therapy, medical, legal, or financial advisory.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
