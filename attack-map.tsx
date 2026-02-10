import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Attack {
  id: string;
  from: { x: number; y: number };
  to: { x: number; y: number };
  intensity: number;
}

const attackLocations = [
  { x: 15, y: 35 }, // North America
  { x: 25, y: 60 }, // South America
  { x: 48, y: 30 }, // Europe
  { x: 52, y: 50 }, // Africa
  { x: 65, y: 35 }, // Asia
  { x: 78, y: 65 }, // Australia
  { x: 82, y: 40 }, // East Asia
];

const targetLocations = [
  { x: 22, y: 38 }, // US East
  { x: 12, y: 32 }, // US West
  { x: 50, y: 28 }, // Europe Central
  { x: 70, y: 32 }, // Asia Central
];

export function AttackMap() {
  const [attacks, setAttacks] = useState<Attack[]>([]);
  const [attackCount, setAttackCount] = useState(1247);

  useEffect(() => {
    // Generate initial attacks
    const initialAttacks: Attack[] = [];
    for (let i = 0; i < 5; i++) {
      const from = attackLocations[Math.floor(Math.random() * attackLocations.length)];
      const to = targetLocations[Math.floor(Math.random() * targetLocations.length)];
      initialAttacks.push({
        id: `initial-${i}`,
        from,
        to,
        intensity: Math.random(),
      });
    }
    setAttacks(initialAttacks);

    // Add new attacks periodically
    const interval = setInterval(() => {
      const from = attackLocations[Math.floor(Math.random() * attackLocations.length)];
      const to = targetLocations[Math.floor(Math.random() * targetLocations.length)];
      const newAttack: Attack = {
        id: Date.now().toString(),
        from,
        to,
        intensity: Math.random(),
      };
      setAttacks(prev => [...prev.slice(-8), newAttack]);
      setAttackCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-cyber-card rounded-xl border border-cyber-border overflow-hidden"
    >
      {/* Header */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
          Live Attack Map
        </h3>
        <div className="bg-cyber-darker/80 backdrop-blur rounded-lg px-3 py-1.5">
          <span className="text-xs text-gray-400">Attacks Today: </span>
          <span className="text-sm font-mono font-bold text-cyber-red">{attackCount.toLocaleString()}</span>
        </div>
      </div>

      {/* Map Background */}
      <div className="relative h-[300px] bg-cyber-darker">
        {/* World map dots */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          {/* Grid lines */}
          <defs>
            <pattern id="mapGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(139, 92, 246, 0.05)" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#mapGrid)" />

          {/* Continent dots (simplified) */}
          {[
            // North America
            [12, 25], [15, 28], [18, 30], [22, 32], [25, 35], [20, 38], [15, 35], [10, 32],
            // South America
            [28, 55], [30, 60], [32, 65], [30, 70], [28, 68], [26, 62],
            // Europe
            [45, 28], [48, 26], [52, 28], [50, 32], [47, 30],
            // Africa
            [48, 45], [50, 50], [52, 55], [50, 60], [48, 58], [46, 52],
            // Asia
            [60, 30], [65, 28], [70, 30], [75, 32], [80, 35], [78, 40], [72, 38], [68, 35],
            // Australia
            [78, 65], [82, 68], [85, 65], [82, 62],
          ].map(([x, y], i) => (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r="0.8"
              fill="rgba(139, 92, 246, 0.4)"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Attack lines */}
          {attacks.map((attack) => (
            <g key={attack.id}>
              {/* Glow effect */}
              <motion.line
                x1={attack.from.x}
                y1={attack.from.y}
                x2={attack.to.x}
                y2={attack.to.y}
                stroke="rgba(239, 68, 68, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              {/* Main line */}
              <motion.line
                x1={attack.from.x}
                y1={attack.from.y}
                x2={attack.to.x}
                y2={attack.to.y}
                stroke="#ef4444"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeDasharray="4 2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {/* Target pulse */}
              <motion.circle
                cx={attack.to.x}
                cy={attack.to.y}
                r="2"
                fill="#ef4444"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 2, 2], opacity: [1, 0.5, 0] }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </g>
          ))}

          {/* Target locations */}
          {targetLocations.map((loc, i) => (
            <g key={i}>
              <circle
                cx={loc.x}
                cy={loc.y}
                r="2"
                fill="#10b981"
                opacity="0.8"
              />
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r="4"
                fill="none"
                stroke="#10b981"
                strokeWidth="0.5"
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{ opacity: 0, scale: 2 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            </g>
          ))}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-red" />
            <span className="text-gray-400">Attack</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-green" />
            <span className="text-gray-400">Protected</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-purple" />
            <span className="text-gray-400">Network</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
