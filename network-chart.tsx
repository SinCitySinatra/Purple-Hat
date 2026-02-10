import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface DataPoint {
  time: string;
  traffic: number;
  threats: number;
}

export function NetworkChart() {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    // Generate initial data
    const initialData: DataPoint[] = [];
    const now = new Date();
    for (let i = 20; i >= 0; i--) {
      const time = new Date(now.getTime() - i * 60000);
      initialData.push({
        time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        traffic: Math.floor(Math.random() * 500) + 800,
        threats: Math.floor(Math.random() * 20),
      });
    }
    setData(initialData);

    // Update every 5 seconds
    const interval = setInterval(() => {
      setData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          traffic: Math.floor(Math.random() * 500) + 800,
          threats: Math.floor(Math.random() * 20),
        });
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-cyber-card border border-cyber-border rounded-lg p-3 shadow-xl">
          <p className="text-gray-400 text-xs mb-2">{label}</p>
          <p className="text-cyber-purple text-sm font-medium">
            Traffic: {payload[0].value} MB/s
          </p>
          <p className="text-cyber-red text-sm font-medium">
            Threats: {payload[1].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-cyber-card rounded-xl border border-cyber-border p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Network Traffic</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyber-purple" />
            <span className="text-xs text-gray-400">Traffic (MB/s)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyber-red" />
            <span className="text-xs text-gray-400">Threats</span>
          </div>
        </div>
      </div>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e1e2d" vertical={false} />
            <XAxis 
              dataKey="time" 
              stroke="#4b5563" 
              tick={{ fill: '#6b7280', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#4b5563" 
              tick={{ fill: '#6b7280', fontSize: 11 }}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#8b5cf6"
              strokeWidth={2}
              fill="url(#trafficGradient)"
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="threats"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#threatGradient)"
              animationDuration={1000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
