import React from 'react';
import { WeekProgram, Progress } from '../../types';
import { ExerciseCard } from './ExerciseCard';

interface WeekViewProps {
  week: WeekProgram;
  progress: Progress | undefined;
  onToggleExercise: (exerciseId: string) => void;
}

export const WeekView: React.FC<WeekViewProps> = ({
  week,
  progress,
  onToggleExercise,
}) => {
  const completedCount = week.exercises.filter(
    (ex) => progress?.completedExercises[ex.id]
  ).length;

  const progressPercentage = Math.round((completedCount / week.exercises.length) * 100);

  return (
    <div>
      {/* Week Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">Week {week.week}</h3>
          <span className="text-sm text-gray-600">
            {completedCount}/{week.exercises.length} completed
          </span>
        </div>
        <p className="text-gray-600 mb-3">Focus: {week.focus}</p>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Exercises */}
      <div className="space-y-4">
        {week.exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            isCompleted={progress?.completedExercises[exercise.id] || false}
            onToggleComplete={() => onToggleExercise(exercise.id)}
          />
        ))}
      </div>
    </div>
  );
};
