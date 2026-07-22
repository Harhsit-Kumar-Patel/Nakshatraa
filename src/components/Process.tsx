import { useState } from 'react';
import { motion } from 'framer-motion';

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
    <section className="py-32 bg-[#F2EEE5] relative z-10 border-b border-[#1C2A20]/10">
      
      {/* Background soft plaster glow */}
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Outline */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-36">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#7E8B82] font-semibold block mb-4">
              Methodology
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1C2A20] leading-tight mb-8">
              A structured approach to self-alignment.
            </h2>
            <p className="font-body text-sm text-[#7E8B82] leading-relaxed font-light mb-6">
              Our consultation is a mutual conversation. We translate celestial configurations into clear, logical steps to ensure you leave with balanced insights.
            </p>
            <div className="w-12 h-[1px] bg-[#A25A38]" />
          </div>

          {/* Right Column: Interactive Vertical Timeline */}
          <div className="lg:col-span-7 text-left space-y-12 relative pl-8 border-l border-[#1C2A20]/15 ml-4">
            
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group transition-all duration-300"
              >
                {/* Connecting bullet point */}
                <div className={`absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border border-[#1C2A20] bg-[#F2EEE5] flex items-center justify-center transition-all duration-300 ${
                  hoveredIdx === idx ? 'scale-125 bg-[#1C2A20]' : ''
                }`}>
                  <div className="w-1.5 h-1.5 bg-[#A25A38] rounded-full" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-baseline space-x-4">
                    <span className="font-heading text-3xl font-light text-[#A25A38]">
                      {step.num}
                    </span>
                    <h3 className="font-heading text-xl md:text-2xl font-light text-[#1C2A20] group-hover:text-[#A25A38] transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm md:text-base text-[#7E8B82] leading-relaxed font-light max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
