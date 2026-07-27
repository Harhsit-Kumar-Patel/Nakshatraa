import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "I found the reading to be very genuine and insightful. It really resonated with me, and many of the points felt accurate and meaningful. Thank you for such an honest and thoughtful reading.",
    author: "Khushi Wadhwani",
    role: "Student, Raipur, Chattisgarh, India"
  },
  {
    id: 2,
    quote: "I had a really great experience with this astrology reading. The astrologer listened patiently to all my problems, and gave simple, honest, and helpful advice. Everything was explained in a clear way and I left the session feeling much more positive. I would certainly recommend their services to anyone seeking true guidance.",
    author: "Sumant Krishna Singh",
    role: "Prayagraj"
  },
  {
    id: 3,
    quote: "Extremely knowledgeable and precise. Gave me clear insights in to my personal life.",
    author: "Divya Singh",
    role: "Lucknow"
  },
  {
    id: 4,
    quote: "Very accurate predictions and timely solution,very patiently listens to all our problems and also explains the solutions in detail 🙏",
    author: "Sneha Singh",
    role: "Noida"
  },
  {
    id: 5,
    quote: "I had a wonderful consultation and was truly blown away by the depth and accuracy of the reading. Without asking many details upfront, my current life situation were pinpointed and I got profound clarity on my career and personal life. The given remedies and suggestions are simple, logical, and very practical to follow, rather than being confusing or fear-driven. I left the session feeling calm, positive, and deeply guided. Highly recommended to anyone seeking honest and meaningful direction!",
    author: "Dr. Neeraj Singh",
    role: "Varanasi"
  },
  {
    id: 6,
    quote: "I found the insights provided to be deeply accurate and instrumental in helping me navigate the ups and downs of my journey. I am truly grateful for this platform, which offered valuable clarity and guided my perspective in the right direction.",
    author: "Kirti Agrawal",
    role: "Student, Ghazipur"
  },
  {
    id: 7,
    quote: "I recently consulted this astrologer regarding my horoscope, and I was genuinely impressed by the experience. The analysis was detailed, thoughtful, and based on a thorough understanding of my birth chart. She explained the planetary influences in a clear and practical manner, making it easy to understand both current challenges and future opportunities. What stood out most was the honest and balanced guidance. Rather than making unrealistic promises, the advice was realistic, insightful, and focused on actionable remedies and personal growth.",
    author: "Shivangi Singh",
    role: "Delhi"
  },
  {
    id: 8,
    quote: "I am very happy with the consultation. The guidance was clear, easy to understand, and gave me a better way to look at my situation. It was a very positive experience, and I would happily recommend this service to anyone looking for honest and helpful astrology advice.",
    author: "Tripti Singh",
    role: "Mirzapur"
  },
  {
    id: 9,
    quote: "Your knowledge of planets and constellations is truly amazing. Heartfelt congratulations to you for that. My dear friend, besides being a wonderful teacher for children, you are also an excellent expert in astrology. Thank you for your guidance and dedication.",
    author: "Divya Mishra",
    role: "Ghazipur"
  },
  {
    id: 10,
    quote: "Consulting with Nakshatra was a truly eye-opening experience. What impressed me most was how deeply they understood my chart and how seamlessly they translated complex astrological concepts into plain, actionable advice. Their predictions were accurate, and their logical approach gave me immense confidence. I will definitely be returning for future guidance.",
    author: "Shreya Patel",
    role: "Teacher, Ghazipur"
  },
  {
    id: 11,
    quote: "I had a wonderful experience with this consultation. The session was friendly, patient, and explained everything in a simple and easy-to-understand way. The advice was honest, helpful, and gave me a lot of confidence. I highly recommend this service.",
    author: "Shalini Singh",
    role: "Varanasi"
  }
];

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null);

  // Helper to truncate text for card previews
  const truncateText = (text: string, maxLength: number = 135) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10 overflow-hidden">
      
      {/* Decorative lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-left mb-16 max-w-xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold block mb-4">
            Client Reflections
          </span>
          <h2 className="font-heading text-4xl font-light text-[#1E221F]">
            Stories of clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mt-6" />
        </div>

        {/* Staggered CSS Masonry Wall */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:balance] w-full">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              onClick={() => setSelectedReview(item)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="break-inside-avoid mb-8 bg-[#F4F0E8] border border-[#243C2F]/5 p-8 rounded-2xl text-left flex flex-col justify-between transition-all hover:shadow-md cursor-none group inline-block w-full"
            >
              <div className="space-y-4">
                <span className="font-heading text-4xl text-[#C3B091]/30 leading-none block select-none">“</span>
                <p className="font-body text-sm text-[#79857B] leading-relaxed font-light">
                  {truncateText(item.quote)}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#243C2F]/5 flex justify-between items-baseline">
                <div>
                  <span className="block font-body text-xs uppercase tracking-wider text-[#1E221F] font-semibold">
                    {item.author}
                  </span>
                  <span className="block font-body text-[9px] text-[#79857B] font-light mt-0.5">
                    {item.role}
                  </span>
                </div>
                <span className="font-body text-[10px] text-[#C3B091] group-hover:text-[#243C2F] transition-colors duration-300 font-semibold whitespace-nowrap ml-4">
                  Read Full →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Overlay for Detailed Review */}
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

              {/* Modal Card */}
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

                  {/* Quote Body */}
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#1E221F] leading-relaxed italic">
                    {selectedReview.quote}
                  </h3>

                  <div className="w-12 h-[1px] bg-[#C3B091]" />

                  {/* Credentials */}
                  <div className="space-y-1">
                    <span className="block font-body text-sm uppercase tracking-widest text-[#1E221F] font-bold">
                      — {selectedReview.author}
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

      </div>
    </section>
  );
};

export default Testimonials;
