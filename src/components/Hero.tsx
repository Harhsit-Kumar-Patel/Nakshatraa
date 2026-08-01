import { motion } from 'framer-motion';
import { GlowEffect } from './core/glow-effect';
import { InView } from './core/in-view';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
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

interface HeroProps {
  onOpenBooking: () => void;
}

const Hero = ({ onOpenBooking }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#FAF8F5]"
    >
      {/* Background Cosmic Nebula Accents */}
      <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] bg-gradient-to-tr from-[#A6823C]/15 via-[#8B7BB3]/10 to-[#C67B5C]/10 rounded-full blur-[110px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-[355px] h-[355px] bg-gradient-to-bl from-[#A6823C]/6 via-[#8B7BB3]/5 to-[#A6823C]/8 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="relative border border-[#A6823C]/15 rounded-3xl p-6 md:p-12 bg-[#FFFFFF]/20 backdrop-blur-sm shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center overflow-hidden">
          {/* Decorative Corner Brackets (constellation style star nodes) */}
          <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#A6823C] rounded-full shadow-[0_0_8px_#A6823C]" />
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#A6823C] rounded-full shadow-[0_0_8px_#A6823C]" />
          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#A6823C] rounded-full shadow-[0_0_8px_#A6823C]" />
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#A6823C] rounded-full shadow-[0_0_8px_#A6823C]" />
          
          <div className="absolute top-0 bottom-0 left-[20px] w-[1px] bg-[#A6823C]/5" />
          <div className="absolute top-0 bottom-0 right-[20px] w-[1px] bg-[#A6823C]/5" />
          <div className="absolute left-0 right-0 top-[20px] h-[1px] bg-[#A6823C]/5" />
          <div className="absolute left-0 right-0 bottom-[20px] h-[1px] bg-[#A6823C]/5" />
        
        {/* Left Side: Emotional Editorial Copy */}
        <div className="lg:col-span-7 text-left">
          <InView
            variants={containerVariants}
            viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
            className="space-y-12"
          >
            {/* Subheading tag */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-3"
            >
              <div className="w-1.5 h-1.5 bg-[#A6823C] rounded-full" />
              <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#4F5651] font-semibold">
                Life Guidance & Consultations
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#0F1110] leading-[1.15] tracking-tight"
            >
              Sometimes, clarity begins with{' '}
              <span className="italic font-normal text-[#A6823C]">a conversation.</span>
            </motion.h1>

            {/* Core description */}
            <motion.p
              variants={itemVariants}
              className="font-body text-base md:text-lg text-[#4F5651] leading-relaxed max-w-xl font-light"
            >
              When life transitions present choices, a thoughtful perspective helps isolate the noise. We support your self-alignment with private, grounded life reviews.
            </motion.p>

            {/* CTA Link */}
            <motion.div
              variants={itemVariants}
              className="pt-2"
            >
              <div className="relative inline-block group">
                <GlowEffect
                  colors={['#A6823C', '#C67B5C', '#1C3326', '#8B7BB3']}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={0.9}
                />
                <button
                  onClick={onOpenBooking}
                  className="relative inline-flex items-center gap-2 rounded-full bg-[#1C3326] px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white transition-all duration-300 hover:bg-[#A6823C] shadow-md"
                >
                  <span>Book a Consultation</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300 text-sm">
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          </InView>
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
            <div className="absolute inset-0 border border-[#A6823C]/10 rounded-full flex items-center justify-center overflow-hidden">
              {/* Colored ambient glow overlay inside the ring */}
              <div className="absolute inset-4 bg-gradient-to-tr from-[#8B7BB3]/10 via-transparent to-[#C67B5C]/10 rounded-full filter blur-[15px]" />
              {/* Inner ring */}
              <div className="w-[85%] h-[85%] border border-[#A6823C]/5 rounded-full border-dashed animate-slow-rotate" />
            </div>

            {/* Custom line art representing paths crossing */}
            <svg
              viewBox="0 0 200 200"
              fill="none"
              className="w-4/5 h-4/5 text-[#A6823C] opacity-80 relative z-10"
              aria-hidden="true"
            >
              {/* Ground horizon line */}
              <motion.line
                x1="20"
                y1="140"
                x2="180"
                y2="140"
                stroke="#A6823C"
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
                stroke="#4F5651"
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
                fill="#A6823C"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 2.2, ease: "backOut" }}
              />
              
              <circle cx="100" cy="90" r="10" stroke="#A6823C" strokeWidth="0.5" className="animate-pulse" style={{ opacity: 0.3 }} />
            </svg>
          </div>
        </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
