import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          subject: `New Nakshatraa Review Submitted - ${formData.name}`,
          from_name: 'Nakshatraa Reviews'
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
    <section className="py-24 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        
        <div className="text-left mb-12">
          <h4 className="font-heading text-3xl font-light text-[#1E221F] mb-2">
            Share your experience
          </h4>
          <p className="font-body text-xs text-[#79857B] leading-relaxed">
            Your reflections help us refine our guidance. Submitted feedback is routed to our private practice coordinators.
          </p>
        </div>

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
                  <label htmlFor="review-name" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
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
                    className="py-2.5 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                  />
                  {errors.name && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.name}</span>}
                </div>

                {/* Location/Role */}
                <div className="flex flex-col">
                  <label htmlFor="review-role" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
                    Location or Profession
                  </label>
                  <input
                    type="text"
                    id="review-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Designer"
                    className="py-2.5 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F]"
                  />
                </div>
              </div>

              {/* Review text */}
              <div className="flex flex-col">
                <label htmlFor="review-content" className="font-body text-[10px] uppercase tracking-widest text-[#79857B] font-semibold mb-2">
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
                  className="py-2.5 border-b border-[#243C2F]/30 focus:border-[#243C2F] bg-transparent text-sm focus:outline-none transition-colors placeholder:text-[#79857B]/40 text-[#1E221F] resize-none"
                />
                {errors.review && <span className="text-red-500 text-[10px] mt-1 uppercase tracking-wider">{errors.review}</span>}
              </div>

              {errors.submit && (
                <div className="text-red-500 text-xs font-semibold uppercase tracking-wider">
                  {errors.submit}
                </div>
              )}

              <div className="text-left pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 border border-[#243C2F] text-[#243C2F] rounded-full font-body text-xs uppercase tracking-widest font-semibold hover:bg-[#243C2F] hover:text-[#FDFBF7] transition-all duration-500 focus:outline-none disabled:opacity-50 cursor-none"
                >
                  {isSubmitting ? 'Sending Reflection...' : 'Submit Reflection'}
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="review-success"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-left space-y-4"
            >
              <h5 className="font-heading text-2xl font-light text-[#1E221F]">
                Reflection submitted.
              </h5>
              <p className="font-body text-sm text-[#79857B] leading-relaxed font-light">
                Thank you for sharing your experience. Your reflection has been forwarded to our practice email. We review all feedback to maintain quality and update our customer reviews section.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="px-6 py-2 border border-[#243C2F]/20 text-[#79857B] hover:border-[#243C2F] hover:text-[#1E221F] rounded-full font-body text-xs uppercase tracking-widest font-semibold transition-all cursor-none"
                >
                  Submit Another
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ReviewForm;
