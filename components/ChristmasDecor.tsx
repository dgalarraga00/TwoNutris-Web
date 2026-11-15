/* Seasonal Christmas decorations. All purely decorative (aria-hidden). */

interface DecorProps {
  className?: string;
}

export function SantaHat({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none drop-shadow-[0_2px_3px_rgba(20,68,0,0.25)] ${className}`}
      viewBox="0 0 40 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 26C8 14 17 4 30 4.5C34 4.7 35.5 8.5 33.2 11.5C30.4 15.2 31.5 21 33.5 26Z"
        fill="#C62828"
      />
      <path
        d="M14 12C18 8 23 6 28 6"
        stroke="#E0453F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="2" y="23" width="35" height="9" rx="4.5" fill="#FFFFFF" />
      <circle cx="33" cy="8" r="4.6" fill="#FFFFFF" />
    </svg>
  );
}

export function HollySprig({ className = "" }: DecorProps) {
  return (
    <svg
      className={`pointer-events-none drop-shadow-[0_3px_4px_rgba(20,68,0,0.25)] ${className}`}
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M32 30C26 22 14 20 4 24C8 26 7 30 10 32C8 35 10 38 14 37C16 40 20 40 22 37C25 39 29 37 32 30Z"
        fill="#1e6600"
      />
      <path d="M32 30C24 28 14 28 8 28" stroke="#144400" strokeWidth="1.2" />
      <path
        d="M32 30C38 22 50 20 60 24C56 26 57 30 54 32C56 35 54 38 50 37C48 40 44 40 42 37C39 39 35 37 32 30Z"
        fill="#144400"
      />
      <path d="M32 30C40 28 50 28 56 28" stroke="#1e6600" strokeWidth="1.2" />
      <circle cx="28" cy="26" r="5" fill="#C62828" />
      <circle cx="36" cy="26" r="5" fill="#B71C1C" />
      <circle cx="32" cy="19" r="5" fill="#D32F2F" />
      <circle cx="30.5" cy="17.5" r="1.4" fill="#FFFFFF" opacity="0.7" />
    </svg>
  );
}

export function CandyStripe({ className = "" }: DecorProps) {
  return (
    <div
      className={`w-full h-1.5 flex-shrink-0 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, #C62828 0 8px, #FFFBE4 8px 16px)",
      }}
      aria-hidden="true"
    />
  );
}

const BULB_COUNT = 26;
const BULB_COLORS = ["#C62828", "#FFB000", "#6aab3a", "#C62828", "#FFFBE4"];
const WIRE_PATH = Array.from({ length: BULB_COUNT }, (_, i) => {
  const segment = 1200 / BULB_COUNT;
  const start = i * segment;
  return `${i === 0 ? "M0 2" : ""} Q${start + segment / 2} 16 ${start + segment} 2`;
}).join(" ");

export function StringLights() {
  return (
    <div
      className="absolute left-0 right-0 top-full h-7 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-x-0 top-0 w-full h-6"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d={WIRE_PATH}
          stroke="#144400"
          strokeWidth="1.5"
          strokeOpacity="0.55"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {Array.from({ length: BULB_COUNT }, (_, i) => {
        const color = BULB_COLORS[i % BULB_COLORS.length];
        return (
          <span
            key={i}
            className={`xmas-bulb absolute top-[8px] -translate-x-1/2 flex-col items-center ${
              i % 2 === 1 ? "hidden sm:flex" : "flex"
            }`}
            style={{
              left: `${((i + 0.5) / BULB_COUNT) * 100}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
            }}
          >
            <span className="block w-[5px] h-[4px] rounded-[1px] bg-leaf" />
            <span
              className="block w-[9px] h-[13px] rounded-full"
              style={{
                backgroundColor: color,
                boxShadow: `0 0 8px 2px ${color}99`,
              }}
            />
          </span>
        );
      })}
    </div>
  );
}
