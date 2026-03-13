import { Program, WeekProgram, Exercise } from '../types';

interface RawExercise {
  name?: string;
  description?: string;
  instructions?: string[];
  sets?: number | null;
  reps?: number | null;
  duration?: string | null;
  difficulty?: string;
  targetArea?: string;
}

interface RawWeek {
  week?: number;
  focus?: string;
  exercises?: RawExercise[];
}

interface RawProgram {
  bodyPart?: string;
  title?: string;
  description?: string;
  whyItExists?: string;
  howExercisesHelp?: string;
  duration?: number;
  weeks?: RawWeek[];
}

export function parseProgram(llmOutput: string): Program {
  const jsonStr = extractJSON(llmOutput);
  let raw: RawProgram;

  try {
    raw = JSON.parse(jsonStr);
  } catch {
    throw new Error('Failed to parse LLM output as JSON. The model may not have produced valid JSON.');
  }

  if (!raw.weeks || !Array.isArray(raw.weeks) || raw.weeks.length === 0) {
    throw new Error('Program must contain at least one week of exercises.');
  }

  const timestamp = Date.now();
  const programId = `ai-${timestamp}`;

  const weeks: WeekProgram[] = raw.weeks.map((rawWeek, weekIdx) => {
    const exercises: Exercise[] = (rawWeek.exercises || []).map((rawEx, exIdx) => ({
      id: `${programId}-w${weekIdx + 1}-e${exIdx}`,
      name: rawEx.name || `Exercise ${exIdx + 1}`,
      description: rawEx.description || '',
      instructions: Array.isArray(rawEx.instructions) ? rawEx.instructions : [],
      sets: rawEx.sets ?? undefined,
      reps: rawEx.reps ?? undefined,
      duration: rawEx.duration ?? undefined,
      videoUrl: '',
      difficulty: validateDifficulty(rawEx.difficulty),
      targetArea: rawEx.targetArea || 'General',
    }));

    return {
      week: rawWeek.week || weekIdx + 1,
      focus: rawWeek.focus || `Week ${weekIdx + 1}`,
      exercises,
    };
  });

  return {
    id: programId,
    bodyPart: raw.bodyPart || 'Custom',
    bodyPartId: 'ai-custom',
    title: raw.title || 'AI-Generated Program',
    description: raw.description || 'A personalized physical therapy program.',
    duration: raw.duration || weeks.length,
    weeks,
    isAIGenerated: true,
    searchQuery: '',
    whyItExists: raw.whyItExists || undefined,
    howExercisesHelp: raw.howExercisesHelp || undefined,
  };
}

function extractJSON(text: string): string {
  // Remove markdown code fences
  let cleaned = text.replace(/```(?:json)?\s*/g, '').replace(/```\s*/g, '');

  // Try to find JSON object boundaries
  const firstBrace = cleaned.indexOf('{');
  const lastBrace = cleaned.lastIndexOf('}');

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleaned = cleaned.substring(firstBrace, lastBrace + 1);
  }

  return cleaned.trim();
}

function validateDifficulty(d?: string): 'beginner' | 'intermediate' | 'advanced' {
  if (d === 'beginner' || d === 'intermediate' || d === 'advanced') return d;
  return 'beginner';
}
