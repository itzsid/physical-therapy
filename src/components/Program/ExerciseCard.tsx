import React, { useState } from 'react';
import { Exercise } from '../../types';
import { VideoPlayer } from './VideoPlayer';

interface ExerciseCardProps {
  exercise: Exercise;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

export const ExerciseCard: React.FC<ExerciseCardProps> = ({
  exercise,
  isCompleted,
  onToggleComplete,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
        isCompleted ? 'ring-2 ring-green-500 bg-green-50' : ''
      }`}
    >
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">{exercise.name}</h4>
            <p className="text-sm text-gray-600 mt-1">{exercise.description}</p>
          </div>
          <button
            onClick={onToggleComplete}
            className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
              isCompleted
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 hover:border-green-500'
            }`}
          >
            {isCompleted && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </button>
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exercise.difficulty)}`}>
            {exercise.difficulty}
          </span>
          {exercise.sets && exercise.reps && (
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
              {exercise.sets} sets x {exercise.reps} reps
            </span>
          )}
          {exercise.duration && (
            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
              {exercise.duration}
            </span>
          )}
          <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
            {exercise.targetArea}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => setShowVideo(!showVideo)}
            className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            {showVideo ? 'Hide Video' : 'Watch Video'}
          </button>
          <button
            onClick={() => setShowInstructions(!showInstructions)}
            className="flex-1 px-3 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
          >
            {showInstructions ? 'Hide Steps' : 'View Steps'}
          </button>
        </div>
      </div>

      {/* Video Section */}
      {showVideo && (
        <div className="px-4 pb-4">
          <VideoPlayer videoUrl={exercise.videoUrl} title={exercise.name} />
        </div>
      )}

      {/* Instructions Section */}
      {showInstructions && (
        <div className="px-4 pb-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h5 className="font-medium text-gray-800 mb-2">Step-by-Step Instructions:</h5>
            <ol className="list-decimal list-inside space-y-2">
              {exercise.instructions.map((instruction, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};
