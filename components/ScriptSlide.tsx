import React from 'react';
import { ScriptSlideData } from '../types';

interface ScriptSlideProps {
  data: ScriptSlideData;
}

const ScriptSlide: React.FC<ScriptSlideProps> = ({ data }) => {
  const accentColor = 
    data.theme === 'green' ? 'text-cyber-green' : 
    data.theme === 'gold' ? 'text-cyber-gold' : 
    'text-cyber-blue';

  const borderColor = 
    data.theme === 'green' ? 'border-cyber-green' : 
    data.theme === 'gold' ? 'border-cyber-gold' : 
    'border-cyber-blue';

  const shadowClass = 
    data.theme === 'green' ? 'shadow-[0_0_20px_rgba(0,255,65,0.2)]' : 
    data.theme === 'gold' ? 'shadow-[0_0_20px_rgba(255,215,0,0.2)]' : 
    'shadow-[0_0_20px_rgba(0,208,255,0.2)]';

  // Deterministic random image based on ID
  const imageUrl = `https://picsum.photos/seed/${data.id}/800/600`;

  return (
    <div className="flex h-full gap-6 p-6">
      {/* Visual Column */}
      <div className={`w-1/3 flex flex-col gap-4`}>
        <div className={`relative flex-grow rounded-lg overflow-hidden border-2 ${borderColor} ${shadowClass}`}>
          <img 
            src={imageUrl} 
            alt={data.visualAlt} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-3">
             <p className={`font-mono text-xs ${accentColor} uppercase tracking-widest`}>
               Visual: {data.visualAlt}
             </p>
          </div>
        </div>
      </div>

      {/* Script Column */}
      <div className={`w-2/3 flex flex-col bg-cyber-panel/50 border ${borderColor} rounded-lg p-6 relative overflow-hidden`}>
        <h2 className={`text-4xl font-bold mb-6 font-mono ${accentColor} uppercase tracking-tight`}>
          {data.headline}
        </h2>
        
        <div className="flex-grow overflow-y-auto pr-4 space-y-4 custom-scrollbar">
          {data.scriptContent.map((line, idx) => (
            <div key={idx} className="mb-3">
              {line.speaker === 'Action' ? (
                <p className="text-gray-400 italic font-mono text-sm border-l-2 border-gray-600 pl-3">
                  [{line.text}]
                </p>
              ) : (
                <div className="flex flex-col">
                  <span className={`text-xs font-bold uppercase tracking-wider mb-1 ${accentColor}`}>
                    {line.speaker}
                  </span>
                  <p className="text-lg leading-relaxed text-gray-100">
                    {line.text}
                  </p>
                  {line.action && (
                     <span className="text-gray-500 text-sm mt-1 italic">
                       ({line.action})
                     </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScriptSlide;