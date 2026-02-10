import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';
import { Counter } from './counter';

interface MetricCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  trend?: number;
  trendLabel?: string;
  icon: LucideIcon;
  iconColor?: 'purple' | 'cyan' | 'green' | 'red' | 'orange';
  delay?: number;
}

export function MetricCard({
  title,
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  trend,
  trendLabel = 'vs last period',
  icon: Icon,
  iconColor = 'purple',
  delay = 0,
}: MetricCardProps) {
  const colorMap = {
    purple: 'text-cyber-purple bg-cyber-purple/10',
    cyan: 'text-cyber-cyan bg-cyber-cyan/10',
    green: 'text-cyber-green bg-cyber-green/10',
    red: 'text-cyber-red bg-cyber-red/10',
    orange: 'text-cyber-orange bg-cyber-orange/10',
  };



  const isPositiveTrend = trend && trend > 0;
  const TrendIcon = isPositiveTrend ? TrendingUp : TrendingDown;
  const trendColor = isPositiveTrend ? 'text-cyber-green' : 'text-cyber-red';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-cyber-card rounded-xl p-6 border border-cyber-border border-glow"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-400 mb-2">{title}</p>
          <Counter
            end={value}
            decimals={decimals}
            suffix={suffix}
            prefix={prefix}
            className="text-3xl lg:text-4xl text-white"
          />
          {trend !== undefined && (
            <div className={`flex items-center gap-1 mt-2 ${trendColor}`}>
              <TrendIcon className="w-4 h-4" />
              <span className="text-sm font-medium">
                {isPositiveTrend ? '+' : ''}{trend}%
              </span>
              <span className="text-xs text-gray-500 ml-1">{trendLabel}</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${colorMap[iconColor]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </motion.div>
  );
}
