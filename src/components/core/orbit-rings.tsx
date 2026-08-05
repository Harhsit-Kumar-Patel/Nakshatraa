export function OrbitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
      {/* Outer Ring with tilt */}
      <div className="absolute transform -rotate-12">
        <div 
          className="w-[600px] h-[350px] border border-[#D4AF37]/8 rounded-full relative"
          style={{ animation: 'spin-slow 60s linear infinite' }}
        >
          <div className="absolute w-2.5 h-2.5 bg-[#D4AF37] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_#D4AF37]" />
        </div>
      </div>

      {/* Middle Ring with tilt */}
      <div className="absolute transform rotate-6">
        <div 
          className="w-[440px] h-[260px] border border-[#A6823C]/6 rounded-full relative"
          style={{ animation: 'spin-reverse-slow 45s linear infinite' }}
        >
          <div className="absolute w-2 h-2 bg-[#8B7BB3]/80 rounded-full top-1/2 right-0 translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#8B7BB3]" />
        </div>
      </div>

      {/* Inner Ring with tilt */}
      <div className="absolute transform -rotate-6">
        <div 
          className="w-[300px] h-[180px] border border-[#D4AF37]/5 rounded-full relative"
          style={{ animation: 'spin-slow 30s linear infinite' }}
        >
          <div className="absolute w-1.5 h-1.5 bg-[#C67B5C]/80 rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 shadow-[0_0_8px_#C67B5C]" />
        </div>
      </div>
    </div>
  );
}
