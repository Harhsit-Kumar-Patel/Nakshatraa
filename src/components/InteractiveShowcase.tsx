import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlowEffect } from './core/glow-effect';
import { AnimatedBackground } from './core/animated-background';
import { Sparkles, Sun, Moon, Compass, Star, ChevronRight } from 'lucide-react';

const tabs = ['Planetary Transits', 'Natal Alignment', 'Timing Cycles'];

const cycleDetails = {
  'Planetary Transits': {
    title: 'Planetary Transits',
    subtitle: 'Daily celestial adjustments',
    desc: 'Track the swift movement of inner planets relative to your natal position. These calculations help identify peak windows for conversations, creative projects, or quiet alignment.',
    color: '#A6823C',
    icon: <Compass className="w-5 h-5" />,
  },
  'Natal Alignment': {
    title: 'Natal Alignment',
    subtitle: 'Your structural roadmap',
    desc: 'A comprehensive structural mapping of the sky at your exact moment of birth. Uncover active planetary potentials and learn to navigate foundational life themes with confidence.',
    color: '#A6823C',
    icon: <Sun className="w-5 h-5" />,
  },
  'Timing Cycles': {
    title: 'Timing Cycles',
    subtitle: 'Planetary periods (Dashas)',
    desc: 'Vedic astrology breaks life down into major planetary cycles. Knowing your active Dasha period helps isolate background noise and align your career pivots with natural timing.',
    color: '#4F5651',
    icon: <Moon className="w-5 h-5" />,
  },
};

const cards = [
  {
    title: 'Ascendant Strength',
    value: 'Aries (Aswini)',
    desc: 'Active physical energy and leadership potential.',
    mode: 'pulse',
    glowColors: ['#C67B5C', '#A6823C', '#FFFFFF'],
  },
  {
    title: 'Luminaries Harmony',
    value: 'Sun in 10th House',
    desc: 'Peak professional visibility and natural authority.',
    mode: 'rotate',
    glowColors: ['#A6823C', '#E8E5DF', '#4F5651'],
  },
  {
    title: 'Emotional Anchor',
    value: 'Moon in Revati',
    desc: 'Grounded intuition and empathetic communication.',
    mode: 'colorShift',
    glowColors: ['#8B7BB3', '#A6823C', '#A6823C'],
  },
];

const InteractiveShowcase = () => {
  const [activeTab, setActiveTab] = useState('Planetary Transits');
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const accordionItems = [
    {
      title: 'How do transits affect my current decisions?',
      content: 'Transits represent planetary movements triggering different houses in your natal chart. They do not force events, but highlight environmental changes and emotional shifts, allowing you to prepare and choose constructively.',
    },
    {
      title: 'What is the significance of the Nakshatra?',
      content: 'A Nakshatra is a lunar mansion that defines the finer qualities of the Moon placement in your chart. It indicates your deep emotional instincts, thinking patterns, and core personality traits.',
    },
    {
      title: 'Can these calculations predict future careers?',
      content: 'We use planetary alignments to identify inherent skills, communication styles, and timing cycles. Instead of hard predictions, this offers guidance to make career pivots during favorable solar transits.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] relative z-10 border-b border-[#A6823C]/10 overflow-hidden">
      {/* Background radial gradient decoration */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#A6823C]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#A6823C]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-left mb-16 max-w-2xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#4F5651] font-semibold flex items-center gap-2 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#A6823C]" />
            Aesthetic Playground
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-[#0F1110] leading-tight">
            Interactive Sanctuary
          </h2>
          <p className="font-body text-sm md:text-base text-[#4F5651] mt-4 leading-relaxed font-light">
            Preview modern Framer Motion primitives, color shifts, glow accents, and responsive UI controls tailored for Nakshatra.
          </p>
          <div className="w-12 h-[1px] bg-[#A6823C] mt-6" />
        </div>

        {/* Part 1: Sliding Tabs & Animated Frames */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-5 text-left space-y-8">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#0F1110]">
              Sliding Cycle Selector
            </h3>
            <p className="font-body text-sm text-[#4F5651] leading-relaxed font-light">
              This selector utilizes an `AnimatedBackground` pill capsule. When you hover or click a tab, the highlighted background morphs and transitions smoothly between items.
            </p>

            {/* Tab Controls */}
            <div className="flex flex-wrap p-1.5 bg-[#FFFFFF] rounded-full border border-[#A6823C]/5 w-fit">
              <AnimatedBackground
                className="rounded-full bg-white shadow-sm"
                transition={{
                  type: 'spring',
                  bounce: 0.15,
                  duration: 0.3,
                }}
                enableHover
                onValueChange={(val) => val && setActiveTab(val)}
                defaultValue={activeTab}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    data-id={tab}
                    type="button"
                    className={`px-4 py-2 font-body text-[10px] uppercase tracking-widest font-semibold transition-colors duration-300 ${
                      activeTab === tab ? 'text-[#A6823C]' : 'text-[#4F5651]'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </AnimatedBackground>
            </div>
          </div>

          {/* Interactive Card Frame Display */}
          <div className="lg:col-span-7">
            <div className="relative p-[1px] rounded-3xl overflow-hidden border border-[#A6823C]/5 bg-[#FFFFFF]/50 backdrop-blur-sm shadow-sm min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeTab && (
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 md:p-12 text-left space-y-6 max-w-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-2xl text-[#A6823C] border border-[#A6823C]/5 shadow-sm">
                        {cycleDetails[activeTab as keyof typeof cycleDetails].icon}
                      </div>
                      <div>
                        <h4 className="font-heading text-xl md:text-2xl font-light text-[#0F1110]">
                          {cycleDetails[activeTab as keyof typeof cycleDetails].title}
                        </h4>
                        <span className="font-body text-[9px] uppercase tracking-widest text-[#A6823C] font-semibold">
                          {cycleDetails[activeTab as keyof typeof cycleDetails].subtitle}
                        </span>
                      </div>
                    </div>
                    <p className="font-body text-sm md:text-base text-[#4F5651] leading-relaxed font-light">
                      {cycleDetails[activeTab as keyof typeof cycleDetails].desc}
                    </p>

                    <div className="pt-4">
                      <button className="relative px-6 py-2.5 bg-[#A6823C] text-[#FAF8F5] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all hover:bg-[#0F1110] inline-flex items-center gap-2 group">
                        Explore Cycle
                        <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Part 2: Interactive Cards Grid with Custom Glow Modes */}
        <div className="mb-24">
          <div className="text-left mb-12 max-w-xl">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#0F1110]">
              Glow-Enhanced Primitives
            </h3>
            <p className="font-body text-sm text-[#4F5651] mt-2 leading-relaxed font-light">
              Hover over the cards below to see various motion glow modes (`pulse`, `rotate`, `colorShift`) rendering with custom blurred backdrops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow layer underneath */}
                <GlowEffect
                  colors={card.glowColors}
                  mode={card.mode as any}
                  blur="strong"
                  duration={4}
                  scale={0.95}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                />

                {/* Content Card */}
                <div className="relative bg-[#FAF8F5] p-8 rounded-3xl border border-[#A6823C]/5 hover:border-[#A6823C]/30 transition-all duration-500 shadow-sm flex flex-col justify-between min-h-[220px] text-left z-10 paper-grain">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-[10px] uppercase tracking-widest text-[#4F5651] font-semibold">
                        Preset: {card.mode}
                      </span>
                      <Star className={`w-4 h-4 transition-colors duration-500 ${
                        hoveredCard === idx ? 'text-[#A6823C] fill-[#A6823C]' : 'text-[#4F5651]/30'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg text-[#4F5651] font-light">
                        {card.title}
                      </h4>
                      <p className="font-heading text-xl md:text-2xl font-light text-[#0F1110] mt-1">
                        {card.value}
                      </p>
                    </div>
                  </div>

                  <p className="font-body text-xs text-[#4F5651] leading-relaxed font-light pt-6 border-t border-[#A6823C]/5 mt-4">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Interactive Accordion Drawers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 text-left space-y-8">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#0F1110]">
              Planetary Insights Accordion
            </h3>
            <p className="font-body text-sm text-[#4F5651] leading-relaxed font-light">
              A smooth height-expanding panel using Framer Motion springs, providing interactive alignment answers cleanly.
            </p>

            <div className="relative p-6 bg-[#FFFFFF]/40 border border-[#A6823C]/5 rounded-3xl text-left">
              <span className="font-body text-[9px] uppercase tracking-widest text-[#A6823C] font-bold block mb-2">
                Need Specific Help?
              </span>
              <h4 className="font-heading text-lg font-light text-[#0F1110] mb-4">
                Schedule a custom alignment reading
              </h4>
              <button className="relative group w-full py-3 border border-[#A6823C] text-[#A6823C] rounded-full font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#A6823C] hover:text-[#FAF8F5] transition-all duration-500 overflow-hidden">
                <GlowEffect
                  colors={['#A6823C', '#E8E5DF']}
                  mode="rotate"
                  blur="soft"
                  duration={2}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                />
                <span className="relative z-10">Select Consultation</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {accordionItems.map((item, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#A6823C]/5 bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left p-6 font-heading text-lg font-light text-[#0F1110] hover:text-[#A6823C] transition-colors focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <span className={`transform transition-transform duration-300 text-xs text-[#A6823C] ${
                      isOpen ? 'rotate-90' : ''
                    }`}>
                      →
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-[#A6823C]/5 text-left">
                          <p className="font-body text-sm text-[#4F5651] leading-relaxed font-light">
                            {item.content}
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
      </div>
    </section>
  );
};

export default InteractiveShowcase;
