import { motion } from 'framer-motion';

const stories = [
  {
    title: 'Relational Transitions',
    context: 'When connections evolve or fray.',
    desc: 'Whether navigating the initial stages of alignment or processing a shift in an existing bond, we help you step back, observe the communication patterns, and understand the undercurrents shaping your relational dynamics.'
  },
  {
    title: 'Professional Direction',
    context: 'When career paths lose their definition.',
    desc: 'Confusion in career timing or job changes is common. We analyze your inherent capabilities and planetary cycles to map out windows of opportunities, helping you choose the direction aligned with your core.'
  },
  {
    title: 'Marital Decisions',
    context: 'When two life paths merge.',
    desc: 'Entering marriage involves balancing individual values, family expectations, and future visions. Our consultations examine structural compatibility factors to ensure you make this choice with absolute clarity.'
  },
  {
    title: 'Confronting Doubt',
    context: 'When clarity is obscured by noise.',
    desc: 'Periods of transition often bring temporary self-doubt and hesitation. Through focused conversation, we help isolate external pressures from your inner truth, restoring balance and decisive focus.'
  }
];

const Crossroads = () => {
  return (
    <section id="philosophy" className="py-32 bg-[#F2EEE5] relative z-10 border-b border-[#1C2A20]/10">
      
      {/* Background Soft Plaster Glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-28">
          <div className="lg:col-span-6 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#7E8B82] font-semibold block mb-4">
              Context
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1C2A20] leading-tight">
              Life is full of crossroads.
            </h2>
          </div>
          <div className="lg:col-span-6 text-left pt-2 lg:pt-8">
            <p className="font-body text-base text-[#7E8B82] leading-relaxed font-light">
              We do not seek to predict the future or lock you into a predetermined fate. Our goal is to provide a calm, objective space to discuss transitions when path-making decisions demand deeper reflection.
            </p>
          </div>
        </div>

        {/* Asymmetrical Story Grid */}
        <div className="space-y-36">
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
                  <span className="font-heading text-5xl md:text-6xl text-[#1C2A20]/10 select-none font-light block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C2A20] mb-3">
                    {story.title}
                  </h3>
                  <p className="font-body text-xs uppercase tracking-widest text-[#A25A38] font-semibold mb-6">
                    {story.context}
                  </p>
                  <div className="w-12 h-[1px] bg-[#1C2A20]/20 mb-6" />
                </div>

                <div className={`lg:col-span-6 text-left ${
                  isEven ? 'lg:order-2 lg:col-start-7' : 'lg:order-1 lg:col-start-1'
                }`}>
                  <p className="font-body text-sm md:text-base text-[#7E8B82] leading-relaxed font-light">
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
