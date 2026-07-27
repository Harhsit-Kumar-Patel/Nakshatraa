import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India",
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading."
  },
  {
    id: 2,
    name: "Sumant K. Singh",
    role: "Prayagraj",
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance."
  },
  {
    id: 3,
    name: "Divya Singh",
    role: "Lucknow",
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life."
  },
  {
    id: 4,
    name: "Sneha Singh",
    role: "Noida",
    quote: "Very accurate predictions and timely solution,very patiently listens to all our problems and also explains the solutions in detail 🙏"
  },
  {
    id: 5,
    name: "Dr. Neeraj Singh",
    role: "Varanasi",
    quote: "I had a wonderful consultation and was truly blown away by the depth and accuracy of the reading. Without asking many details upfront, my current life situation were pinpointed and I got profound clarity on my career and personal life. The given remedies and suggestions are simple, logical, and very practical to follow, rather than being confusing or fear-driven. I left the session feeling calm, positive, and deeply guided. Highly recommended to anyone seeking honest and meaningful direction!"
  },
  {
    id: 6,
    name: "Kirti Agrawal",
    role: "Student, Ghazipur",
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction."
  },
  {
    id: 7,
    name: "Shivangi Singh",
    role: "Delhi",
    quote: "I recently consulted this astrologer regarding my horoscope, and I was genuinely impressed by the experience. The analysis was detailed, thoughtful, and based on a thorough understanding of my birth chart. She explained the planetary influences in a clear and practical manner, making it easy to understand both current challenges and future opportunities. What stood out most was the honest and balanced guidance. Rather than making unrealistic promises, the advice was realistic, insightful, and focused on actionable remedies and personal growth."
  },
  {
    id: 8,
    name: "Tripti Singh",
    role: "Mirzapur",
    quote: "I am very happy with the consultation. The guidance was clear, easy to understand, and gave me a better way to look at my situation. It was a very positive experience, and I would happily recommend this service to anyone looking for honest and helpful astrology advice."
  },
  {
    id: 9,
    name: "Divya Mishra",
    role: "Ghazipur",
    quote: "Your knowledge of planets and constellations is truly amazing. Heartfelt congratulations to you for that. My dear friend, besides being a wonderful teacher for children, you are also an excellent expert in astrology. Thank you for your guidance and dedication."
  },
  {
    id: 10,
    name: "Shreya Patel",
    role: "Teacher, Ghazipur",
    quote: "Consulting with Nakshatra was a truly eye-opening experience. What impressed me most was how deeply they understood my chart and how seamlessly they translated complex astrological concepts into plain, actionable advice. Their predictions were accurate, and their logical approach gave me immense confidence. I will definitely be returning for future guidance."
  },
  {
    id: 11,
    name: "Shalini Singh",
    role: "Varanasi",
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service."
  }
];

const Testimonials = () => {
  const [selectedIdx, setSelectedIdx] = useState(4); // Default to Dr. Neeraj Singh
  const activeReview = testimonials[selectedIdx];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10 overflow-hidden">
      
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Header */}
        <div className="text-left mb-16 max-w-xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold block mb-4">
            Client Registry
          </span>
          <h2 className="font-heading text-4xl font-light text-[#1E221F]">
            Reflections & stories.
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mt-6" />
        </div>

        {/* Split-Screen Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* MOBILE INDEX: Horizontal swiper (Visible on mobile, hidden on desktop) */}
          <div className="lg:hidden w-full overflow-x-auto pb-4 gap-3 scrollbar-none flex whitespace-nowrap mb-4">
            {testimonials.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={`mob-idx-${idx}`}
                  onClick={() => setSelectedIdx(idx)}
                  className={`px-5 py-2.5 rounded-full border font-body text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-none focus:outline-none shrink-0 ${
                    isActive 
                      ? 'bg-[#243C2F] border-[#243C2F] text-[#FDFBF7]' 
                      : 'border-[#243C2F]/10 text-[#79857B] hover:border-[#243C2F]/40'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          {/* DESKTOP STICKY INDEX: Sticky register notebook (Hidden on mobile, sticky on desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col space-y-1.5 lg:sticky lg:top-36 max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin text-left border-r border-[#243C2F]/5">
            {testimonials.map((item, idx) => {
              const isActive = idx === selectedIdx;
              return (
                <button
                  key={`desk-idx-${idx}`}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 cursor-none focus:outline-none flex flex-col justify-start relative group ${
                    isActive 
                      ? 'bg-[#F4F0E8] border-l-2 border-[#243C2F] pl-5' 
                      : 'bg-transparent border-l border-[#243C2F]/5 hover:bg-[#F4F0E8]/50 pl-4'
                  }`}
                >
                  <span className={`block font-body text-[11px] uppercase tracking-wider font-semibold transition-colors duration-300 ${
                    isActive ? 'text-[#243C2F]' : 'text-[#1E221F]/70 group-hover:text-[#1E221F]'
                  }`}>
                    {item.name}
                  </span>
                  <span className="block font-body text-[8px] text-[#79857B] font-light mt-0.5">
                    {item.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Spacious Editorial Reader (Desktop borders, mobile top padding) */}
          <div className="w-full lg:col-span-8 border-t lg:border-t-0 lg:border-l lg:border-[#243C2F]/10 pt-8 lg:pt-0 lg:pl-16 text-left min-h-[380px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIdx}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-8"
              >
                {/* Giant luxury quotation mark */}
                <span className="font-heading text-7xl text-[#C3B091] leading-none block select-none h-4">“</span>

                {/* Quote Text */}
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#1E221F] leading-relaxed italic pr-4 md:pr-12">
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

      </div>
    </section>
  );
};

export default Testimonials;
