import React from 'react';
import { ConceptSlideData } from '../types';
import { ArrowRight, Clock, RefreshCw } from 'lucide-react';

interface ConceptSlideProps {
  data: ConceptSlideData;
}

const ConceptSlide: React.FC<ConceptSlideProps> = ({ data }) => {
  const accentColor = 
    data.theme === 'green' ? 'text-cyber-green border-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold border-cyber-gold' : 
    'text-cyber-blue border-cyber-blue';

  const bgGlow = 
    data.theme === 'green' ? 'shadow-[0_0_50px_rgba(0,255,65,0.15)]' : 
    data.theme === 'gold' ? 'shadow-[0_0_50px_rgba(255,215,0,0.15)]' : 
    'shadow-[0_0_50px_rgba(0,208,255,0.15)]';

  const timelineColor = 
    data.theme === 'green' ? 'bg-cyber-green' : 
    data.theme === 'gold' ? 'bg-cyber-gold' : 
    'bg-cyber-blue';

  return (
    <div className="flex flex-col h-full p-8 items-center justify-center relative overflow-hidden">
      
      {/* Background decoration */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gray-800 opacity-20 animate-[spin_60s_linear_infinite] pointer-events-none`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gray-800 opacity-20 animate-[spin_40s_linear_infinite_reverse] pointer-events-none`}></div>

      {/* Headline */}
      <div className="z-10 text-center mb-12">
        <h2 className={`text-6xl font-bold font-mono ${accentColor.split(' ')[0]} uppercase tracking-tighter mb-4 drop-shadow-lg`}>
          {data.headline}
        </h2>
        <p className="text-xl text-gray-400 font-mono">{data.concept.title}</p>
      </div>

      {/* Animated Timeline / Transformation Visual */}
      <div className={`w-full max-w-5xl h-64 bg-black/40 border-y border-gray-800 relative mb-12 flex items-center justify-center overflow-hidden ${bgGlow}`}>
        
        {/* The Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_100%]"></div>
        
        {/* Timeline Track */}
        <div className="absolute w-[90%] h-1 bg-gray-800 top-1/2 -translate-y-1/2"></div>
        
        {/* Node 1: Direct */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className={`w-4 h-4 rounded-full ${timelineColor} shadow-[0_0_20px_currentColor] animate-pulse`}></div>
          <div className="mt-4 p-3 bg-gray-900 border border-gray-700 rounded text-sm font-mono text-gray-300 w-48 text-center opacity-80">
            <span className="text-xs uppercase text-gray-500 block mb-1">Direct Speech</span>
            "{data.concept.example.direct}"
          </div>
        </div>

        {/* Moving Packet Animation */}
        <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-4 h-4 z-0">
             <div className={`w-full h-full rounded-full ${timelineColor} animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50`}></div>
             <div className={`absolute top-0 left-0 w-3 h-3 rounded-full bg-white animate-[moveRight_3s_ease-in-out_infinite] shadow-[0_0_15px_white]`}>
                <style>{`
                  @keyframes moveRight {
                    0% { transform: translateX(0) scale(1); opacity: 1; }
                    50% { transform: translateX(30vw) scale(1.5); opacity: 0.8; }
                    100% { transform: translateX(60vw) scale(1); opacity: 0; }
                  }
                `}</style>
             </div>
        </div>

        {/* Center Transformation Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black p-2 rounded-full border border-gray-700">
           <RefreshCw className={`w-8 h-8 ${accentColor.split(' ')[0]} animate-[spin_4s_linear_infinite]`} />
        </div>

        {/* Node 2: Reported */}
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          <div className={`w-6 h-6 rounded-full border-4 border-black ${timelineColor} shadow-[0_0_30px_currentColor]`}></div>
          <div className={`mt-4 p-3 bg-gray-900 border ${accentColor} rounded text-sm font-bold font-mono text-white w-56 text-center shadow-lg transform scale-105 transition-all`}>
            <span className={`text-xs uppercase block mb-1 ${accentColor.split(' ')[0]}`}>Reported Speech</span>
            {data.concept.example.reported}
          </div>
        </div>

      </div>

      {/* The Formula */}
      <div className="flex flex-wrap gap-4 items-center justify-center max-w-6xl">
        {data.concept.formula.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className={`
              px-6 py-4 bg-gray-900/80 backdrop-blur border-2 ${accentColor} rounded-lg
              text-2xl font-bold font-mono text-white shadow-lg
              hover:scale-105 transition-transform duration-300 cursor-default
              bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[size:250%_250%] hover:animate-[shine_2s_infinite]
            `}>
              <style>{`
                @keyframes shine {
                  0% { background-position: 200% 0; }
                  100% { background-position: -200% 0; }
                }
              `}</style>
              {item}
            </div>
            {idx < data.concept.formula.length - 1 && (
              <span className="text-gray-600">
                <ArrowRight size={24} />
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

export default ConceptSlide;