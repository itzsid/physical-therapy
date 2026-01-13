export interface BodyPart {
  id: string;
  name: string;
  region: 'front' | 'back';
  description: string;
}

export interface Exercise {
  id: string;
  name: string;
  description: string;
  instructions: string[];
  sets?: number;
  reps?: number;
  duration?: string;
  videoUrl: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  targetArea: string;
}

export interface WeekProgram {
  week: number;
  focus: string;
  exercises: Exercise[];
}

export interface Program {
  id: string;
  bodyPart: string;
  bodyPartId: string;
  title: string;
  description: string;
  duration: number; // weeks
  weeks: WeekProgram[];
}

export interface Progress {
  programId: string;
  completedExercises: Record<string, boolean>; // exerciseId -> completed
  currentWeek: number;
  startedAt: string;
  lastUpdated: string;
}

export interface UserProgress {
  programs: Record<string, Progress>; // programId -> Progress
}
