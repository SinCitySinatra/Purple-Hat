import { motion } from 'framer-motion';
import { ArrowRight, Shield, Lock, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlowOrb } from '@/components/glow-orb';

const trustBadges = [
  { icon: Shield, label: 'SOC 2 Compliant' },
  { icon: Lock, label: 'GDPR Ready' },
  { icon: FileCheck, label: 'ISO 27001 Certified' },
];

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark" />
      
      {/* Glow effects */}
      <GlowOrb color="purple" size={400} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" delay={0} />
      <GlowOrb color="cyan" size={300} className="top-1/4 right-1/4" delay={1} />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your <span className="text-gradient">Infrastructure?</span>
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ enterprises using Purple Hat AI to protect their digital assets. 
            Start your free trial today and experience the future of cybersecurity.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg"
              className="bg-cyber-purple hover:bg-cyber-purple-light text-white shadow-glow hover:shadow-glow transition-all group text-lg px-8"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-cyber-border text-white hover:bg-cyber-card hover:border-cyber-purple/50 text-lg px-8"
            >
              Schedule Demo
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <badge.icon className="w-5 h-5 text-cyber-purple" />
                <span className="text-sm">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
