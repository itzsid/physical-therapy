import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProgramView } from '../components/Program';
import { getBodyPartById } from '../data/bodyParts';
import { getProgramForBodyPart } from '../data/exercises';

export const ProgramPage: React.FC = () => {
  const { bodyPartId } = useParams<{ bodyPartId: string }>();
  const navigate = useNavigate();

  const bodyPart = bodyPartId ? getBodyPartById(bodyPartId) : null;
  const program = bodyPartId ? getProgramForBodyPart(bodyPartId) : null;

  const handleBack = () => {
    navigate('/');
  };

  if (!bodyPart) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Body Part Not Found</h1>
          <p className="text-gray-600 mb-6">The requested body part "{bodyPartId}" does not exist.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Body Selection
          </button>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">No Program Available</h1>
          <p className="text-gray-600 mb-6">No exercise program is available for {bodyPart.name} yet.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Body Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProgramView
      program={program}
      bodyPart={bodyPart}
      onBack={handleBack}
    />
  );
};
