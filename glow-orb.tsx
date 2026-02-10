import { motion } from 'framer-motion';

interface GlowOrbProps {
  color?: 'purple' | 'cyan';
  size?: number;
  className?: string;
  delay?: number;
}

export function GlowOrb({ 
  color = 'purple', 
  size = 300, 
  className = '',
  delay = 0 
}: GlowOrbProps) {
  const colorValue = color === 'purple' 
    ? 'rgba(139, 92, 246, 0.4)' 
    : 'rgba(6, 182, 212, 0.3)';

  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorValue} 0%, transparent 70%)`,
        filter: `blur(40px)`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.1, 1],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function GlowOrbCluster() {
  return (
    <>
      <GlowOrb 
        color="purple" 
        size={400} 
        className="-top-20 -right-20"
        delay={0}
      />
      <GlowOrb 
        color="cyan" 
        size={300} 
        className="top-1/3 -left-32"
        delay={1}
      />
      <GlowOrb 
        color="purple" 
        size={250} 
        className="bottom-20 right-1/4"
        delay={2}
      />
      <GlowOrb 
        color="cyan" 
        size={200} 
        className="top-1/2 right-1/3"
        delay={1.5}
      />
    </>
  );
}
