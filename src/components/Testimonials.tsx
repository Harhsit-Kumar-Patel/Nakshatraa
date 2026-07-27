import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Dr. Neeraj Singh",
    role: "Varanasi",
    quote: "I had a wonderful consultation and was truly blown away by the depth and accuracy of the reading. Without asking many details upfront, my current life situation were pinpointed and I got profound clarity on my career and personal life. The given remedies and suggestions are simple, logical, and very practical to follow, rather than being confusing or fear-driven. I left the session feeling calm, positive, and deeply guided. Highly recommended to anyone seeking honest and meaningful direction!"
  },
  {
    id: 2,
    name: "Shivangi Singh",
    role: "Delhi",
    quote: "I recently consulted this astrologer regarding my horoscope, and I was genuinely impressed by the experience. The analysis was detailed, thoughtful, and based on a thorough understanding of my birth chart. She explained the planetary influences in a clear and practical manner, making it easy to understand both current challenges and future opportunities. What stood out most was the honest and balanced guidance. Rather than making unrealistic promises, the advice was realistic, insightful, and focused on actionable remedies and personal growth."
  },
  {
    id: 3,
    name: "Shreya Patel",
    role: "Teacher, Ghazipur",
    quote: "Consulting with Nakshatra was a truly eye-opening experience. What impressed me most was how deeply they understood my chart and how seamlessly they translated complex astrological concepts into plain, actionable advice. Their predictions were accurate, and their logical approach gave me immense confidence. I will definitely be returning for future guidance."
  },
  {
    id: 4,
    name: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India",
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading."
  },
  {
    id: 5,
    name: "Sumant K. Singh",
    role: "Prayagraj",
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance."
  },
  {
    id: 6,
    name: "Divya Singh",
    role: "Lucknow",
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life."
  },
  {
    id: 7,
    name: "Sneha Singh",
    role: "Noida",
    quote: "Very accurate predictions and timely solution,very patiently listens to all our problems and also explains the solutions in detail 🙏"
  },
  {
    id: 8,
    name: "Kirti Agrawal",
    role: "Student, Ghazipur",
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction."
  },
  {
    id: 9,
    name: "Tripti Singh",
    role: "Mirzapur",
    quote: "I am very happy with the consultation. The guidance was clear, easy to understand, and gave me a better way to look at my situation. It was a very positive experience, and I would happily recommend this service to anyone looking for honest and helpful astrology advice."
  },
  {
    id: 10,
    name: "Divya Mishra",
    role: "Ghazipur",
    quote: "Your knowledge of planets and constellations is truly amazing. Heartfelt congratulations to you for that. My dear friend, besides being a wonderful teacher for children, you are also an excellent expert in astrology. Thank you for your guidance and dedication."
  },
  {
    id: 11,
    name: "Shalini Singh",
    role: "Varanasi",
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service."
  }
];

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Monitor viewport size to adjust slider limits dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIdx = isMobile ? testimonials.length - 1 : testimonials.length - 2;

  // Defensive index bounding check after resize events
  useEffect(() => {
    if (activeIdx > maxIdx) {
      setActiveIdx(maxIdx);
    }
  }, [isMobile, maxIdx, activeIdx]);

  const handlePrev = () => {
    setActiveIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIdx((prev) => Math.min(prev + 1, maxIdx));
  };

  // Helper to truncate text for card previews
  const truncateText = (text: string, maxLength: number = 130) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  const progressPercent = maxIdx === 0 ? 100 : (activeIdx / maxIdx) * 100;

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
            Stories of clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mt-6" />
        </div>

        {/* Stage Slider Window */}
        <div className="relative w-full overflow-hidden">
          <motion.div 
            className="flex gap-8"
            animate={{ 
              x: isMobile 
                ? `calc(-${activeIdx * 100}% - ${activeIdx * 32}px)` 
                : `calc(-${activeIdx * 50}% - ${activeIdx * 16}px)` 
            }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedReview(item)}
                className="w-full md:w-[calc(50%-16px)] shrink-0 bg-[#F4F0E8] border border-[#243C2F]/5 p-8 rounded-2xl text-left flex flex-col justify-between min-h-[250px] transition-all hover:shadow-md cursor-none group"
              >
                <div className="space-y-4">
                  <span className="font-heading text-4xl text-[#C3B091]/30 leading-none block select-none">“</span>
                  <p className="font-body text-sm text-[#79857B] leading-relaxed font-light">
                    {truncateText(item.quote, 150)}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#243C2F]/5 flex justify-between items-baseline">
                  <div>
                    <span className="block font-body text-xs uppercase tracking-wider text-[#1E221F] font-semibold">
                      {item.name}
                    </span>
                    <span className="block font-body text-[9px] text-[#79857B] font-light mt-0.5">
                      {item.role}
                    </span>
                  </div>
                  <span className="font-body text-[10px] text-[#C3B091] group-hover:text-[#243C2F] transition-colors duration-300 font-semibold whitespace-nowrap ml-4">
                    Read Full →
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Controls & Progress Indicator */}
        <div className="flex items-center space-x-6 justify-between max-w-xl mx-auto mt-16 pt-8 border-t border-[#243C2F]/5">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={activeIdx === 0}
            className="p-2.5 rounded-full border border-[#243C2F]/10 text-[#79857B] hover:border-[#243C2F] hover:text-[#1E221F] disabled:opacity-30 disabled:border-[#243C2F]/10 disabled:text-[#79857B] transition-all duration-300 focus:outline-none cursor-none flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Elegant Horizontal Progress Bar */}
          <div className="flex-1 h-[2px] bg-[#243C2F]/5 relative rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-[#C3B091]"
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Current Page Counter */}
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold whitespace-nowrap select-none">
            {String(activeIdx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
          </span>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            disabled={activeIdx === maxIdx}
            className="p-2.5 rounded-full border border-[#243C2F]/10 text-[#79857B] hover:border-[#243C2F] hover:text-[#1E221F] disabled:opacity-30 disabled:border-[#243C2F]/10 disabled:text-[#79857B] transition-all duration-300 focus:outline-none cursor-none flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Full Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E221F]/60 backdrop-blur-md px-6"
          >
            {/* Click backdrop to exit */}
            <div
              className="absolute inset-0 cursor-none"
              onClick={() => setSelectedReview(null)}
            />

            {/* Modal Card Container */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative bg-[#FDFBF7] w-full max-w-2xl rounded-3xl p-8 md:p-16 shadow-2xl z-10 text-left paper-grain border border-[#243C2F]/5"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedReview(null)}
                className="absolute top-6 right-6 p-2 text-[#79857B] hover:text-[#1E221F] transition-colors focus:outline-none cursor-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-8 mt-4">
                {/* Decorative quote mark */}
                <span className="font-heading text-7xl text-[#C3B091] leading-none block select-none h-4">“</span>

                {/* Full Quote */}
                <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#1E221F] leading-relaxed italic pr-4 md:pr-12">
                  {selectedReview.quote}
                </h3>

                <div className="w-12 h-[1px] bg-[#C3B091]" />

                {/* Author Credentials */}
                <div className="space-y-1">
                  <span className="block font-body text-sm uppercase tracking-widest text-[#1E221F] font-bold">
                    — {selectedReview.name}
                  </span>
                  <span className="block font-body text-xs text-[#79857B] font-light">
                    {selectedReview.role}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Testimonials;
