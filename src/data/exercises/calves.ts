import { Program } from '../../types';

export const calvesProgram: Program = {
  id: 'calves-program',
  bodyPart: 'Calves',
  bodyPartId: 'calves-back',
  title: 'Calf Strength & Flexibility Program',
  description: 'A 4-week program to strengthen calf muscles, improve ankle mobility, and enhance lower leg power.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Calf Flexibility & Mobility',
      exercises: [
        {
          id: 'calves-w1-e1',
          name: 'Wall Calf Stretch',
          description: 'Classic gastrocnemius stretch.',
          instructions: [
            'Stand facing wall, hands on wall',
            'Step one foot back, keep heel down',
            'Lean into wall, knee straight',
            'Feel stretch in upper calf',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius'
        },
        {
          id: 'calves-w1-e2',
          name: 'Soleus Stretch',
          description: 'Deep calf muscle stretch.',
          instructions: [
            'Stand facing wall, hands on wall',
            'Step one foot back',
            'Bend both knees',
            'Keep back heel on ground',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Soleus'
        },
        {
          id: 'calves-w1-e3',
          name: 'Ankle Pumps',
          description: 'Gentle calf activation.',
          instructions: [
            'Sit or lie with legs extended',
            'Point toes away from you',
            'Pull toes toward you',
            'Move through full range',
            'Repeat rhythmically'
          ],
          sets: 2,
          reps: 20,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Calves, ankles'
        },
        {
          id: 'calves-w1-e4',
          name: 'Step Stretch',
          description: 'Stretch calves on step.',
          instructions: [
            'Stand on step with heels hanging off',
            'Lower heels below step level',
            'Feel deep stretch in calves',
            'Hold for 30 seconds',
            'Rise back to neutral'
          ],
          sets: 2,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w1-e5',
          name: 'Calf Foam Rolling',
          description: 'Self-massage for tight calves.',
          instructions: [
            'Sit with calf on foam roller',
            'Cross other leg on top for pressure',
            'Roll from ankle to below knee',
            'Pause on tender spots',
            'Roll for 1-2 minutes each leg'
          ],
          sets: 1,
          duration: '2 minutes each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Calves'
        }
      ]
    },
    {
      week: 2,
      focus: 'Basic Calf Strengthening',
      exercises: [
        {
          id: 'calves-w2-e1',
          name: 'Standing Calf Raises',
          description: 'Basic calf strengthening.',
          instructions: [
            'Stand with feet hip-width apart',
            'Rise up onto toes',
            'Hold for 2 seconds at top',
            'Lower slowly',
            'Keep movement controlled'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius'
        },
        {
          id: 'calves-w2-e2',
          name: 'Seated Calf Raises',
          description: 'Target the soleus muscle.',
          instructions: [
            'Sit in chair with feet flat',
            'Place weight on thighs if desired',
            'Raise heels off floor',
            'Hold 2 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Soleus'
        },
        {
          id: 'calves-w2-e3',
          name: 'Toe Walks',
          description: 'Functional calf exercise.',
          instructions: [
            'Rise up on toes',
            'Walk forward staying on toes',
            'Keep heels off ground',
            'Walk for 30 seconds',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w2-e4',
          name: 'Calf Raises on Step',
          description: 'Increased range calf raises.',
          instructions: [
            'Stand on step with heels hanging off',
            'Lower heels below step level',
            'Rise up onto toes',
            'Hold at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w2-e5',
          name: 'Bent Knee Calf Raises',
          description: 'Soleus-focused raises.',
          instructions: [
            'Stand with knees slightly bent',
            'Maintain knee bend throughout',
            'Rise up on toes',
            'Hold 2 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Soleus'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Calf Loading',
      exercises: [
        {
          id: 'calves-w3-e1',
          name: 'Single Leg Calf Raise',
          description: 'Unilateral calf strengthening.',
          instructions: [
            'Stand on one leg, hold for balance',
            'Rise up on toes',
            'Hold 2 seconds at top',
            'Lower slowly',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w3-e2',
          name: 'Single Leg Step Raises',
          description: 'Full range single leg work.',
          instructions: [
            'Stand on step on one foot',
            'Heel hanging off edge',
            'Lower heel below step',
            'Rise up high on toes',
            'Complete reps, switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w3-e3',
          name: 'Wall Sit Calf Raises',
          description: 'Combined quad and calf work.',
          instructions: [
            'Perform wall sit position',
            'While holding, raise heels',
            'Lower heels',
            'Continue raises while in wall sit',
            'Keep back against wall'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Calves, quads'
        },
        {
          id: 'calves-w3-e4',
          name: 'Farmer Walk on Toes',
          description: 'Loaded toe walking.',
          instructions: [
            'Hold weights at sides',
            'Rise up on toes',
            'Walk forward on toes',
            'Keep heels elevated',
            'Walk for 30 seconds'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w3-e5',
          name: 'Eccentric Calf Lowering',
          description: 'Controlled lowering for strength.',
          instructions: [
            'Rise up on both feet',
            'Shift weight to one foot',
            'Slowly lower on single leg',
            'Take 5 seconds to lower',
            'Use both feet to rise, repeat'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Calves'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Calf Development',
      exercises: [
        {
          id: 'calves-w4-e1',
          name: 'Single Leg Hop',
          description: 'Plyometric calf exercise.',
          instructions: [
            'Stand on one foot',
            'Hop in place using calf power',
            'Land softly on toes',
            'Minimal ground contact time',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Calves, power'
        },
        {
          id: 'calves-w4-e2',
          name: 'Deficit Calf Raises',
          description: 'Maximum range calf work.',
          instructions: [
            'Stand on elevated surface',
            'Lower heels as far as possible',
            'Feel deep stretch at bottom',
            'Rise to maximum height',
            'Full range each rep'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w4-e3',
          name: 'Jump Rope (Imaginary)',
          description: 'Calf endurance exercise.',
          instructions: [
            'Jump as if using jump rope',
            'Stay on balls of feet',
            'Quick, light bounces',
            'Keep knees slightly bent',
            'Continue for 1 minute'
          ],
          sets: 3,
          duration: '1 minute',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Calves, cardio'
        },
        {
          id: 'calves-w4-e4',
          name: 'Pause Calf Raises',
          description: 'Isometric holds in raises.',
          instructions: [
            'Rise up on toes',
            'Hold at top for 5 seconds',
            'Lower halfway, hold 5 seconds',
            'Lower fully',
            'Rise immediately for next rep'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Calves'
        },
        {
          id: 'calves-w4-e5',
          name: 'Box Jump Landing Focus',
          description: 'Controlled plyometric landing.',
          instructions: [
            'Stand in front of low box/step',
            'Jump up onto box',
            'Land softly on toes first',
            'Step back down',
            'Focus on quiet, controlled landing'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Calves, power'
        }
      ]
    }
  ]
};
