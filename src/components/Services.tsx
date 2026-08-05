import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedGroup } from './core/animated-group';
import { GlowEffect } from './core/glow-effect';


const experiences = [
  {
    id: 'life',
    num: '01',
    title: 'Life Consultation',
    desc: 'A comprehensive evaluation of your current life cycle. We examine foundational strengths, planetary timelines (Dashas), and transits to help you make decisions.',
    details: 'During this 60-minute session, we construct your natal chart to trace underlying themes. Rather than predicting events, we focus on identifying period-based strengths and aligning choices with your natural timeline.'
  },
  {
    id: 'relationship',
    num: '02',
    title: 'Relationship Guidance',
    desc: 'Perspectives on resolving conflicts, improving communication, and understanding interpersonal dynamics between partners or family members.',
    details: 'This session uses compatibility analysis to highlight relational dynamics. We identify areas of friction, emotional alignment, and communication style differences to offer practical pathways for harmony.'
  },
  {
    id: 'marriage',
    num: '03',
    title: 'Marriage Guidance',
    desc: 'Supportive compatibility reviews for couples planning to marry. We analyze structural parameters to establish mutual understanding.',
    details: 'We offer a thoughtful pre-marital compatibility assessment. We examine emotional resonance, financial values, longevity indices, and shared growth paths to build a firm foundation.'
  },
  {
    id: 'career',
    num: '04',
    title: 'Career Direction',
    desc: 'Aligning professional goals and pivots with your inherent capabilities and cosmic timings to optimize growth.',
    details: 'If you are facing professional crossroads, this consultation helps highlight sectors suited for you. We evaluate active solar transits to identify windows for changes or business launches.'
  },
  {
    id: 'family',
    num: '05',
    title: 'Family Guidance',
    desc: 'Understanding multi-generational dynamics, parenting styles, and property or home transitions constructively.',
    details: 'We assess familial structures to promote household peace. It supports parents in understanding children’s temperaments, and guides families through property decisions with patience.'
  },
  {
    id: 'growth',
    num: '06',
    title: 'Personal Growth',
    desc: 'Dedicated coaching sessions to navigate periods of isolation, Saturn return transits, and internal transformation.',
    details: 'Transitions like Saturn Returns can feel isolating. We analyze these developmental phases to help you frame them as opportunities for maturity, grounding, and self-mastery.'
  },
  {
    id: 'astrology',
    num: '07',
    title: 'Traditional Insight Sessions',
    desc: 'Specific planetary study to answer focused questions on timing, planetary placement strengths, or transit advice.',
    details: 'A focused discussion on specific planetary alignments. We explain active transits, minor planetary dashas, and suggest reflective practices to bring balance to your daily lifestyle.'
  }
];

interface ServicesProps {
  onBookService: (serviceName: string) => void;
}

const groupVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
      },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 1,
        type: 'spring' as const,
        bounce: 0.2,
      },
    },
  },
};

const Services = ({ onBookService }: ServicesProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="experiences" className="py-16 md:py-20 bg-[#030510] text-[#F8F7F4] relative z-10 border-b border-[#D4AF37]/10 overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#1B1035]/20 via-[#2A1B4A]/10 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left mb-12 md:mb-16 max-w-2xl">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#B8B5C4] font-semibold block mb-4">
            Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#F8F7F4] leading-tight tracking-[0.02em]">
            Consultations designed for clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37] mt-6" />
        </div>

        <AnimatedGroup
          className="max-w-4xl mx-auto flex flex-col gap-4 pt-4 w-full"
          variants={groupVariants}
        >
          {experiences.map((exp) => {
            const isActive = activeId === exp.id;
            return (
              <div key={exp.id} className="relative w-full group">
                <GlowEffect
                  colors={['#D4AF37', '#8B7BB3', '#C67B5C', '#1B1035']}
                  mode="static"
                  blur="medium"
                  scale={0.98}
                  className="rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div
                  layout
                  onClick={() => setActiveId(isActive ? null : exp.id)}
                  className="relative bg-[#0A0E1F]/60 border border-[#D4AF37]/10 hover:border-[#D4AF37]/35 p-6 md:p-8 rounded-3xl text-left flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer overflow-hidden backdrop-blur-sm"
                  transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                >
                {/* Soft hover glow aura */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-[#D4AF37]/10 via-[#8B7BB3]/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="font-body text-[11px] text-[#D4AF37]/65 font-bold uppercase tracking-widest">{exp.num}</span>
                    <span className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4]/50 group-hover:text-[#D4AF37] transition-colors duration-300 font-semibold">
                      {isActive ? 'Click to minimize' : 'Read details'}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-light text-[#F8F7F4] group-hover:text-[#D4AF37] transition-colors duration-300 tracking-[0.02em]">
                    {exp.title}
                  </h3>

                  <p className="font-body text-sm text-[#B8B5C4] leading-relaxed font-light">
                    {exp.desc}
                  </p>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-[#D4AF37]/10 pt-4 mt-4 space-y-4"
                      >
                        <p className="font-body text-xs text-[#F5F3EF] leading-relaxed font-light">
                          {exp.details}
                        </p>
                        
                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevents toggle minimize
                              onBookService(exp.title);
                            }}
                            className="px-6 py-2.5 bg-[#1C3326] text-[#FAF8F5] hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_10px_#D4AF37] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm cursor-pointer"
                          >
                            Request Consultation
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          );
        })}
        </AnimatedGroup>

      </div>
    </section>
  );
};

export default Services;
