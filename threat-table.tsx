import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, AlertOctagon } from 'lucide-react';

interface Threat {
  id: string;
  type: string;
  source: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'active' | 'mitigated' | 'investigating';
  timestamp: Date;
}

const initialThreats: Threat[] = [
  { id: '1', type: 'SQL Injection', source: '192.168.1.100', severity: 'critical', status: 'active', timestamp: new Date() },
  { id: '2', type: 'DDoS Attack', source: 'Multiple IPs', severity: 'high', status: 'mitigated', timestamp: new Date(Date.now() - 300000) },
  { id: '3', type: 'Phishing Attempt', source: 'email@malicious.com', severity: 'medium', status: 'investigating', timestamp: new Date(Date.now() - 600000) },
  { id: '4', type: 'Brute Force', source: '10.0.0.50', severity: 'high', status: 'active', timestamp: new Date(Date.now() - 900000) },
  { id: '5', type: 'XSS Attempt', source: 'user-input', severity: 'medium', status: 'mitigated', timestamp: new Date(Date.now() - 1200000) },
];

const severityConfig = {
  low: { color: 'bg-cyber-green/20 text-cyber-green border-cyber-green/30', icon: Shield },
  medium: { color: 'bg-cyber-orange/20 text-cyber-orange border-cyber-orange/30', icon: AlertTriangle },
  high: { color: 'bg-red-500/20 text-red-400 border-red-500/30', icon: AlertOctagon },
  critical: { color: 'bg-cyber-red/20 text-cyber-red border-cyber-red/30', icon: AlertOctagon },
};

const statusConfig = {
  active: { color: 'bg-cyber-red/20 text-cyber-red', label: 'Active' },
  mitigated: { color: 'bg-cyber-green/20 text-cyber-green', label: 'Mitigated' },
  investigating: { color: 'bg-cyber-orange/20 text-cyber-orange', label: 'Investigating' },
};

export function ThreatTable() {
  const [threats, setThreats] = useState<Threat[]>(initialThreats);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const newThreat: Threat = {
          id: Date.now().toString(),
          type: ['Malware Detected', 'Suspicious Login', 'Port Scan', 'Data Exfiltration'][Math.floor(Math.random() * 4)],
          source: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
          severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as Threat['severity'],
          status: 'active',
          timestamp: new Date(),
        };
        setThreats(prev => [newThreat, ...prev.slice(0, 6)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-cyber-card rounded-xl border border-cyber-border overflow-hidden">
      <div className="p-4 border-b border-cyber-border flex items-center justify-between">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <AlertOctagon className="w-5 h-5 text-cyber-red" />
          Live Threat Feed
        </h3>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse" />
          <span className="text-xs text-gray-400">Real-time</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-cyber-darker">
            <tr>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase">Threat Type</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase">Source</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase">Severity</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase">Status</th>
              <th className="text-left py-3 px-4 text-xs font-medium text-gray-400 uppercase">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-cyber-border">
            <AnimatePresence mode="popLayout">
              {threats.map((threat, index) => {
                const SeverityIcon = severityConfig[threat.severity].icon;
                return (
                  <motion.tr
                    key={threat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-cyber-darker/50 transition-colors"
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <SeverityIcon className={`w-4 h-4 ${threat.severity === 'critical' ? 'text-cyber-red' : threat.severity === 'high' ? 'text-red-400' : threat.severity === 'medium' ? 'text-cyber-orange' : 'text-cyber-green'}`} />
                        <span className="text-sm text-white font-medium">{threat.type}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <code className="text-sm text-cyber-cyan font-mono">{threat.source}</code>
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant="outline" className={`${severityConfig[threat.severity].color} text-xs capitalize`}>
                        {threat.severity}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${statusConfig[threat.status].color}`}>
                        {threat.status === 'active' && <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 animate-pulse" />}
                        {statusConfig[threat.status].label}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-xs text-gray-400">
                        {threat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
}
