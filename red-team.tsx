import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { TerminalDemo } from '@/components/terminal';
import { Crosshair, AlertTriangle, Zap, Target } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Automated Vulnerability Scanning',
    description: 'Continuous scanning for CVEs, misconfigurations, and weak points.',
  },
  {
    icon: AlertTriangle,
    title: 'Social Engineering Simulations',
    description: 'Test employee awareness with realistic phishing campaigns.',
  },
  {
    icon: Zap,
    title: 'Network Intrusion Testing',
    description: 'Simulate advanced persistent threats and lateral movement.',
  },
  {
    icon: Crosshair,
    title: 'Payload Delivery Testing',
    description: 'Test endpoint defenses against malware and exploits.',
  },
];

export function RedTeam() {
  return (
    <SectionWrapper id="red-team" className="bg-cyber-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-red/10 border border-cyber-red/30 mb-6">
              <Crosshair className="w-4 h-4 text-cyber-red" />
              <span className="text-sm text-cyber-red font-medium">OFFENSIVE SECURITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Red Team <span className="text-cyber-red">Attack Simulator</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8">
              Test your defenses with automated penetration testing. Simulate real-world 
              attack scenarios including phishing, DDoS, SQL injection, and more.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-cyber-card/50 border border-cyber-border hover:border-cyber-red/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-red/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-cyber-red" />
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
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-8 mt-8 pt-8 border-t border-cyber-border"
            >
              <div>
                <div className="text-3xl font-bold text-cyber-red">500+</div>
                <div className="text-sm text-gray-400">Attack Vectors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-red">98%</div>
                <div className="text-sm text-gray-400">CVE Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyber-red">&lt;5min</div>
                <div className="text-sm text-gray-400">Scan Time</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TerminalDemo />
            
            {/* Terminal caption */}
            <p className="text-center text-sm text-gray-500 mt-4">
              Live simulation of automated security scanning
            </p>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
