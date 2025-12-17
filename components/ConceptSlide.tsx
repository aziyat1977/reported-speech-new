import React, { useEffect } from 'react';
import { ConceptSlideData } from '../types';
import { ArrowRight, Cpu, Radio, Zap } from 'lucide-react';

interface ConceptSlideProps {
  data: ConceptSlideData;
  onUnlock: () => void;
}

const ConceptSlide: React.FC<ConceptSlideProps> = ({ data, onUnlock }) => {
  // Concept slides are passive, so they unlock immediately upon viewing
  useEffect(() => {
    onUnlock();
  }, [onUnlock]);

  const accentColor = 
    data.theme === 'green' ? 'text-cyber-green border-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold border-cyber-gold' : 
    'text-cyber-blue border-cyber-blue';

  const glowColor =
    data.theme === 'green' ? 'rgba(0,255,65,0.5)' : 
    data.theme === 'gold' ? 'rgba(255,215,0,0.5)' : 
    'rgba(0,208,255,0.5)';

  const bgGlow = 
    data.theme === 'green' ? 'shadow-[0_0_50px_rgba(0,255,65,0.15)]' : 
    data.theme === 'gold' ? 'shadow-[0_0_50px_rgba(255,215,0,0.15)]' : 
    'shadow-[0_0_50px_rgba(0,208,255,0.15)]';

  const timelineColor = 
    data.theme === 'green' ? 'bg-cyber-green' : 
    data.theme === 'gold' ? 'bg-cyber-gold' : 
    'bg-cyber-blue';

  const iconColor =
    data.theme === 'green' ? 'text-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold' : 
    'text-cyber-blue';

  return (
    <div className="flex flex-col h-full w-full p-6 md:p-12 items-center justify-center relative overflow-hidden overflow-y-auto custom-scrollbar bg-black/40">
      
      {/* Dynamic Cyber Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className={`absolute inset-0 bg-[linear-gradient(to_right,${glowColor}_1px,transparent_1px),linear-gradient(to_bottom,${glowColor}_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(500px)_rotateX(60deg)] origin-top animate-grid-flow`}></div>
      </div>
      
      {/* Scanning Laser */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-scan-vertical pointer-events-none"></div>

      {/* Content Container */}
      <div className="z-10 flex flex-col items-center w-full max-w-7xl my-auto relative">
        
        {/* Headline with Glitch Effect */}
        <div className="text-center mb-10 md:mb-16 relative group">
          <h2 
            className={`text-5xl sm:text-6xl md:text-8xl font-bold font-mono ${accentColor.split(' ')[0]} uppercase tracking-tighter mb-4 md:mb-6 drop-shadow-lg leading-tight relative glitch-layer`}
            data-text={data.headline}
          >
            {data.headline}
          </h2>
          <p className="text-xl md:text-3xl text-gray-400 font-mono tracking-widest uppercase border-t-2 border-gray-800 pt-4 inline-block">
             // {data.concept.title} //
          </p>
        </div>

        {/* Cinematic Transformation Visual */}
        <div className={`w-full h-64 md:h-96 bg-black/60 border-y-4 ${accentColor.split(' ')[1]} relative mb-12 md:mb-20 flex items-center justify-center overflow-hidden ${bgGlow} backdrop-blur-sm group`}>
          
          {/* Internal Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_100%]"></div>
          
          {/* Data Stream Particles (CSS) */}
          <div className="absolute inset-0 overflow-hidden opacity-30">
            {[...Array(5)].map((_, i) => (
                <div key={i} className={`absolute top-0 w-[2px] h-full ${timelineColor} opacity-50`} style={{ left: `${20 * i + 10}%`, animation: `dataRain ${2 + i}s infinite linear` }}></div>
            ))}
          </div>

          {/* Connection Line */}
          <div className="absolute w-[80%] h-[4px] bg-gray-700 top-1/2 -translate-y-1/2"></div>
          <div className={`absolute w-[80%] h-[4px] ${timelineColor} top-1/2 -translate-y-1/2 shadow-[0_0_10px_currentColor] animate-width-pulse opacity-50`}></div>
          
          {/* Node 1: Input (Direct) */}
          <div className="absolute left-[5%] md:left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full bg-black border-4 ${accentColor.split(' ')[1]} flex items-center justify-center shadow-[0_0_30px_currentColor] relative`}>
                 <Radio className={`w-8 h-8 md:w-12 md:h-12 ${iconColor} animate-pulse`} />
                 <div className={`absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20`}></div>
            </div>
            <div className="mt-6 p-4 bg-black/80 border-2 border-gray-700 rounded text-base md:text-xl font-mono text-gray-300 w-48 md:w-72 text-center backdrop-blur-md">
              <span className="text-sm uppercase text-gray-500 block mb-2 tracking-wider">Audio Input</span>
              "{data.concept.example.direct}"
            </div>
          </div>

          {/* Processing Unit (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
             <div className="bg-black p-4 md:p-6 rounded-lg border-4 border-white/10 relative overflow-hidden shadow-2xl">
                 <div className={`absolute inset-0 ${timelineColor} opacity-10 animate-pulse`}></div>
                 <Cpu className={`w-12 h-12 md:w-16 md:h-16 ${iconColor} animate-[spin_10s_linear_infinite]`} />
             </div>
             <div className={`mt-3 text-sm font-mono ${iconColor} uppercase tracking-widest animate-pulse`}>Processing</div>
          </div>
          
          {/* Moving Data Packet */}
           <div className="absolute left-[15%] top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-16 md:h-16 animate-data-transfer pointer-events-none">
               <div className={`w-full h-full bg-white text-black font-bold font-mono text-sm flex items-center justify-center rounded shadow-[0_0_20px_white]`}>
                   DATA
               </div>
           </div>

          {/* Node 2: Output (Reported) */}
          <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
            <div className={`w-16 h-16 md:w-24 md:h-24 rounded-lg bg-black border-4 ${accentColor.split(' ')[1]} flex items-center justify-center shadow-[0_0_40px_currentColor] relative overflow-hidden`}>
                 <Zap className={`w-8 h-8 md:w-12 md:h-12 ${iconColor} relative z-10`} />
                 <div className={`absolute inset-0 ${timelineColor} opacity-20 animate-pulse`}></div>
            </div>
            <div className={`mt-6 p-4 bg-black/90 border-2 ${accentColor.split(' ')[1]} rounded text-base md:text-xl font-bold font-mono text-white w-48 md:w-80 text-center shadow-2xl transform transition-all hover:scale-105`}>
              <span className={`text-sm uppercase block mb-2 ${iconColor} tracking-wider`}>Log Entry</span>
              {data.concept.example.reported}
            </div>
          </div>

        </div>

        {/* The Formula - Staggered Card Reveal */}
        <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center max-w-7xl px-4 w-full">
          {data.concept.formula.map((item, idx) => (
            <React.Fragment key={idx}>
              <div 
                className={`
                    relative px-6 py-4 md:px-10 md:py-6 bg-black/60 border-2 ${accentColor.split(' ')[1]} rounded-sm
                    text-2xl md:text-4xl font-bold font-mono text-white shadow-[0_5px_20px_rgba(0,0,0,0.5)]
                    opacity-0 animate-slide-up hover:scale-105 transition-transform duration-300
                    overflow-hidden group cursor-default
                `}
                style={{ animationDelay: `${idx * 200 + 500}ms`, animationFillMode: 'forwards' }}
              >
                {/* Tech Corners */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${accentColor.split(' ')[1]}`}></div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${accentColor.split(' ')[1]}`}></div>
                
                {/* Content */}
                <span className="relative z-10">{item}</span>
                
                {/* Hover scan effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine`}></div>
              </div>
              
              {idx < data.concept.formula.length - 1 && (
                <span 
                    className="text-gray-600 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 200 + 600}ms`, animationFillMode: 'forwards' }}
                >
                  <ArrowRight className="w-6 h-6 md:w-10 md:h-10" />
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

        <style>{`
            @keyframes grid-flow {
                0% { background-position: 0 0; }
                100% { background-position: 0 4rem; }
            }
            @keyframes scan-vertical {
                0% { top: -10%; opacity: 0; }
                50% { opacity: 0.5; }
                100% { top: 110%; opacity: 0; }
            }
            @keyframes dataRain {
                0% { transform: translateY(-100%); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: translateY(100%); opacity: 0; }
            }
            @keyframes width-pulse {
                0%, 100% { width: 80%; opacity: 0.3; }
                50% { width: 82%; opacity: 0.6; }
            }
            @keyframes data-transfer {
                0% { left: 10%; opacity: 0; transform: scale(0.5) translateY(-50%); }
                10% { opacity: 1; transform: scale(1) translateY(-50%); }
                45% { left: 45%; transform: scale(0.8) translateY(-50%); opacity: 1; }
                55% { left: 55%; transform: scale(0.8) translateY(-50%); opacity: 1; }
                90% { left: 90%; opacity: 1; transform: scale(1) translateY(-50%); }
                100% { left: 90%; opacity: 0; transform: scale(1.5) translateY(-50%); }
            }
            @keyframes slide-up {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes shine {
                0% { transform: translateX(-100%) skewX(-15deg); }
                100% { transform: translateX(200%) skewX(-15deg); }
            }

            /* Glitch Text Effect */
            .glitch-layer {
                position: relative;
            }
            .glitch-layer::before,
            .glitch-layer::after {
                content: attr(data-text);
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.8;
            }
            .glitch-layer::before {
                color: #0ff;
                z-index: -1;
                animation: glitch-anim-1 3s infinite linear alternate-reverse;
            }
            .glitch-layer::after {
                color: #f0f;
                z-index: -2;
                animation: glitch-anim-2 2s infinite linear alternate-reverse;
            }
            @keyframes glitch-anim-1 {
                0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
                20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
                100% { clip-path: inset(10% 0 50% 0); transform: translate(-1px, 2px); }
            }
            @keyframes glitch-anim-2 {
                0% { clip-path: inset(10% 0 60% 0); transform: translate(2px, -1px); }
                20% { clip-path: inset(80% 0 5% 0); transform: translate(-2px, 2px); }
                100% { clip-path: inset(30% 0 20% 0); transform: translate(1px, -2px); }
            }
        `}</style>
    </div>
  );
};

export default ConceptSlide;
