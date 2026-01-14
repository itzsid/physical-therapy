import { Program } from '../../types';

export const glutesProgram: Program = {
  id: 'glutes-program',
  bodyPart: 'Glutes',
  bodyPartId: 'glutes',
  title: 'Glute Activation & Strength Program',
  description: 'A 4-week program to activate, strengthen, and build powerful glute muscles for better hip function and posture.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Glute Activation & Mobility',
      exercises: [
        {
          id: 'glutes-w1-e1',
          name: 'Glute Squeeze',
          description: 'Basic glute activation.',
          instructions: [
            'Stand or lie on back',
            'Squeeze glutes together tightly',
            'Hold for 5 seconds',
            'Release completely',
            'Focus on feeling the contraction'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w1-e2',
          name: 'Figure Four Stretch',
          description: 'Stretch glutes and piriformis.',
          instructions: [
            'Lie on back with knees bent',
            'Cross one ankle over opposite knee',
            'Pull bottom leg toward chest',
            'Hold for 30 seconds',
            'Switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/IYsOcp4pvic',
          difficulty: 'beginner',
          targetArea: 'Glutes, piriformis'
        },
        {
          id: 'glutes-w1-e3',
          name: 'Supine Glute Activation',
          description: 'Isolate glute engagement lying down.',
          instructions: [
            'Lie on back, knees bent, feet flat',
            'Press feet into floor',
            'Contract glutes without lifting hips',
            'Hold 5 seconds',
            'Release and repeat'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w1-e4',
          name: 'Prone Glute Squeeze',
          description: 'Activate glutes in prone position.',
          instructions: [
            'Lie face down',
            'Squeeze glutes together',
            'Try to lift thighs slightly off floor',
            'Hold 5 seconds',
            'Release and repeat'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w1-e5',
          name: 'Seated Glute Stretch',
          description: 'Stretch glutes while seated.',
          instructions: [
            'Sit in chair with good posture',
            'Cross one ankle over opposite knee',
            'Lean forward from hips',
            'Hold for 30 seconds',
            'Switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/IYsOcp4pvic',
          difficulty: 'beginner',
          targetArea: 'Glutes'
        }
      ]
    },
    {
      week: 2,
      focus: 'Basic Glute Strengthening',
      exercises: [
        {
          id: 'glutes-w2-e1',
          name: 'Glute Bridge',
          description: 'Foundational glute exercise.',
          instructions: [
            'Lie on back, knees bent, feet flat',
            'Squeeze glutes and lift hips',
            'Create straight line from shoulders to knees',
            'Hold 3 seconds at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w2-e2',
          name: 'Clamshells',
          description: 'Target glute medius.',
          instructions: [
            'Lie on side, knees bent 90 degrees',
            'Keep feet together',
            'Lift top knee toward ceiling',
            'Keep hips stacked, don\'t roll back',
            'Lower slowly and repeat'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'beginner',
          targetArea: 'Gluteus medius'
        },
        {
          id: 'glutes-w2-e3',
          name: 'Quadruped Hip Extension',
          description: 'Isolate glute max.',
          instructions: [
            'Start on hands and knees',
            'Keep knee bent at 90 degrees',
            'Lift leg, driving heel toward ceiling',
            'Squeeze glute at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w2-e4',
          name: 'Side-Lying Leg Raise',
          description: 'Strengthen hip abductors.',
          instructions: [
            'Lie on side with legs straight',
            'Lift top leg toward ceiling',
            'Keep leg straight, toe pointing forward',
            'Hold 2 seconds at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'beginner',
          targetArea: 'Gluteus medius'
        },
        {
          id: 'glutes-w2-e5',
          name: 'Standing Glute Kickback',
          description: 'Functional glute activation.',
          instructions: [
            'Stand holding wall for balance',
            'Keep leg straight',
            'Extend leg behind you',
            'Squeeze glute at end range',
            'Return with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Glute Loading',
      exercises: [
        {
          id: 'glutes-w3-e1',
          name: 'Single Leg Glute Bridge',
          description: 'Progress to unilateral glute work.',
          instructions: [
            'Lie on back, one leg extended',
            'Push through planted foot',
            'Lift hips, keeping them level',
            'Hold 2 seconds at top',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w3-e2',
          name: 'Banded Clamshells',
          description: 'Add resistance to clamshells.',
          instructions: [
            'Place band above knees',
            'Lie on side, knees bent',
            'Lift top knee against band resistance',
            'Control the movement throughout',
            'Complete reps, switch sides'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'intermediate',
          targetArea: 'Gluteus medius'
        },
        {
          id: 'glutes-w3-e3',
          name: 'Fire Hydrants',
          description: 'Hip abduction in quadruped.',
          instructions: [
            'Start on hands and knees',
            'Keep knee bent at 90 degrees',
            'Lift knee out to side',
            'Keep hips level',
            'Lower and repeat'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Gluteus medius'
        },
        {
          id: 'glutes-w3-e4',
          name: 'Monster Walks',
          description: 'Lateral glute activation with band.',
          instructions: [
            'Place band above knees',
            'Assume slight squat position',
            'Take steps sideways',
            'Keep tension on band throughout',
            'Complete steps both directions'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'intermediate',
          targetArea: 'Gluteus medius'
        },
        {
          id: 'glutes-w3-e5',
          name: 'Frog Pumps',
          description: 'Target glutes with unique angle.',
          instructions: [
            'Lie on back, soles of feet together',
            'Knees fall out to sides',
            'Drive through heels, lift hips',
            'Squeeze glutes at top',
            'Lower and repeat'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Gluteus maximus'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Glute Development',
      exercises: [
        {
          id: 'glutes-w4-e1',
          name: 'Hip Thrust',
          description: 'Primary glute building exercise.',
          instructions: [
            'Upper back on bench or couch',
            'Feet flat on floor, hip width apart',
            'Drive through heels, lift hips',
            'Squeeze glutes hard at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'glutes-w4-e2',
          name: 'Bulgarian Split Squat',
          description: 'Single leg glute and quad work.',
          instructions: [
            'Rear foot elevated on bench',
            'Lower back knee toward floor',
            'Keep front knee behind toes',
            'Push through front heel to stand',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Glutes, quadriceps'
        },
        {
          id: 'glutes-w4-e3',
          name: 'Romanian Deadlift',
          description: 'Hip hinge for glutes and hamstrings.',
          instructions: [
            'Stand with weights at thighs',
            'Push hips back, slight knee bend',
            'Lower weights along legs',
            'Feel stretch in glutes and hamstrings',
            'Squeeze glutes to return'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'glutes-w4-e4',
          name: 'Single Leg Romanian Deadlift',
          description: 'Unilateral hip hinge.',
          instructions: [
            'Stand on one leg',
            'Hinge forward at hips',
            'Extend other leg behind',
            'Keep back flat',
            'Return to start using glutes'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'glutes-w4-e5',
          name: 'Curtsy Lunge',
          description: 'Target glute medius with rotation.',
          instructions: [
            'Stand with feet hip width apart',
            'Step one leg behind and across body',
            'Lower into lunge position',
            'Push through front heel to return',
            'Alternate legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Glutes, adductors'
        }
      ]
    }
  ]
};
