import { InView } from './core/in-view';

const textVariants = {
  hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)' }
};

const About = () => {
  return (
    <section className="py-14 md:py-18 bg-[#030510] text-[#F8F7F4] relative z-10 border-b border-[#D4AF37]/10">
      
      {/* Subtle background cosmic glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#2A1B4A]/20 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#B8B5C4] font-semibold block mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#F8F7F4] leading-tight tracking-[0.02em]">
              Thoughtful guidance, grounded in trust.
            </h2>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-7 text-left space-y-8 lg:pt-8">
            <InView variants={textVariants} transition={{ duration: 0.8, ease: 'easeOut' }}>
              <p className="font-body text-base md:text-lg text-[#F5F3EF] leading-relaxed font-light">
                We do not treat consultations as transaction points. Nakshatra was founded on the principle that self-navigation requires deep focus, absolute confidentiality, and respect for personal choices.
              </p>
            </InView>
            
            <InView variants={textVariants} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}>
              <p className="font-body text-sm md:text-base text-[#B8B5C4] leading-relaxed font-light">
                By combining certified Vedic calculations with professional counseling frameworks, we ensure you receive clear, actionable timelines without superstitious pressure. Every conversation is structured to help you make decisions with absolute personal agency.
              </p>
            </InView>

            {/* Premium Quote */}
            <InView variants={textVariants} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}>
              <div className="border-t border-b border-[#D4AF37]/10 py-8 my-12">
                <p className="font-heading text-xl md:text-2xl text-[#D4AF37] italic leading-relaxed font-light">
                  "Our role is not to predict the road you will walk, but to offer the clarity that empowers your next step."
                </p>
              </div>
            </InView>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <InView variants={textVariants} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}>
                <div>
                  <h4 className="font-heading text-lg font-light text-[#F8F7F4] mb-2">Absolute Privacy</h4>
                  <p className="font-body text-xs text-[#B8B5C4] leading-relaxed font-light">
                    Your birth information, context, and discussions are kept strictly confidential. We protect client data with utmost respect.
                  </p>
                </div>
              </InView>
              <InView variants={textVariants} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}>
                <div>
                  <h4 className="font-heading text-lg font-light text-[#F8F7F4] mb-2">Empathetic Approach</h4>
                  <p className="font-body text-xs text-[#B8B5C4] leading-relaxed font-light">
                    No predictions, fear-mongering, or absolute claims. We focus on timing trends and capabilities to empower your growth.
                  </p>
                </div>
              </InView>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
