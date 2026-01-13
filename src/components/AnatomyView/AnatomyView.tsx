import React, { useState } from 'react';
import { BodyPart } from '../../types';
import { BodyPartSvg } from './BodyPartSvg';

interface AnatomyViewProps {
  onSelectBodyPart: (bodyPart: BodyPart) => void;
  selectedBodyPart: BodyPart | null;
}

export const AnatomyView: React.FC<AnatomyViewProps> = ({
  onSelectBodyPart,
  selectedBodyPart,
}) => {
  const [view, setView] = useState<'front' | 'back'>('front');

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Select a Body Part</h2>
      <p className="text-gray-600 mb-4 text-center">
        Click on the area you want to stretch and strengthen
      </p>

      {/* View Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setView('front')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            view === 'front'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Front View
        </button>
        <button
          onClick={() => setView('back')}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            view === 'back'
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Back View
        </button>
      </div>

      {/* Body SVG */}
      <div className="w-full max-w-md bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-4 shadow-inner">
        <BodyPartSvg
          view={view}
          onSelectBodyPart={onSelectBodyPart}
          selectedBodyPart={selectedBodyPart}
        />
      </div>

      {/* Selected body part indicator */}
      {selectedBodyPart && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-blue-800 font-medium">
            Selected: <span className="font-bold">{selectedBodyPart.name}</span>
          </p>
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Toggle between front and back views to select different muscle groups</p>
      </div>
    </div>
  );
};
