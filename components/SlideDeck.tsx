import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { slides } from '../data/slides';
import { ChevronLeft, ChevronRight, Terminal, Menu, X, Zap, FastForward, Lock, CheckCircle } from 'lucide-react';
import ScriptSlide from './ScriptSlide';
import GrammarSlide from './GrammarSlide';
import AnswerKeySlide from './AnswerKeySlide';
import ConceptSlide from './ConceptSlide';
import { SegmentTheme } from '../types';

const SlideDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSlideLocked, setIsSlideLocked] = useState(true);
  const currentSlide = slides[currentSlideIndex];

  // Reset lock state when slide changes
  useEffect(() => {
    setIsSlideLocked(true);
  }, [currentSlideIndex]);

  const handleUnlock = useCallback(() => {
    setIsSlideLocked(false);
  }, []);

  const handleNext = useCallback(() => {
    if (!isSlideLocked && currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex, isSlideLocked]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
      // When going back, we typically assume previously visited slides are "passed" or re-lock them?
      // For a strict game flow, re-locking forces practice. 
      // However, usually "Prev" is for review. Let's keep it locked if we go back to force re-engagement 
      // OR unlock immediately if we wanted to allow free roam backward. 
      // Given "Transform each level into a checkpoint", usually you can go back, but to go forward you must pass.
      // Let's stick to the default behavior: visiting a slide resets the lock state via the useEffect above.
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMenuOpen) {
        if (e.key === 'Escape') setIsMenuOpen(false);
        return;
      }
      // Only allow Right Arrow if unlocked
      if (e.key === 'ArrowRight' && !isSlideLocked) handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, isMenuOpen, isSlideLocked]);

  // Calculate distinct segments for Speed Jump
  const segments = useMemo(() => {
    return slides.reduce((acc, slide, index) => {
      const lastSegment = acc[acc.length - 1];
      if (!lastSegment || lastSegment.title !== slide.segmentTitle) {
        acc.push({ 
          title: slide.segmentTitle, 
          index, 
          theme: slide.theme 
        });
      }
      return acc;
    }, [] as { title: string; index: number; theme: SegmentTheme }[]);
  }, []);

  const handleJump = (index: number) => {
    setCurrentSlideIndex(index);
    setIsMenuOpen(false);
    // Jumping to a slide resets lock state via useEffect
  };

  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  const getThemeColors = (theme: SegmentTheme) => {
    switch (theme) {
      case 'green': return { text: 'text-cyber-green', bg: 'bg-cyber-green', border: 'border-cyber-green', shadow: 'shadow-[#00ff41]' };
      case 'gold': return { text: 'text-cyber-gold', bg: 'bg-cyber-gold', border: 'border-cyber-gold', shadow: 'shadow-[#ffd700]' };
      case 'pop': return { text: 'text-cyber-pop', bg: 'bg-cyber-pop', border: 'border-cyber-pop', shadow: 'shadow-[#d900ff]' };
      case 'blue':
      default: return { text: 'text-cyber-blue', bg: 'bg-cyber-blue', border: 'border-cyber-blue', shadow: 'shadow-[#00d0ff]' };
    }
  };

  const currentTheme = getThemeColors(currentSlide.theme);

  return (
    <div className="h-screen w-screen flex flex-col bg-cyber-dark text-white relative overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [background-position:center] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800 z-30 bg-cyber-panel/80 backdrop-blur-md shrink-0 transition-colors duration-500">
        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
          <Terminal className={`w-6 h-6 md:w-8 md:h-8 ${currentTheme.text} shrink-0`} />
          <h1 className="text-xl md:text-3xl font-bold font-mono tracking-wider truncate">
            NEON ESL <span className="text-gray-500 mx-2">//</span> <span className={`${currentTheme.text}`}>{currentSlide.segmentTitle}</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex flex-col items-end shrink-0 hidden sm:flex">
            <span className="text-xs md:text-sm text-gray-400 font-mono uppercase">Current Protocol</span>
            <span className="text-sm md:text-lg font-bold text-right max-w-[150px] md:max-w-none truncate">{currentSlide.slideTitle}</span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded border border-gray-700 hover:border-white hover:bg-white/10 transition-all active:scale-95 group`}
            aria-label="Open Speed Jump Menu"
          >
            <Menu className="w-6 h-6 md:w-8 md:h-8 text-gray-300 group-hover:text-white" />
          </button>
        </div>
      </header>

      {/* Speed Jump Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" onClick={() => setIsMenuOpen(false)}></div>
          
          <div className="relative w-full max-w-4xl bg-cyber-panel border-2 border-gray-700 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-full">
            <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-black/40">
              <h2 className="text-2xl md:text-3xl font-mono font-bold uppercase tracking-widest flex items-center gap-3">
                <FastForward className="animate-pulse text-white" /> Speed Jump Protocol
              </h2>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto custom-scrollbar">
              {segments.map((segment, idx) => {
                const segColors = getThemeColors(segment.theme);
                const isActive = currentSlide.segmentTitle === segment.title;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleJump(segment.index)}
                    className={`
                      relative group p-6 rounded border-2 text-left transition-all duration-300 overflow-hidden
                      ${isActive 
                        ? `${segColors.border} bg-white/5` 
                        : 'border-gray-800 hover:border-gray-500 bg-black/40 hover:bg-gray-900'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex flex-col">
                        <span className={`text-xs font-mono uppercase mb-1 ${isActive ? segColors.text : 'text-gray-500 group-hover:text-gray-400'}`}>
                          Section 0{idx + 1}
                        </span>
                        <span className={`text-xl md:text-2xl font-bold font-mono uppercase tracking-tight ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                          {segment.title}
                        </span>
                      </div>
                      <Zap className={`
                        w-6 h-6 md:w-8 md:h-8 transition-all duration-300
                        ${isActive ? `${segColors.text} opacity-100` : 'text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-white'}
                      `} />
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${segColors.bg}`}></div>
                    {isActive && <div className={`absolute left-0 top-0 bottom-0 w-1 ${segColors.bg}`}></div>}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Main Slide Area */}
      <main className="flex-grow relative z-0 overflow-hidden w-full">
        <div key={currentSlide.id} className="h-full w-full overflow-hidden">
          {currentSlide.type === 'script' && <ScriptSlide data={currentSlide} onUnlock={handleUnlock} />}
          {currentSlide.type === 'concept' && <ConceptSlide data={currentSlide} onUnlock={handleUnlock} />}
          {currentSlide.type === 'grammar' && <GrammarSlide data={currentSlide} onUnlock={handleUnlock} />}
          {currentSlide.type === 'answer-key' && <AnswerKeySlide data={currentSlide} onUnlock={handleUnlock} />}
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="p-4 md:p-6 border-t border-gray-800 z-20 bg-cyber-panel/80 backdrop-blur-md shrink-0 safe-area-bottom">
        <div className="flex items-center justify-between gap-6">
          
          <button 
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`
              flex items-center gap-2 px-4 py-3 md:px-6 rounded-md font-mono text-sm md:text-lg transition-all
              ${currentSlideIndex === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-white/10 active:scale-95'}
            `}
          >
            <ChevronLeft size={20} className="md:w-[24px] md:h-[24px]" /> <span className="hidden sm:inline">PREV</span>
          </button>

          {/* Progress Bar */}
          <div className="flex-grow max-w-3xl h-2 bg-gray-800 rounded-full overflow-hidden relative group">
             {/* Tooltip for Locked Status */}
            {isSlideLocked && (
               <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-mono text-red-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black px-2 py-1 border border-red-500 rounded">
                  checkpoint_status: LOCKED
               </div>
            )}
            <div 
              className={`h-full transition-all duration-300 ${currentTheme.bg} shadow-[0_0_10px_currentColor]`}
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="font-mono text-sm md:text-base text-gray-500 min-w-[50px] md:min-w-[80px] text-center">
            {currentSlideIndex + 1} / {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1 || isSlideLocked}
            className={`
              flex items-center gap-2 px-4 py-3 md:px-6 rounded-md font-mono text-sm md:text-lg transition-all border
              ${currentSlideIndex === slides.length - 1 
                ? 'text-gray-600 border-transparent cursor-not-allowed' 
                : isSlideLocked
                  ? 'bg-gray-900 border-gray-700 text-gray-500 cursor-not-allowed'
                  : `${currentTheme.text} bg-white/5 hover:bg-white/10 active:scale-95 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]`
              }
            `}
            title={isSlideLocked ? "Complete the current task to unlock" : "Next Slide"}
          >
            {isSlideLocked ? (
              <>
                <Lock size={16} className="md:w-[20px] md:h-[20px]" /> 
                <span className="hidden sm:inline">LOCKED</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">NEXT</span> 
                <ChevronRight size={20} className="md:w-[24px] md:h-[24px]" />
              </>
            )}
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SlideDeck;
