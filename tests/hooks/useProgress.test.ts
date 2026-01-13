import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useProgress } from '../../src/hooks/useProgress';
import { Program } from '../../src/types';

const mockProgram: Program = {
  id: 'test-program',
  bodyPart: 'Test',
  bodyPartId: 'test',
  title: 'Test Program',
  description: 'A test program',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Test Week 1',
      exercises: [
        {
          id: 'ex-1',
          name: 'Exercise 1',
          description: 'Test exercise 1',
          instructions: ['Step 1', 'Step 2'],
          sets: 3,
          reps: 10,
          videoUrl: 'https://youtube.com/embed/test1',
          difficulty: 'beginner',
          targetArea: 'Test area',
        },
        {
          id: 'ex-2',
          name: 'Exercise 2',
          description: 'Test exercise 2',
          instructions: ['Step 1'],
          duration: '30 seconds',
          videoUrl: 'https://youtube.com/embed/test2',
          difficulty: 'intermediate',
          targetArea: 'Test area 2',
        },
      ],
    },
    {
      week: 2,
      focus: 'Test Week 2',
      exercises: [
        {
          id: 'ex-3',
          name: 'Exercise 3',
          description: 'Test exercise 3',
          instructions: ['Step 1'],
          sets: 2,
          reps: 15,
          videoUrl: 'https://youtube.com/embed/test3',
          difficulty: 'advanced',
          targetArea: 'Test area 3',
        },
      ],
    },
  ],
};

describe('useProgress', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.getItem = vi.fn().mockReturnValue(null);
    localStorage.setItem = vi.fn();
  });

  it('should start with empty progress', () => {
    const { result } = renderHook(() => useProgress());

    expect(result.current.userProgress.programs).toEqual({});
  });

  it('should start a program and create progress', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
    });

    const progress = result.current.getProgress('test-program');
    expect(progress).toBeDefined();
    expect(progress?.programId).toBe('test-program');
    expect(progress?.currentWeek).toBe(1);
    expect(progress?.completedExercises).toEqual({});
  });

  it('should toggle exercise completion', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
    });

    act(() => {
      result.current.toggleExercise('test-program', 'ex-1');
    });

    const progress = result.current.getProgress('test-program');
    expect(progress?.completedExercises['ex-1']).toBe(true);

    act(() => {
      result.current.toggleExercise('test-program', 'ex-1');
    });

    const updatedProgress = result.current.getProgress('test-program');
    expect(updatedProgress?.completedExercises['ex-1']).toBe(false);
  });

  it('should set current week', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
    });

    act(() => {
      result.current.setCurrentWeek('test-program', 2);
    });

    const progress = result.current.getProgress('test-program');
    expect(progress?.currentWeek).toBe(2);
  });

  it('should calculate week progress correctly', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
    });

    // No exercises completed
    expect(result.current.getWeekProgress('test-program', mockProgram, 1)).toBe(0);

    // Complete one exercise
    act(() => {
      result.current.toggleExercise('test-program', 'ex-1');
    });

    // 1 of 2 exercises = 50%
    expect(result.current.getWeekProgress('test-program', mockProgram, 1)).toBe(50);

    // Complete second exercise
    act(() => {
      result.current.toggleExercise('test-program', 'ex-2');
    });

    // 2 of 2 exercises = 100%
    expect(result.current.getWeekProgress('test-program', mockProgram, 1)).toBe(100);
  });

  it('should calculate total progress correctly', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
    });

    // No exercises completed
    expect(result.current.getTotalProgress('test-program', mockProgram)).toBe(0);

    // Complete all exercises
    act(() => {
      result.current.toggleExercise('test-program', 'ex-1');
      result.current.toggleExercise('test-program', 'ex-2');
      result.current.toggleExercise('test-program', 'ex-3');
    });

    // 3 of 3 exercises = 100%
    expect(result.current.getTotalProgress('test-program', mockProgram)).toBe(100);
  });

  it('should reset progress', () => {
    const { result } = renderHook(() => useProgress());

    act(() => {
      result.current.startProgram(mockProgram);
      result.current.toggleExercise('test-program', 'ex-1');
    });

    expect(result.current.getProgress('test-program')).toBeDefined();

    act(() => {
      result.current.resetProgress('test-program');
    });

    expect(result.current.getProgress('test-program')).toBeUndefined();
  });
});
