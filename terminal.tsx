import { useMultiLineTypewriter } from '@/hooks/use-typewriter';
import { useEffect, useState } from 'react';

interface TerminalProps {
  lines: string[];
  className?: string;
  startDelay?: number;
  typingSpeed?: number;
  lineDelay?: number;
}

export function Terminal({
  lines,
  className = '',
  startDelay = 500,
  typingSpeed = 30,
  lineDelay = 400,
}: TerminalProps) {
  const { displayLines, isComplete, currentLineIndex } = useMultiLineTypewriter(
    lines,
    {
      speed: typingSpeed,
      lineDelay,
      startDelay,
    }
  );

  const getLineColor = (line: string) => {
    if (line.includes('[INFO]')) return 'text-cyber-cyan';
    if (line.includes('[FOUND]')) return 'text-cyber-purple';
    if (line.includes('[WARNING]')) return 'text-cyber-orange';
    if (line.includes('[CRITICAL]')) return 'text-cyber-red';
    if (line.includes('[AI]')) return 'text-cyber-green';
    if (line.startsWith('$')) return 'text-white';
    return 'text-gray-400';
  };

  return (
    <div className={`terminal overflow-hidden ${className}`}>
      {/* Terminal header */}
      <div className="terminal-header">
        <div className="terminal-dot red" />
        <div className="terminal-dot yellow" />
        <div className="terminal-dot green" />
        <span className="ml-4 text-xs text-gray-500 font-mono">purple-hat — bash — 80x24</span>
      </div>
      
      {/* Terminal content */}
      <div className="p-4 font-mono text-sm min-h-[280px] bg-cyber-darker">
        {displayLines.map((line, index) => (
          <div 
            key={index} 
            className={`${getLineColor(lines[index])} mb-1`}
          >
            {line}
            {index === currentLineIndex && !isComplete && (
              <span className="inline-block w-2 h-4 bg-cyber-purple ml-1 animate-blink" />
            )}
          </div>
        ))}
        {isComplete && (
          <div className="text-gray-500">
            <span className="inline-block w-2 h-4 bg-cyber-purple ml-1 animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}

export function TerminalDemo() {
  const [key, setKey] = useState(0);
  
  const commands = [
    '$ purple-hat --scan --target production',
    '[INFO] Initializing reconnaissance...',
    '[INFO] Scanning network topology...',
    '[FOUND] 3 open ports detected',
    '[FOUND] Web server: nginx/1.20.1',
    '[WARNING] Outdated SSL certificate',
    '[WARNING] Weak cipher suites detected',
    '[CRITICAL] SQL injection vulnerability in /api/users',
    '[CRITICAL] XSS vulnerability in search parameter',
    '[AI] Analyzing attack vectors...',
    '[AI] Generating exploit payload...',
    '[AI] Recommendations ready. Execute remediation?',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setKey(prev => prev + 1);
    }, 20000);
    return () => clearTimeout(timer);
  }, [key]);

  return (
    <Terminal 
      key={key}
      lines={commands} 
      startDelay={300}
      typingSpeed={25}
      lineDelay={350}
    />
  );
}
