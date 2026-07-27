import { motion } from 'framer-motion';

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero = ({ onOpenBooking }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#FDFBF7]"
    >
      {/* Background Soft Plaster Accents */}
      <div className="absolute top-1/4 right-[10%] w-[380px] h-[380px] bg-[#FAF9F6] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-[300px] h-[300px] bg-[#243C2F]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Side: Emotional Editorial Copy */}
        <div className="lg:col-span-7 text-left space-y-12">
          {/* Subheading tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-3"
          >
            <div className="w-1.5 h-1.5 bg-[#C3B091] rounded-full" />
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold">
              Life Guidance & Consultations
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#1E221F] leading-[1.15] tracking-tight"
            >
              Sometimes, clarity begins with{' '}
              <span className="italic font-normal text-[#243C2F]">a conversation.</span>
            </motion.h1>
          </div>

          {/* Core description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-base md:text-lg text-[#79857B] leading-relaxed max-w-xl font-light"
          >
            When life transitions present choices, a thoughtful perspective helps isolate the noise. We support your self-alignment with private, grounded life reviews.
          </motion.p>

          {/* CTA Link */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-4"
          >
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center space-x-4 border-b border-[#243C2F]/40 hover:border-[#243C2F] pb-2 font-body text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-[#243C2F] cursor-none"
            >
              <span>Book a Consultation</span>
              <span className="transform group-hover:translate-x-2 transition-transform duration-300 text-sm text-[#C3B091]">
                →
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Side: Hand-crafted minimal abstract SVG illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="w-full max-w-[380px] aspect-square flex items-center justify-center relative">
            {/* Fine border container */}
            <div className="absolute inset-0 border border-[#243C2F]/10 rounded-full flex items-center justify-center">
              {/* Inner ring */}
              <div className="w-[85%] h-[85%] border border-[#243C2F]/5 rounded-full border-dashed animate-slow-rotate" />
            </div>

            {/* Custom line art representing paths crossing */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-4/5 h-4/5 text-[#243C2F] opacity-80 relative z-10"
              aria-hidden="true"
            >
              {/* Ground horizon line */}
              <motion.line
                x1="20"
                y1="140"
                x2="180"
                y2="140"
                stroke="#C3B091"
                strokeWidth="0.75"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Intersecting path 1 */}
              <motion.path
                d="M 40 180 Q 90 20 160 140"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
              />

              {/* Intersecting path 2 */}
              <motion.path
                d="M 160 180 Q 110 30 50 120"
                stroke="#79857B"
                strokeWidth="1"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Single focus gold node (alignment point) */}
              <motion.circle
                cx="100"
                cy="90"
                r="4.5"
                fill="#C3B091"
                stroke="#FAF9F6"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "backOut" }}
              />
              
              <circle cx="100" cy="90" r="10" stroke="#C3B091" strokeWidth="0.5" className="animate-pulse" style={{ opacity: 0.3 }} />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
