import { Program } from '../../types';

export const neckProgram: Program = {
  id: 'neck-program',
  bodyPart: 'Neck',
  bodyPartId: 'neck',
  title: 'Neck Pain Relief & Strengthening',
  description: 'A comprehensive 4-week program to relieve neck pain, improve mobility, and strengthen neck muscles.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Pain Relief & Gentle Mobility',
      exercises: [
        {
          id: 'neck-w1-e1',
          name: 'Chin Tucks',
          description: 'Retract your chin to strengthen deep neck flexors and improve posture.',
          instructions: [
            'Sit or stand with good posture',
            'Gently draw your chin back, creating a "double chin"',
            'Hold for 5 seconds',
            'Return to starting position',
            'Keep your eyes level throughout'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/wQylqaCl8Zo',
          difficulty: 'beginner',
          targetArea: 'Deep neck flexors'
        },
        {
          id: 'neck-w1-e2',
          name: 'Neck Rotation Stretch',
          description: 'Gentle rotation to improve cervical mobility.',
          instructions: [
            'Sit tall with shoulders relaxed',
            'Slowly turn your head to the right',
            'Hold for 15-30 seconds',
            'Return to center',
            'Repeat on the left side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/lsaHHKv_g7Y',
          difficulty: 'beginner',
          targetArea: 'Cervical spine'
        },
        {
          id: 'neck-w1-e3',
          name: 'Upper Trapezius Stretch',
          description: 'Release tension in the upper trapezius muscles.',
          instructions: [
            'Sit tall and grasp the seat with your right hand',
            'Tilt your head to the left',
            'Gently apply pressure with your left hand',
            'Hold for 30 seconds',
            'Repeat on the other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/LT_dFRnmdGs',
          difficulty: 'beginner',
          targetArea: 'Upper trapezius'
        },
        {
          id: 'neck-w1-e4',
          name: 'Levator Scapulae Stretch',
          description: 'Stretch the muscle connecting neck to shoulder blade.',
          instructions: [
            'Sit tall and turn head 45 degrees to the right',
            'Look down toward your armpit',
            'Use your right hand to gently increase the stretch',
            'Hold for 30 seconds',
            'Repeat on the other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/pyP6qE3QWMY',
          difficulty: 'beginner',
          targetArea: 'Levator scapulae'
        },
        {
          id: 'neck-w1-e5',
          name: 'Shoulder Shrugs',
          description: 'Release tension and improve blood flow to neck area.',
          instructions: [
            'Stand or sit with arms at your sides',
            'Raise shoulders up toward ears',
            'Hold for 5 seconds',
            'Release and let shoulders drop',
            'Repeat slowly'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/NAqCVe2mwzM',
          difficulty: 'beginner',
          targetArea: 'Upper trapezius, neck muscles'
        }
      ]
    },
    {
      week: 2,
      focus: 'Improved Range of Motion',
      exercises: [
        {
          id: 'neck-w2-e1',
          name: 'Chin Tucks with Progression',
          description: 'Progress chin tucks with longer holds.',
          instructions: [
            'Perform standard chin tuck',
            'Hold for 10 seconds',
            'Add gentle resistance by placing fingers on chin',
            'Push chin into fingers while holding tuck',
            'Maintain for 5-10 seconds'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/wQylqaCl8Zo',
          difficulty: 'beginner',
          targetArea: 'Deep neck flexors'
        },
        {
          id: 'neck-w2-e2',
          name: 'Neck Flexion Stretch',
          description: 'Gentle forward bend to stretch posterior neck.',
          instructions: [
            'Sit tall with shoulders back',
            'Slowly drop chin toward chest',
            'Clasp hands behind head for gentle pressure',
            'Hold for 30 seconds',
            'Slowly return to neutral'
          ],
          sets: 2,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/8t3o2N-jyiw',
          difficulty: 'beginner',
          targetArea: 'Posterior neck muscles'
        },
        {
          id: 'neck-w2-e3',
          name: 'Neck Extension Exercise',
          description: 'Strengthen posterior neck muscles.',
          instructions: [
            'Sit tall with chin tucked',
            'Place hands on forehead',
            'Press head forward against hands',
            'Hold for 5 seconds',
            'Relax and repeat'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/7k7t3k_2Kec',
          difficulty: 'intermediate',
          targetArea: 'Neck extensors'
        },
        {
          id: 'neck-w2-e4',
          name: 'Side Neck Flexion',
          description: 'Lateral flexion for improved mobility.',
          instructions: [
            'Sit tall with shoulders relaxed',
            'Tilt right ear toward right shoulder',
            'Hold for 15-20 seconds',
            'Return to center',
            'Repeat on left side'
          ],
          sets: 2,
          duration: '20 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/LT_dFRnmdGs',
          difficulty: 'beginner',
          targetArea: 'Lateral neck muscles'
        },
        {
          id: 'neck-w2-e5',
          name: 'Scapular Squeezes',
          description: 'Strengthen mid-back to support neck posture.',
          instructions: [
            'Sit or stand with arms at sides',
            'Squeeze shoulder blades together',
            'Hold for 5 seconds',
            'Release slowly',
            'Keep shoulders down, not shrugged'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/bNmOfyFEDHc',
          difficulty: 'beginner',
          targetArea: 'Rhomboids, mid trapezius'
        }
      ]
    },
    {
      week: 3,
      focus: 'Strength Building',
      exercises: [
        {
          id: 'neck-w3-e1',
          name: 'Isometric Neck Exercises',
          description: 'Strengthen neck in all directions without movement.',
          instructions: [
            'Sit tall with good posture',
            'Place palm on forehead, press head against hand',
            'Hold 10 seconds without moving',
            'Repeat with hand on back of head',
            'Repeat with hand on each side of head'
          ],
          sets: 3,
          duration: '10 seconds each direction',
          videoUrl: 'https://www.youtube.com/embed/3U8M32g5q7Q',
          difficulty: 'intermediate',
          targetArea: 'All neck muscles'
        },
        {
          id: 'neck-w3-e2',
          name: 'Prone Neck Extension',
          description: 'Strengthen posterior neck against gravity.',
          instructions: [
            'Lie face down on bed with head hanging off edge',
            'Keep chin tucked',
            'Slowly lift head to neutral position',
            'Hold for 5 seconds',
            'Lower slowly and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/0l1r7S-o_4A',
          difficulty: 'intermediate',
          targetArea: 'Neck extensors'
        },
        {
          id: 'neck-w3-e3',
          name: 'Deep Neck Flexor Hold',
          description: 'Endurance exercise for deep stabilizers.',
          instructions: [
            'Lie on back with knees bent',
            'Tuck chin and lift head 1 inch off ground',
            'Hold this position',
            'Start with 10 seconds, progress to 30',
            'Keep jaw relaxed throughout'
          ],
          sets: 3,
          duration: '10-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/c7gMiTA5V0I',
          difficulty: 'intermediate',
          targetArea: 'Deep neck flexors'
        },
        {
          id: 'neck-w3-e4',
          name: 'Wall Angels',
          description: 'Improve posture and scapular control.',
          instructions: [
            'Stand with back against wall',
            'Press lower back, upper back, and head to wall',
            'Raise arms to 90 degrees against wall',
            'Slowly slide arms up and down',
            'Maintain contact with wall throughout'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/OxR9rVvBkhY',
          difficulty: 'intermediate',
          targetArea: 'Scapular stabilizers, posture muscles'
        },
        {
          id: 'neck-w3-e5',
          name: 'Resistance Band Rows',
          description: 'Strengthen mid-back for neck support.',
          instructions: [
            'Secure band at chest height',
            'Hold handles with arms extended',
            'Pull hands toward ribs, squeezing shoulder blades',
            'Hold for 2 seconds',
            'Slowly return to start'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/V2ZXnuHn2lU',
          difficulty: 'intermediate',
          targetArea: 'Rhomboids, mid trapezius, lats'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Strengthening & Maintenance',
      exercises: [
        {
          id: 'neck-w4-e1',
          name: 'Advanced Chin Tucks with Band',
          description: 'Add resistance to chin tuck exercise.',
          instructions: [
            'Place resistance band around back of head',
            'Hold band ends in front',
            'Perform chin tuck against band resistance',
            'Hold for 10 seconds',
            'Release and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/NrKvDWPDPU4',
          difficulty: 'advanced',
          targetArea: 'Deep neck flexors'
        },
        {
          id: 'neck-w4-e2',
          name: 'Quadruped Neck Stability',
          description: 'Train neck stability in functional position.',
          instructions: [
            'Start on hands and knees',
            'Keep spine neutral and chin tucked',
            'Slowly lift one arm while maintaining position',
            'Hold for 5 seconds',
            'Alternate arms, keep neck stable'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/H3nN_XCmUYU',
          difficulty: 'advanced',
          targetArea: 'Deep neck stabilizers'
        },
        {
          id: 'neck-w4-e3',
          name: 'Prone Y-T-W Raises',
          description: 'Strengthen entire upper back and neck region.',
          instructions: [
            'Lie face down on floor or bench',
            'Form Y shape with arms, lift and hold 5 seconds',
            'Form T shape with arms, lift and hold 5 seconds',
            'Form W shape with arms, lift and hold 5 seconds',
            'Keep chin tucked throughout'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/IvMpaDJFDVk',
          difficulty: 'advanced',
          targetArea: 'Upper back, rotator cuff, neck extensors'
        },
        {
          id: 'neck-w4-e4',
          name: 'Cervical SNAG Self-Mobilization',
          description: 'Self-mobilization technique for improved mobility.',
          instructions: [
            'Sit with towel wrapped around neck',
            'Cross towel ends in front',
            'Gently pull forward and up at angle',
            'While holding tension, look up slowly',
            'Return to neutral, repeat 5-6 times'
          ],
          sets: 2,
          reps: 6,
          videoUrl: 'https://www.youtube.com/embed/7U_nRz8jIJk',
          difficulty: 'advanced',
          targetArea: 'Cervical joints'
        },
        {
          id: 'neck-w4-e5',
          name: 'Full Neck Mobility Routine',
          description: 'Complete mobility sequence for maintenance.',
          instructions: [
            'Perform 10 slow neck rotations each direction',
            'Perform 10 side bends each direction',
            'Perform 10 chin tucks',
            'Perform 10 neck flexion/extension cycles',
            'Move slowly and controlled throughout'
          ],
          sets: 1,
          duration: '5 minutes',
          videoUrl: 'https://www.youtube.com/embed/2N9ilE5XVPI',
          difficulty: 'intermediate',
          targetArea: 'Full cervical spine'
        }
      ]
    }
  ]
};
