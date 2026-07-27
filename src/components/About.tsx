const About = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] relative z-10 border-b border-[#243C2F]/10">
      
      {/* Subtle background plaster glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#79857B] font-semibold block mb-4">
              Our Values
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1E221F] leading-tight">
              Thoughtful guidance, grounded in trust.
            </h2>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-7 text-left space-y-8 lg:pt-8">
            <p className="font-body text-base md:text-lg text-[#79857B] leading-relaxed font-light">
              We do not treat consultations as transaction points. Nakshatra was founded on the principle that self-navigation requires deep focus, absolute confidentiality, and respect for personal choices.
            </p>
            
            <p className="font-body text-sm md:text-base text-[#79857B] leading-relaxed font-light">
              By combining certified Vedic calculations with professional counseling frameworks, we ensure you receive clear, actionable timelines without superstitious pressure. Every conversation is structured to help you make decisions with absolute personal agency.
            </p>

            {/* Premium Quote */}
            <div className="border-t border-b border-[#243C2F]/10 py-8 my-12">
              <p className="font-heading text-xl md:text-2xl text-[#243C2F] italic leading-relaxed font-light">
                "Our role is not to predict the road you will walk, but to offer the clarity that empowers your next step."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-heading text-lg font-light text-[#1E221F] mb-2">Absolute Privacy</h4>
                <p className="font-body text-xs text-[#79857B] leading-relaxed font-light">
                  Your birth information, context, and discussions are kept strictly confidential. We protect client data with utmost respect.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-light text-[#1E221F] mb-2">Empathetic Approach</h4>
                <p className="font-body text-xs text-[#79857B] leading-relaxed font-light">
                  No predictions, fear-mongering, or absolute claims. We focus on timing trends and capabilities to empower your growth.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
