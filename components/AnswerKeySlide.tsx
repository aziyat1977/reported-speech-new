import React, { useState } from 'react';
import { AnswerKeySlideData } from '../types';
import { Lock, Unlock } from 'lucide-react';

interface AnswerKeySlideProps {
  data: AnswerKeySlideData;
}

const AnswerKeySlide: React.FC<AnswerKeySlideProps> = ({ data }) => {
  const [revealed, setRevealed] = useState(false);

  const accentColor = 
    data.theme === 'green' ? 'text-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold' : 
    'text-cyber-blue';

  const borderClass = 
    data.theme === 'green' ? 'border-cyber-green shadow-[0_0_30px_#00ff41]' : 
    data.theme === 'gold' ? 'border-cyber-gold shadow-[0_0_30px_#ffd700]' : 
    'border-cyber-blue shadow-[0_0_30px_#00d0ff]';

  const bgGradient = 
    data.theme === 'green' ? 'from-green-900/20 to-black' : 
    data.theme === 'gold' ? 'from-yellow-900/20 to-black' : 
    'from-blue-900/20 to-black';

  return (
    <div className={`h-full flex flex-col items-center justify-center p-4 md:p-12 bg-gradient-radial ${bgGradient} overflow-y-auto`}>
      
      <h2 className={`text-2xl md:text-5xl font-bold mb-8 md:mb-12 font-mono ${accentColor} uppercase tracking-widest text-center`}>
        {data.headline}
      </h2>

      <div 
        className={`relative w-full max-w-4xl p-1 bg-gray-900 rounded-xl transition-all duration-700 ${revealed ? borderClass : 'border border-gray-700'}`}
      >
        {!revealed && (
          <div 
            onClick={() => setRevealed(true)}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-xl cursor-pointer hover:bg-black/70 transition-colors group"
          >
            <Lock className={`w-12 h-12 md:w-16 md:h-16 mb-4 ${accentColor} group-hover:scale-110 transition-transform`} />
            <p className="text-sm md:text-xl font-mono tracking-widest text-white uppercase animate-pulse text-center px-4">
              Click to Decrypt Data
            </p>
          </div>
        )}

        <div className={`bg-black/50 p-4 md:p-8 rounded-lg grid grid-cols-1 gap-4 md:gap-6 ${revealed ? 'opacity-100 blur-0' : 'opacity-20 blur-sm'} transition-all duration-700 max-h-[60vh] overflow-y-auto custom-scrollbar`}>
          {data.solutions.map((sol, idx) => (
             <div key={idx} className="flex flex-col border-b border-gray-800 pb-2 md:pb-4 last:border-0 last:pb-0">
               <span className={`text-xs md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2 ${accentColor}`}>
                 {sol.title}
               </span>
               <p className="text-sm md:text-xl font-mono text-white break-words leading-relaxed">
                 {sol.text}
               </p>
             </div>
          ))}
        </div>
        
        {revealed && (
          <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-black border border-gray-700 p-1.5 md:p-2 rounded-full">
            <Unlock className={`w-4 h-4 md:w-6 md:h-6 ${accentColor}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerKeySlide;