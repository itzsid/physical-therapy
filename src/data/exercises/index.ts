import { Program } from '../../types';
import { neckProgram } from './neck';
import { shouldersProgram } from './shoulders';
import { lowerBackProgram } from './lowerBack';
import { kneesProgram } from './knees';
import { hipsProgram } from './hips';
import { anklesProgram } from './ankles';

// Map body part IDs to their programs
export const programs: Record<string, Program> = {
  'neck': neckProgram,
  'neck-back': neckProgram,
  'shoulders': shouldersProgram,
  'upper-back': lowerBackProgram, // Upper back uses similar exercises
  'lower-back': lowerBackProgram,
  'hips': hipsProgram,
  'glutes': hipsProgram, // Glutes program shares exercises with hips
  'quadriceps': kneesProgram, // Quad exercises often overlap with knee rehab
  'knees': kneesProgram,
  'hamstrings': hipsProgram, // Hamstring exercises are in hip program
  'shins': anklesProgram,
  'calves-back': anklesProgram,
  'ankles': anklesProgram,
  'chest': shouldersProgram, // Chest exercises overlap with shoulder work
  'arms': shouldersProgram, // Arms exercises overlap with shoulder work
  'core': lowerBackProgram, // Core exercises are in lower back program
};

export const getProgramForBodyPart = (bodyPartId: string): Program | undefined => {
  return programs[bodyPartId];
};

export const getAllPrograms = (): Program[] => {
  // Return unique programs only
  const uniquePrograms = new Set(Object.values(programs));
  return Array.from(uniquePrograms);
};

export {
  neckProgram,
  shouldersProgram,
  lowerBackProgram,
  kneesProgram,
  hipsProgram,
  anklesProgram,
};
