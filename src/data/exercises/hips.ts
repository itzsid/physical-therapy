import { Program } from '../../types';

export const hipsProgram: Program = {
  id: 'hips-program',
  bodyPart: 'Hips',
  bodyPartId: 'hips',
  title: 'Hip Mobility & Strength Program',
  description: 'A 4-week program to improve hip mobility, strengthen hip muscles, and reduce pain.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Mobility & Pain Relief',
      exercises: [
        {
          id: 'hip-w1-e1',
          name: 'Hip Flexor Stretch',
          description: 'Release tight hip flexors.',
          instructions: [
            'Kneel on one knee',
            'Front foot flat on floor',
            'Lean forward into front hip',
            'Keep torso upright',
            'Hold 30 seconds, switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/YQmpO9VT2X4',
          difficulty: 'beginner',
          targetArea: 'Hip flexors, psoas'
        },
        {
          id: 'hip-w1-e2',
          name: 'Figure Four Stretch',
          description: 'Stretch piriformis and external rotators.',
          instructions: [
            'Lie on back with knees bent',
            'Cross one ankle over opposite knee',
            'Pull bottom leg toward chest',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/cCJbwN3yMWA',
          difficulty: 'beginner',
          targetArea: 'Piriformis, glutes'
        },
        {
          id: 'hip-w1-e3',
          name: '90-90 Hip Stretch',
          description: 'Improve hip internal and external rotation.',
          instructions: [
            'Sit with one leg in front (90 degree bend)',
            'Other leg to side (90 degree bend)',
            'Keep back straight',
            'Lean forward over front leg',
            'Hold 30 seconds, switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/NG9qbvAN3gQ',
          difficulty: 'beginner',
          targetArea: 'Hip rotators'
        },
        {
          id: 'hip-w1-e4',
          name: 'Hip Circles',
          description: 'Gentle hip joint mobilization.',
          instructions: [
            'Stand on one leg, hand on wall',
            'Lift other knee to hip height',
            'Make slow circles with knee',
            '10 circles each direction',
            'Switch legs'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/mFKl2JBBDGU',
          difficulty: 'beginner',
          targetArea: 'Hip joint'
        },
        {
          id: 'hip-w1-e5',
          name: 'Adductor Stretch',
          description: 'Stretch inner thigh muscles.',
          instructions: [
            'Sit with soles of feet together',
            'Let knees fall toward floor',
            'Gently press knees down',
            'Keep back straight',
            'Hold for 30 seconds'
          ],
          sets: 2,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/8n0X_-gPGJ8',
          difficulty: 'beginner',
          targetArea: 'Adductors'
        }
      ]
    },
    {
      week: 2,
      focus: 'Activation & Basic Strength',
      exercises: [
        {
          id: 'hip-w2-e1',
          name: 'Glute Bridges',
          description: 'Activate and strengthen glutes.',
          instructions: [
            'Lie on back with knees bent',
            'Squeeze glutes and lift hips',
            'Create straight line shoulders to knees',
            'Hold 5 seconds at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/OUgsJ8-Vi0E',
          difficulty: 'beginner',
          targetArea: 'Glutes'
        },
        {
          id: 'hip-w2-e2',
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
          videoUrl: 'https://www.youtube.com/embed/kNSj0LGUBCI',
          difficulty: 'beginner',
          targetArea: 'Hip external rotators'
        },
        {
          id: 'hip-w2-e3',
          name: 'Side-Lying Leg Raises',
          description: 'Strengthen hip abductors.',
          instructions: [
            'Lie on side with legs straight',
            'Lift top leg toward ceiling',
            'Keep leg straight, toes forward',
            'Hold 2 seconds',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/jgh6sGwtTwk',
          difficulty: 'beginner',
          targetArea: 'Glute medius'
        },
        {
          id: 'hip-w2-e4',
          name: 'Quadruped Hip Extension',
          description: 'Activate glute max.',
          instructions: [
            'Start on hands and knees',
            'Keep core engaged',
            'Lift one leg back, keeping knee bent',
            'Squeeze glute at top',
            'Lower and repeat'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/TfaFrU6JVBU',
          difficulty: 'beginner',
          targetArea: 'Gluteus maximus'
        },
        {
          id: 'hip-w2-e5',
          name: 'Standing Hip Flexion',
          description: 'Strengthen hip flexors.',
          instructions: [
            'Stand holding wall for balance',
            'Lift knee toward chest',
            'Hold 2 seconds',
            'Lower with control',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/4Pd0amZsybI',
          difficulty: 'beginner',
          targetArea: 'Hip flexors'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Strengthening',
      exercises: [
        {
          id: 'hip-w3-e1',
          name: 'Single Leg Glute Bridge',
          description: 'Progress glute strength.',
          instructions: [
            'Lie on back, one leg extended',
            'Push through planted foot',
            'Lift hips keeping them level',
            'Hold 3 seconds',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/AVAXhy6pl7o',
          difficulty: 'intermediate',
          targetArea: 'Glutes'
        },
        {
          id: 'hip-w3-e2',
          name: 'Banded Clamshells',
          description: 'Add resistance to clamshells.',
          instructions: [
            'Place band above knees',
            'Lie on side, knees bent',
            'Lift top knee against band resistance',
            'Hold 2 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kNSj0LGUBCI',
          difficulty: 'intermediate',
          targetArea: 'Hip external rotators'
        },
        {
          id: 'hip-w3-e3',
          name: 'Monster Walks',
          description: 'Lateral hip strengthening.',
          instructions: [
            'Place band around thighs above knees',
            'Slight squat position',
            'Take steps sideways',
            'Keep tension on band throughout',
            'Complete steps both directions'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/ce3w-EsNJdQ',
          difficulty: 'intermediate',
          targetArea: 'Glute medius'
        },
        {
          id: 'hip-w3-e4',
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
          videoUrl: 'https://www.youtube.com/embed/LaYLfxwIrXU',
          difficulty: 'intermediate',
          targetArea: 'Glute medius, external rotators'
        },
        {
          id: 'hip-w3-e5',
          name: 'Hip Airplanes',
          description: 'Hip stability and control.',
          instructions: [
            'Stand on one leg',
            'Hinge forward at hips',
            'Rotate hips open and closed',
            'Keep standing leg stable',
            'Complete reps, switch sides'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/0dhLf0mP6zI',
          difficulty: 'intermediate',
          targetArea: 'Hip rotators, stability'
        }
      ]
    },
    {
      week: 4,
      focus: 'Functional Strength & Power',
      exercises: [
        {
          id: 'hip-w4-e1',
          name: 'Bulgarian Split Squat',
          description: 'Single leg strength and balance.',
          instructions: [
            'Rear foot elevated on bench',
            'Lower back knee toward floor',
            'Keep front knee behind toes',
            'Push through front heel to stand',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/2C-uNgKwPLE',
          difficulty: 'advanced',
          targetArea: 'Glutes, quadriceps'
        },
        {
          id: 'hip-w4-e2',
          name: 'Romanian Deadlift',
          description: 'Hip hinge pattern.',
          instructions: [
            'Stand with feet hip-width apart',
            'Push hips back, slight knee bend',
            'Lower weights along legs',
            'Feel hamstring stretch',
            'Squeeze glutes to return'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/jEy_czb3RKA',
          difficulty: 'advanced',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'hip-w4-e3',
          name: 'Lateral Lunges',
          description: 'Strengthen in frontal plane.',
          instructions: [
            'Stand with feet together',
            'Step wide to one side',
            'Bend stepping knee, keep other straight',
            'Push back to start',
            'Alternate sides'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/gwWv7aPcD88',
          difficulty: 'intermediate',
          targetArea: 'Adductors, glutes'
        },
        {
          id: 'hip-w4-e4',
          name: 'Step-Ups with Knee Drive',
          description: 'Functional hip strength.',
          instructions: [
            'Stand in front of step',
            'Step up with one foot',
            'Drive opposite knee to chest',
            'Step back down with control',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/WCFCdxzFBa4',
          difficulty: 'intermediate',
          targetArea: 'Glutes, hip flexors'
        },
        {
          id: 'hip-w4-e5',
          name: 'Hip Mobility Flow',
          description: 'Complete hip mobility sequence.',
          instructions: [
            'Hip flexor stretch - 30 seconds each side',
            '90-90 stretch - 30 seconds each side',
            'Hip circles - 10 each direction each leg',
            'Deep squat hold - 30 seconds',
            'Move smoothly between positions'
          ],
          sets: 1,
          duration: '5 minutes',
          videoUrl: 'https://www.youtube.com/embed/NG9qbvAN3gQ',
          difficulty: 'intermediate',
          targetArea: 'Full hip complex'
        }
      ]
    }
  ]
};
