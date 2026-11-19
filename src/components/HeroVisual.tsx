import Image from "next/image";

/** Futuristic orbital globe with animated trade routes and the company emblem at its core. */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* glow */}
      <div className="absolute inset-[12%] rounded-full bg-gold-500/20 blur-3xl" />
      <div className="absolute inset-[22%] rounded-full bg-navy-700/60 blur-2xl" />

      {/* rotating rings */}
      <svg viewBox="0 0 400 400" className="animate-spin-slow absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ecd28f" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#c49a3c" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ecd28f" stopOpacity="0.7" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="200" r="190" fill="none" stroke="url(#ring)" strokeWidth="1" />
        <circle cx="200" cy="200" r="190" fill="none" stroke="#d9b25e" strokeWidth="2" strokeDasharray="2 14" opacity="0.5" />
        <circle cx="200" cy="10" r="4" fill="#ecd28f" />
        <circle cx="390" cy="200" r="3" fill="#d9b25e" />
      </svg>

      <svg viewBox="0 0 400 400" className="animate-spin-slower absolute inset-[9%] h-[82%] w-[82%]">
        <circle cx="200" cy="200" r="185" fill="none" stroke="#9aa8c7" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="1 6" />
        <ellipse cx="200" cy="200" rx="185" ry="70" fill="none" stroke="#d9b25e" strokeOpacity="0.35" />
        <ellipse cx="200" cy="200" rx="70" ry="185" fill="none" stroke="#d9b25e" strokeOpacity="0.2" />
        <circle cx="15" cy="200" r="3.5" fill="#ecd28f" />
      </svg>

      {/* globe wireframe + routes */}
      <svg viewBox="0 0 400 400" className="absolute inset-[18%] h-[64%] w-[64%]">
        <circle cx="200" cy="200" r="195" fill="#061232" stroke="#d9b25e" strokeOpacity="0.5" />
        {[60, 120, 170].map((rx) => (
          <ellipse key={rx} cx="200" cy="200" rx={rx} ry="195" fill="none" stroke="#9aa8c7" strokeOpacity="0.15" />
        ))}
        {[-130, -65, 0, 65, 130].map((y) => {
          const r = Math.sqrt(195 * 195 - y * y);
          return <ellipse key={y} cx="200" cy={200 + y} rx={r} ry={r * 0.12} fill="none" stroke="#9aa8c7" strokeOpacity="0.15" />;
        })}
        {/* routes out of Ethiopia */}
        <g fill="none" stroke="#ecd28f" strokeWidth="2" className="route">
          <path d="M235 245 Q 290 150 330 110" />
          <path d="M235 245 Q 150 140 90 120" />
          <path d="M235 245 Q 320 250 360 215" />
          <path d="M235 245 Q 200 330 120 320" />
        </g>
        <circle cx="235" cy="245" r="7" fill="#ecd28f" />
        <circle cx="235" cy="245" r="7" fill="none" stroke="#ecd28f" className="animate-pulse-ring origin-[235px_245px]" />
        {[
          [330, 110],
          [90, 120],
          [360, 215],
          [120, 320],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#d9b25e" />
        ))}
      </svg>

      {/* emblem */}
      <div className="animate-float absolute bottom-[4%] right-[4%] rounded-full p-1.5 glass shadow-[0_0_40px_rgba(217,178,94,0.35)]">
        <Image src="/logo.png" alt="" width={110} height={110} className="rounded-full" priority />
      </div>

      {/* floating chips */}
      <div className="animate-float absolute left-0 top-[14%] rounded-xl px-4 py-2 glass text-xs" style={{ animationDelay: "-2s" }}>
        <span className="text-gold-300">●</span> Live Animals
      </div>
      <div className="animate-float absolute right-[2%] top-[6%] rounded-xl px-4 py-2 glass text-xs" style={{ animationDelay: "-4s" }}>
        <span className="text-gold-300">●</span> Chilled Meat
      </div>
      <div className="animate-float absolute bottom-[16%] left-[2%] rounded-xl px-4 py-2 glass text-xs" style={{ animationDelay: "-1s" }}>
        <span className="text-gold-300">●</span> Origin: Addis Ababa
      </div>
    </div>
  );
}
