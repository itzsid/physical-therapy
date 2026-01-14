import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProgramPage } from './pages/ProgramPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Physical Therapy Exercises
            </h1>
            <p className="text-gray-600 text-sm">
              Personalized stretching and strengthening programs
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/program/:bodyPartId" element={<ProgramPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t mt-auto">
          <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
            <p>Always consult with a healthcare professional before starting any exercise program.</p>
            <p className="mt-1">Progress is saved automatically in your browser.</p>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
