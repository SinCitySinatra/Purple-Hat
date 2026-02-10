import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  initialMessages?: Message[];
  className?: string;
}

export function ChatInterface({ 
  initialMessages = [],
  className = '' 
}: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I\'ve analyzed the request and am taking appropriate action. The security metrics have been updated in real-time.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className={`flex flex-col bg-cyber-card rounded-xl border border-cyber-border overflow-hidden ${className}`}>
      {/* Chat header */}
      <div className="flex items-center gap-3 p-4 border-b border-cyber-border bg-cyber-darker">
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyber-green border-2 border-cyber-card" />
        </div>
        <div>
          <h4 className="font-semibold text-white">Purple AI Assistant</h4>
          <p className="text-xs text-gray-400">Online • Ready to help</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyber-purple" />
          <span className="text-xs text-cyber-purple">AI Powered</span>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 h-[350px]" ref={scrollRef}>
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'bg-cyber-purple' 
                    : 'bg-gradient-to-br from-cyber-purple to-cyber-cyan'
                }`}>
                  {message.role === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-cyber-purple text-white rounded-br-md'
                    : 'bg-cyber-darker text-gray-200 rounded-bl-md border border-cyber-border'
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-50 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyber-purple to-cyber-cyan flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-cyber-darker rounded-2xl rounded-bl-md border border-cyber-border px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyber-purple animate-typing-dot" />
                  <span className="w-2 h-2 rounded-full bg-cyber-purple animate-typing-dot animation-delay-100" />
                  <span className="w-2 h-2 rounded-full bg-cyber-purple animate-typing-dot animation-delay-200" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </ScrollArea>

      {/* Input */}
      <div className="p-4 border-t border-cyber-border bg-cyber-darker">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about security threats, request analysis..."
            className="flex-1 bg-cyber-dark border-cyber-border text-white placeholder:text-gray-500 focus:border-cyber-purple focus:ring-cyber-purple"
          />
          <Button
            onClick={handleSend}
            className="bg-cyber-purple hover:bg-cyber-purple-light text-white"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
