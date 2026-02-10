import { useInViewCountUp } from '@/hooks/use-count-up';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function Counter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = '',
  className = '',
}: CounterProps) {
  const { ref, formattedCount } = useInViewCountUp(
    { end, duration, decimals, suffix, prefix },
    { threshold: 0.3, triggerOnce: true }
  );

  return (
    <motion.span
      ref={ref}
      className={`font-mono font-bold ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {formattedCount}
    </motion.span>
  );
}
