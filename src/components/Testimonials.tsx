import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const featuredReviews = testimonials.slice(0, 3);
  const remainingReviews = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10">
      
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#243C2F]/10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative text-left">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#79857B] font-semibold block mb-4">
            Client Reflections
          </span>
          <h2 className="font-heading text-4xl font-light text-[#1E221F]">
            Stories of clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#C3B091] mt-6" />
        </div>

        {/* Testimonials Book Reel - Single Column */}
        <div className="space-y-16">
          
          {/* 1. Featured Top 3 Reviews */}
          {featuredReviews.map((item) => (
            <div 
              key={item.id}
              className="border-b border-[#243C2F]/5 pb-16 last:border-b-0 last:pb-0"
            >
              <div className="space-y-4">
                <span className="font-heading text-4xl text-[#C3B091]/30 leading-none block select-none">“</span>
                <p className="font-heading text-lg sm:text-xl font-light text-[#1E221F] leading-relaxed italic pr-4 md:pr-12">
                  {item.quote}
                </p>
                <div className="pt-2">
                  <span className="block font-body text-xs uppercase tracking-widest text-[#1E221F] font-bold">
                    — {item.name}
                  </span>
                  <span className="block font-body text-[10px] text-[#79857B] font-light mt-0.5">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* 2. Remaining Collapsible Reviews */}
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden space-y-16"
              >
                {/* Visual separator before expanded list */}
                <div className="border-t border-[#243C2F]/5 pt-16" />

                {remainingReviews.map((item) => (
                  <div 
                    key={item.id}
                    className="border-b border-[#243C2F]/5 pb-16 last:border-b-0 last:pb-0"
                  >
                    <div className="space-y-4">
                      <span className="font-heading text-4xl text-[#C3B091]/30 leading-none block select-none">“</span>
                      <p className="font-heading text-lg sm:text-xl font-light text-[#1E221F] leading-relaxed italic pr-4 md:pr-12">
                        {item.quote}
                      </p>
                      <div className="pt-2">
                        <span className="block font-body text-xs uppercase tracking-widest text-[#1E221F] font-bold">
                          — {item.name}
                        </span>
                        <span className="block font-body text-[10px] text-[#79857B] font-light mt-0.5">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3. Action Button (Expand / Collapse) */}
        <div className="mt-20 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3.5 border border-[#243C2F]/20 text-[#79857B] hover:border-[#243C2F] hover:text-[#1E221F] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all duration-500 cursor-none"
          >
            {isExpanded ? 'Collapse Reflections' : `Show remaining ${remainingReviews.length} reflections +`}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
