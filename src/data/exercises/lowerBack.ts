import { Program } from '../../types';

export const lowerBackProgram: Program = {
  id: 'lower-back-program',
  bodyPart: 'Lower Back',
  bodyPartId: 'lower-back',
  title: 'Lower Back Pain Relief & Core Stability',
  description: 'A 4-week program to relieve lower back pain, improve mobility, and build core stability.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Pain Relief & Gentle Movement',
      exercises: [
        {
          id: 'lb-w1-e1',
          name: 'Knee to Chest Stretch',
          description: 'Gentle stretch to release lower back tension.',
          instructions: [
            'Lie on back with knees bent',
            'Bring one knee toward chest',
            'Hold behind thigh or shin',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/y5EH2TDRB1E',
          difficulty: 'beginner',
          targetArea: 'Lower back, glutes'
        },
        {
          id: 'lb-w1-e2',
          name: 'Pelvic Tilts',
          description: 'Gentle movement to mobilize the lumbar spine.',
          instructions: [
            'Lie on back with knees bent',
            'Flatten lower back against floor',
            'Hold for 5 seconds',
            'Release and arch back slightly',
            'Repeat slowly'
          ],
          sets: 2,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/iN-FPh7r1yg',
          difficulty: 'beginner',
          targetArea: 'Lumbar spine, abdominals'
        },
        {
          id: 'lb-w1-e3',
          name: 'Cat-Cow Stretch',
          description: 'Spinal mobility exercise.',
          instructions: [
            'Start on hands and knees',
            'Arch back up toward ceiling (cat)',
            'Hold 5 seconds',
            'Drop belly toward floor (cow)',
            'Hold 5 seconds, repeat'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kqnua4rHVVA',
          difficulty: 'beginner',
          targetArea: 'Full spine'
        },
        {
          id: 'lb-w1-e4',
          name: 'Supine Twist',
          description: 'Gentle rotation stretch for lower back.',
          instructions: [
            'Lie on back with knees bent',
            'Let knees fall to one side',
            'Keep shoulders on floor',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/b6T_L-RwLks',
          difficulty: 'beginner',
          targetArea: 'Lumbar rotators, obliques'
        },
        {
          id: 'lb-w1-e5',
          name: 'Child\'s Pose',
          description: 'Restorative stretch for lower back.',
          instructions: [
            'Kneel on floor, sit back on heels',
            'Fold forward with arms extended',
            'Let forehead rest on floor',
            'Breathe deeply',
            'Hold for 30-60 seconds'
          ],
          sets: 2,
          duration: '60 seconds',
          videoUrl: 'https://www.youtube.com/embed/qYi0EGMrKW0',
          difficulty: 'beginner',
          targetArea: 'Lower back, lats'
        }
      ]
    },
    {
      week: 2,
      focus: 'Core Activation',
      exercises: [
        {
          id: 'lb-w2-e1',
          name: 'Abdominal Bracing',
          description: 'Learn to engage core properly.',
          instructions: [
            'Lie on back with knees bent',
            'Tighten abs as if bracing for a punch',
            'Don\'t hold your breath',
            'Hold for 10 seconds',
            'Relax and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/KLFUk4D59zQ',
          difficulty: 'beginner',
          targetArea: 'Transverse abdominis'
        },
        {
          id: 'lb-w2-e2',
          name: 'Glute Bridges',
          description: 'Strengthen glutes to support lower back.',
          instructions: [
            'Lie on back with knees bent, feet flat',
            'Squeeze glutes and lift hips',
            'Create straight line from shoulders to knees',
            'Hold 5 seconds at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/OUgsJ8-Vi0E',
          difficulty: 'beginner',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'lb-w2-e3',
          name: 'Dead Bug - Basic',
          description: 'Core stability exercise.',
          instructions: [
            'Lie on back, arms up, knees at 90 degrees',
            'Brace core, press lower back to floor',
            'Lower one leg toward floor',
            'Return and repeat other side',
            'Keep lower back pressed down'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/I5xbsA71v1A',
          difficulty: 'beginner',
          targetArea: 'Core stabilizers'
        },
        {
          id: 'lb-w2-e4',
          name: 'Piriformis Stretch',
          description: 'Release tension in deep hip rotators.',
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
          id: 'lb-w2-e5',
          name: 'Hip Flexor Stretch',
          description: 'Stretch tight hip flexors that can cause back pain.',
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
        }
      ]
    },
    {
      week: 3,
      focus: 'Strength Building',
      exercises: [
        {
          id: 'lb-w3-e1',
          name: 'Bird Dog',
          description: 'Core and back stability exercise.',
          instructions: [
            'Start on hands and knees',
            'Extend opposite arm and leg',
            'Keep hips level and core engaged',
            'Hold 5 seconds',
            'Return and switch sides'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/wiFNA3sqjCA',
          difficulty: 'intermediate',
          targetArea: 'Core, erector spinae, glutes'
        },
        {
          id: 'lb-w3-e2',
          name: 'Side Plank - Modified',
          description: 'Strengthen obliques and QL.',
          instructions: [
            'Lie on side with knees bent',
            'Prop up on elbow',
            'Lift hips off floor',
            'Hold for 15-30 seconds',
            'Repeat on other side'
          ],
          sets: 3,
          duration: '20 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/rexMoyRM-wg',
          difficulty: 'intermediate',
          targetArea: 'Obliques, quadratus lumborum'
        },
        {
          id: 'lb-w3-e3',
          name: 'Superman Hold',
          description: 'Strengthen back extensors.',
          instructions: [
            'Lie face down with arms extended',
            'Lift arms, chest, and legs off floor',
            'Keep head neutral',
            'Hold 5-10 seconds',
            'Lower and repeat'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/z6PJMT2y8GQ',
          difficulty: 'intermediate',
          targetArea: 'Erector spinae, glutes'
        },
        {
          id: 'lb-w3-e4',
          name: 'Single Leg Glute Bridge',
          description: 'Progress glute strength.',
          instructions: [
            'Lie on back, one leg extended',
            'Push through planted foot',
            'Lift hips, keeping them level',
            'Hold 3 seconds',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/AVAXhy6pl7o',
          difficulty: 'intermediate',
          targetArea: 'Glutes, hamstrings'
        },
        {
          id: 'lb-w3-e5',
          name: 'Forearm Plank',
          description: 'Build core endurance.',
          instructions: [
            'Rest on forearms and toes',
            'Keep body in straight line',
            'Engage core, squeeze glutes',
            'Don\'t let hips sag or pike',
            'Hold for prescribed time'
          ],
          sets: 3,
          duration: '20-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/pvIjsG5Svck',
          difficulty: 'intermediate',
          targetArea: 'Full core'
        }
      ]
    },
    {
      week: 4,
      focus: 'Functional Movement & Maintenance',
      exercises: [
        {
          id: 'lb-w4-e1',
          name: 'McGill Big 3 - Curl Up',
          description: 'Safe ab exercise for back health.',
          instructions: [
            'Lie on back, one knee bent, one straight',
            'Place hands under lower back',
            'Lift head and shoulders slightly',
            'Hold 10 seconds',
            'Switch leg position after set'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/2_e4I-brfqs',
          difficulty: 'intermediate',
          targetArea: 'Rectus abdominis'
        },
        {
          id: 'lb-w4-e2',
          name: 'Full Side Plank',
          description: 'Advanced lateral core strength.',
          instructions: [
            'Stack feet or stagger them',
            'Lift body on elbow and feet',
            'Keep body in straight line',
            'Hold for prescribed time',
            'Repeat on other side'
          ],
          sets: 3,
          duration: '20-30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/K2VljzCC16g',
          difficulty: 'advanced',
          targetArea: 'Obliques, QL, glute medius'
        },
        {
          id: 'lb-w4-e3',
          name: 'Hip Hinge Practice',
          description: 'Learn proper bending mechanics.',
          instructions: [
            'Stand with feet hip-width apart',
            'Push hips back while keeping spine neutral',
            'Slight bend in knees',
            'Feel hamstrings stretch',
            'Return to standing by squeezing glutes'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/gwN_nXKVXXI',
          difficulty: 'intermediate',
          targetArea: 'Hamstrings, glutes, back'
        },
        {
          id: 'lb-w4-e4',
          name: 'Dead Bug - Full',
          description: 'Advanced core stability.',
          instructions: [
            'Arms up, knees at 90 degrees',
            'Lower opposite arm and leg simultaneously',
            'Keep lower back pressed to floor',
            'Return and switch sides',
            'Move slowly with control'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/I5xbsA71v1A',
          difficulty: 'advanced',
          targetArea: 'Full core'
        },
        {
          id: 'lb-w4-e5',
          name: 'Spinal Mobility Flow',
          description: 'Complete mobility sequence.',
          instructions: [
            'Perform 10 cat-cow cycles',
            'Hold child\'s pose for 30 seconds',
            'Perform 5 supine twists each side',
            'Finish with 30 second cobra stretch',
            'Move smoothly between positions'
          ],
          sets: 1,
          duration: '5 minutes',
          videoUrl: 'https://www.youtube.com/embed/fvEIwcvL3t0',
          difficulty: 'intermediate',
          targetArea: 'Full lumbar spine'
        }
      ]
    }
  ]
};
