export function ZodiacWheel({ className }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none opacity-[0.03] select-none ${className}`} style={{ animation: 'spin-slow 120s linear infinite' }}>
      <svg viewBox="0 0 400 400" className="w-[450px] h-[450px] text-[#D4AF37]" fill="none" stroke="currentColor" strokeWidth="0.5">
        <circle cx="200" cy="200" r="195" />
        <circle cx="200" cy="200" r="170" />
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="40" />

        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x1 = 200 + 40 * Math.cos(angle);
          const y1 = 200 + 40 * Math.sin(angle);
          const x2 = 200 + 195 * Math.cos(angle);
          const y2 = 200 + 195 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.5" />
          );
        })}

        <circle cx="200" cy="90" r="1.5" fill="currentColor" />
        <circle cx="100" cy="140" r="1.5" fill="currentColor" />
        <circle cx="290" cy="230" r="1.5" fill="currentColor" />
        <circle cx="140" cy="290" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}
