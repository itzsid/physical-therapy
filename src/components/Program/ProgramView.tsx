import React, { useEffect } from 'react';
import { Program, BodyPart } from '../../types';
import { useProgress } from '../../hooks/useProgress';
import { WeekView } from './WeekView';

interface ProgramViewProps {
  program: Program;
  bodyPart: BodyPart;
  onBack: () => void;
}

export const ProgramView: React.FC<ProgramViewProps> = ({
  program,
  bodyPart,
  onBack,
}) => {
  const {
    getProgress,
    startProgram,
    toggleExercise,
    setCurrentWeek,
    resetProgress,
    getTotalProgress,
  } = useProgress();

  const progress = getProgress(program.id);
  const currentWeek = progress?.currentWeek || 1;
  const totalProgress = getTotalProgress(program.id, program);

  // Initialize progress when program is loaded
  useEffect(() => {
    if (!progress) {
      startProgram(program);
    }
  }, [program, progress, startProgram]);

  const handleToggleExercise = (exerciseId: string) => {
    toggleExercise(program.id, exerciseId);
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress for this program?')) {
      resetProgress(program.id);
      startProgram(program);
    }
  };

  const currentWeekData = program.weeks.find((w) => w.week === currentWeek);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800 mb-3"
          >
            <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Body Selection
          </button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{program.title}</h1>
              <p className="text-gray-600 mt-1">{bodyPart.name} - {program.duration} Week Program</p>
            </div>
            <button
              onClick={handleResetProgress}
              className="text-sm text-red-600 hover:text-red-800 px-3 py-1 rounded hover:bg-red-50"
            >
              Reset Progress
            </button>
          </div>

          {/* Overall Progress */}
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-medium text-gray-800">{totalProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${totalProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Week Navigation */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {program.weeks.map((week) => {
            const isActive = currentWeek === week.week;
            const weekProgress = progress
              ? Math.round(
                  (week.exercises.filter((ex) => progress.completedExercises[ex.id]).length /
                    week.exercises.length) *
                    100
                )
              : 0;

            return (
              <button
                key={week.week}
                onClick={() => setCurrentWeek(program.id, week.week)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <div className="text-sm font-medium">Week {week.week}</div>
                <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                  {weekProgress}% done
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Program Description */}
      <div className="max-w-4xl mx-auto px-4 mb-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="text-blue-800 text-sm">{program.description}</p>
        </div>
      </div>

      {/* Week Content */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        {currentWeekData && (
          <WeekView
            week={currentWeekData}
            progress={progress}
            onToggleExercise={handleToggleExercise}
          />
        )}
      </div>
    </div>
  );
};
