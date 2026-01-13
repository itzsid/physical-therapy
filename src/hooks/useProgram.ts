import { useState, useCallback } from 'react';
import { Program, BodyPart } from '../types';
import { getProgramForBodyPart } from '../data/exercises';

export function useProgram() {
  const [selectedBodyPart, setSelectedBodyPart] = useState<BodyPart | null>(null);
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);

  const selectBodyPart = useCallback((bodyPart: BodyPart) => {
    setSelectedBodyPart(bodyPart);
    const program = getProgramForBodyPart(bodyPart.id);
    setCurrentProgram(program || null);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedBodyPart(null);
    setCurrentProgram(null);
  }, []);

  return {
    selectedBodyPart,
    currentProgram,
    selectBodyPart,
    clearSelection,
  };
}
