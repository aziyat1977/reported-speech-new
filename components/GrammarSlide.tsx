import React, { useState, useEffect } from 'react';
import { GrammarSlideData } from '../types';
import { GripVertical, Check, AlertCircle, MousePointerClick } from 'lucide-react';

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
  
  // Touch/Click Selection State
  const [selectedToken, setSelectedToken] = useState<WordToken | null>(null);

  // Theme configuration
  const themeConfig = {
    green: {
      accent: 'text-cyber-green',
      border: 'border-cyber-green',
      glow: 'shadow-[0_0_15px_rgba(0,255,65,0.3)]',
      bg: 'bg-green-900/20',
      tokenBg: 'bg-black border-cyber-green text-cyber-green hover:bg-green-900/50',
      tokenSelected: 'bg-green-900 border-white text-white shadow-[0_0_15px_rgba(0,255,65,0.5)]',
      slotEmpty: 'border-green-800 bg-green-900/10',
      slotActive: 'border-green-500 bg-green-900/30 shadow-[0_0_10px_rgba(0,255,65,0.3)]',
      slotSuccess: 'bg-green-500/20 border-green-500 text-green-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
    gold: {
      accent: 'text-cyber-gold',
      border: 'border-cyber-gold',
      glow: 'shadow-[0_0_15px_rgba(255,215,0,0.3)]',
      bg: 'bg-yellow-900/20',
      tokenBg: 'bg-black border-cyber-gold text-cyber-gold hover:bg-yellow-900/50',
      tokenSelected: 'bg-yellow-900 border-white text-white shadow-[0_0_15px_rgba(255,215,0,0.5)]',
      slotEmpty: 'border-yellow-800 bg-yellow-900/10',
      slotActive: 'border-yellow-500 bg-yellow-900/30 shadow-[0_0_10px_rgba(255,215,0,0.3)]',
      slotSuccess: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
    blue: {
      accent: 'text-cyber-blue',
      border: 'border-cyber-blue',
      glow: 'shadow-[0_0_15px_rgba(0,208,255,0.3)]',
      bg: 'bg-blue-900/20',
      tokenBg: 'bg-black border-cyber-blue text-cyber-blue hover:bg-blue-900/50',
      tokenSelected: 'bg-blue-900 border-white text-white shadow-[0_0_15px_rgba(0,208,255,0.5)]',
      slotEmpty: 'border-blue-800 bg-blue-900/10',
      slotActive: 'border-blue-500 bg-blue-900/30 shadow-[0_0_10px_rgba(0,208,255,0.3)]',
      slotSuccess: 'bg-blue-500/20 border-blue-500 text-blue-400',
      slotError: 'bg-red-500/20 border-red-500 animate-shake',
    },
  };

  const theme = themeConfig[data.theme];

  // Initialize Word Bank
  useEffect(() => {
    setSolvedIndices([]);
    setFeedback({});
    setSelectedToken(null);
    
    // Create tokens with unique IDs
    const tokens: WordToken[] = data.exerciseSet.exercises.map((ex, idx) => ({
      id: `${idx}-${Math.random().toString(36).substr(2, 9)}`,
      text: ex.answer,
      originalIndex: idx
    }));

    setAvailableWords(tokens.sort(() => Math.random() - 0.5));
  }, [data]);

  // Unified Logic for Drag and Click
  const processAttempt = (exerciseIndex: number, correctAnswer: string, providedText: string, tokenId: string) => {
    if (solvedIndices.includes(exerciseIndex)) return;

    // Use trimmed comparison for robustness
    if (providedText && providedText.trim() === correctAnswer.trim()) {
      // Success
      setSolvedIndices(prev => [...prev, exerciseIndex]);
      setAvailableWords(prev => prev.filter(w => w.id !== tokenId));
      triggerFeedback(exerciseIndex, 'success');
      setSelectedToken(null); // Clear selection after success
    } else {
      // Error
      triggerFeedback(exerciseIndex, 'error');
      // Keep selection active for easier retries
    }
  };

  // Drag Handlers
  const handleDragStart = (e: React.DragEvent, token: WordToken) => {
    // Set both custom and standard formats for better browser compatibility
    e.dataTransfer.setData('tokenId', token.id);
    e.dataTransfer.setData('tokenText', token.text);
    e.dataTransfer.setData('text/plain', token.text); // Standard format
    e.dataTransfer.effectAllowed = 'move';
    setSelectedToken(token); // Auto-select on drag start visually
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, exerciseIndex: number, correctAnswer: string) => {
    e.preventDefault();
    // Try getting custom data first, fallback to standard text/plain
    const droppedText = e.dataTransfer.getData('tokenText') || e.dataTransfer.getData('text/plain');
    const droppedId = e.dataTransfer.getData('tokenId');
    
    if (droppedText && droppedId) {
      processAttempt(exerciseIndex, correctAnswer, droppedText, droppedId);
    }
  };

  // Click/Touch Handlers
  const handleTokenClick = (token: WordToken) => {
    if (selectedToken?.id === token.id) {
      setSelectedToken(null); // Deselect if already selected
    } else {
      setSelectedToken(token); // Select new
    }
  };

  const handleSlotClick = (exerciseIndex: number, correctAnswer: string) => {
    if (selectedToken) {
      processAttempt(exerciseIndex, correctAnswer, selectedToken.text, selectedToken.id);
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
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto p-3 md:p-8 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-4 md:mb-6 border-b border-gray-800 pb-2 md:pb-4 shrink-0">
         <h2 className={`text-3xl md:text-5xl font-bold font-mono ${theme.accent} uppercase tracking-tight truncate`}>
          {data.headline}
        </h2>
        <span className="hidden sm:inline-block text-gray-500 font-mono text-sm md:text-base animate-pulse border px-3 py-1 rounded border-gray-800 shrink-0 ml-2">
          PROTOCOL: {data.exerciseSet.title}
        </span>
      </div>

      {/* Main Exercise Area (Scrollable) */}
      <div className="flex-grow overflow-y-auto pr-1 md:pr-2 space-y-4 md:space-y-6 mb-[150px] md:mb-40 custom-scrollbar">
        {data.exerciseSet.exercises.map((ex, idx) => {
          const isSolved = solvedIndices.includes(idx);
          const feedbackStatus = feedback[idx];
          const isSelected = !!selectedToken && !isSolved;

          let slotClass = theme.slotEmpty;
          if (isSolved) slotClass = theme.slotSuccess;
          else if (feedbackStatus === 'error') slotClass = theme.slotError;
          else if (isSelected) slotClass = theme.slotActive; // Highlight slots when token selected

          return (
            <div 
              key={idx} 
              className={`
                flex flex-wrap items-center gap-2 md:gap-4 p-4 md:p-6 rounded-lg border border-gray-800/50 
                bg-cyber-panel/40 backdrop-blur-sm transition-all duration-300
                ${isSolved ? 'opacity-70' : 'hover:bg-white/5'}
              `}
            >
              <div className="text-2xl md:text-4xl leading-relaxed font-light tracking-wide text-gray-300 flex flex-wrap items-baseline gap-3 w-full">
                <span className="break-words">{ex.pre}</span>
                
                {/* DROP ZONE */}
                <div
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, idx, ex.answer)}
                  onClick={() => handleSlotClick(idx, ex.answer)}
                  className={`
                    relative min-w-[120px] md:min-w-[160px] h-12 md:h-16 px-4 md:px-6 rounded border-b-4 flex items-center justify-center
                    transition-all duration-300 font-mono font-bold select-none cursor-pointer
                    ${slotClass}
                    ${!isSolved && !selectedToken ? 'animate-pulse' : ''}
                    ${selectedToken && !isSolved ? 'animate-bounce-subtle' : ''}
                  `}
                >
                  {isSolved ? (
                    <span className="flex items-center gap-2 animate-[fadeIn_0.3s_ease-out]">
                      {ex.answer} <Check size={24} className="md:w-6 md:h-6" />
                    </span>
                  ) : feedbackStatus === 'error' ? (
                    <AlertCircle size={24} className="text-red-500" />
                  ) : (
                    <span className="opacity-30 text-sm md:text-lg whitespace-nowrap">
                      {selectedToken ? 'TAP HERE' : 'DROP'}
                    </span>
                  )}
                  
                  {/* Glow effect for slot */}
                  {!isSolved && feedbackStatus !== 'error' && (
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[shimmer_2s_infinite] -skew-x-12 pointer-events-none`}></div>
                  )}
                </div>

                <span className="break-words">{ex.post}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed Word Bank (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-cyber-dark/95 border-t border-gray-800 backdrop-blur-xl z-20 pb-safe-bottom">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm md:text-base text-gray-500 font-mono uppercase mb-3 md:mb-4 flex items-center gap-2">
            {selectedToken ? <MousePointerClick size={16} className="text-white animate-pulse" /> : <GripVertical size={16} />} 
            {selectedToken ? 'SELECT TARGET SLOT...' : 'TAP OR DRAG FRAGMENTS'}
          </p>
          
          <div className="flex flex-wrap gap-3 md:gap-4 min-h-[60px] md:min-h-[80px] items-center content-center justify-start overflow-x-auto max-h-[160px] custom-scrollbar pb-2">
            {availableWords.length === 0 ? (
              <div className={`w-full text-center font-mono text-lg md:text-xl ${theme.accent} animate-pulse`}>
                >> ALL SYSTEMS OPERATIONAL. SEQUENCE COMPLETE.
              </div>
            ) : (
              availableWords.map((token) => {
                const isSelected = selectedToken?.id === token.id;
                return (
                  <div
                    key={token.id}
                    draggable={true}
                    onDragStart={(e) => handleDragStart(e, token)}
                    onClick={() => handleTokenClick(token)}
                    className={`
                      px-4 py-2 md:px-6 md:py-3 rounded font-mono text-lg md:text-2xl font-bold cursor-pointer
                      transition-all duration-200 border select-none
                      ${isSelected ? `${theme.tokenSelected} scale-105` : `${theme.tokenBg} hover:scale-105 active:scale-95 shadow-lg`}
                    `}
                  >
                    {token.text}
                  </div>
                );
              })
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
        @keyframes bounce-subtle {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-3px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 1.5s infinite;
        }
        .pb-safe-bottom {
          padding-bottom: env(safe-area-inset-bottom, 20px);
        }
      `}</style>
    </div>
  );
};

export default GrammarSlide;