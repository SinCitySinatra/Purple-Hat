import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/section-wrapper';
import { LayoutGrid, Share2, BarChart3, Workflow, Brain, Users, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: LayoutGrid,
    title: 'Unified Dashboard',
    description: 'Single pane of glass for all security operations, combining red and blue team insights.',
  },
  {
    icon: Share2,
    title: 'Knowledge Sharing',
    description: 'Share attack techniques and defense strategies across teams seamlessly.',
  },
  {
    icon: BarChart3,
    title: 'Metrics & Reporting',
    description: 'Track security posture improvements over time with detailed analytics.',
  },
  {
    icon: Workflow,
    title: 'Playbook Automation',
    description: 'Automated response playbooks that evolve based on attack patterns.',
  },
  {
    icon: Brain,
    title: 'AI Recommendations',
    description: 'AI-suggested security improvements based on threat intelligence.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration tools for security teams worldwide.',
  },
];

export function PurpleTeam() {
  return (
    <SectionWrapper id="purple-team" className="bg-cyber-dark">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyber-red/10 to-cyber-cyan/10 border border-cyber-purple/30 mb-4">
            <div className="flex -space-x-1">
              <span className="w-3 h-3 rounded-full bg-cyber-red" />
              <span className="w-3 h-3 rounded-full bg-cyber-purple" />
              <span className="w-3 h-3 rounded-full bg-cyber-cyan" />
            </div>
            <span className="text-sm text-cyber-purple font-medium">PURPLE TEAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Unite Offense <span className="text-gradient">& Defense</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Bridge the gap between offense and defense. Share insights, track improvements, 
            and build a unified security posture with Purple Team collaboration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-cyber-card rounded-xl p-6 border border-cyber-border hover:border-cyber-purple/50 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyber-purple/20 to-cyber-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-cyber-purple" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{feature.description}</p>
              <div className="flex items-center text-cyber-purple text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collaboration Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '50+', label: 'Security Playbooks' },
            { value: '10K+', label: 'Shared Insights' },
            { value: '98%', label: 'Team Alignment' },
            { value: '3x', label: 'Faster Response' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="text-center p-6 bg-cyber-card/50 rounded-xl border border-cyber-border"
            >
              <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
