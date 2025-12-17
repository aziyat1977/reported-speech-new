import React, { useState } from 'react';
import { SegmentTheme } from '../types';

interface RevealableTextProps {
  answer: string;
  theme: SegmentTheme;
}

const RevealableText: React.FC<RevealableTextProps> = ({ answer, theme }) => {
  const [revealed, setRevealed] = useState(false);

  const themeColors = {
    green: 'text-cyber-green border-cyber-green shadow-[0_0_10px_#00ff41]',
    gold: 'text-cyber-gold border-cyber-gold shadow-[0_0_10px_#ffd700]',
    blue: 'text-cyber-blue border-cyber-blue shadow-[0_0_10px_#00d0ff]',
  };

  const hiddenColors = {
    green: 'bg-green-900/30 border-green-700 hover:bg-green-800/50',
    gold: 'bg-yellow-900/30 border-yellow-700 hover:bg-yellow-800/50',
    blue: 'bg-blue-900/30 border-blue-700 hover:bg-blue-800/50',
  };

  return (
    <span
      onClick={() => setRevealed(true)}
      className={`
        inline-flex items-center justify-center
        min-w-[80px] px-2 mx-1 h-6 cursor-pointer border-b-2
        transition-all duration-300 rounded-sm font-mono text-sm
        ${revealed ? `${themeColors[theme]} bg-transparent font-bold` : `${hiddenColors[theme]} text-transparent animate-pulse`}
      `}
    >
      {revealed ? answer : '????'}
    </span>
  );
};

export default RevealableText;