import { Program } from '../../types';

export const quadricepsProgram: Program = {
  id: 'quadriceps-program',
  bodyPart: 'Quadriceps',
  bodyPartId: 'quadriceps',
  title: 'Quadriceps Strength & Flexibility Program',
  description: 'A 4-week program to strengthen the quadriceps muscles, improve knee stability, and enhance leg function.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Quad Activation & Stretching',
      exercises: [
        {
          id: 'quad-w1-e1',
          name: 'Quad Sets',
          description: 'Basic quad activation.',
          instructions: [
            'Sit or lie with leg extended',
            'Tighten quadriceps muscle',
            'Push back of knee toward floor',
            'Hold 5-10 seconds',
            'Release and repeat'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w1-e2',
          name: 'Standing Quad Stretch',
          description: 'Classic quadriceps stretch.',
          instructions: [
            'Stand holding wall for balance',
            'Bend knee, grab ankle behind you',
            'Pull heel toward buttock',
            'Keep knees together',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w1-e3',
          name: 'Prone Quad Stretch',
          description: 'Deeper quad stretch lying down.',
          instructions: [
            'Lie face down',
            'Bend one knee',
            'Reach back and grab ankle',
            'Gently pull heel toward buttock',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w1-e4',
          name: 'Straight Leg Raise',
          description: 'Quad strengthening with leg lift.',
          instructions: [
            'Lie on back, one knee bent',
            'Keep other leg straight',
            'Tighten quad, lift leg to bent knee height',
            'Hold 3 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w1-e5',
          name: 'Side-Lying Quad Stretch',
          description: 'Relaxed quad stretch position.',
          instructions: [
            'Lie on side',
            'Bend top knee, grab ankle',
            'Pull heel toward buttock',
            'Keep hips stacked',
            'Hold 30 seconds, switch sides'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        }
      ]
    },
    {
      week: 2,
      focus: 'Building Quad Strength',
      exercises: [
        {
          id: 'quad-w2-e1',
          name: 'Wall Sit',
          description: 'Isometric quad strengthening.',
          instructions: [
            'Stand with back against wall',
            'Slide down until thighs parallel to floor',
            'Keep knees over ankles',
            'Hold position',
            'Breathe normally throughout'
          ],
          sets: 3,
          duration: '20-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w2-e2',
          name: 'Terminal Knee Extension',
          description: 'Strengthen the VMO muscle.',
          instructions: [
            'Place rolled towel under knee',
            'Sit with leg extended',
            'Press knee down into towel',
            'Lift foot off ground',
            'Hold 5 seconds, lower'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'VMO, quadriceps'
        },
        {
          id: 'quad-w2-e3',
          name: 'Mini Squats',
          description: 'Partial range squat.',
          instructions: [
            'Stand with feet hip-width apart',
            'Lower into quarter squat',
            'Keep knees behind toes',
            'Push through heels to stand',
            'Focus on quad engagement'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w2-e4',
          name: 'Step Ups',
          description: 'Functional quad strengthening.',
          instructions: [
            'Stand in front of step',
            'Step up with one foot',
            'Press through heel to stand tall',
            'Step back down with control',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'beginner',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w2-e5',
          name: 'Seated Knee Extension',
          description: 'Isolate quad muscles.',
          instructions: [
            'Sit in chair with feet flat',
            'Straighten one leg fully',
            'Squeeze quad at top',
            'Hold 3 seconds',
            'Lower slowly, repeat'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'beginner',
          targetArea: 'Quadriceps'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Quad Loading',
      exercises: [
        {
          id: 'quad-w3-e1',
          name: 'Goblet Squat',
          description: 'Full squat with proper form.',
          instructions: [
            'Hold weight at chest',
            'Feet shoulder-width apart',
            'Lower into deep squat',
            'Keep chest up, knees out',
            'Drive through heels to stand'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w3-e2',
          name: 'Forward Lunge',
          description: 'Dynamic quad strengthening.',
          instructions: [
            'Stand with feet together',
            'Step forward into lunge',
            'Lower back knee toward floor',
            'Push through front heel to return',
            'Alternate legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w3-e3',
          name: 'Spanish Squat',
          description: 'Quad-focused squat with band.',
          instructions: [
            'Loop band around fixed point',
            'Step into band behind knees',
            'Lean back into band',
            'Squat while band supports you',
            'Focus on quad engagement'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w3-e4',
          name: 'Reverse Lunge',
          description: 'Backward stepping lunge.',
          instructions: [
            'Stand with feet together',
            'Step backward into lunge',
            'Lower back knee toward floor',
            'Push through front heel to return',
            'Alternate legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w3-e5',
          name: 'Single Leg Wall Sit',
          description: 'Progress wall sit difficulty.',
          instructions: [
            'Perform wall sit position',
            'Lift one foot off ground',
            'Hold with single leg',
            'Keep hips level',
            'Hold for time, switch legs'
          ],
          sets: 3,
          duration: '15-20 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'intermediate',
          targetArea: 'Quadriceps'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Quad Development',
      exercises: [
        {
          id: 'quad-w4-e1',
          name: 'Bulgarian Split Squat',
          description: 'Advanced single leg squat.',
          instructions: [
            'Rear foot elevated on bench',
            'Lower back knee toward floor',
            'Keep front knee aligned with toes',
            'Push through front heel to stand',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w4-e2',
          name: 'Sissy Squat',
          description: 'Isolated quad exercise.',
          instructions: [
            'Hold onto support for balance',
            'Rise onto toes',
            'Lean back, bending knees',
            'Lower until intense quad stretch',
            'Return using quad strength'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/pt5IeRJ4kSM',
          difficulty: 'advanced',
          targetArea: 'Quadriceps'
        },
        {
          id: 'quad-w4-e3',
          name: 'Walking Lunge',
          description: 'Continuous lunge pattern.',
          instructions: [
            'Take forward lunge step',
            'Lower into lunge',
            'Push off back foot to step forward',
            'Continue walking forward',
            'Maintain upright posture'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps, glutes'
        },
        {
          id: 'quad-w4-e4',
          name: 'Pistol Squat Progression',
          description: 'Single leg squat to box.',
          instructions: [
            'Stand in front of chair/box',
            'Extend one leg in front',
            'Lower slowly to seated position',
            'Stand up on single leg',
            'Use arms for balance if needed'
          ],
          sets: 3,
          reps: 6,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps, balance'
        },
        {
          id: 'quad-w4-e5',
          name: 'Jump Squats',
          description: 'Plyometric quad power.',
          instructions: [
            'Lower into squat position',
            'Explosively jump upward',
            'Land softly with bent knees',
            'Immediately lower into next rep',
            'Maintain good form throughout'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/PJhVIXQeqSI',
          difficulty: 'advanced',
          targetArea: 'Quadriceps, power'
        }
      ]
    }
  ]
};
