import { useState, useEffect } from 'react';

type BackgroundTypingAnimationProps = {
  opacity: string;
  delay: number;
  speed: number;
  style?: React.CSSProperties;
};

const BackgroundTypingAnimation: React.FC<BackgroundTypingAnimationProps> = ({
  opacity,
  delay,
  speed,
  style,
}) => {
  const [text, setText] = useState('');
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    const generateRandomText = () => {
      const length = Math.floor(Math.random() * 30) + 10;
      return Array(length)
        .fill('')
        .map(() =>
          characters.charAt(Math.floor(Math.random() * characters.length))
        )
        .join('');
    };

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setText(generateRandomText());
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [speed, delay]);

  return (
    <div
      className={`absolute w-[400px] h-[200px] bg-gray-900 rounded-lg shadow-xl overflow-hidden ${opacity} transition-transform duration-1000 ease-out hover:scale-105`}
      style={style}
    >
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        <div className="h-[32px] flex items-center">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-gray-200">{text}</span>
          <span className="animate-pulse ml-1">▋</span>
        </div>
      </div>
    </div>
  );
};

const TypingAnimation = () => {
  const [lines, setLines] = useState(['', '', '']);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phraseSets = [
    ['Nauval', 'Uzlah', 'Error!'],
    ['npm i daisyui', 'installing...', 'Error!'],
    ['git init', 'git add .', 'git commit -m "aaaaaaaaaa"'],
    ['npm create vite@latest', 'cd uzlah-portofolio', 'npm run dev'],
    ['docker build .', 'building...', 'Error: no space left on device'],
  ];

  const getCurrentSet = () => phraseSets[currentPhaseIndex];

  useEffect(() => {
    const currentSet = getCurrentSet();
    const currentPhrase = currentSet[currentLine];
    const currentLineText = lines[currentLine];

    if (isDeleting) {
      const timer = setTimeout(() => {
        if (lines.some((line) => line !== '')) {
          setLines((prev) => prev.map(() => ''));
        } else {
          setIsDeleting(false);
          setCurrentPhaseIndex((prev) => (prev + 1) % phraseSets.length);
          setCurrentLine(0);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }

    if (currentLineText === currentPhrase) {
      if (currentLine < currentSet.length - 1) {
        const timer = setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
        }, 500);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }

    const timer = setTimeout(() => {
      setLines((prev) => {
        const newLines = [...prev];
        newLines[currentLine] = currentPhrase.substring(
          0,
          currentLineText.length + 1
        );
        return newLines;
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [lines, currentLine, isDeleting, currentPhaseIndex]);

  const getLineStyle = (index: number, line: string): string => {
    const currentSet = getCurrentSet();
    if (line === '') return '';

    if (line === currentSet[index]) {
      if (line.toLowerCase().includes('error')) {
        return 'bg-red-600/20 text-red-400';
      }
      if (line.includes('installing...') || line.includes('building...')) {
        return 'bg-yellow-600/20 text-yellow-400';
      }
    }
    return '';
  };

  return (
    <div className="h-full">
      <div className="flex items-center px-4 py-2 bg-gray-800">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
      <div className="p-4 font-mono text-sm">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`h-[32px] flex items-center ${getLineStyle(index, line)}`}
          >
            <span className="text-gray-500 mr-2">$</span>
            <span className="text-gray-200">{line}</span>
            {currentLine === index && !isDeleting && (
              <span className="animate-pulse ml-1">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const LayeredTypingAnimation = () => {
  return (
    <div className="relative w-full h-[800px] flex items-center justify-center">
      <div className="relative w-[800px] h-[600px]">
        <BackgroundTypingAnimation
          opacity="opacity-60" // Increased opacity
          delay={1000}
          speed={2000}
          style={{
            transform: 'translate(-70%, -40%) rotate(-15deg)',
            zIndex: 1,
          }}
        />
        <BackgroundTypingAnimation
          opacity="opacity-70" // Increased opacity
          delay={1500}
          speed={2200}
          style={{
            transform: 'translate(70%, -30%) rotate(12deg)',
            zIndex: 2,
          }}
        />
        <BackgroundTypingAnimation
          opacity="opacity-80" // Increased opacity
          delay={2000}
          speed={2500}
          style={{
            transform: 'translate(-60%, 40%) rotate(8deg)',
            zIndex: 3,
          }}
        />
        <BackgroundTypingAnimation
          opacity="opacity-90" // Increased opacity
          delay={2000}
          speed={2500}
          style={{
            transform: 'translate(30%, 50%) rotate(-6deg)',
            zIndex: 3,
          }}
        />
        <div
          className="absolute w-[400px] h-[200px] bg-gray-900/90 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm transition-transform duration-1000 ease-out hover:scale-105"
          style={{
            transform: 'rotate(3deg)',
            zIndex: 4,
          }}
        >
          <TypingAnimation />
        </div>
      </div>
    </div>
  );
};

export default LayeredTypingAnimation;
