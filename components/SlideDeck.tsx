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
    <div className="h-screen w-screen flex flex-col bg-cyber-dark text-white relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [background-position:center] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>

      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-800 z-10 bg-cyber-panel/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Terminal className={`w-6 h-6 ${themeText}`} />
          <h1 className="text-xl font-bold font-mono tracking-wider">
            NEON ESL <span className="text-gray-500 mx-2">//</span> <span className={`${themeText}`}>{currentSlide.segmentTitle}</span>
          </h1>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-400 font-mono uppercase">Current Protocol</span>
          <span className="text-sm font-bold">{currentSlide.slideTitle}</span>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-grow relative z-0 overflow-hidden">
        <div key={currentSlide.id} className="h-full w-full animate-fadeIn">
          {currentSlide.type === 'script' && <ScriptSlide data={currentSlide} />}
          {currentSlide.type === 'concept' && <ConceptSlide data={currentSlide} />}
          {currentSlide.type === 'grammar' && <GrammarSlide data={currentSlide} />}
          {currentSlide.type === 'answer-key' && <AnswerKeySlide data={currentSlide} />}
        </div>
      </main>

      {/* Footer / Controls */}
      <footer className="p-4 border-t border-gray-800 z-10 bg-cyber-panel/80 backdrop-blur-md">
        <div className="flex items-center justify-between gap-4">
          
          <button 
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all
              ${currentSlideIndex === 0 ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-white/10 active:scale-95'}
            `}
          >
            <ChevronLeft size={18} /> PREV
          </button>

          {/* Progress Bar */}
          <div className="flex-grow max-w-2xl h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div 
              className={`h-full transition-all duration-300 ${themeColor} shadow-[0_0_10px_currentColor]`}
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <div className="font-mono text-xs text-gray-500 min-w-[60px] text-center">
            {currentSlideIndex + 1} / {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlideIndex === slides.length - 1}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-md font-mono text-sm transition-all
              ${currentSlideIndex === slides.length - 1 ? 'text-gray-600 cursor-not-allowed' : `${themeText} bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10`}
            `}
          >
            NEXT <ChevronRight size={18} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default SlideDeck;