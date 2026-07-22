import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const experiences = [
  {
    id: 'life',
    num: '01',
    title: 'Life Consultation',
    desc: 'A comprehensive evaluation of your current life cycle. We examine foundational strengths, planetary timelines (Dashas), and current transits to help you make key decisions with clear perspective.',
    details: 'During this 60-minute session, we construct your natal chart to trace underlying themes. Rather than predicting events, we focus on identifying period-based strengths and aligning choices with your natural timeline.'
  },
  {
    id: 'relationship',
    num: '02',
    title: 'Relationship Guidance',
    desc: 'Perspectives on resolving conflicts, improving communication, and understanding interpersonal dynamics between partners or close family members.',
    details: 'This session uses compatibility analysis to highlight relational dynamics. We identify areas of friction, emotional alignment, and communication style differences to offer practical pathways for harmony.'
  },
  {
    id: 'marriage',
    num: '03',
    title: 'Marriage Consultation',
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
    title: 'Personal Growth Sessions',
    desc: 'Dedicated coaching sessions to navigate periods of isolation, Saturn return transits, and internal transformation.',
    details: 'Transitions like Saturn Returns can feel isolating. We analyze these developmental phases to help you frame them as opportunities for maturity, grounding, and self-mastery.'
  },
  {
    id: 'astrology',
    num: '07',
    title: 'Astrology Insights',
    desc: 'Specific planetary study to answer focused questions on timing, planetary placement strengths, or transit advice.',
    details: 'A focused discussion on specific planetary alignments. We explain active transits, minor planetary dashas, and suggest reflective practices to bring balance to your daily lifestyle.'
  }
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section id="experiences" className="py-32 bg-[#F2EEE5] relative z-10 border-b border-[#1C2A20]/10 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left mb-24 max-w-2xl">
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#7E8B82] font-semibold block mb-4">
            Experiences
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1C2A20] leading-tight">
            Consultations designed for clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#1C2A20] mt-6" />
        </div>

        {/* Gallery List Layout */}
        <div className="max-w-4xl mx-auto border-t border-[#1C2A20]/10">
          {experiences.map((exp, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={exp.id}
                onClick={() => setActiveIdx(idx)}
                className="border-b border-[#1C2A20]/10 py-8 text-left transition-colors duration-300 cursor-none select-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline space-x-8">
                    {/* Active Terracotta Dot indicator */}
                    <div className="w-4 flex items-center justify-center">
                      {isActive ? (
                        <motion.div
                          layoutId="activeDot"
                          className="w-2 h-2 rounded-full bg-[#A25A38]"
                          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        />
                      ) : (
                        <span className="text-[10px] text-[#7E8B82]/40 font-semibold">{exp.num}</span>
                      )}
                    </div>
                    
                    <h3 className={`font-heading text-2xl md:text-3xl font-light transition-colors duration-300 ${
                      isActive ? 'text-[#1C2A20] font-normal' : 'text-[#1C2A20]/50'
                    }`}>
                      {exp.title}
                    </h3>
                  </div>

                  <span className={`font-body text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-[#A25A38] font-bold' : 'text-[#7E8B82]/50'
                  }`}>
                    {isActive ? 'Active' : 'Details'}
                  </span>
                </div>

                {/* Expanding Content Panel */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 pr-6 pt-6 pb-2 space-y-4 max-w-2xl">
                        <p className="font-body text-sm md:text-base text-[#7E8B82] leading-relaxed font-light">
                          {exp.desc}
                        </p>
                        <p className="font-body text-xs text-[#1C2A20]/75 italic leading-relaxed border-t border-[#1C2A20]/5 pt-4 font-light">
                          {exp.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
