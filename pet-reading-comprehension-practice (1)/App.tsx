
import React, { useState } from 'react';
import ReadingTestComponent from './components/ReadingTest';
import { readingTests } from './data/tests';

const App: React.FC = () => {
  const [activeTestIndex, setActiveTestIndex] = useState(0);

  return (
    <div className="min-h-screen font-sans text-slate-800 p-4 sm:p-6 lg:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          PET Reading Practice
        </h1>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto">
          Hone your skills for the B1 Preliminary English Test with these exercises.
        </p>
      </header>
      
      <nav className="flex justify-center mb-8 border-b border-slate-300">
        <div className="flex space-x-2 sm:space-x-4">
          {readingTests.map((test, index) => (
            <button
              key={test.id}
              onClick={() => setActiveTestIndex(index)}
              className={`px-3 sm:px-6 py-3 font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
                activeTestIndex === index
                  ? 'bg-white text-sky-600 border-b-2 border-sky-600'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Test {index + 1}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {readingTests.map((test, index) => (
          <div key={test.id} className={activeTestIndex === index ? 'block' : 'hidden'}>
            <ReadingTestComponent test={test} />
          </div>
        ))}
      </main>
      
      <footer className="text-center mt-12 text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} PET Practice App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
