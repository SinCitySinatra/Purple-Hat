import { motion } from 'framer-motion';
import { ThreatGauge } from '@/components/threat-gauge';
import { AttackMap } from '@/components/attack-map';
import { ThreatTable } from '@/components/threat-table';
import { NetworkChart } from '@/components/network-chart';
import { SectionWrapper } from '@/components/section-wrapper';
import { Brain, Activity, Server, Wifi, Cpu, HardDrive } from 'lucide-react';

const systemMetrics = [
  { label: 'CPU', value: 67, icon: Cpu, color: 'bg-cyber-purple' },
  { label: 'Memory', value: 45, icon: Server, color: 'bg-cyber-cyan' },
  { label: 'Network', value: 82, icon: Wifi, color: 'bg-cyber-green' },
  { label: 'Storage', value: 34, icon: HardDrive, color: 'bg-cyber-orange' },
];

export function ThreatDashboard() {
  return (
    <SectionWrapper id="dashboard" className="bg-cyber-darker">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 mb-4">
            <Brain className="w-4 h-4 text-cyber-purple" />
            <span className="text-sm text-cyber-purple font-medium">AI-POWERED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Threat Detection <span className="text-gradient">Dashboard</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time anomaly detection powered by machine learning algorithms that analyze 
            network traffic, user behavior, and system logs.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Threat Level Gauge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-cyber-card rounded-xl border border-cyber-border p-6 border-glow"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-cyber-purple" />
              Threat Level
            </h3>
            <div className="flex justify-center">
              <ThreatGauge value={67} size={180} strokeWidth={10} />
            </div>
          </motion.div>

          {/* AI Analysis Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-cyber-card rounded-xl border border-cyber-border p-6 border-glow"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-cyber-cyan" />
              AI Analysis
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Events Analyzed</span>
                  <span className="text-cyber-cyan font-mono">2,847</span>
                </div>
                <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyber-purple to-cyber-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Threats Detected</span>
                  <span className="text-cyber-red font-mono">23</span>
                </div>
                <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyber-red"
                    initial={{ width: 0 }}
                    whileInView={{ width: '23%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">False Positives</span>
                  <span className="text-cyber-green font-mono">2.1%</span>
                </div>
                <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyber-green"
                    initial={{ width: 0 }}
                    whileInView={{ width: '2.1%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                  />
                </div>
              </div>
              <div className="pt-4 border-t border-cyber-border">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                  <span className="text-gray-400">AI Status:</span>
                  <span className="text-cyber-green">Active Learning</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* System Health */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-cyber-card rounded-xl border border-cyber-border p-6 border-glow"
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Server className="w-5 h-5 text-cyber-green" />
              System Health
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {systemMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="bg-cyber-darker rounded-lg p-3"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-400">{metric.label}</span>
                  </div>
                  <div className="text-lg font-bold text-white mb-1">{metric.value}%</div>
                  <div className="h-1.5 bg-cyber-card rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${metric.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Attack Map - spans 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <AttackMap />
          </motion.div>

          {/* Network Chart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <NetworkChart />
          </motion.div>

          {/* Threat Table - spans full width */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <ThreatTable />
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
