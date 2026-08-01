import { InView } from './core/in-view';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-14 md:py-18 bg-[#FAF8F5] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <InView
          variants={containerVariants}
          viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
        >
          
          {/* Left Column: Direct Coordinate Info */}
          <motion.div variants={itemVariants} className="lg:col-span-5 text-left space-y-12">
            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#4F5651] font-semibold block mb-4">
                Contact
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-[#0F1110] leading-tight">
                Begin your alignment.
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest text-[#4F5651] font-semibold mb-2">
                  General Inquiries
                </span>
                <a
                  href="mailto:support@nakshatraa.online"
                  className="font-heading text-xl md:text-2xl font-light text-[#0F1110] hover:text-[#A6823C] transition-colors border-b border-[#0F1110]/10 hover:border-[#A6823C] pb-1 "
                >
                  support@nakshatraa.online
                </a>
              </div>

              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest text-[#4F5651] font-semibold mb-2">
                  Instagram
                </span>
                <a
                  href="https://www.instagram.com/nakshatraa.online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-heading text-xl md:text-2xl font-light text-[#0F1110] hover:text-[#A6823C] transition-colors border-b border-[#0F1110]/10 hover:border-[#A6823C] pb-1 "
                >
                  @nakshatraa.online
                </a>
              </div>

              <div>
                <span className="block font-body text-[10px] uppercase tracking-widest text-[#4F5651] font-semibold mb-2">
                  Availability
                </span>
                <p className="font-body text-sm text-[#4F5651] font-light">
                  Monday — Saturday <br />
                  10:00 AM — 08:00 PM (IST)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Digital Vector Map Box */}
          <motion.div variants={itemVariants} className="lg:col-span-7 w-full lg:pt-8">
            <div className="bg-[#FFFFFF] border border-[#A6823C]/5 rounded-2xl p-8 md:p-12 text-left relative overflow-hidden flex flex-col justify-between aspect-[1.6]">
              {/* Graphic grid layout in background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#0F1110 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px'
              }} />

              {/* Tag */}
              <div className="flex items-center space-x-2 relative z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#A6823C] animate-pulse" />
                <span className="font-body text-[10px] uppercase tracking-widest text-[#0F1110] font-semibold">
                  Secure Virtual Connection
                </span>
              </div>

              {/* Text context */}
              <div className="space-y-4 max-w-md relative z-10 mt-auto">
                <h3 className="font-heading text-2xl md:text-3xl font-light text-[#0F1110] leading-tight">
                  Global Network
                </h3>
                <p className="font-body text-xs md:text-sm text-[#4F5651] leading-relaxed font-light">
                  Our practice operates fully online. Session invitations and worksheets are delivered digitally. Confidentiality is maintained across all connections.
                </p>
              </div>
            </div>
          </motion.div>

        </InView>
      </div>
    </section>
  );
};

export default Contact;
