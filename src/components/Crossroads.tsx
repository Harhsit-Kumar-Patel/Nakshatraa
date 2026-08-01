import { motion } from 'framer-motion';
import { InView } from './core/in-view';

const stories = [
  {
    title: 'Career Confusion',
    context: 'When your professional alignment shifts.',
    desc: 'Identify windows of vocational opportunity using planetary timelines, helping you pivot with structured clarity.'
  },
  {
    title: 'Relationship Challenges',
    context: 'When communication is obscured by noise.',
    desc: 'Isolate cycle-based friction points to step back, gain perspective, and restore relationship harmony.'
  },
  {
    title: 'Marriage Transitions',
    context: 'Merging two distinct life journeys.',
    desc: 'Examine baseline compatibility calculations to align family expectations and commit with absolute assurance.'
  },
  {
    title: 'Purpose & Self-Doubt',
    context: 'Realigning when direction feels obscured.',
    desc: 'Translate complex celestial timings into practical actions, transforming confusion into self-alignment.'
  }
];

const textVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: 'blur(6px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
};

const Crossroads = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF8F5] relative z-10 border-b border-[#A6823C]/10">
      
      {/* Background Soft Plaster Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#4F5651] font-semibold block mb-4">
              Context
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#0F1110] leading-tight">
              Life isn't always predictable.
            </h2>
          </div>
          <div className="lg:col-span-6 text-left pt-2 lg:pt-8">
            <p className="font-body text-base text-[#4F5651] leading-relaxed font-light">
              We do not offer fortune-telling or quick fixes. Nakshatra exists to provide a calm, objective space to discuss life transits when major decisions require deeper perspective.
            </p>
          </div>
        </div>

        {/* Asymmetrical Story Grid */}
        <div className="space-y-20 md:space-y-32">
          {stories.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Asymmetric offset */}
                <div className={`lg:col-span-5 text-left ${
                  isEven ? 'lg:order-1' : 'lg:order-2 lg:col-start-8'
                }`}>
                  <InView
                    variants={textVariants}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                  >
                    <span className="font-heading text-5xl md:text-6xl text-[#A6823C]/10 select-none font-light block mb-2">
                      0{idx + 1}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl font-light text-[#0F1110] mb-3">
                      {story.title}
                    </h3>
                    <p className="font-body text-xs uppercase tracking-widest text-[#A6823C] font-semibold mb-6">
                      {story.context}
                    </p>
                    <div className="w-12 h-[1px] bg-[#A6823C]/20 mb-6" />
                  </InView>
                </div>

                <div className={`lg:col-span-6 text-left ${
                  isEven ? 'lg:order-2 lg:col-start-7' : 'lg:order-1 lg:col-start-1'
                }`}>
                  <InView
                    variants={textVariants}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
                    viewOptions={{ once: true, margin: '0px 0px -100px 0px' }}
                  >
                    <p className="font-body text-sm md:text-base text-[#4F5651] leading-relaxed font-light">
                      {story.desc}
                    </p>
                  </InView>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Crossroads;
