import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GlowEffect } from './core/glow-effect';
import { Carousel, CarouselContent, CarouselItem } from './core/carousel';
import { cn } from '@/lib/utils';
import { InView } from './core/in-view';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};


const testimonials = [
  {
    id: 1,
    name: "Dr. Neeraj Singh",
    role: "Varanasi",
    quote: "I honestly didn't expect the session to be this precise 🎯. Without me explaining much, she picked up exactly what was going on in my career and personal life. No scare tactics, no vague promises — just simple, practical remedies I could actually follow. I walked out feeling calm and clear-headed 🙏. Would recommend to anyone who wants honest direction, not drama."
  },
  {
    id: 2,
    name: "Shivangi Singh",
    role: "Delhi",
    quote: "I went in for a horoscope reading and came out genuinely impressed ✨. She'd clearly studied my birth chart in depth before we even spoke. The way she broke down the planetary influences was practical, not preachy. What I appreciated most was that she didn't oversell anything — just realistic guidance and remedies I could work with 👍."
  },
  {
    id: 3,
    name: "Shreya Patel",
    role: "Teacher, Ghazipur",
    quote: "Nakshatra se baat karna sach mein eye-opening tha 🌟. Sabse zyada impress karne wali baat ye thi ki unhone mera chart itni depth se samjha aur itni asaani se explain kiya ki complicated cheezein bhi simple lagne lagi. Predictions bhi kaafi accurate nikle 🔮. Definitely dobara consult karungi."
  },
  {
    id: 4,
    name: "Khushi Wadhwani",
    role: "Student, Raipur, Chhattisgarh",
    quote: "The reading felt very genuine to me 💛. So many points she mentioned actually resonated with things going on in my life right now. Thank you for such an honest and thoughtful session — it meant a lot 🙏."
  },
  {
    id: 5,
    name: "Sumant K. Singh",
    role: "Prayagraj",
    quote: "Bahut hi accha experience raha mera 😊. Unhone patience se saari problems suni aur bina kisi jhaad-phoonk ke, seedha aur samajhdaari se solution diya. Sab kuch clearly explain kiya, session ke baad kaafi positive feel hua ✨. Anyone jo genuine guidance chahta hai, unhe main zaroor recommend karunga."
  },
  {
    id: 6,
    name: "Divya Singh",
    role: "Lucknow",
    quote: "बहुत ज्ञानी और सटीक 👏। मेरी पर्सनल लाइफ को लेकर जो भी उलझनें थीं, उन सब पर बहुत स्पष्ट और सही मार्गदर्शन मिला।"
  },
  {
    id: 7,
    name: "Sneha Singh",
    role: "Noida",
    quote: "Predictions bilkul accurate the aur solutions bhi time pe mil gaye ⏳. Bahut patience se sabhi problems sune, aur solutions ko bhi detail mein samjhaya 🙏"
  },
  {
    id: 8,
    name: "Kirti Agrawal",
    role: "Student, Ghazipur",
    quote: "The insights I got were genuinely spot-on and helped me a lot through some rough patches 🌱. I'm really grateful this platform exists — it gave me clarity when I needed it most and pointed me in the right direction ✨."
  },
  {
    id: 9,
    name: "Tripti Singh",
    role: "Mirzapur",
    quote: "मुझे कंसल्टेशन से बहुत संतुष्टि मिली 😊। मार्गदर्शन बहुत स्पष्ट था और आसानी से समझ आ गया, जिससे मैं अपनी स्थिति को एक नए नज़रिए से देख पाई। पूरा अनुभव बहुत सकारात्मक रहा 🙌, और मैं इसे उन सभी को सुझाऊंगी जो ईमानदार सलाह चाहते हैं।"
  },
  {
    id: 10,
    name: "Divya Mishra",
    role: "Ghazipur",
    quote: "Your knowledge of planets and stars is genuinely remarkable 🌌 — congratulations on that. You're already a wonderful teacher to children, and on top of that, an excellent astrologer too 🙏. Thank you for your guidance and the dedication you bring to it."
  },
  {
    id: 11,
    name: "Shalini Singh",
    role: "Varanasi",
    quote: "Session bahut hi friendly aur patient tarike se hui 💫. Sab kuch simple language mein samjhaya gaya, koi confusion nahi raha. Advice bhi honest thi aur confidence bhi mila 👍. Highly recommend karti hoon."
  },
  {
    id: 12,
    name: "Aishwarya Gupta",
    role: "Noida",
    quote: "I'll be honest, I usually don't trust astrology services easily 🤔. But this consultation completely changed my perspective. The way my horoscope, personality, and current situation were explained felt extremely accurate and personal. Thank you 😊"
  },
  {
    id: 13,
    name: "Mohit Kumar",
    role: "Noida",
    quote: "करियर और भविष्य को लेकर मैं पूरी तरह उलझन में था 😟। Nakshatraa के काउंसलिंग सेशन ने मुझे जो स्पष्टता और आत्मविश्वास दिया, उसकी सख्त ज़रूरत थी। गाइडेंस सिर्फ ज्योतिष तक सीमित नहीं थी — बहुत practical और आसान भाषा में समझाई गई। हर prediction और सुझाव धैर्य से explain किया गया। इतने genuine अनुभव के लिए धन्यवाद! 🙏"
  },
  {
    id: 14,
    name: "Divya Mishra",
    role: "Noida",
    quote: "Kuch personal challenges ko samajhne ke liye maine consultation liya tha, aur main bahut khush hoon ki maine ye kiya 😊. Session bahut calm aur respectful tha. Fear create karne ke bajaye, unhone solutions pe focus kiya aur birth chart ko simple language mein samjhaya. Mujhe heard aur supported feel hua, aur apne decisions ko lekar zyada confident bhi 💪. Honest guidance ke liye Nakshatraa ko zaroor recommend karungi."
  },
  {
    id: 15,
    name: "Nidhi Verma",
    role: "Noida",
    quote: "This was such a warm and patient session 💛 — everything explained in the simplest way possible. The advice felt honest and gave me real confidence going forward 🙌. I'd highly recommend this to anyone considering it."
  },
  {
    id: 16,
    name: "Shreya Singh",
    role: "Client",
    quote: "You have a real gift for breaking down complex chart details into something simple and practical 🔮. Your guidance helped me see my path clearly, and I genuinely feel more at peace now 🕊️."
  },
  {
    id: 17,
    name: "Priyanka Yadav",
    role: "Client",
    quote: "Maine kaafi astrologers se baat ki hai, lekin yahan ka approach bilkul different tha ✨. Har cheez itni clarity se explain ki gayi ki confusion hi nahi raha. Genuinely helpful session tha 🙏."
  },
  {
    id: 18,
    name: "Manohar Yadav",
    role: "Client",
    quote: "मैं काफी समय से अपने बिज़नेस को लेकर परेशान था 😔। यहाँ की सलाह बहुत व्यावहारिक और स्पष्ट थी, किसी डर या दिखावे के बिना। अब मुझे आगे का रास्ता साफ़ दिखाई दे रहा है 🌟।"
  },
  {
    id: 19,
    name: "Shalu Sonkar",
    role: "Client",
    quote: "Session bahut hi grounded aur honest laga 🙌. Koi bhi baat exaggerate nahi ki gayi, sab kuch practical tha. Ek baar consult karne ke baad, samajh aa gaya ki asli guidance kaisi honi chahiye 👍."
  },
  {
    id: 20,
    name: "Smrita Sachan",
    role: "Client",
    quote: "I came in with a lot of doubts about a personal decision I had to make 🤯. The way everything was explained — calm, clear, and without any unnecessary drama — genuinely helped me think straight ✨. Really grateful for this 🙏."
  }
];

const Testimonials = () => {
  const [selectedReview, setSelectedReview] = useState<typeof testimonials[0] | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const maxIdx = testimonials.length - 1;

  // Defensive index bounding check after resize events
  useEffect(() => {
    if (activeIdx > maxIdx) {
      setActiveIdx(maxIdx);
    }
  }, [maxIdx, activeIdx]);

  // Helper to truncate text for card previews
  const truncateText = (text: string, maxLength: number = 130) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section id="testimonials" className="py-14 md:py-18 bg-[#FAF8F5] relative z-10 border-b border-[#A6823C]/10 overflow-hidden">
      
      {/* Decorative top/bottom lines */}
      <div className="absolute top-0 inset-x-12 h-[1px] bg-[#A6823C]/10" />
      <div className="absolute bottom-0 inset-x-12 h-[1px] bg-[#A6823C]/10" />

      <InView
        variants={containerVariants}
        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-left mb-16 max-w-xl">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#4F5651] font-semibold block mb-4">
            Client Reflections
          </span>
          <h2 className="font-heading text-4xl font-light text-[#0F1110]">
            Stories of clarity.
          </h2>
          <div className="w-12 h-[1px] bg-[#A6823C] mt-6" />
        </motion.div>

        {/* Stage Slider Window */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto relative">
          <Carousel index={activeIdx} onIndexChange={setActiveIdx}>
            <CarouselContent className="relative flex">
              {testimonials.map((item) => (
                <CarouselItem key={item.id} className="w-full shrink-0 px-4">
                  <div
                    onClick={() => setSelectedReview(item)}
                    className="w-full bg-[#FFFFFF] border border-[#A6823C]/10 hover:border-[#A6823C]/35 p-8 md:p-10 rounded-3xl text-left flex flex-col justify-between min-h-[250px] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group"
                  >
                    <div className="space-y-4">
                      <span className="font-heading text-4xl text-[#A6823C]/30 leading-none block select-none">“</span>
                      <p className="font-body text-base text-[#4F5651] leading-relaxed font-light">
                        {truncateText(item.quote, 180)}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-[#A6823C]/10 flex justify-between items-baseline">
                      <div>
                        <span className="block font-body text-xs uppercase tracking-wider text-[#0F1110] font-semibold">
                          {item.name}
                        </span>
                        <span className="block font-body text-[10px] text-[#4F5651] font-light mt-0.5">
                          {item.role}
                        </span>
                      </div>
                      <span className="font-body text-xs text-[#A6823C] font-semibold transition-colors duration-300 group-hover:text-[#1C3326] whitespace-nowrap ml-4">
                        Read Full Review →
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>

        {/* Carousel Custom Indicators */}
        <motion.div variants={itemVariants} className="flex w-full justify-center gap-3 px-4 mt-12 flex-wrap">
          {testimonials.map((item, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveIdx(idx)}
                className={cn(
                  "h-10 w-10 rounded-full border text-[10px] font-semibold tracking-widest transition-all duration-300 font-body flex items-center justify-center shadow-sm",
                  isSelected
                    ? "bg-[#1C3326] text-white border-[#1C3326] scale-110"
                    : "bg-white text-[#4F5651] border-[#A6823C]/15 hover:border-[#A6823C] hover:text-[#0F1110]"
                )}
              >
                {String(idx + 1).padStart(2, '0')}
              </button>
            );
          })}
        </motion.div>
      </InView>



      {/* Full Detailed Modal Overlay */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F1110]/60 backdrop-blur-md px-6"
          >
            {/* Click backdrop to exit */}
            <div
              className="absolute inset-0 "
              onClick={() => setSelectedReview(null)}
            />

            {/* Modal Card Container */}
            <div className="relative w-full max-w-2xl z-10 flex items-center justify-center">
              <GlowEffect
                colors={['#A6823C', '#A6823C', '#4F5651', '#E8E5DF']}
                mode="breathe"
                blur="strong"
                duration={5}
                scale={1}
                className="rounded-3xl"
              />
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-[#FAF8F5] w-full rounded-3xl p-8 md:p-16 shadow-2xl text-left paper-grain border border-[#A6823C]/5 z-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-6 right-6 p-2 text-[#4F5651] hover:text-[#0F1110] transition-colors focus:outline-none "
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-8 mt-4">
                  {/* Decorative quote mark */}
                  <span className="font-heading text-7xl text-[#A6823C] leading-none block select-none h-4">“</span>

                  {/* Full Quote */}
                  <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-[#0F1110] leading-relaxed italic pr-4 md:pr-12">
                    {selectedReview.quote}
                  </h3>

                  <div className="w-12 h-[1px] bg-[#A6823C]" />

                  {/* Author Credentials */}
                  <div className="space-y-1">
                    <span className="block font-body text-sm uppercase tracking-widest text-[#0F1110] font-bold">
                      — {selectedReview.name}
                    </span>
                    <span className="block font-body text-xs text-[#4F5651] font-light">
                      {selectedReview.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Testimonials;
