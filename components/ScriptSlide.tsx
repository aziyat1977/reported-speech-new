import React, { useState, useEffect, useRef } from 'react';
import { ScriptSlideData } from '../types';
import { Play, Pause, SkipForward, RotateCcw, Zap } from 'lucide-react';

interface ScriptSlideProps {
  data: ScriptSlideData;
}

const ScriptSlide: React.FC<ScriptSlideProps> = ({ data }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Theme colors configuration
  const themeConfig = {
    green: {
      accent: 'text-cyber-green',
      border: 'border-cyber-green',
      button: 'hover:bg-green-500/20 text-green-400',
      progress: 'bg-green-500',
      ping: 'bg-green-400'
    },
    gold: {
      accent: 'text-cyber-gold',
      border: 'border-cyber-gold',
      button: 'hover:bg-yellow-500/20 text-yellow-400',
      progress: 'bg-yellow-500',
      ping: 'bg-yellow-400'
    },
    blue: {
      accent: 'text-cyber-blue',
      border: 'border-cyber-blue',
      button: 'hover:bg-blue-500/20 text-blue-400',
      progress: 'bg-blue-500',
      ping: 'bg-blue-400'
    }
  };

  const theme = themeConfig[data.theme];

  // Auto-advance logic (Cinematic Playback)
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isPaused && visibleIndex < data.scriptContent.length) {
      let delay = 500; // Default start delay

      // If we are already showing lines, calculate how long to wait based on the LAST shown line
      if (visibleIndex > 0) {
          const previousItem = data.scriptContent[visibleIndex - 1];
          const isAction = previousItem.speaker === 'Action';
          
          // Reading speed calculation
          const baseDelay = isAction ? 1000 : 600;
          const charDelay = isAction ? 15 : 25; // ms per char (faster for actions)
          const calculatedDuration = baseDelay + (previousItem.text.length * charDelay);
          
          // Clamp duration between 1s and 5s
          delay = Math.min(5000, Math.max(1000, calculatedDuration));
      }

      timeoutId = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, delay);
    }

    return () => clearTimeout(timeoutId);
  }, [visibleIndex, isPaused, data.scriptContent]);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleIndex]);

  // Handlers
  const handleSkip = () => {
    setVisibleIndex(data.scriptContent.length);
    setIsPaused(true);
  };

  const handleRestart = () => {
    setVisibleIndex(0);
    setIsPaused(false);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  // Image Glitch Effect Source
  const imageUrl = `https://picsum.photos/seed/${data.id}/800/600`;

  return (
    <div className="flex flex-col md:flex-row h-full w-full gap-4 md:gap-6 p-4 md:p-6 overflow-hidden relative">
      
      {/* Visual Column with Cyberpunk Effects */}
      <div className="w-full md:w-1/3 flex-shrink-0 h-[250px] md:h-auto flex flex-col gap-4 relative group">
        <div className={`relative flex-grow rounded-lg overflow-hidden border-2 ${theme.border} shadow-[0_0_20px_rgba(0,0,0,0.5)] h-full bg-black`}>
            
            {/* CSS Glitch Layers */}
            <div className="absolute inset-0 bg-cover bg-center animate-glitch-1 opacity-40 mix-blend-hard-light pointer-events-none" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="absolute inset-0 bg-cover bg-center animate-glitch-2 opacity-40 mix-blend-color-burn pointer-events-none" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            
            {/* Main Image */}
            <img 
                src={imageUrl} 
                alt={data.visualAlt} 
                className="w-full h-full object-cover opacity-90 relative z-10 transition-transform duration-[5s] hover:scale-110"
            />
            
            {/* CRT Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%]"></div>
            
            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none z-20 bg-radial-gradient from-transparent via-transparent to-black/80"></div>

            <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2 md:p-3 z-30 border-t border-gray-800 backdrop-blur-sm">
                <p className={`font-mono text-sm md:text-base ${theme.accent} uppercase tracking-widest truncate flex items-center gap-2`}>
                <Zap size={16} className="animate-pulse" /> Visual Feed: {data.visualAlt}
                </p>
            </div>
        </div>
      </div>

      {/* Script Column */}
      <div className={`w-full md:w-2/3 flex flex-col bg-cyber-panel/60 border ${theme.border} rounded-lg relative overflow-hidden min-h-0 shadow-2xl backdrop-blur-md`}>
        
        {/* Script Header / Controls */}
        <div className="flex items-center justify-between p-3 md:p-4 border-b border-gray-800 bg-black/40 backdrop-blur-sm shrink-0">
             <div className="flex items-center gap-3 overflow-hidden">
                 <h2 className={`text-2xl md:text-4xl font-bold font-mono ${theme.accent} uppercase tracking-tight truncate`}>
                    {data.headline}
                 </h2>
                 {visibleIndex < data.scriptContent.length && !isPaused && (
                     <span className="flex h-3 w-3 relative shrink-0">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${theme.ping} opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 ${theme.progress}`}></span>
                     </span>
                 )}
             </div>
             
             <div className="flex items-center gap-2 md:gap-3 shrink-0">
                 <button onClick={handleTogglePause} className={`p-3 rounded transition-all active:scale-95 ${theme.button}`} title={isPaused ? "Play" : "Pause"}>
                     {isPaused ? <Play size={24} /> : <Pause size={24} />}
                 </button>
                 <button onClick={handleRestart} className={`p-3 rounded text-gray-500 hover:text-white hover:bg-white/10 transition-all active:scale-95`} title="Restart">
                     <RotateCcw size={24} />
                 </button>
                 <button onClick={handleSkip} className={`p-3 rounded text-gray-500 hover:text-white hover:bg-white/10 transition-all active:scale-95`} title="Show All">
                     <SkipForward size={24} />
                 </button>
             </div>
        </div>
        
        {/* Script Content Area */}
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 custom-scrollbar scroll-smooth relative">
            
            {/* Initialization Message */}
            <div className={`font-mono text-base md:text-xl ${visibleIndex === 0 ? 'text-white animate-pulse' : 'text-gray-600'} transition-colors duration-500`}>
                &gt; INITIALIZING SECURE AUDIO TRANSCRIPT...
            </div>

            {data.scriptContent.map((line, idx) => {
                // Don't render lines that haven't been "revealed" yet
                if (idx >= visibleIndex) return null;

                const isLast = idx === visibleIndex - 1;

                return (
                    <div key={idx} className={`relative ${isLast ? 'opacity-100' : 'opacity-50'} transition-opacity duration-700`}>
                        {line.speaker === 'Action' ? (
                            <div className="flex gap-3 items-start my-4 group animate-slideInLeft">
                                <span className="text-gray-600 font-mono text-base mt-1 shrink-0 select-none">&gt;&gt;</span>
                                <p className="text-gray-400 italic font-mono text-lg md:text-xl border-l-4 border-gray-700 pl-4 py-2 group-hover:border-gray-500 transition-colors">
                                    [{line.text}]
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col mb-6 animate-slideInLeft">
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className={`text-sm md:text-base font-bold uppercase tracking-wider ${theme.accent} border border-current px-2 py-1 rounded-[2px] shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                                        {line.speaker}
                                    </span>
                                    {line.action && (
                                        <span className="text-gray-500 text-sm md:text-base italic">
                                        * {line.action}
                                        </span>
                                    )}
                                </div>
                                <div className="pl-2 border-l-2 border-gray-800 ml-2">
                                    <p className={`text-xl md:text-3xl leading-relaxed text-gray-100 font-light`}>
                                        {line.text}
                                        {isLast && !isPaused && visibleIndex < data.scriptContent.length && (
                                            <span className={`inline-block w-3 h-6 md:h-8 ml-2 align-middle ${theme.progress} animate-blink`}></span>
                                        )}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
          
            {visibleIndex >= data.scriptContent.length && (
               <div className="text-gray-500 font-mono text-sm md:text-base mt-8 border-t border-gray-800 pt-4 animate-pulse">
               &gt; END OF TRANSMISSION.
               </div>
            )}
            
            {/* Bottom spacer ensures the last element isn't hidden behind potential overlays */}
            <div className="h-16" />
        </div>
      </div>

        {/* CSS Animations */}
        <style>{`
            @keyframes slideInLeft {
                from { opacity: 0; transform: translateX(-10px); }
                to { opacity: 1; transform: translateX(0); }
            }
            .animate-slideInLeft {
                animation: slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .animate-blink {
                animation: blink 0.8s infinite;
            }

            @keyframes glitch-1 {
                0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
                20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
                40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
                60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
                80% { clip-path: inset(10% 0 70% 0); transform: translate(-1px, 1px); }
                100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -1px); }
            }
            @keyframes glitch-2 {
                0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
                20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
                40% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 1px); }
                60% { clip-path: inset(10% 0 80% 0); transform: translate(-1px, -2px); }
                80% { clip-path: inset(50% 0 30% 0); transform: translate(1px, 2px); }
                100% { clip-path: inset(70% 0 10% 0); transform: translate(-2px, -1px); }
            }
            .animate-glitch-1 {
                animation: glitch-1 4s infinite linear alternate-reverse;
            }
            .animate-glitch-2 {
                animation: glitch-2 3.5s infinite linear alternate-reverse;
            }
            
            /* Custom utility for background image blend modes fallback */
            .mix-blend-hard-light { mix-blend-mode: hard-light; }
            .mix-blend-color-burn { mix-blend-mode: color-burn; }
        `}</style>
    </div>
  );
};

export default ScriptSlide;