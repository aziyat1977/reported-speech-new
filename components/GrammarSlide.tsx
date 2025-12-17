import React from 'react';
import { GrammarSlideData } from '../types';
import RevealableText from './RevealableText';

interface GrammarSlideProps {
  data: GrammarSlideData;
}

const GrammarSlide: React.FC<GrammarSlideProps> = ({ data }) => {
  const accentColor = 
    data.theme === 'green' ? 'text-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold' : 
    'text-cyber-blue';

  const borderColor = 
    data.theme === 'green' ? 'border-cyber-green' : 
    data.theme === 'gold' ? 'border-cyber-gold' : 
    'border-cyber-blue';

  return (
    <div className="flex flex-col h-full p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12 border-b border-gray-800 pb-4">
         <h2 className={`text-4xl font-bold font-mono ${accentColor} uppercase tracking-tight`}>
          {data.headline}
        </h2>
        <span className="text-gray-500 font-mono text-sm animate-pulse border px-2 py-1 rounded border-gray-800">
          EXECUTE PROTOCOL: {data.exerciseSet.title}
        </span>
      </div>

      <div className="flex-grow flex items-center justify-center">
          <div 
            className={`
              w-full bg-cyber-panel/50 border-2 ${borderColor} 
              p-12 rounded-lg shadow-2xl flex flex-col
              relative overflow-hidden backdrop-blur-sm
            `}
          >
            {/* Decorative corners */}
            <div className={`absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 ${borderColor}`}></div>
            <div className={`absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 ${borderColor}`}></div>
            <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 ${borderColor}`}></div>
            <div className={`absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 ${borderColor}`}></div>

            <div className="space-y-8">
              {data.exerciseSet.exercises.map((ex, exIdx) => (
                <div key={exIdx} className="text-2xl leading-relaxed font-light tracking-wide hover:bg-white/5 p-4 rounded transition-colors border-b border-gray-800 last:border-0">
                  <span className="text-gray-300 mr-2">{ex.pre}</span>
                  <RevealableText answer={ex.answer} theme={data.theme} />
                  <span className="text-gray-300 ml-2">{ex.post}</span>
                </div>
              ))}
            </div>
          </div>
      </div>
    </div>
  );
};

export default GrammarSlide;