import React, { useState, useEffect } from 'react';
import { GrammarSlideData } from '../types';
import { GripVertical, Check, AlertCircle } from 'lucide-react';

interface GrammarSlideProps {
  data: GrammarSlideData;
}

interface WordToken {
  id: string;
  text: string;
  originalIndex: number;
}

const GrammarSlide: React.FC<GrammarSlideProps> = ({ data }) => {
  const [availableWords, setAvailableWords] = useState<WordToken[]>([]);
  const [solvedIndices, setSolvedIndices] = useState<number[]>([]);
  const [feedback, setFeedback] = useState<{ [key: number]: 'success' | 'error' | null }>({});

  // Theme configuration
  const themeConfig = {
    green: {
      accent: 'text-cyber-green',
      border: 'border-cyber-green',
      glow: 'shadow-[0_0_15px_rgba(0,255,65,0.3)]',
      bg: 'bg-green-900/20',
      tokenBg: 'bg-black border-cyber-green text-cyber-green hover:bg-green-900/50',
      slotEmpty: 'border-green-800 bg-green-900/10',
      slotActive: 'border-green-500 bg-green-900/30',
      slotSuccess: 'bg-green-500/20 border-green-500 text-green-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
    gold: {
      accent: 'text-cyber-gold',
      border: 'border-cyber-gold',
      glow: 'shadow-[0_0_15px_rgba(255,215,0,0.3)]',
      bg: 'bg-yellow-900/20',
      tokenBg: 'bg-black border-cyber-gold text-cyber-gold hover:bg-yellow-900/50',
      slotEmpty: 'border-yellow-800 bg-yellow-900/10',
      slotActive: 'border-yellow-500 bg-yellow-900/30',
      slotSuccess: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
    blue: {
      accent: 'text-cyber-blue',
      border: 'border-cyber-blue',
      glow: 'shadow-[0_0_15px_rgba(0,208,255,0.3)]',
      bg: 'bg-blue-900/20',
      tokenBg: 'bg-black border-cyber-blue text-cyber-blue hover:bg-blue-900/50',
      slotEmpty: 'border-blue-800 bg-blue-900/10',
      slotActive: 'border-blue-500 bg-blue-900/30',
      slotSuccess: 'bg-blue-500/20 border-blue-500 text-blue-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
  };

  const theme = themeConfig[data.theme];

  // Initialize Word Bank
  useEffect(() => {
    setSolvedIndices([]);
    setFeedback({});
    
    // Create tokens with unique IDs to handle duplicate words
    const tokens: WordToken[] = data.exerciseSet.exercises.map((ex, idx) => ({
      id: `${idx}-${Math.random().toString(36).substr(2, 9)}`,
      text: ex.answer,
      originalIndex: idx
    }));

    // Shuffle
    setAvailableWords(tokens.sort(() => Math.random() - 0.5));
  }, [data]);

  // Drag Handlers
  const handleDragStart = (e: React.DragEvent, token: WordToken) => {
    e.dataTransfer.setData('tokenId', token.id);
    e.dataTransfer.setData('tokenText', token.text);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Essential to allow dropping
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, exerciseIndex: number, correctAnswer: string) => {
    e.preventDefault();
    const droppedText = e.dataTransfer.getData('tokenText');
    const droppedId = e.dataTransfer.getData('tokenId');

    if (solvedIndices.includes(exerciseIndex)) return;

    if (droppedText === correctAnswer) {
      // Success
      setSolvedIndices(prev => [...prev, exerciseIndex]);
      setAvailableWords(prev => prev.filter(w => w.id !== droppedId));
      triggerFeedback(exerciseIndex, 'success');
    } else {
      // Error
      triggerFeedback(exerciseIndex, 'error');
    }
  };

  const triggerFeedback = (index: number, type: 'success' | 'error') => {
    setFeedback(prev => ({ ...prev, [index]: type }));
    if (type === 'error') {
      setTimeout(() => {
        setFeedback(prev => ({ ...prev, [index]: null }));
      }, 500);
    }
  };

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto p-4 md:p-8 relative">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-6 border-b border-gray-800 pb-4 shrink-0">
         <h2 className={`text-3xl md:text-4xl font-bold font-mono ${theme.accent} uppercase tracking-tight`}>
          {data.headline}
        </h2>
        <span className="hidden md:inline-block text-gray-500 font-mono text-sm animate-pulse border px-2 py-1 rounded border-gray-800">
          PROTOCOL: {data.exerciseSet.title}
        </span>
      </div>

      {/* Main Exercise Area (Scrollable) */}
      <div className="flex-grow overflow-y-auto pr-2 space-y-4 mb-32 custom-scrollbar">
        {data.exerciseSet.exercises.map((ex, idx) => {
          const isSolved = solvedIndices.includes(idx);
          const feedbackStatus = feedback[idx];

          let slotClass = theme.slotEmpty;
          if (isSolved) slotClass = theme.slotSuccess;
          else if (feedbackStatus === 'error') slotClass = theme.slotError;

          return (
            <div 
              key={idx} 
              className={`
                flex flex-wrap items-center gap-3 p-4 rounded-lg border border-gray-800/50 
                bg-cyber-panel/40 backdrop-blur-sm transition-all duration-300
                ${isSolved ? 'opacity-70' : 'hover:bg-white/5'}
              `}
            >
              <div className="text-xl md:text-2xl leading-relaxed font-light tracking-wide text-gray-300 flex flex-wrap items-baseline gap-2">
                <span>{ex.pre}</span>
                
                {/* DROP ZONE */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx, ex.answer)}
                  className={`
                    relative min-w-[100px] h-10 px-4 rounded border-b-2 flex items-center justify-center
                    transition-all duration-300 font-mono font-bold select-none
                    ${slotClass}
                    ${!isSolved ? 'animate-pulse' : ''}
                  `}
                >
                  {isSolved ? (
                    <span className="flex items-center gap-2">
                      {ex.answer} <Check size={16} />
                    </span>
                  ) : feedbackStatus === 'error' ? (
                    <AlertCircle size={20} className="text-red-500" />
                  ) : (
                    <span className="opacity-20 text-sm">DROP HERE</span>
                  )}
                  
                  {/* Glow effect for slot */}
                  {!isSolved && feedbackStatus !== 'error' && (
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite] -skew-x-12`}></div>
                  )}
                </div>

                <span>{ex.post}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Word Bank (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-cyber-dark/95 border-t border-gray-800 backdrop-blur-xl z-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs text-gray-500 font-mono uppercase mb-3 flex items-center gap-2">
            <GripVertical size={14} /> 
            Available Fragments
          </p>
          
          <div className="flex flex-wrap gap-3 min-h-[60px] items-center">
            {availableWords.length === 0 ? (
              <div className={`w-full text-center font-mono ${theme.accent} animate-pulse`}>
                >> ALL SYSTEMS OPERATIONAL. SEQUENCE COMPLETE.
              </div>
            ) : (
              availableWords.map((token) => (
                <div
                  key={token.id}
                  draggable={true}
                  onDragStart={(e) => handleDragStart(e, token)}
                  className={`
                    px-4 py-2 rounded font-mono font-bold cursor-grab active:cursor-grabbing
                    transition-transform hover:scale-105 active:scale-95 shadow-lg border
                    ${theme.tokenBg}
                  `}
                >
                  {token.text}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.4s ease-in-out;
        }
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          100% { transform: translateX(150%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
};

export default GrammarSlide;