import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India",
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading.",
    x: 15,
    y: 50
  },
  {
    id: 2,
    name: "Sumant K. Singh",
    role: "Prayagraj",
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance.",
    x: 30,
    y: 25
  },
  {
    id: 3,
    name: "Divya Singh",
    role: "Lucknow",
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life.",
    x: 45,
    y: 15
  },
  {
    id: 4,
    name: "Sneha Singh",
    role: "Noida",
    quote: "Very accurate predictions and timely solution,very patiently listens to all our problems and also explains the solutions in detail 🙏",
    x: 60,
    y: 25
  },
  {
    id: 5,
    name: "Dr. Neeraj Singh",
    role: "Varanasi",
    quote: "I had a wonderful consultation and was truly blown away by the depth and accuracy of the reading. Without asking many details upfront, my current life situation were pinpointed and I got profound clarity on my career and personal life. The given remedies and suggestions are simple, logical, and very practical to follow, rather than being confusing or fear-driven. I left the session feeling calm, positive, and deeply guided. Highly recommended to anyone seeking honest and meaningful direction!",
    x: 75,
    y: 45
  },
  {
    id: 6,
    name: "Kirti Agrawal",
    role: "Student, Ghazipur",
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction.",
    x: 35,
    y: 75
  },
  {
    id: 7,
    name: "Shivangi Singh",
    role: "Delhi",
    quote: "I recently consulted this astrologer regarding my horoscope, and I was genuinely impressed by the experience. The analysis was detailed, thoughtful, and based on a thorough understanding of my birth chart. She explained the planetary influences in a clear and practical manner, making it easy to understand both current challenges and future opportunities. What stood out most was the honest and balanced guidance. Rather than making unrealistic promises, the advice was realistic, insightful, and focused on actionable remedies and personal growth.",
    x: 55,
    y: 85
  },
  {
    id: 8,
    name: "Tripti Singh",
    role: "Mirzapur",
    quote: "I am very happy with the consultation. The guidance was clear, easy to understand, and gave me a better way to look at my situation. It was a very positive experience, and I would happily recommend this service to anyone looking for honest and helpful astrology advice.",
    x: 70,
    y: 70
  },
  {
    id: 9,
    name: "Divya Mishra",
    role: "Ghazipur",
    quote: "Your knowledge of planets and constellations is truly amazing. Heartfelt congratulations to you for that. My dear friend, besides being a wonderful teacher for children, you are also an excellent expert in astrology. Thank you for your guidance and dedication.",
    x: 85,
    y: 30
  },
  {
    id: 10,
    name: "Shreya Patel",
    role: "Teacher, Ghazipur",
    quote: "Consulting with Nakshatra was a truly eye-opening experience. What impressed me most was how deeply they understood my chart and how seamlessly they translated complex astrological concepts into plain, actionable advice. Their predictions were accurate, and their logical approach gave me immense confidence. I will definitely be returning for future guidance.",
    x: 25,
    y: 50
  },
  {
    id: 11,
    name: "Shalini Singh",
    role: "Varanasi",
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service.",
    x: 50,
    y: 48
  }
];

// Constellation interconnecting lines
const lines = [
  { from: 0, to: 9 },   // Khushi (0) to Shreya (9)
  { from: 9, to: 1 },   // Shreya (9) to Sumant (1)
  { from: 1, to: 2 },   // Sumant (1) to Divya S (2)
  { from: 2, to: 3 },   // Divya S (2) to Sneha (3)
  { from: 3, to: 8 },   // Sneha (3) to Divya M (8)
  { from: 8, to: 4 },   // Divya M (8) to Dr. Neeraj (4)
  { from: 4, to: 7 },   // Dr. Neeraj (4) to Tripti (7)
  { from: 7, to: 6 },   // Tripti (7) to Shivangi (6)
  { from: 6, to: 5 },   // Shivangi (6) to Kirti (5)
  { from: 5, to: 0 },   // Kirti (5) to Khushi (0)
  { from: 10, to: 1 },  // Shalini (10) to Sumant (1)
  { from: 10, to: 2 },  // Shalini (10) to Divya S (2)
  { from: 10, to: 9 },  // Shalini (10) to Shreya (9)
  { from: 10, to: 4 },  // Shalini (10) to Dr. Neeraj (4)
  { from: 10, to: 5 },  // Shalini (10) to Kirti (5)
  { from: 10, to: 7 }   // Shalini (10) to Tripti (7)
];

const Testimonials = () => {
  const [selectedIdx, setSelectedIdx] = useState(4); // Default to Dr. Neeraj Singh
  const activeReview = testimonials[selectedIdx];

  // Helper to check if a line connects to the selected node
  const isLineActive = (fromIdx: number, toIdx: number) => {
    return fromIdx === selectedIdx || toIdx === selectedIdx;
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10 overflow-hidden">
      
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold block mb-4">
            Client Reflections
          </span>
          <h2 className="font-heading text-4xl font-light text-[#1E221F]">
            Constellation of experiences.
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mt-6" />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: SVG Constellation Map */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <div className="relative w-full aspect-square max-w-[420px] bg-[#F4F0E8]/40 border border-[#243C2F]/5 rounded-3xl p-6 shadow-sm flex items-center justify-center overflow-hidden">
              
              {/* Star background texture details */}
              <div className="absolute inset-0 opacity-10 paper-grain pointer-events-none" />

              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full select-none"
                style={{ overflow: 'visible' }}
              >
                {/* 1. Draw Connecting Lines */}
                {lines.map((line, idx) => {
                  const p1 = testimonials[line.from];
                  const p2 = testimonials[line.to];
                  const active = isLineActive(line.from, line.to);
                  
                  return (
                    <motion.line
                      key={`line-${idx}`}
                      x1={p1.x}
                      y1={p1.y}
                      x2={p2.x}
                      y2={p2.y}
                      stroke="#C3B091"
                      animate={{
                        stroke: active ? '#243C2F' : '#C3B091',
                        strokeWidth: active ? 0.8 : 0.25,
                        opacity: active ? 0.8 : 0.15
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  );
                })}

                {/* 2. Draw Pulsing Active Ring */}
                <AnimatePresence>
                  {testimonials.map((node, idx) => {
                    const isActive = idx === selectedIdx;
                    if (!isActive) return null;
                    return (
                      <motion.circle
                        key={`ring-${idx}`}
                        cx={node.x}
                        cy={node.y}
                        r={7}
                        fill="none"
                        stroke="#C3B091"
                        strokeWidth={0.5}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                      />
                    );
                  })}
                </AnimatePresence>

                {/* 3. Draw Interactive Star Nodes */}
                {testimonials.map((node, idx) => {
                  const isActive = idx === selectedIdx;
                  return (
                    <g key={`node-group-${idx}`} className="cursor-none">
                      {/* Invisible larger hover trigger area */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={6}
                        fill="transparent"
                        className="cursor-none"
                        onClick={() => setSelectedIdx(idx)}
                      />
                      
                      {/* Visual Node */}
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        onClick={() => setSelectedIdx(idx)}
                        animate={{
                          r: isActive ? 4 : 2.5,
                          fill: isActive ? '#243C2F' : '#FDFBF7',
                          stroke: isActive ? '#C3B091' : '#C3B091',
                          strokeWidth: isActive ? 1.5 : 0.8,
                          opacity: isActive ? 1 : 0.6
                        }}
                        transition={{ duration: 0.3 }}
                        className="cursor-none"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            <p className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold">
              ✦ Select a star node to navigate client insights ✦
            </p>
          </div>

          {/* RIGHT COLUMN: Spacious Editorial Review Display */}
          <div className="lg:col-span-7 text-left flex flex-col justify-between min-h-[360px] space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Giant luxury quotation mark */}
                <span className="font-heading text-7xl text-[#C3B091] leading-none block select-none h-4">“</span>

                {/* Reflection Text */}
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#1E221F] leading-relaxed italic pr-6">
                  {activeReview.quote}
                </h3>

                <div className="w-12 h-[1px] bg-[#C3B091]" />

                {/* Author Info */}
                <div className="space-y-1">
                  <span className="block font-body text-sm uppercase tracking-widest text-[#1E221F] font-bold">
                    — {activeReview.name}
                  </span>
                  <span className="block font-body text-xs text-[#79857B] font-light">
                    {activeReview.role}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Index of Reflections (Accessibility & Fast navigation list) */}
        <div className="mt-20 pt-8 border-t border-[#243C2F]/5 text-left">
          <span className="block font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold mb-6">
            Client Registry Index
          </span>
          <div className="flex flex-wrap gap-3">
            {testimonials.map((node, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={`index-btn-${idx}`}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-4 py-2 rounded-full border font-body text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-none focus:outline-none ${
                    isActive 
                      ? 'bg-[#243C2F] border-[#243C2F] text-[#FDFBF7]' 
                      : 'border-[#243C2F]/10 text-[#79857B] hover:border-[#243C2F]/40 hover:text-[#1E221F]'
                  }`}
                >
                  {node.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
