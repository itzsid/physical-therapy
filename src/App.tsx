import React from 'react';
import { AnatomyView } from './components/AnatomyView';
import { ProgramView } from './components/Program';
import { useProgram } from './hooks/useProgram';

const App: React.FC = () => {
  const { selectedBodyPart, currentProgram, selectBodyPart, clearSelection } = useProgram();

  return (
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
        {currentProgram && selectedBodyPart ? (
          <ProgramView
            program={currentProgram}
            bodyPart={selectedBodyPart}
            onBack={clearSelection}
          />
        ) : (
          <div className="max-w-4xl mx-auto">
            <AnatomyView
              onSelectBodyPart={selectBodyPart}
              selectedBodyPart={selectedBodyPart}
            />

            {selectedBodyPart && !currentProgram && (
              <div className="text-center p-4">
                <p className="text-gray-600">
                  No program available for {selectedBodyPart.name} yet.
                </p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-gray-500">
          <p>Always consult with a healthcare professional before starting any exercise program.</p>
          <p className="mt-1">Progress is saved automatically in your browser.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
