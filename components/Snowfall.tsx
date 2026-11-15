/* Decorative CSS-only snowfall. Positions are deterministic to avoid hydration mismatches. */

type SnowVariant = "onLight" | "onDark";

interface SnowfallProps {
  variant?: SnowVariant;
}

const FLAKE_COUNT = 34;
const FLAKE_COLORS: Record<SnowVariant, string[]> = {
  onLight: ["#144400", "#144400", "#C62828", "#FFB000"],
  onDark: ["#FFFBE4", "#FFFBE4", "#FFFFFF", "#FFB000"],
};

function buildFlakes(variant: SnowVariant) {
  const colors = FLAKE_COLORS[variant];
  const baseOpacity = variant === "onDark" ? 0.35 : 0.22;
  return Array.from({ length: FLAKE_COUNT }, (_, i) => ({
    left: (i * 29) % 100,
    size: 12 + ((i * 7) % 14),
    duration: 11 + ((i * 5) % 10),
    delay: -((i * 3) % 20),
    color: colors[i % colors.length],
    opacity: baseOpacity + ((i * 3) % 5) * 0.06,
  }));
}

const FLAKES: Record<SnowVariant, ReturnType<typeof buildFlakes>> = {
  onLight: buildFlakes("onLight"),
  onDark: buildFlakes("onDark"),
};

export function Snowfall({ variant = "onLight" }: SnowfallProps) {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {FLAKES[variant].map((flake, i) => (
        <span
          key={i}
          className="snowflake absolute -top-8 select-none"
          style={{
            left: `${flake.left}%`,
            fontSize: `${flake.size}px`,
            color: flake.color,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
