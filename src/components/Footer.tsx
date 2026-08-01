const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF8F5] py-16 relative z-10 border-t border-[#A6823C]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left space-y-12">
        
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-[#A6823C]/5">
          <span className="font-heading text-xl md:text-2xl font-light tracking-[0.15em] text-[#0F1110]">
            NAKSHATRA
          </span>
          <div className="flex space-x-8">
            <a href="#philosophy" className="font-body text-[10px] uppercase tracking-widest text-[#4F5651] hover:text-[#0F1110] font-semibold ">
              Philosophy
            </a>
            <a href="#experiences" className="font-body text-[10px] uppercase tracking-widest text-[#4F5651] hover:text-[#0F1110] font-semibold ">
              Experiences
            </a>
            <a href="#testimonials" className="font-body text-[10px] uppercase tracking-widest text-[#4F5651] hover:text-[#0F1110] font-semibold ">
              Reflections
            </a>
            <a href="https://www.instagram.com/nakshatraa.online/" target="_blank" rel="noopener noreferrer" className="font-body text-[10px] uppercase tracking-widest text-[#4F5651] hover:text-[#0F1110] font-semibold ">
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom section: Legal details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-[#4F5651]">
          {/* Disclaimer */}
          <div className="lg:col-span-8 space-y-4">
            <span className="block font-body text-[10px] uppercase tracking-widest font-semibold text-[#0F1110]">
              Disclaimer
            </span>
            <p className="font-body text-[10px] leading-relaxed font-light max-w-2xl">
              All consultation sessions, reports, and timing evaluations provided by Nakshatra are structured to offer timing cycle perspectives and natural strengths analysis. They do not constitute legal, medical, psychiatric, or financial advice. Clients retain absolute decision-making agency and accountability for all personal actions.
            </p>
          </div>

          {/* Copyright details */}
          <div className="lg:col-span-4 lg:text-right space-y-4">
            <span className="block font-body text-[10px] uppercase tracking-widest font-semibold text-[#0F1110]">
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
