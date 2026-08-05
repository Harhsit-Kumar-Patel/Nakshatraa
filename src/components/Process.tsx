import { useState } from 'react';
import { AnimatedGroup } from './core/animated-group';

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

const steps = [
  {
    num: '01',
    title: 'Book',
    desc: 'Schedule your session online. Choose either a focused WhatsApp consult or an immersive Google Meet conversation.'
  },
  {
    num: '02',
    title: 'Conversation',
    desc: 'Engage in a quiet, private 60-minute session. We study active planetary cycles alongside your current real-world challenges.'
  },
  {
    num: '03',
    title: 'Reflection',
    desc: 'Review custom alignment worksheets containing timing details, relational compatibility scores, or career trends discussed.'
  },
  {
    num: '04',
    title: 'Guidance',
    desc: 'Receive balanced perspectives and actions. We work together to isolate noise and uncover options for self-growth.'
  },
  {
    num: '05',
    title: 'Follow-up',
    desc: 'Periodic reviews are offered at key transitions, ensuring you retain focus as life seasons shift and evolve.'
  }
];

const Process = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-18 bg-[#030510] text-[#F8F7F4] relative z-10 border-b border-[#D4AF37]/10">
      
      {/* Background cosmic glow */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#1B1035]/20 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Outline */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-36">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#B8B5C4] font-semibold block mb-4">
              Methodology
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#F8F7F4] leading-tight mb-8 tracking-[0.02em]">
              A structured approach to self-alignment.
            </h2>
            <p className="font-body text-sm text-[#B8B5C4] leading-relaxed font-light mb-6">
              Our consultation is a mutual conversation. We translate celestial configurations into clear, logical steps to ensure you leave with balanced insights.
            </p>
            <div className="w-12 h-[1px] bg-[#D4AF37]" />
          </div>

          {/* Right Column: Interactive Vertical Timeline */}
          <div className="lg:col-span-7 relative p-8 md:p-12 border border-[#D4AF37]/10 bg-[#0A0E1F]/50 shadow-2xl rounded-3xl backdrop-blur-md">
            {/* Corner Star Nodes */}
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            
            <AnimatedGroup
              className="text-left space-y-12 relative pl-8 border-l border-[#D4AF37]/15 ml-4 w-full"
              variants={groupVariants}
            >
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className="relative group transition-all duration-300"
                >
                {/* Connecting bullet point */}
                <div className={`absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-[#D4AF37] bg-[#030510] flex items-center justify-center transition-all duration-300 ${
                  hoveredIdx === idx ? 'scale-125 bg-[#D4AF37]' : ''
                }`}>
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline space-x-4">
                    <span className="font-heading text-3xl font-light text-[#D4AF37]">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-light text-[#F8F7F4] group-hover:text-[#D4AF37] transition-colors duration-300 tracking-[0.02em]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm md:text-base text-[#B8B5C4] leading-relaxed font-light max-w-xl">
                    {step.desc}
                  </p>
                </div>
                </div>
              ))}
            </AnimatedGroup>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
