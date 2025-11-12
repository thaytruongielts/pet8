
import React, { useState, useMemo } from 'react';
import { ReadingTest } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface ReadingTestProps {
  test: ReadingTest;
}

const ReadingTestComponent: React.FC<ReadingTestProps> = ({ test }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [isChecked, setIsChecked] = useState(false);

  const score = useMemo(() => {
    if (!isChecked) return 0;
    return Object.keys(test.correctAnswers).reduce((count, key) => {
      const gapNumber = parseInt(key, 10);
      if (selectedAnswers[gapNumber] === test.correctAnswers[gapNumber]) {
        return count + 1;
      }
      return count;
    }, 0);
  }, [isChecked, selectedAnswers, test.correctAnswers]);

  const handleSelectChange = (gapNumber: number, value: string) => {
    if (isChecked) return;
    setSelectedAnswers(prev => ({ ...prev, [gapNumber]: value }));
  };

  const handleCheckAnswers = () => {
    setIsChecked(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setIsChecked(false);
  };

  const getSelectClasses = (gapNumber: number) => {
    if (!isChecked) {
      return 'border-gray-300 focus:ring-sky-500 focus:border-sky-500';
    }
    const isCorrect = selectedAnswers[gapNumber] === test.correctAnswers[gapNumber];
    if (isCorrect) {
      return 'border-green-500 bg-green-50 text-green-800 focus:ring-green-500 focus:border-green-500';
    }
    return 'border-red-500 bg-red-50 text-red-800 focus:ring-red-500 focus:border-red-500';
  };

  const renderTextWithGaps = () => {
    return test.text.map((paragraph, pIndex) => (
      <p key={pIndex} className="mb-4 text-slate-700 leading-relaxed">
        {paragraph.split(/(__GAP_\d+__)/).map((part, partIndex) => {
          const match = part.match(/__GAP_(\d+)__/);
          if (match) {
            const gapNumber = parseInt(match[1], 10);
            return (
              <span key={`${pIndex}-${partIndex}`} className="inline-flex items-center mx-1">
                <strong className="mr-1 text-sky-600">({gapNumber})</strong>
                <div className="relative inline-block">
                  <select
                    value={selectedAnswers[gapNumber] || ''}
                    onChange={(e) => handleSelectChange(gapNumber, e.target.value)}
                    disabled={isChecked}
                    className={`rounded-md shadow-sm transition-colors duration-200 text-sm py-1 pl-2 pr-8 ${getSelectClasses(gapNumber)}`}
                  >
                    <option value="" disabled>Select...</option>
                    {test.options.map(opt => <option key={opt.id} value={opt.id}>{opt.id}</option>)}
                  </select>
                  {isChecked && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      {selectedAnswers[gapNumber] === test.correctAnswers[gapNumber] ? (
                        <CheckIcon className="h-4 w-4 text-green-500" />
                      ) : (
                        <XIcon className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  )}
                </div>
              </span>
            );
          }
          return <span key={`${pIndex}-${partIndex}`}>{part}</span>;
        })}
      </p>
    ));
  };
  
  const totalQuestions = Object.keys(test.correctAnswers).length;

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-4xl mx-auto transition-all duration-500">
      <div className="mb-6 border-b border-slate-200 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">{test.title}</h2>
        <p className="text-sm text-slate-500 mt-1">{test.subtitle}</p>
      </div>
      <div className="mb-8">
        <p className="text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200">{test.instructions}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            {renderTextWithGaps()}
        </div>
        <div>
            <h3 className="font-semibold text-slate-700 mb-3">Options</h3>
            <ul className="space-y-2 text-sm">
                {test.options.map(option => (
                    <li key={option.id} className="p-3 bg-slate-50 border border-slate-200 rounded-md">
                        <strong className="text-sky-600 font-bold">{option.id}</strong>
                        <span className="ml-3 text-slate-700">{option.text}</span>
                    </li>
                ))}
            </ul>
        </div>
      </div>
      
      {isChecked && (
        <div className="mt-8 p-4 rounded-lg bg-sky-50 border border-sky-200 text-center">
            <h3 className="text-xl font-bold text-sky-800">Your Score: {score} / {totalQuestions}</h3>
             <div className="mt-4">
                <h4 className="font-semibold text-slate-700 mb-2">Correct Answers:</h4>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                    {Object.entries(test.correctAnswers).map(([gap, answer]) => (
                        <span key={gap} className="text-sm font-medium text-slate-600 bg-white border border-slate-200 px-2 py-1 rounded-full">
                            ({gap}) &rarr; <span className="font-bold text-green-600">{answer}</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-center">
        {!isChecked ? (
          <button
            onClick={handleCheckAnswers}
            className="px-8 py-3 bg-sky-600 text-white font-bold rounded-lg shadow-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 transform hover:scale-105"
          >
            Check Answers
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-8 py-3 bg-slate-600 text-white font-bold rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all duration-200 transform hover:scale-105"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ReadingTestComponent;
