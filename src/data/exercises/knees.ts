import { Program } from '../../types';

export const kneesProgram: Program = {
  id: 'knees-program',
  bodyPart: 'Knees',
  bodyPartId: 'knees',
  title: 'Knee Pain Relief & Strengthening',
  description: 'A 4-week program to reduce knee pain, improve stability, and strengthen surrounding muscles.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Pain Relief & Gentle Mobility',
      exercises: [
        {
          id: 'knee-w1-e1',
          name: 'Quad Sets',
          description: 'Activate quadriceps without movement.',
          instructions: [
            'Sit with leg extended',
            'Tighten thigh muscle',
            'Push back of knee toward floor',
            'Hold for 5-10 seconds',
            'Relax and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/ppzDDzy0pRY',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'knee-w1-e2',
          name: 'Heel Slides',
          description: 'Improve knee range of motion gently.',
          instructions: [
            'Lie on back with legs extended',
            'Slide heel toward buttocks',
            'Go as far as comfortable',
            'Slide back to start',
            'Repeat slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/ppzDDzy0pRY',
          difficulty: 'beginner',
          targetArea: 'Knee joint'
        },
        {
          id: 'knee-w1-e3',
          name: 'Straight Leg Raises',
          description: 'Strengthen quads without bending knee.',
          instructions: [
            'Lie on back, one knee bent, one straight',
            'Tighten thigh of straight leg',
            'Lift leg to height of bent knee',
            'Hold 3 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'beginner',
          targetArea: 'Quadriceps, hip flexors'
        },
        {
          id: 'knee-w1-e4',
          name: 'Calf Stretch - Standing',
          description: 'Stretch calves to reduce knee strain.',
          instructions: [
            'Stand facing wall with hands on wall',
            'Step one foot back, heel on floor',
            'Lean forward, keeping back leg straight',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/9jMl3V7OPN8',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius'
        },
        {
          id: 'knee-w1-e5',
          name: 'Hamstring Stretch - Supine',
          description: 'Stretch hamstrings to improve knee mechanics.',
          instructions: [
            'Lie on back',
            'Lift one leg and hold behind thigh',
            'Straighten knee as much as comfortable',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/9jMl3V7OPN8',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        }
      ]
    },
    {
      week: 2,
      focus: 'Building Strength',
      exercises: [
        {
          id: 'knee-w2-e1',
          name: 'Wall Sits',
          description: 'Build quadriceps endurance.',
          instructions: [
            'Stand with back against wall',
            'Slide down until knees at 45-60 degrees',
            'Keep knees behind toes',
            'Hold position',
            'Slide back up'
          ],
          sets: 3,
          duration: '15-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'knee-w2-e2',
          name: 'Glute Bridges',
          description: 'Strengthen glutes for knee support.',
          instructions: [
            'Lie on back with knees bent',
            'Squeeze glutes and lift hips',
            'Hold 5 seconds at top',
            'Lower slowly',
            'Keep core engaged'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'knee-w2-e3',
          name: 'Side-Lying Leg Raises',
          description: 'Strengthen hip abductors for knee stability.',
          instructions: [
            'Lie on side with legs straight',
            'Lift top leg toward ceiling',
            'Keep leg straight, toes forward',
            'Hold 2 seconds',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'beginner',
          targetArea: 'Glute medius'
        },
        {
          id: 'knee-w2-e4',
          name: 'Clamshells',
          description: 'Strengthen external rotators.',
          instructions: [
            'Lie on side with knees bent 90 degrees',
            'Keep feet together',
            'Lift top knee toward ceiling',
            'Hold 2 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'beginner',
          targetArea: 'Hip external rotators'
        },
        {
          id: 'knee-w2-e5',
          name: 'Short Arc Quads',
          description: 'Strengthen quads in limited range.',
          instructions: [
            'Sit with towel roll under knee',
            'Straighten knee to lift foot',
            'Hold 5 seconds at top',
            'Lower slowly',
            'Keep thigh on towel'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/ppzDDzy0pRY',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        }
      ]
    },
    {
      week: 3,
      focus: 'Functional Strength',
      exercises: [
        {
          id: 'knee-w3-e1',
          name: 'Step-Ups - Low Step',
          description: 'Functional leg strength.',
          instructions: [
            'Stand in front of low step (4-6 inches)',
            'Step up with one foot',
            'Bring other foot up',
            'Step down with same foot first',
            'Complete reps, then switch leading leg'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'knee-w3-e2',
          name: 'Mini Squats',
          description: 'Build squat pattern safely.',
          instructions: [
            'Stand with feet shoulder-width apart',
            'Lower down 45 degrees',
            'Keep knees behind toes',
            'Push through heels to stand',
            'Keep core engaged'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'knee-w3-e3',
          name: 'Terminal Knee Extension',
          description: 'Strengthen VMO (inner quad).',
          instructions: [
            'Loop band around fixed object and behind knee',
            'Stand on affected leg',
            'Straighten knee against band resistance',
            'Hold 2 seconds',
            'Slowly bend and repeat'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/ppzDDzy0pRY',
          difficulty: 'intermediate',
          targetArea: 'Vastus medialis (VMO)'
        },
        {
          id: 'knee-w3-e4',
          name: 'Single Leg Balance',
          description: 'Improve proprioception and stability.',
          instructions: [
            'Stand on one leg',
            'Keep knee slightly bent',
            'Hold for 30 seconds',
            'Use wall for support if needed',
            'Progress to eyes closed'
          ],
          sets: 3,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/9jMl3V7OPN8',
          difficulty: 'intermediate',
          targetArea: 'Knee stabilizers'
        },
        {
          id: 'knee-w3-e5',
          name: 'Monster Walks',
          description: 'Strengthen glute medius with band.',
          instructions: [
            'Place band around thighs above knees',
            'Slight squat position',
            'Take steps sideways',
            'Keep tension on band throughout',
            'Complete steps both directions'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'intermediate',
          targetArea: 'Glute medius'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Stability & Power',
      exercises: [
        {
          id: 'knee-w4-e1',
          name: 'Bulgarian Split Squat',
          description: 'Single leg strength and balance.',
          instructions: [
            'Stand in front of bench, one foot on bench behind',
            'Lower back knee toward floor',
            'Keep front knee behind toes',
            'Push through front heel to stand',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'knee-w4-e2',
          name: 'Step Downs',
          description: 'Eccentric quad control.',
          instructions: [
            'Stand on step with one foot',
            'Slowly lower other foot toward floor',
            'Touch heel lightly to floor',
            'Return to starting position',
            'Control the descent'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps'
        },
        {
          id: 'knee-w4-e3',
          name: 'Single Leg Glute Bridge',
          description: 'Advanced hip and knee stability.',
          instructions: [
            'Lie on back, one leg extended',
            'Push through planted foot',
            'Lift hips keeping them level',
            'Hold 3 seconds',
            'Lower and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'knee-w4-e4',
          name: 'Lateral Band Walks',
          description: 'Hip strength for knee stability.',
          instructions: [
            'Place band around ankles',
            'Slight squat position',
            'Step sideways maintaining tension',
            'Keep feet parallel',
            'Complete steps both directions'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/z2fMLGq8vh0',
          difficulty: 'intermediate',
          targetArea: 'Glute medius, TFL'
        },
        {
          id: 'knee-w4-e5',
          name: 'Wall Squat with Ball Squeeze',
          description: 'Strengthen VMO and inner thigh.',
          instructions: [
            'Wall sit position with ball between knees',
            'Squeeze ball firmly',
            'Hold squat and squeeze',
            'Maintain for 30 seconds',
            'Release and repeat'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/ppzDDzy0pRY',
          difficulty: 'intermediate',
          targetArea: 'VMO, adductors'
        }
      ]
    }
  ]
};
