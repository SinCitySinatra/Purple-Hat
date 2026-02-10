import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { Shield, CheckCircle, Clock, Globe, Lock, Bell, Zap, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: Globe,
    title: '24/7 Automated Monitoring',
    description: 'Continuous surveillance of your entire infrastructure with AI-powered anomaly detection.',
  },
  {
    icon: Zap,
    title: 'Incident Response Automation',
    description: 'Automated playbooks that respond to threats in milliseconds, not minutes.',
  },
  {
    icon: Globe,
    title: 'Threat Intelligence Feeds',
    description: 'Real-time updates from global threat databases and security research.',
  },
  {
    icon: Lock,
    title: 'Compliance Reporting',
    description: 'Automated SOC 2, ISO 27001, and GDPR compliance documentation.',
  },
];

const alerts = [
  { id: 1, message: 'Suspicious login attempt blocked', severity: 'high', time: '2 min ago' },
  { id: 2, message: 'DDoS attack mitigated automatically', severity: 'critical', time: '5 min ago' },
  { id: 3, message: 'New security patch available', severity: 'low', time: '12 min ago' },
  { id: 4, message: 'Firewall rule updated', severity: 'info', time: '18 min ago' },
];

export function BlueTeam() {
  const [activeAlerts] = useState(alerts);
  const [responseTime, setResponseTime] = useState(0.3);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setResponseTime(prev => Number((prev + (Math.random() - 0.5) * 0.1).toFixed(2)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="blue-team" className="bg-cyber-darker">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-cyber-card rounded-xl border border-cyber-border overflow-hidden">
              {/* Dashboard header */}
              <div className="p-4 border-b border-cyber-border bg-cyber-darker flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyber-cyan" />
                  <span className="font-semibold text-white">Defense Center</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
                  <span className="text-xs text-gray-400">Active</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-4 space-y-4">
                {/* Alert feed */}
                <div>
                  <h4 className="text-sm font-medium text-gray-400 mb-3 flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    Recent Alerts
                  </h4>
                  <div className="space-y-2">
                    {activeAlerts.map((alert, index) => (
                      <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          alert.severity === 'critical' ? 'bg-cyber-red/10 border border-cyber-red/30' :
                          alert.severity === 'high' ? 'bg-cyber-orange/10 border border-cyber-orange/30' :
                          alert.severity === 'low' ? 'bg-cyber-green/10 border border-cyber-green/30' :
                          'bg-cyber-darker border border-cyber-border'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <AlertCircle className={`w-4 h-4 ${
                            alert.severity === 'critical' ? 'text-cyber-red' :
                            alert.severity === 'high' ? 'text-cyber-orange' :
                            alert.severity === 'low' ? 'text-cyber-green' :
                            'text-gray-400'
                          }`} />
                          <span className="text-sm text-white">{alert.message}</span>
                        </div>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-cyber-border">
                  <div className="bg-cyber-darker rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-cyber-cyan" />
                      <span className="text-xs text-gray-400">Response Time</span>
                    </div>
                    <div className="text-2xl font-bold text-cyber-cyan font-mono">
                      {responseTime}s
                    </div>
                  </div>
                  <div className="bg-cyber-darker rounded-lg p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-cyber-green" />
                      <span className="text-xs text-gray-400">Blocked Today</span>
                    </div>
                    <div className="text-2xl font-bold text-cyber-green font-mono">
                      1,247
                    </div>
                  </div>
                </div>

                {/* Incident distribution */}
                <div className="pt-4 border-t border-cyber-border">
                  <h4 className="text-sm font-medium text-gray-400 mb-3">Incident Distribution</h4>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-3 bg-cyber-darker rounded-full overflow-hidden flex">
                      <motion.div
                        className="h-full bg-cyber-red"
                        initial={{ width: 0 }}
                        whileInView={{ width: '15%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                      <motion.div
                        className="h-full bg-cyber-orange"
                        initial={{ width: 0 }}
                        whileInView={{ width: '25%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                      <motion.div
                        className="h-full bg-cyber-green"
                        initial={{ width: 0 }}
                        whileInView={{ width: '60%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyber-red" />
                      <span className="text-gray-400">Critical (15%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyber-orange" />
                      <span className="text-gray-400">High (25%)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-cyber-green" />
                      <span className="text-gray-400">Low (60%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 mb-6">
              <Shield className="w-4 h-4 text-cyber-cyan" />
              <span className="text-sm text-cyber-cyan font-medium">DEFENSIVE SECURITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Blue Team <span className="text-cyber-cyan">Defense Center</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Monitor, detect, and respond to threats in real-time. Our AI-powered SOC 
              automates incident response and provides actionable intelligence.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:border-cyber-cyan/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex gap-8 mt-8 pt-8 border-t border-cyber-border"
            >
              <div>
                <div className="text-3xl font-bold text-cyber-cyan">0.3s</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-cyan">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-cyan">24/7</div>
                <div className="text-sm text-gray-400">Monitoring</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
