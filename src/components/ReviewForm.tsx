import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from './core/in-view';
import { GlowEffect } from './core/glow-effect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    review: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name';
    if (!formData.review.trim()) tempErrors.review = 'Please write your reflection';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '27d94ba6-8596-4c68-a4f8-c343733c8099',
          name: formData.name,
          role_location: formData.role || 'Client',
          review_content: formData.review,
          subject: `New Nakshatra Review Submitted - ${formData.name}`,
          from_name: 'Nakshatra Reviews'
        })
      });

      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
      } else {
        setErrors({ submit: data.message || 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setErrors({ submit: 'Failed to send request. Check your connection.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', role: '', review: '' });
    setIsSubmitted(false);
  };

  return (
    <section className="py-16 md:py-20 bg-[#030510] text-[#F8F7F4] relative z-10 border-b border-[#D4AF37]/10">
      <InView
        variants={containerVariants}
        viewOptions={{ once: true, margin: '0px 0px -150px 0px' }}
        className="max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Premium Constellation Callout */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 text-left bg-[#1C3326] text-white p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[350px] shadow-lg"
          >
            {/* Constellation Star nodes in card */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-[#D4AF37] rounded-full shadow-[0_0_8px_#D4AF37]" />
            
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'radial-gradient(#FAF8F5 1.5px, transparent 1.5px)',
              backgroundSize: '20px 20px'
            }} />

            <div>
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block mb-4">
                Community Journal
              </span>
              <h4 className="font-heading text-3xl md:text-4xl font-light text-white leading-tight tracking-[0.02em]">
                Share your journey.
              </h4>
            </div>

            <div className="mt-8 relative z-10">
              <p className="font-body text-sm text-white/80 leading-relaxed font-light italic">
                "Your reflections help calibrate our guidance, creating coordinate points that illuminate paths of self-alignment for others."
              </p>
              <div className="w-12 h-[1px] bg-[#D4AF37] mt-6" />
            </div>
          </motion.div>

          {/* Right Column: Clean Floating Form Card */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-7 bg-[#0A0E1F]/50 p-8 md:p-10 border border-[#D4AF37]/10 rounded-3xl shadow-2xl text-left relative overflow-hidden backdrop-blur-md"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="review-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label htmlFor="review-name" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="review-name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="Your name"
                        className="py-2.5 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/40 text-[#F8F7F4]"
                      />
                      {errors.name && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</span>}
                    </div>

                    {/* Location/Role */}
                    <div className="flex flex-col">
                      <label htmlFor="review-role" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                        Location or Profession
                      </label>
                      <input
                        type="text"
                        id="review-role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g., Varanasi"
                        className="py-2.5 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/40 text-[#F8F7F4]"
                      />
                    </div>
                  </div>

                  {/* Review text */}
                  <div className="flex flex-col">
                    <label htmlFor="review-content" className="font-body text-[10px] uppercase tracking-widest text-[#B8B5C4] font-semibold mb-2">
                      Reflection *
                    </label>
                    <textarea
                      id="review-content"
                      value={formData.review}
                      onChange={(e) => {
                        setFormData({ ...formData, review: e.target.value });
                        if (errors.review) setErrors({ ...errors, review: '' });
                      }}
                      placeholder="Write your honest experience about the session..."
                      rows={3}
                      className="py-2.5 border-b border-[#D4AF37]/30 focus:border-[#D4AF37] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#B8B5C4]/40 text-[#F8F7F4] resize-none"
                    />
                    {errors.review && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.review}</span>}
                  </div>

                  {errors.submit && (
                    <div className="text-red-500 text-xs font-semibold uppercase tracking-wider">
                      {errors.submit}
                    </div>
                  )}

                  <div className="text-left pt-4">
                    <div className="relative inline-block group">
                      <GlowEffect
                        colors={['#D4AF37', '#8B7BB3', '#C67B5C', '#1B1035']}
                        mode="colorShift"
                        blur="soft"
                        duration={4}
                        scale={0.92}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative inline-flex items-center gap-2 rounded-full bg-[#1C3326] px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-[#FAF8F5] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#030510] hover:shadow-[0_0_12px_#D4AF37] shadow-md disabled:opacity-50 cursor-pointer"
                      >
                        {isSubmitting ? 'Sending Reflection...' : 'Submit Reflection'}
                      </button>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="review-success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-left space-y-4"
                >
                  <h5 className="font-heading text-2xl font-light text-[#F8F7F4] tracking-[0.02em]">
                    Reflection submitted.
                  </h5>
                  <p className="font-body text-sm text-[#B8B5C4] leading-relaxed font-light">
                    Thank you for sharing your experience. Your reflection has been forwarded to our coordinators.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 border border-[#D4AF37]/20 text-[#B8B5C4] hover:border-[#D4AF37] hover:text-[#F8F7F4] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </InView>
    </section>
  );
};

export default ReviewForm;
