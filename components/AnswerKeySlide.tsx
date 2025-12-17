import React, { useState } from 'react';
import { AnswerKeySlideData } from '../types';
import { Lock, Unlock } from 'lucide-react';

interface AnswerKeySlideProps {
  data: AnswerKeySlideData;
  onUnlock: () => void;
}

const AnswerKeySlide: React.FC<AnswerKeySlideProps> = ({ data, onUnlock }) => {
  const [revealed, setRevealed] = useState(false);

  const handleReveal = () => {
    setRevealed(true);
    onUnlock();
  };

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
    <div className={`h-full flex flex-col items-center justify-center p-6 md:p-16 bg-gradient-radial ${bgGradient} overflow-y-auto`}>
      
      <h2 className={`text-4xl md:text-7xl font-bold mb-10 md:mb-16 font-mono ${accentColor} uppercase tracking-widest text-center`}>
        {data.headline}
      </h2>

      <div 
        className={`relative w-full max-w-5xl p-2 bg-gray-900 rounded-xl transition-all duration-700 ${revealed ? borderClass : 'border-2 border-gray-700'}`}
      >
        {!revealed && (
          <div 
            onClick={handleReveal}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm rounded-xl cursor-pointer hover:bg-black/70 transition-colors group"
          >
            <Lock className={`w-16 h-16 md:w-24 md:h-24 mb-6 ${accentColor} group-hover:scale-110 transition-transform`} />
            <p className="text-xl md:text-3xl font-mono tracking-widest text-white uppercase animate-pulse text-center px-4">
              Click to Decrypt Data
            </p>
          </div>
        )}

        <div className={`bg-black/50 p-6 md:p-10 rounded-lg grid grid-cols-1 gap-6 md:gap-8 ${revealed ? 'opacity-100 blur-0' : 'opacity-20 blur-sm'} transition-all duration-700 max-h-[60vh] overflow-y-auto custom-scrollbar`}>
          {data.solutions.map((sol, idx) => (
             <div key={idx} className="flex flex-col border-b border-gray-800 pb-4 md:pb-6 last:border-0 last:pb-0">
               <span className={`text-sm md:text-xl font-bold uppercase tracking-wider mb-2 ${accentColor}`}>
                 {sol.title}
               </span>
               <p className="text-xl md:text-3xl font-mono text-white break-words leading-relaxed">
                 {sol.text}
               </p>
             </div>
          ))}
        </div>
        
        {revealed && (
          <div className="absolute -top-4 -right-4 md:-top-5 md:-right-5 bg-black border-2 border-gray-700 p-2 md:p-3 rounded-full">
            <Unlock className={`w-6 h-6 md:w-8 md:h-8 ${accentColor}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerKeySlide;
