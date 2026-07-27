const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Coordinate Info */}
          <div className="lg:col-span-5 text-left space-y-12">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold block mb-4">
                Contact
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1E221F] leading-tight">
                Begin your alignment.
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                  General Inquiries
                </span>
                <a
                  href="mailto:support@nakshatraa.online"
                  className="font-heading text-xl md:text-2xl font-light text-[#1E221F] hover:text-[#C3B091] transition-colors border-b border-[#1E221F]/10 hover:border-[#C3B091] pb-1 cursor-none"
                >
                  support@nakshatraa.online
                </a>
              </div>

              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                  Availability
                </span>
                <p className="font-body text-sm text-[#79857B] font-light">
                  Monday — Saturday <br />
                  10:00 AM — 08:00 PM (IST)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Digital Vector Map Box */}
          <div className="lg:col-span-7 w-full lg:pt-8">
            <div className="bg-[#F4F0E8] border border-[#243C2F]/5 rounded-2xl p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between aspect-[1.6]">
              {/* Graphic grid layout in background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#1E221F 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }} />

              {/* Tag */}
              <div className="flex items-center space-x-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C3B091] animate-pulse" />
                <span className="font-body text-[10px] uppercase tracking-widest text-[#1E221F] font-semibold">
                  Secure Virtual Connection
                </span>
              </div>

              {/* Text context */}
              <div className="space-y-4 max-w-md relative z-10 mt-auto">
                <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1E221F] leading-tight">
                  Global Network
                </h3>
                <p className="font-body text-xs md:text-sm text-[#79857B] leading-relaxed font-light">
                  Our practice operates fully online. Session invitations and worksheets are delivered digitally. Confidentiality is maintained across all connections.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
