import React, { useState, useEffect } from 'react';
import { GrammarSlideData, GrammarExercise } from '../types';
import { Check, X, ArrowRight, Eye, RefreshCw, AlertCircle, Sparkles, ShieldAlert, ShieldCheck } from 'lucide-react';

interface GrammarSlideProps {
  data: GrammarSlideData;
  onUnlock: () => void;
}

const GrammarSlide: React.FC<GrammarSlideProps> = ({ data, onUnlock }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Scoring State
  const [mistakes, setMistakes] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // State for randomized content
  const [activeExercises, setActiveExercises] = useState<GrammarExercise[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  // 1. Initialize and shuffle questions when the slide ID changes
  useEffect(() => {
    initExercises();
  }, [data.id]);

  const initExercises = () => {
    const questions = [...data.exerciseSet.exercises];
    // Fisher-Yates shuffle for questions
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    setActiveExercises(questions);
    setCurrentIndex(0);
    setMistakes(0);
    setIsComplete(false);
    resetQuestionState();
  };

  // 2. Shuffle options whenever the current question changes or exercises are loaded
  useEffect(() => {
    resetQuestionState();
    if (activeExercises.length > 0 && !isComplete) {
      shuffleCurrentOptions();
    }
  }, [currentIndex, activeExercises, isComplete]);

  const resetQuestionState = () => {
    setSelectedOption(null);
    setIsAnswerRevealed(false);
    setIsCorrect(null);
  };

  const shuffleCurrentOptions = () => {
    const exercise = activeExercises[currentIndex];
    if (exercise) {
      const options = [...exercise.options];
      // Fisher-Yates shuffle for options
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      setShuffledOptions(options);
    }
  };

  const currentExercise = activeExercises[currentIndex];

  // Theme configuration
  const themeConfig = {
    green: {
      accent: 'text-cyber-green',
      border: 'border-cyber-green',
      glow: 'shadow-[0_0_20px_rgba(0,255,65,0.4)]',
      bg: 'bg-green-900/20',
      optionDefault: 'bg-black border-gray-700 text-gray-300 hover:border-cyber-green hover:text-cyber-green',
      optionSelected: 'bg-green-900/40 border-cyber-green text-cyber-green shadow-[0_0_15px_rgba(0,255,65,0.3)]',
      optionCorrect: 'bg-green-600 border-green-400 text-white shadow-[0_0_15px_rgba(0,255,65,0.6)]',
      optionWrong: 'bg-red-900/40 border-red-500 text-red-400 opacity-60',
      buttonPrimary: 'bg-cyber-green text-black hover:bg-green-400 shadow-[0_0_15px_rgba(0,255,65,0.4)]',
      buttonSecondary: 'border-cyber-green text-cyber-green hover:bg-green-900/30'
    },
    gold: {
      accent: 'text-cyber-gold',
      border: 'border-cyber-gold',
      glow: 'shadow-[0_0_20px_rgba(255,215,0,0.4)]',
      bg: 'bg-yellow-900/20',
      optionDefault: 'bg-black border-gray-700 text-gray-300 hover:border-cyber-gold hover:text-cyber-gold',
      optionSelected: 'bg-yellow-900/40 border-cyber-gold text-cyber-gold shadow-[0_0_15px_rgba(255,215,0,0.3)]',
      optionCorrect: 'bg-yellow-600 border-yellow-400 text-white shadow-[0_0_15px_rgba(255,215,0,0.6)]',
      optionWrong: 'bg-red-900/40 border-red-500 text-red-400 opacity-60',
      buttonPrimary: 'bg-cyber-gold text-black hover:bg-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.4)]',
      buttonSecondary: 'border-cyber-gold text-cyber-gold hover:bg-yellow-900/30'
    },
    blue: {
      accent: 'text-cyber-blue',
      border: 'border-cyber-blue',
      glow: 'shadow-[0_0_20px_rgba(0,208,255,0.4)]',
      bg: 'bg-blue-900/20',
      optionDefault: 'bg-black border-gray-700 text-gray-300 hover:border-cyber-blue hover:text-cyber-blue',
      optionSelected: 'bg-blue-900/40 border-cyber-blue text-cyber-blue shadow-[0_0_15px_rgba(0,208,255,0.3)]',
      optionCorrect: 'bg-blue-600 border-blue-400 text-white shadow-[0_0_15px_rgba(0,208,255,0.6)]',
      optionWrong: 'bg-red-900/40 border-red-500 text-red-400 opacity-60',
      buttonPrimary: 'bg-cyber-blue text-black hover:bg-blue-400 shadow-[0_0_15px_rgba(0,208,255,0.4)]',
      buttonSecondary: 'border-cyber-blue text-cyber-blue hover:bg-blue-900/30'
    },
    pop: {
      accent: 'text-cyber-pop',
      border: 'border-cyber-pop',
      glow: 'shadow-[0_0_20px_rgba(217,0,255,0.4)]',
      bg: 'bg-fuchsia-900/20',
      optionDefault: 'bg-black border-gray-700 text-gray-300 hover:border-cyber-pop hover:text-cyber-pop',
      optionSelected: 'bg-fuchsia-900/40 border-cyber-pop text-cyber-pop shadow-[0_0_15px_rgba(217,0,255,0.3)]',
      optionCorrect: 'bg-fuchsia-600 border-fuchsia-400 text-white shadow-[0_0_15px_rgba(217,0,255,0.6)]',
      optionWrong: 'bg-red-900/40 border-red-500 text-red-400 opacity-60',
      buttonPrimary: 'bg-cyber-pop text-white hover:bg-fuchsia-500 shadow-[0_0_15px_rgba(217,0,255,0.4)]',
      buttonSecondary: 'border-cyber-pop text-cyber-pop hover:bg-fuchsia-900/30'
    },
  };

  const theme = themeConfig[data.theme];

  const handleOptionClick = (option: string) => {
    if (isAnswerRevealed) return; 
    setSelectedOption(option);
    
    const correct = option === currentExercise.answer;
    setIsCorrect(correct);
    setIsAnswerRevealed(true);

    if (!correct) {
      setMistakes(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeExercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishSet();
    }
  };

  const finishSet = () => {
    setIsComplete(true);
    // If accuracy is 100%, unlock the deck
    if (mistakes === 0) {
      onUnlock();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      // NOTE: Going back in a quiz view typically shows the previous question state.
      // But we are simplifying: once you move forward, you commit. 
      // This simple implementation allows peeking back, but state is reset in useEffect. 
      // To properly support "Prev", we would need to store the state of all questions.
      // For this deck, we will disable "Prev" inside the quiz to enforce linear progression like a checkpoint.
    }
  };

  const handleReveal = () => {
    // Revealing without selecting counts as a mistake? Yes, for 100% mastery.
    if (!isAnswerRevealed) {
      setMistakes(prev => prev + 1);
      setIsAnswerRevealed(true);
      setIsCorrect(false); // Technically not correct if you needed a hint
    }
  };

  // --------------------------------------------------------------------------
  // RENDER: COMPLETED STATE
  // --------------------------------------------------------------------------
  if (isComplete) {
    const isSuccess = mistakes === 0;
    const accuracy = Math.round(((activeExercises.length - mistakes) / activeExercises.length) * 100);

    return (
      <div className="flex flex-col h-full w-full items-center justify-center p-8 relative animate-in fade-in zoom-in duration-500">
         <div className={`
             max-w-2xl w-full border-2 ${isSuccess ? theme.border : 'border-red-500'} 
             bg-black/80 backdrop-blur-xl p-8 md:p-12 rounded-xl shadow-2xl flex flex-col items-center text-center
         `}>
             {isSuccess ? (
               <ShieldCheck size={80} className={`${theme.accent} mb-6 animate-pulse`} />
             ) : (
               <ShieldAlert size={80} className="text-red-500 mb-6 animate-pulse" />
             )}

             <h2 className={`text-3xl md:text-5xl font-bold font-mono uppercase mb-4 ${isSuccess ? 'text-white' : 'text-red-500'}`}>
               {isSuccess ? 'CHECKPOINT REACHED' : 'PROTOCOL FAILED'}
             </h2>

             <div className="flex items-center gap-4 text-xl md:text-2xl font-mono mb-8">
                <span className="text-gray-400">ACCURACY:</span>
                <span className={`${isSuccess ? theme.accent : 'text-red-500'} font-bold`}>{accuracy}%</span>
             </div>

             <div className="text-gray-400 mb-10 max-w-lg leading-relaxed">
               {isSuccess 
                 ? "Neural link established. You have demonstrated 100% mastery of this protocol. Access to the next sector is granted."
                 : "Neural link unstable. You must achieve 100% accuracy to proceed. Re-initialization required."
               }
             </div>

             {isSuccess ? (
               <div className={`px-8 py-3 rounded border ${theme.border} ${theme.bg} ${theme.accent} font-mono font-bold`}>
                 ACCESS GRANTED // PRESS NEXT
               </div>
             ) : (
               <button 
                 onClick={initExercises}
                 className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-500 text-white font-mono font-bold rounded shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all active:scale-95"
               >
                 <RefreshCw size={24} /> RE-INITIALIZE PROTOCOL
               </button>
             )}
         </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // RENDER: ACTIVE QUIZ
  // --------------------------------------------------------------------------
  
  // Avoid rendering if not ready
  if (!currentExercise) return null;
  const isLastQuestion = currentIndex === activeExercises.length - 1;

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto p-4 md:p-8 relative">
      
      {/* Header with Progress */}
      <div className="flex justify-between items-end mb-6 md:mb-10 border-b border-gray-800 pb-4 shrink-0">
         <div className="flex flex-col">
             <span className={`text-sm md:text-base font-mono uppercase text-gray-500 mb-1 flex items-center gap-2`}>
               {data.theme === 'pop' && <Sparkles size={16} className="text-cyber-pop" />}
               Protocol: {data.exerciseSet.title}
             </span>
             <h2 className={`text-2xl md:text-4xl font-bold font-mono ${theme.accent} uppercase tracking-tight truncate`}>
                {data.headline}
            </h2>
         </div>
         <div className="flex flex-col items-end">
             <div className="flex items-center gap-4 mb-1">
                 <div className="hidden md:flex gap-1">
                     {activeExercises.map((_, idx) => (
                         <div key={idx} className={`w-3 h-3 rounded-sm ${idx === currentIndex ? theme.accent.replace('text-', 'bg-') : idx < currentIndex ? 'bg-gray-600' : 'bg-gray-800'}`}></div>
                     ))}
                 </div>
                 <span className={`font-mono text-xl font-bold ${theme.accent}`}>
                     {currentIndex + 1}<span className="text-gray-600 text-sm mx-1">/</span>{activeExercises.length}
                 </span>
             </div>
             {mistakes > 0 && (
                <span className="text-red-500 text-xs font-mono animate-pulse">
                  ERRORS DETECTED: {mistakes}
                </span>
             )}
         </div>
      </div>

      {/* Main Question Card */}
      <div className="flex-grow flex flex-col justify-center items-center relative z-10">
          
          {/* Question Text */}
          <div className="w-full bg-cyber-panel/60 border border-gray-800 rounded-xl p-6 md:p-12 mb-8 md:mb-12 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              {/* Decorative scanline */}
              <div className={`absolute top-0 left-0 w-full h-1 ${theme.accent.replace('text-', 'bg-')} opacity-50`}></div>
              
              <p className="text-2xl md:text-4xl leading-relaxed font-light text-center text-gray-200">
                  {currentExercise.pre}
                  <span className={`inline-block border-b-4 px-2 md:px-4 mx-2 font-mono font-bold transition-all duration-300 
                      ${isAnswerRevealed 
                          ? (isCorrect || !selectedOption ? 'border-green-500 text-green-400' : 'border-red-500 text-red-400') 
                          : `${theme.border} text-transparent min-w-[100px] animate-pulse`
                      }
                  `}>
                      {isAnswerRevealed 
                        ? currentExercise.answer 
                        : '______'
                      }
                  </span>
                  {currentExercise.post}
              </p>
              
              {/* Feedback Indicator inside card */}
              {isAnswerRevealed && (
                  <div className="absolute top-4 right-4 animate-scale-in">
                      {isCorrect ? (
                          <div className="flex items-center gap-2 text-green-400 font-mono font-bold bg-green-900/50 px-3 py-1 rounded border border-green-500">
                              <Check size={20} /> CORRECT
                          </div>
                      ) : selectedOption ? (
                          <div className="flex items-center gap-2 text-red-400 font-mono font-bold bg-red-900/50 px-3 py-1 rounded border border-red-500">
                              <X size={20} /> ERROR
                          </div>
                      ) : (
                          <div className="flex items-center gap-2 text-yellow-400 font-mono font-bold bg-yellow-900/50 px-3 py-1 rounded border border-yellow-500">
                              <Eye size={20} /> REVEALED
                          </div>
                      )}
                  </div>
              )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
              {shuffledOptions.map((option, idx) => {
                  let optionClass = theme.optionDefault;
                  
                  if (isAnswerRevealed) {
                      if (option === currentExercise.answer) {
                          optionClass = theme.optionCorrect; // Always highlight correct answer
                      } else if (option === selectedOption) {
                          optionClass = theme.optionWrong; // Highlight wrong selection
                      } else {
                          optionClass = 'bg-black border-gray-800 text-gray-600 opacity-50 cursor-not-allowed'; // Dim others
                      }
                  } else if (selectedOption === option) {
                      optionClass = theme.optionSelected;
                  }

                  return (
                      <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          disabled={isAnswerRevealed}
                          className={`
                              p-4 md:p-6 rounded-lg text-lg md:text-2xl font-mono font-bold text-left border-2 transition-all duration-200
                              flex justify-between items-center group
                              ${optionClass}
                              ${!isAnswerRevealed ? 'hover:scale-[1.02] active:scale-[0.98]' : ''}
                          `}
                      >
                          <span className="flex-grow">{option}</span>
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm ml-2 font-light">
                              {isAnswerRevealed 
                                  ? (option === currentExercise.answer ? <Check /> : (option === selectedOption ? <X /> : '')) 
                                  : 'SELECT'
                              }
                          </span>
                      </button>
                  );
              })}
          </div>

      </div>

      {/* Footer Controls */}
      <div className="mt-8 md:mt-12 flex justify-between items-center h-16 shrink-0 relative z-20">
         <div className="w-[100px]"></div> {/* Spacer - Prev disabled to force linear checkpoint flow */}

         {!isAnswerRevealed ? (
             <button 
                onClick={handleReveal}
                className={`flex items-center gap-2 px-8 py-3 rounded font-mono font-bold border-2 transition-all hover:bg-white/5 ${theme.accent} ${theme.border}`}
             >
                 <Eye size={20} /> REVEAL (FORFEIT)
             </button>
         ) : (
             <button 
                onClick={handleNext}
                className={`
                    flex items-center gap-2 px-10 py-4 rounded font-mono font-bold text-xl transition-all animate-bounce-subtle
                    ${isLastQuestion 
                        ? theme.buttonPrimary
                        : theme.buttonPrimary
                    }
                `}
             >
                 {isLastQuestion ? 'SUBMIT FOR ANALYSIS' : 'NEXT QUESTION'} <ArrowRight size={24} />
             </button>
         )}
         
         <div className="w-[100px]"></div> {/* Spacer for alignment */}
      </div>

      <style>{`
        @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
            animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        @keyframes bounce-subtle {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-3px); }
        }
        .animate-bounce-subtle {
            animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default GrammarSlide;
