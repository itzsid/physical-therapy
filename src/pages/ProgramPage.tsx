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
      <div className="min-h-[60vh] flex items-center justify-center animate-fade-in">
        <div className="text-center p-8">
          <h1 className="font-display text-xl font-bold text-brand-forest mb-3">Body Part Not Found</h1>
          <p className="text-brand-stone font-body text-sm mb-6">The requested body part &ldquo;{bodyPartId}&rdquo; does not exist.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-brand-forest text-white rounded-xl hover:bg-brand-sage transition-colors font-display font-bold text-sm"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center animate-fade-in">
        <div className="text-center p-8">
          <h1 className="font-display text-xl font-bold text-brand-forest mb-3">No Program Available</h1>
          <p className="text-brand-stone font-body text-sm mb-6">No exercise program is available for {bodyPart.name} yet.</p>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-brand-forest text-white rounded-xl hover:bg-brand-sage transition-colors font-display font-bold text-sm"
          >
            Back to Home
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
