import { Clock, MapPin, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F2EEE5] relative z-10 border-b border-[#1C2A20]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Operating Hours */}
          <div className="lg:col-span-5 text-left space-y-12">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#7E8B82] font-semibold block mb-4">
                Location
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1C2A20] leading-tight">
                Connect with our practice.
              </h2>
              <div className="w-12 h-[1px] bg-[#A25A38] mt-6" />
            </div>

            <div className="space-y-6 font-body text-sm font-light text-[#7E8B82]">
              <div className="flex items-center space-x-4">
                <Clock className="w-4 h-4 text-[#A25A38] shrink-0" />
                <span>Monday - Friday, 10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-4 h-4 text-[#A25A38] shrink-0" />
                <span>Global Online Sanctuary (Virtual Sessions Only)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Grid & Coord Graphic */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-12 text-left">
            
            {/* Email */}
            <div className="space-y-4">
              <span className="font-body text-[9px] uppercase tracking-widest text-[#A25A38] font-bold block">
                Email
              </span>
              <a
                href="mailto:support@nakshatraa.online"
                className="font-heading text-xl md:text-2xl font-light text-[#1C2A20] hover:text-[#A25A38] transition-colors block cursor-none"
              >
                support@nakshatraa.online
              </a>
              <p className="font-body text-xs text-[#7E8B82] leading-relaxed font-light">
                Direct channel to query coordinators or request customized session structures.
              </p>
            </div>

            {/* Virtual Sessions Info */}
            <div className="space-y-4">
              <span className="font-body text-[9px] uppercase tracking-widest text-[#A25A38] font-bold block">
                Virtual Consult
              </span>
              <span className="font-heading text-xl md:text-2xl font-light text-[#1C2A20] block">
                Google Meet
              </span>
              <p className="font-body text-xs text-[#7E8B82] leading-relaxed font-light">
                All consultations are conducted via secure, private video links. No app download required.
              </p>
            </div>

            {/* Abstract coordinate visual placeholder representing location mapping */}
            <div className="sm:col-span-2 border border-[#1C2A20]/10 rounded-3xl p-6 flex flex-col justify-between aspect-[16/8] bg-white/20 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="contactGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <rect width="30" height="30" fill="none" />
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1C2A20" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#contactGrid)" />
                </svg>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <span className="text-[9px] font-bold tracking-widest text-[#A25A38] uppercase font-body block mb-1">
                    Global Network
                  </span>
                  <span className="text-[#1C2A20] font-heading font-medium text-sm block">
                    Online Consultations
                  </span>
                </div>
                <span className="text-[10px] text-[#7E8B82] font-body flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#A25A38]" />
                  <span>Secure Connection</span>
                </span>
              </div>

              {/* Centered target node */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-5 h-5 rounded-full border border-[#A25A38] bg-[#F2EEE5] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#A25A38] rounded-full animate-ping" />
                </div>
              </div>

              <div className="relative z-10 text-[9px] font-body text-[#7E8B82] text-left pt-6">
                * Sessions are scheduled according to your timezone. Booking confirmation coordinates are shared via email.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
