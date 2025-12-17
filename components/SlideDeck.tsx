import React, { useState, useEffect, useCallback } from 'react';
import { slides } from '../data/slides';
import { ChevronLeft, ChevronRight, Terminal } from 'lucide-react';
import ScriptSlide from './ScriptSlide';
import GrammarSlide from './GrammarSlide';
import AnswerKeySlide from './AnswerKeySlide';
import ConceptSlide from './ConceptSlide';

const SlideDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = slides[currentSlideIndex];

  const handleNext = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  }, [currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const progress = ((currentSlideIndex + 1) / slides.length) * 100;

  const themeColor = 
    currentSlide.theme === 'green' ? 'bg-cyber-green' : 
    currentSlide.theme === 'gold' ? 'bg-cyber-gold' : 
    'bg-cyber-blue';
    
  const themeText = 
    currentSlide.theme === 'green' ? 'text-cyber-green' : 
    currentSlide.theme === 'gold' ? 'text-cyber-gold' : 
    'text-cyber-blue';

  return (
    <div className="h-screen w-screen flex flex-col bg-cyber-dark text-white relative overflow-hidden supports-[height:100dvh]:h-[100dvh]">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [background-position:center] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 border-b border-gray-800 z-10 bg-cyber-panel/80 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
          <Terminal className={`w-6 h-6 md:w-8 md:h-8 ${themeText} shrink-0`} />
          <h1 className="text-xl md:text-3xl font-bold font-mono tracking-wider truncate">
            NEON ESL <span className="text-gray-500 mx-2">//</span> <span className={`${themeText}`}>{currentSlide.segmentTitle}</span>
          </h1>
        </div>
        <div className="flex flex-col items-end shrink-0 ml-4">
          <span className="text-sm md:text-base text-gray-400 font-mono uppercase hidden sm:block">Current Protocol</span>
          <span className="text-lg md:text-2xl font-bold text-right max-w-[150px] md:max-w-none truncate">{currentSlide.slideTitle}</span>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-grow relative z-0 overflow-hidden w-full">
        <div key={currentSlide.id} className="h-full w-full animate-fadeIn overflow-hidden">
          {currentSlide.type === 'script' && <ScriptSlide data={currentSlide} />}
          {currentSlide.type === 'concept' && <ConceptSlide data={currentSlide} />}
          {currentSlide.type === 'grammar' && <GrammarSlide data={currentSlide} />}
          {currentSlide.type === 'answer-key' && <AnswerKeySlide data={currentSlide} />}
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="p-4 md:p-6 border-t border-gray-800 z-10 bg-cyber-panel/80 backdrop-blur-md shrink-0 safe-area-bottom">
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
          <div className="flex-grow max-w-3xl h-2 bg-gray-800 rounded-full overflow-hidden relative">
            <div 
              className={`h-full transition-all duration-300 ${themeColor} shadow-[0_0_10px_currentColor]`}
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="font-mono text-sm md:text-base text-gray-500 min-w-[50px] md:min-w-[80px] text-center">
            {currentSlideIndex + 1} / {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
            className={`
              flex items-center gap-2 px-4 py-3 md:px-6 rounded-md font-mono text-sm md:text-lg transition-all
              ${currentSlideIndex === slides.length - 1 ? 'text-gray-600 cursor-not-allowed' : `${themeText} bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10`}
            `}
          >
            <span className="hidden sm:inline">NEXT</span> <ChevronRight size={20} className="md:w-[24px] md:h-[24px]" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SlideDeck;