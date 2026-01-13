import { BodyPart } from '../types';

export const bodyParts: BodyPart[] = [
  // Front body parts
  {
    id: 'neck',
    name: 'Neck',
    region: 'front',
    description: 'Cervical spine and surrounding muscles',
  },
  {
    id: 'shoulders',
    name: 'Shoulders',
    region: 'front',
    description: 'Deltoids, rotator cuff, and shoulder joint',
  },
  {
    id: 'chest',
    name: 'Chest',
    region: 'front',
    description: 'Pectoralis major and minor muscles',
  },
  {
    id: 'arms',
    name: 'Arms',
    region: 'front',
    description: 'Biceps, triceps, forearms, and elbows',
  },
  {
    id: 'core',
    name: 'Core/Abs',
    region: 'front',
    description: 'Abdominal muscles and core stabilizers',
  },
  {
    id: 'hips',
    name: 'Hips',
    region: 'front',
    description: 'Hip flexors and hip joint',
  },
  {
    id: 'quadriceps',
    name: 'Quadriceps',
    region: 'front',
    description: 'Front thigh muscles',
  },
  {
    id: 'knees',
    name: 'Knees',
    region: 'front',
    description: 'Knee joint and surrounding structures',
  },
  {
    id: 'shins',
    name: 'Shins/Calves',
    region: 'front',
    description: 'Lower leg muscles - tibialis anterior and gastrocnemius',
  },
  {
    id: 'ankles',
    name: 'Ankles/Feet',
    region: 'front',
    description: 'Ankle joint and foot muscles',
  },
  // Back body parts
  {
    id: 'neck-back',
    name: 'Neck',
    region: 'back',
    description: 'Cervical spine and posterior neck muscles',
  },
  {
    id: 'upper-back',
    name: 'Upper Back',
    region: 'back',
    description: 'Trapezius, rhomboids, and thoracic spine',
  },
  {
    id: 'lower-back',
    name: 'Lower Back',
    region: 'back',
    description: 'Lumbar spine, erector spinae, and QL muscles',
  },
  {
    id: 'glutes',
    name: 'Glutes',
    region: 'back',
    description: 'Gluteus maximus, medius, and minimus',
  },
  {
    id: 'hamstrings',
    name: 'Hamstrings',
    region: 'back',
    description: 'Posterior thigh muscles',
  },
  {
    id: 'calves-back',
    name: 'Calves',
    region: 'back',
    description: 'Gastrocnemius and soleus muscles',
  },
];

export const getFrontBodyParts = () => bodyParts.filter(bp => bp.region === 'front');
export const getBackBodyParts = () => bodyParts.filter(bp => bp.region === 'back');
export const getBodyPartById = (id: string) => bodyParts.find(bp => bp.id === id);
