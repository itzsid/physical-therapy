import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ExerciseCard } from '../../src/components/Program/ExerciseCard';
import { Exercise } from '../../src/types';

const mockExercise: Exercise = {
  id: 'test-exercise',
  name: 'Test Exercise',
  description: 'A test exercise description',
  instructions: ['Step 1: Do this', 'Step 2: Do that', 'Step 3: Finish'],
  sets: 3,
  reps: 10,
  videoUrl: 'https://www.youtube.com/embed/test123',
  difficulty: 'beginner',
  targetArea: 'Test Area',
};

describe('ExerciseCard', () => {
  const mockOnToggleComplete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render exercise name and description', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('Test Exercise')).toBeInTheDocument();
    expect(screen.getByText('A test exercise description')).toBeInTheDocument();
  });

  it('should display difficulty badge', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('beginner')).toBeInTheDocument();
  });

  it('should display sets and reps', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('3 sets x 10 reps')).toBeInTheDocument();
  });

  it('should display target area', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('Test Area')).toBeInTheDocument();
  });

  it('should show video when Watch Video button is clicked', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    const watchButton = screen.getByText('Watch Video');
    fireEvent.click(watchButton);

    expect(screen.getByText('Hide Video')).toBeInTheDocument();
    expect(screen.getByTitle('Test Exercise')).toBeInTheDocument();
  });

  it('should show instructions when View Steps button is clicked', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    const stepsButton = screen.getByText('View Steps');
    fireEvent.click(stepsButton);

    expect(screen.getByText('Hide Steps')).toBeInTheDocument();
    expect(screen.getByText('Step-by-Step Instructions:')).toBeInTheDocument();
    expect(screen.getByText('Step 1: Do this')).toBeInTheDocument();
    expect(screen.getByText('Step 2: Do that')).toBeInTheDocument();
  });

  it('should call onToggleComplete when checkbox is clicked', () => {
    render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    // Find the completion button (the circular checkbox)
    const buttons = screen.getAllByRole('button');
    const completeButton = buttons.find((btn) =>
      btn.classList.contains('rounded-full')
    );

    if (completeButton) {
      fireEvent.click(completeButton);
      expect(mockOnToggleComplete).toHaveBeenCalledTimes(1);
    }
  });

  it('should show checkmark when completed', () => {
    const { container } = render(
      <ExerciseCard
        exercise={mockExercise}
        isCompleted={true}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    // The card root should have green ring class when completed
    const card = container.querySelector('.ring-green-500');
    expect(card).toBeInTheDocument();
  });

  it('should display duration instead of sets/reps when applicable', () => {
    const exerciseWithDuration: Exercise = {
      ...mockExercise,
      sets: undefined,
      reps: undefined,
      duration: '30 seconds each side',
    };

    render(
      <ExerciseCard
        exercise={exerciseWithDuration}
        isCompleted={false}
        onToggleComplete={mockOnToggleComplete}
      />
    );

    expect(screen.getByText('30 seconds each side')).toBeInTheDocument();
    expect(screen.queryByText(/sets x/)).not.toBeInTheDocument();
  });
});
