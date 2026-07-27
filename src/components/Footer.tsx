const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FDFBF7] py-16 relative z-10 border-t border-[#243C2F]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left space-y-12">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#243C2F]/5">
          <span className="font-heading text-xl md:text-2xl font-light tracking-[0.15em] text-[#1E221F]">
            NAKSHATRA
          </span>
          <div className="flex space-x-8">
            <a href="#philosophy" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] hover:text-[#1E221F] font-semibold cursor-none">
              Philosophy
            </a>
            <a href="#experiences" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] hover:text-[#1E221F] font-semibold cursor-none">
              Experiences
            </a>
            <a href="#testimonials" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] hover:text-[#1E221F] font-semibold cursor-none">
              Reflections
            </a>
          </div>
        </div>

        {/* Bottom section: Legal details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-[#79857B]">
          {/* Disclaimer */}
          <div className="lg:col-span-8 space-y-4">
            <span className="block font-body text-[10px] uppercase tracking-widest font-semibold text-[#1E221F]">
              Disclaimer
            </span>
            <p className="font-body text-[10px] leading-relaxed font-light max-w-2xl">
              All consultation sessions, reports, and timing evaluations provided by Nakshatra are structured to offer timing cycle perspectives and natural strengths analysis. They do not constitute legal, medical, psychiatric, or financial advice. Clients retain absolute decision-making agency and accountability for all personal actions.
            </p>
          </div>

          {/* Copyright details */}
          <div className="lg:col-span-4 lg:text-right space-y-4">
            <span className="block font-body text-[10px] uppercase tracking-widest font-semibold text-[#1E221F]">
              Practice
            </span>
            <p className="font-body text-[10px] leading-relaxed font-light">
              &copy; {currentYear} Nakshatra. All rights reserved. <br />
              Secure Digital Consultation Practice.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
