import { Program } from '../../types';

export const hamstringsProgram: Program = {
  id: 'hamstrings-program',
  bodyPart: 'Hamstrings',
  bodyPartId: 'hamstrings',
  title: 'Hamstring Flexibility & Strength Program',
  description: 'A 4-week program to improve hamstring flexibility, strengthen the posterior chain, and prevent injuries.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Hamstring Flexibility',
      exercises: [
        {
          id: 'ham-w1-e1',
          name: 'Lying Hamstring Stretch',
          description: 'Basic supine hamstring stretch.',
          instructions: [
            'Lie on back',
            'Lift one leg toward ceiling',
            'Keep knee straight or slightly bent',
            'Use towel or hands to assist',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w1-e2',
          name: 'Standing Hamstring Stretch',
          description: 'Classic standing stretch.',
          instructions: [
            'Place heel on low surface',
            'Keep leg straight',
            'Hinge forward at hips',
            'Reach toward toes',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w1-e3',
          name: 'Seated Hamstring Stretch',
          description: 'Floor-seated stretch.',
          instructions: [
            'Sit with one leg extended',
            'Other leg bent, foot to inner thigh',
            'Reach toward extended foot',
            'Keep back straight',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w1-e4',
          name: 'Doorway Hamstring Stretch',
          description: 'Supported stretch for tight hamstrings.',
          instructions: [
            'Lie in doorway',
            'One leg up on door frame',
            'Other leg through doorway',
            'Scoot closer for more stretch',
            'Hold 30 seconds, switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w1-e5',
          name: 'Cat-Cow for Hamstrings',
          description: 'Spinal mobility affecting hamstrings.',
          instructions: [
            'Start on hands and knees',
            'Cow: Drop belly, lift head',
            'Cat: Round spine, tuck chin',
            'Move through full range',
            'Focus on pelvic movement'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/dfMiuFsM1o8',
          difficulty: 'beginner',
          targetArea: 'Spine, hamstrings'
        }
      ]
    },
    {
      week: 2,
      focus: 'Hamstring Activation',
      exercises: [
        {
          id: 'ham-w2-e1',
          name: 'Glute Bridge',
          description: 'Activate hamstrings with glutes.',
          instructions: [
            'Lie on back, knees bent',
            'Feet flat on floor',
            'Lift hips toward ceiling',
            'Squeeze glutes and hamstrings',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w2-e2',
          name: 'Prone Hamstring Curl',
          description: 'Basic hamstring contraction.',
          instructions: [
            'Lie face down',
            'Slowly bend knee, bringing heel toward buttock',
            'Hold at top for 2 seconds',
            'Lower slowly',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w2-e3',
          name: 'Standing Hamstring Curl',
          description: 'Upright hamstring work.',
          instructions: [
            'Stand holding wall for balance',
            'Bend one knee, heel toward buttock',
            'Squeeze hamstring at top',
            'Lower slowly',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w2-e4',
          name: 'Elevated Bridge',
          description: 'Bridge with feet elevated.',
          instructions: [
            'Lie on back, feet on step or chair',
            'Lift hips toward ceiling',
            'Squeeze glutes and hamstrings',
            'Hold 3 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w2-e5',
          name: 'Good Mornings',
          description: 'Hip hinge for hamstrings.',
          instructions: [
            'Stand with feet hip-width apart',
            'Hands behind head',
            'Hinge at hips, pushing buttock back',
            'Feel stretch in hamstrings',
            'Return to standing'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Hamstrings, lower back'
        }
      ]
    },
    {
      week: 3,
      focus: 'Building Hamstring Strength',
      exercises: [
        {
          id: 'ham-w3-e1',
          name: 'Romanian Deadlift',
          description: 'Primary hamstring hinge exercise.',
          instructions: [
            'Stand with weights at thighs',
            'Push hips back, slight knee bend',
            'Lower weights along legs',
            'Feel stretch in hamstrings',
            'Squeeze hamstrings to return'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w3-e2',
          name: 'Single Leg Bridge',
          description: 'Unilateral hamstring work.',
          instructions: [
            'Lie on back, one leg extended',
            'Push through planted foot',
            'Lift hips, keeping them level',
            'Hold 2 seconds at top',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w3-e3',
          name: 'Stability Ball Hamstring Curl',
          description: 'Dynamic hamstring exercise.',
          instructions: [
            'Lie on back, heels on stability ball',
            'Lift hips off ground',
            'Roll ball toward buttock',
            'Roll back out with control',
            'Keep hips elevated throughout'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w3-e4',
          name: 'Slider Hamstring Curl',
          description: 'Floor-based hamstring curl.',
          instructions: [
            'Lie on back, heels on sliders/towels',
            'Lift hips off ground',
            'Slide heels toward buttock',
            'Slide back out slowly',
            'Maintain hip height'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'intermediate',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w3-e5',
          name: 'Reverse Lunge',
          description: 'Lunge pattern for hamstrings.',
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
          targetArea: 'Hamstrings, glutes'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Hamstring Training',
      exercises: [
        {
          id: 'ham-w4-e1',
          name: 'Single Leg Romanian Deadlift',
          description: 'Unilateral hip hinge.',
          instructions: [
            'Stand on one leg',
            'Hinge forward at hips',
            'Extend other leg behind for balance',
            'Keep back flat throughout',
            'Return using hamstring strength'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w4-e2',
          name: 'Nordic Hamstring Curl (Assisted)',
          description: 'Eccentric hamstring strengthening.',
          instructions: [
            'Kneel with feet anchored',
            'Slowly lower body forward',
            'Control descent with hamstrings',
            'Catch yourself at bottom',
            'Push back up and repeat'
          ],
          sets: 3,
          reps: 5,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w4-e3',
          name: 'Hip Thrust',
          description: 'Advanced hamstring and glute exercise.',
          instructions: [
            'Upper back on bench',
            'Feet flat on floor',
            'Drive through heels, lift hips',
            'Squeeze at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Hamstrings, glutes'
        },
        {
          id: 'ham-w4-e4',
          name: 'Stiff Leg Deadlift',
          description: 'Minimal knee bend hip hinge.',
          instructions: [
            'Stand with weights at thighs',
            'Keep legs nearly straight',
            'Hinge at hips to lower weights',
            'Feel deep hamstring stretch',
            'Return with hamstring engagement'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Hamstrings'
        },
        {
          id: 'ham-w4-e5',
          name: 'Deficit Romanian Deadlift',
          description: 'Increased range of motion RDL.',
          instructions: [
            'Stand on elevated surface',
            'Hold weights, push hips back',
            'Lower weights past feet level',
            'Feel deeper hamstring stretch',
            'Return to standing'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'advanced',
          targetArea: 'Hamstrings, glutes'
        }
      ]
    }
  ]
};
