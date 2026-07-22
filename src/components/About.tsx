const About = () => {
  return (
    <section className="py-32 bg-[#F2EEE5] relative z-10 border-b border-[#1C2A20]/10">
      
      {/* Subtle background Plaster glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-white/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 text-left">
            <span className="font-body text-[10px] uppercase tracking-[0.2em] text-[#7E8B82] font-semibold block mb-4">
              Origin
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-[#1C2A20] leading-tight">
              Ancient wisdom, meeting modern clarity.
            </h2>
          </div>

          {/* Right Column: Story Narrative */}
          <div className="lg:col-span-7 text-left space-y-8 lg:pt-8">
            <p className="font-body text-base md:text-lg text-[#7E8B82] leading-relaxed font-light">
              Nakshatraa was established as an alternative to traditional, prediction-based consulting. We believe that life events are not set in stone, nor should they be feared. Instead, we treat astrology as a map—a detailed system of planetary seasons that outlines times of rest, times of creation, and times of focus.
            </p>
            
            <p className="font-body text-sm md:text-base text-[#7E8B82] leading-relaxed font-light">
              Our lead consultant brings 3 years of active counseling experience, supported by formal certifications in Vedic Astrology from Sango Life Sutras. By combining these traditional calculations with modern counseling and mental wellness frameworks, we provide clear perspectives on major decisions without superstitious claims.
            </p>

            {/* Premium Quote */}
            <div className="border-t border-b border-[#1C2A20]/10 py-8 my-12">
              <p className="font-heading text-xl md:text-2xl text-[#1C2A20] italic leading-relaxed font-light">
                "Our role is not to predict where you will walk, but to offer the clarity that empowers your next step."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="font-heading text-lg font-light text-[#1C2A20] mb-2">Our Intent</h4>
                <p className="font-body text-xs text-[#7E8B82] leading-relaxed font-light">
                  To provide a space for quiet reflection, offering structured insights that clarify your choices and respect your personal agency.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg font-light text-[#1C2A20] mb-2">Our Method</h4>
                <p className="font-body text-xs text-[#7E8B82] leading-relaxed font-light">
                  Mathematical precision in chart calculation, combined with empathetic, grounded counseling that translates complex planetary patterns into practical life actions.
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
