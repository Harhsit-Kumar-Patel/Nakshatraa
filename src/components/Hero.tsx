import { motion } from 'framer-motion';
import { GlowEffect } from './core/glow-effect';
import { InView } from './core/in-view';
import { Starfield } from './core/starfield';
import { OrbitRings } from './core/orbit-rings';
import { ZodiacWheel } from './core/zodiac-wheel';

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
  hidden: { opacity: 0, y: 24, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
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
      className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#030510] text-[#F8F7F4]"
    >
      {/* Twilight Starfield */}
      <Starfield density={70} />

      {/* Layered Nebula Ambient Glows */}
      <div className="absolute top-[5%] right-[10%] w-[500px] h-[500px] bg-gradient-to-tr from-[#1B1035]/35 to-[#2A1B4A]/25 rounded-full blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute bottom-[5%] left-[5%] w-[400px] h-[400px] bg-gradient-to-bl from-[#2A1B4A]/25 to-[#1B1035]/35 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="relative border border-[#D4AF37]/15 rounded-3xl p-6 md:p-12 bg-[#0A0E1F]/50 backdrop-blur-md shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center overflow-hidden">
          
          {/* Constellation Star Corner Nodes */}
          <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
          <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
          <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
          
          <div className="absolute top-0 bottom-0 left-[20px] w-[1px] bg-[#D4AF37]/5" />
          <div className="absolute top-0 bottom-0 right-[20px] w-[1px] bg-[#D4AF37]/5" />
          <div className="absolute left-0 right-0 top-[20px] h-[1px] bg-[#D4AF37]/5" />
          <div className="absolute left-0 right-0 bottom-[20px] h-[1px] bg-[#D4AF37]/5" />
        
          {/* Left Side: Editorial Typography & Copy */}
          <div className="lg:col-span-7 text-left z-10">
            <InView
              variants={containerVariants}
              viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
              className="space-y-10"
            >
              {/* Category Marker */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-3"
              >
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_6px_#D4AF37]" />
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#B8B5C4] font-semibold">
                  Life Guidance & Consultations
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#F8F7F4] leading-[1.15] tracking-[0.02em]"
              >
                Sometimes, clarity begins with{' '}
                <span className="italic font-normal text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.25)]">
                  a conversation.
                </span>
              </motion.h1>

              {/* Body Copy */}
              <motion.p
                variants={itemVariants}
                className="font-body text-base md:text-lg text-[#F5F3EF] leading-relaxed max-w-xl font-light"
              >
                When life transitions present choices, a thoughtful perspective helps isolate the noise. We support your self-alignment with private, grounded life reviews.
              </motion.p>

              {/* Dynamic Action Link */}
              <motion.div
                variants={itemVariants}
                className="pt-2"
              >
                <div className="relative inline-block group">
                  <GlowEffect
                    colors={['#D4AF37', '#8B7BB3', '#C67B5C', '#1B1035']}
                    mode="colorShift"
                    blur="soft"
                    duration={4}
                    scale={0.92}
                  />
                  <button
                    onClick={onOpenBooking}
                    className="relative inline-flex items-center gap-2 rounded-full bg-[#1C3326] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_15px_#D4AF37] transform hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
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

          {/* Right Side: Atmospheric Planetary System Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative min-h-[380px] lg:min-h-[420px] w-full"
          >
            {/* Ambient Nebula back-glow for orbits */}
            <div className="absolute w-[220px] h-[220px] bg-[#8B7BB3]/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Rotating Zodiac Mandala Ring */}
            <ZodiacWheel className="absolute w-[360px] h-[360px] opacity-[0.06] flex items-center justify-center" />

            {/* Moving Planetary Orbit Rings */}
            <OrbitRings />

            {/* Glowing Golden Sun Center Node */}
            <div className="absolute w-6 h-6 bg-[#D4AF37] rounded-full shadow-[0_0_20px_#D4AF37] flex items-center justify-center z-10 border border-white/20">
              <div className="w-1.5 h-1.5 bg-[#030510] rounded-full" />
            </div>

            {/* Technical Celestial Ring coordinates */}
            <div className="absolute bottom-2 font-mono text-[8px] tracking-[0.25em] text-[#B8B5C4]/40 uppercase pointer-events-none select-none">
              Ecliptic Coordinate System
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
