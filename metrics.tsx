import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { MetricCard } from '@/components/metric-card';
import { Shield, Activity, Zap, Server } from 'lucide-react';

const metrics = [
  {
    title: 'Threats Blocked Today',
    value: 1247893,
    suffix: '',
    trend: 12,
    trendLabel: 'from yesterday',
    icon: Shield,
    iconColor: 'purple' as const,
  },
  {
    title: 'Active Monitors',
    value: 50432,
    suffix: '',
    trend: 5,
    trendLabel: 'this week',
    icon: Activity,
    iconColor: 'cyan' as const,
  },
  {
    title: 'Response Time',
    value: 0.3,
    decimals: 1,
    suffix: 's',
    trend: -15,
    trendLabel: 'improvement',
    icon: Zap,
    iconColor: 'green' as const,
  },
  {
    title: 'Uptime',
    value: 99.99,
    decimals: 2,
    suffix: '%',
    trendLabel: 'last 30 days',
    icon: Server,
    iconColor: 'purple' as const,
  },
];

export function Metrics() {
  return (
    <SectionWrapper id="metrics" className="bg-cyber-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real-Time <span className="text-gradient">Security Metrics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Live data from our global security network monitoring millions of events per second.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.title}
              {...metric}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-cyber-card rounded-xl p-6 border border-cyber-border text-center">
            <div className="text-4xl font-bold text-cyber-purple mb-2">150+</div>
            <div className="text-sm text-gray-400">Countries Protected</div>
          </div>
          <div className="bg-cyber-card rounded-xl p-6 border border-cyber-border text-center">
            <div className="text-4xl font-bold text-cyber-cyan mb-2">10B+</div>
            <div className="text-sm text-gray-400">Events Processed Daily</div>
          </div>
          <div className="bg-cyber-card rounded-xl p-6 border border-cyber-border text-center">
            <div className="text-4xl font-bold text-cyber-green mb-2">Zero</div>
            <div className="text-sm text-gray-400">Data Breaches</div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
