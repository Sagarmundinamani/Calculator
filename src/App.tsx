import React, { useState } from 'react';
import { Equal, Delete, Plus, Minus, X, Divide } from 'lucide-react';

function App() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = (num: string) => {
    if (display === '0' || shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  };

  const handleOperator = (op: string) => {
    setShouldResetDisplay(true);
    setEquation(display + ' ' + op + ' ');
  };

  const calculate = () => {
    const fullEquation = equation + display;
    try {
      // eslint-disable-next-line no-eval
      const result = eval(fullEquation);
      setDisplay(String(result));
      setEquation('');
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clear = () => {
    setDisplay('0');
    setEquation('');
  };

  const buttonClass = "w-16 h-16 m-1 rounded-full flex items-center justify-center text-xl font-semibold transition-all hover:scale-105 active:scale-95";

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg p-6 rounded-3xl shadow-2xl w-[340px]">
        <div className="mb-4">
          <div className="text-gray-400 h-6 text-right">{equation}</div>
          <div className="text-4xl text-white font-bold text-right h-12 overflow-hidden">
            {display}
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-1">
          <button 
            onClick={clear}
            className={`${buttonClass} bg-red-500/80 text-white hover:bg-red-600/80`}>
            <Delete size={24} />
          </button>
          <button 
            onClick={() => handleOperator('/')}
            className={`${buttonClass} bg-indigo-500/80 text-white hover:bg-indigo-600/80`}>
            <Divide size={24} />
          </button>
          <button 
            onClick={() => handleOperator('*')}
            className={`${buttonClass} bg-indigo-500/80 text-white hover:bg-indigo-600/80`}>
            <X size={24} />
          </button>
          <button 
            onClick={() => handleOperator('-')}
            className={`${buttonClass} bg-indigo-500/80 text-white hover:bg-indigo-600/80`}>
            <Minus size={24} />
          </button>

          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className={`${buttonClass} bg-white/20 text-white hover:bg-white/30`}>
              {num}
            </button>
          ))}
          <button 
            onClick={() => handleOperator('+')}
            className={`${buttonClass} bg-indigo-500/80 text-white hover:bg-indigo-600/80 row-span-2`}>
            <Plus size={24} />
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className={`${buttonClass} bg-white/20 text-white hover:bg-white/30`}>
              {num}
            </button>
          ))}

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleNumber(num.toString())}
              className={`${buttonClass} bg-white/20 text-white hover:bg-white/30`}>
              {num}
            </button>
          ))}
          <button 
            onClick={calculate}
            className={`${buttonClass} bg-green-500/80 text-white hover:bg-green-600/80 row-span-2`}>
            <Equal size={24} />
          </button>

          <button
            onClick={() => handleNumber('0')}
            className={`${buttonClass} bg-white/20 text-white hover:bg-white/30`}>
            0
          </button>
          <button
            onClick={clear}
            className={`${buttonClass} bg-red-500/80 text-white hover:bg-red-600/80`}>
            AC
          </button>
          <button
            onClick={() => handleNumber('.')}
            className={`${buttonClass} bg-white/20 text-white hover:bg-white/30`}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;