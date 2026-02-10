import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayText('');
    setIsTyping(true);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (!isTyping) return;

    let currentIndex = 0;
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
          setIsComplete(true);
          onComplete?.();
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, isTyping, onComplete]);

  return { displayText, isTyping, isComplete, startTyping };
}

export function useMultiLineTypewriter(
  lines: string[],
  options: {
    speed?: number;
    lineDelay?: number;
    startDelay?: number;
  } = {}
) {
  const { speed = 30, lineDelay = 300, startDelay = 0 } = options;
  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setIsComplete(true);
      return;
    }

    const currentLine = lines[currentLineIndex];
    let charIndex = 0;

    const startTimeout = setTimeout(() => {
      const intervalId = setInterval(() => {
        if (charIndex <= currentLine.length) {
          setDisplayLines((prev) => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentLine.slice(0, charIndex);
            return newLines;
          });
          charIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setCurrentLineIndex((prev) => prev + 1);
          }, lineDelay);
        }
      }, speed);

      return () => clearInterval(intervalId);
    }, currentLineIndex === 0 ? startDelay : 0);

    return () => clearTimeout(startTimeout);
  }, [currentLineIndex, lines, speed, lineDelay, startDelay]);

  return { displayLines, isComplete, currentLineIndex };
}
