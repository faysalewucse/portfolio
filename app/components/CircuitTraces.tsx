import type { CSSProperties } from "react";

type Trace = {
  d: string;
  dur: string;
  delay: string;
};

const TRACES: Trace[] = [
  { d: "M -20 140 L 220 140 L 260 180 L 520 180 L 560 140 L 820 140", dur: "7s", delay: "0s" },
  { d: "M -20 260 L 160 260 L 200 300 L 480 300 L 520 260 L 900 260", dur: "9s", delay: "1.2s" },
  { d: "M 1460 200 L 1180 200 L 1140 240 L 920 240 L 880 200 L 700 200", dur: "8s", delay: "2.4s" },
  { d: "M 1460 420 L 1220 420 L 1180 460 L 960 460 L 920 420 L 760 420", dur: "11s", delay: "0.6s" },
  { d: "M -20 600 L 180 600 L 220 640 L 480 640 L 520 600 L 900 600", dur: "10s", delay: "3.1s" },
  { d: "M -20 760 L 280 760 L 320 720 L 620 720 L 660 760 L 1000 760", dur: "12s", delay: "1.8s" },
  { d: "M 1460 700 L 1240 700 L 1200 740 L 980 740 L 940 700 L 740 700", dur: "9s", delay: "4s" },
  { d: "M 720 -20 L 720 80 L 760 120 L 760 240", dur: "6s", delay: "2s" },
  { d: "M 1080 -20 L 1080 100 L 1040 140 L 1040 300", dur: "8s", delay: "0.4s" },
  { d: "M 360 920 L 360 820 L 400 780 L 400 620", dur: "7.5s", delay: "3.5s" },
];

const NODES: Array<[number, number]> = [
  [220, 140], [560, 140], [820, 140],
  [480, 300], [900, 260],
  [1180, 200], [880, 200], [700, 200],
  [1180, 460], [760, 420],
  [480, 640], [900, 600],
  [320, 720], [1000, 760],
  [760, 120], [1040, 140],
];

export function CircuitTraces({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {TRACES.map((t, i) => (
        <path key={`b-${i}`} className="trace-base" d={t.d} />
      ))}

      {TRACES.map((t, i) => (
        <path
          key={`f-${i}`}
          className="trace-flow"
          d={t.d}
          pathLength={1000}
          style={{ "--dur": t.dur, "--delay": t.delay } as CSSProperties}
        />
      ))}

      {NODES.map(([x, y], i) => (
        <circle key={`n-${i}`} className="trace-node" cx={x} cy={y} r={2.5} />
      ))}
    </svg>
  );
}
