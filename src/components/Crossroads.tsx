import { motion } from 'framer-motion';

const stories = [
  {
    title: 'Career Confusion',
    context: 'When your professional alignment shifts.',
    desc: 'Standing at a vocational crossroads can feel isolating. Rather than making arbitrary predictions, we analyze your core strengths and planetary timing cycles to identify windows of opportunity, helping you pivot with structured clarity.'
  },
  {
    title: 'Relationship Challenges',
    context: 'When communication is obscured by noise.',
    desc: 'Relational friction often stems from unaligned natural communication cycles. Our sessions isolate these tension points, helping you step back, gain perspective, and rebuild structural harmony with mutual understanding.'
  },
  {
    title: 'Marriage Transitions',
    context: 'Merging two distinct life journeys.',
    desc: 'Entering a lifelong partnership brings deep family expectations and shared futures. We examine baseline relational calculations to map out compatibility values, preparing you to commit with clear assurance.'
  },
  {
    title: 'Purpose & Self-Doubt',
    context: 'Realigning when direction feels obscured.',
    desc: 'Times of confusion are natural seasons of rest before growth. We translate complex celestial timings into practical actions, helping you clear self-doubt and refocus your energy on what truly matters.'
  }
];

const Crossroads = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10">
      
      {/* Background Soft Plaster Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-6 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold block mb-4">
              Context
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1E221F] leading-tight">
              Life isn't always predictable.
            </h2>
          </div>
          <div className="lg:col-span-6 text-left pt-2 lg:pt-8">
            <p className="font-body text-base text-[#79857B] leading-relaxed font-light">
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
                  <span className="font-heading text-5xl md:text-6xl text-[#243C2F]/10 select-none font-light block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1E221F] mb-3">
                    {story.title}
                  </h3>
                  <p className="font-body text-xs uppercase tracking-widest text-[#C3B091] font-semibold mb-6">
                    {story.context}
                  </p>
                  <div className="w-12 h-[1px] bg-[#243C2F]/20 mb-6" />
                </div>

                <div className={`lg:col-span-6 text-left ${
                  isEven ? 'lg:order-2 lg:col-start-7' : 'lg:order-1 lg:col-start-1'
                }`}>
                  <p className="font-body text-sm md:text-base text-[#79857B] leading-relaxed font-light">
                    {story.desc}
                  </p>
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
