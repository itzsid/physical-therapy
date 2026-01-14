import { Program } from '../../types';

export const coreProgram: Program = {
  id: 'core-program',
  bodyPart: 'Core/Abs',
  bodyPartId: 'core',
  title: 'Core Stability & Strength Program',
  description: 'A 4-week program to build core stability, strengthen abdominal muscles, and improve overall trunk control.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Core Activation & Awareness',
      exercises: [
        {
          id: 'core-w1-e1',
          name: 'Diaphragmatic Breathing',
          description: 'Learn to engage deep core muscles.',
          instructions: [
            'Lie on back with knees bent',
            'Place hands on belly',
            'Breathe deeply into belly, hands rise',
            'Exhale slowly, draw belly button in',
            'Focus on controlled breathing'
          ],
          sets: 3,
          duration: '1 minute',
          videoUrl: 'https://www.youtube.com/embed/WQHIBf-C-2w',
          difficulty: 'beginner',
          targetArea: 'Deep core, diaphragm'
        },
        {
          id: 'core-w1-e2',
          name: 'Abdominal Bracing',
          description: 'Learn to stabilize the core.',
          instructions: [
            'Lie on back with knees bent',
            'Tighten abs as if bracing for a punch',
            'Hold for 10 seconds',
            'Keep breathing normally',
            'Release and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/WQHIBf-C-2w',
          difficulty: 'beginner',
          targetArea: 'Transverse abdominis'
        },
        {
          id: 'core-w1-e3',
          name: 'Pelvic Tilts',
          description: 'Mobilize lower back and activate core.',
          instructions: [
            'Lie on back with knees bent',
            'Tilt pelvis up, flattening lower back to floor',
            'Tilt pelvis down, creating small arch',
            'Move slowly between positions',
            'Focus on controlled movement'
          ],
          sets: 2,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/dfMiuFsM1o8',
          difficulty: 'beginner',
          targetArea: 'Lower abs, lower back'
        },
        {
          id: 'core-w1-e4',
          name: 'Supine March',
          description: 'Core stability with leg movement.',
          instructions: [
            'Lie on back, knees bent, feet flat',
            'Brace core muscles',
            'Slowly lift one foot a few inches',
            'Lower and lift other foot',
            'Keep lower back still'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/WQHIBf-C-2w',
          difficulty: 'beginner',
          targetArea: 'Deep core'
        },
        {
          id: 'core-w1-e5',
          name: 'Knee to Chest Stretch',
          description: 'Gentle core and back stretch.',
          instructions: [
            'Lie on back',
            'Pull one knee to chest',
            'Hold for 20-30 seconds',
            'Switch legs',
            'Keep opposite leg straight or bent'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/WQHIBf-C-2w',
          difficulty: 'beginner',
          targetArea: 'Lower back, hip flexors'
        }
      ]
    },
    {
      week: 2,
      focus: 'Building Core Endurance',
      exercises: [
        {
          id: 'core-w2-e1',
          name: 'Modified Plank',
          description: 'Build plank endurance.',
          instructions: [
            'Forearms and knees on ground',
            'Body in straight line from head to knees',
            'Keep core tight, hips level',
            'Hold position',
            'Breathe normally throughout'
          ],
          sets: 3,
          duration: '20-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Full core'
        },
        {
          id: 'core-w2-e2',
          name: 'Dead Bug',
          description: 'Core stability with opposite limb movement.',
          instructions: [
            'Lie on back, arms up, knees bent 90 degrees',
            'Lower opposite arm and leg toward floor',
            'Keep lower back pressed to floor',
            'Return to start',
            'Alternate sides'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/WQHIBf-C-2w',
          difficulty: 'beginner',
          targetArea: 'Deep core'
        },
        {
          id: 'core-w2-e3',
          name: 'Bird Dog',
          description: 'Core and back stability exercise.',
          instructions: [
            'Start on hands and knees',
            'Extend opposite arm and leg',
            'Keep back flat, hips level',
            'Hold 5 seconds',
            'Return and switch sides'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/dfMiuFsM1o8',
          difficulty: 'beginner',
          targetArea: 'Core, back extensors'
        },
        {
          id: 'core-w2-e4',
          name: 'Glute Bridge with Core Focus',
          description: 'Core engagement with bridge.',
          instructions: [
            'Lie on back, knees bent',
            'Brace core before lifting',
            'Squeeze glutes, lift hips',
            'Keep core tight throughout',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/FrVfVupelJY',
          difficulty: 'beginner',
          targetArea: 'Core, glutes'
        },
        {
          id: 'core-w2-e5',
          name: 'Partial Curl-Up',
          description: 'Controlled abdominal crunch.',
          instructions: [
            'Lie on back, knees bent',
            'Hands behind head for support',
            'Curl shoulders off floor',
            'Hold 2 seconds',
            'Lower slowly'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Rectus abdominis'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Core Strengthening',
      exercises: [
        {
          id: 'core-w3-e1',
          name: 'Full Plank',
          description: 'Standard plank position.',
          instructions: [
            'Forearms and toes on ground',
            'Body in straight line head to heels',
            'Keep core tight, don\'t let hips sag',
            'Hold position',
            'Breathe steadily'
          ],
          sets: 3,
          duration: '30-45 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Full core'
        },
        {
          id: 'core-w3-e2',
          name: 'Side Plank (Modified)',
          description: 'Strengthen obliques.',
          instructions: [
            'Lie on side, forearm under shoulder',
            'Knees bent, stacked',
            'Lift hips off ground',
            'Hold for time',
            'Switch sides'
          ],
          sets: 3,
          duration: '20-30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Obliques'
        },
        {
          id: 'core-w3-e3',
          name: 'Bicycle Crunches',
          description: 'Rotational core exercise.',
          instructions: [
            'Lie on back, hands behind head',
            'Bring opposite elbow to knee',
            'Extend other leg',
            'Alternate in cycling motion',
            'Keep lower back pressed down'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Obliques, rectus abdominis'
        },
        {
          id: 'core-w3-e4',
          name: 'Reverse Crunch',
          description: 'Target lower abdominals.',
          instructions: [
            'Lie on back, legs up, knees bent 90 degrees',
            'Curl hips off floor toward chest',
            'Use abs, not momentum',
            'Lower slowly',
            'Keep upper back on ground'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Lower abs'
        },
        {
          id: 'core-w3-e5',
          name: 'Mountain Climbers (Slow)',
          description: 'Dynamic core stability.',
          instructions: [
            'Start in push-up position',
            'Drive one knee toward chest',
            'Return and switch legs',
            'Keep hips low and stable',
            'Move slowly and controlled'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Full core, hip flexors'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Core Challenges',
      exercises: [
        {
          id: 'core-w4-e1',
          name: 'Full Side Plank',
          description: 'Advanced oblique strengthening.',
          instructions: [
            'Forearm under shoulder, legs straight',
            'Stack feet or stagger for balance',
            'Lift hips, body in straight line',
            'Hold for time',
            'Switch sides'
          ],
          sets: 3,
          duration: '30-45 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Obliques'
        },
        {
          id: 'core-w4-e2',
          name: 'Plank with Leg Lift',
          description: 'Plank with added instability.',
          instructions: [
            'Start in full plank position',
            'Lift one leg off ground',
            'Hold 5 seconds',
            'Lower and switch legs',
            'Keep hips level'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Core, glutes'
        },
        {
          id: 'core-w4-e3',
          name: 'V-Ups',
          description: 'Advanced full core exercise.',
          instructions: [
            'Lie flat, arms overhead',
            'Simultaneously lift legs and torso',
            'Reach hands toward feet',
            'Create V shape with body',
            'Lower with control'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Full core'
        },
        {
          id: 'core-w4-e4',
          name: 'Russian Twists',
          description: 'Rotational core strength.',
          instructions: [
            'Sit with knees bent, feet elevated',
            'Lean back slightly, keeping back straight',
            'Rotate torso side to side',
            'Touch floor beside hips',
            'Can hold weight for added challenge'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Obliques'
        },
        {
          id: 'core-w4-e5',
          name: 'Hollow Body Hold',
          description: 'Advanced core stability.',
          instructions: [
            'Lie on back, arms overhead',
            'Press lower back into floor',
            'Lift shoulders and legs slightly',
            'Create banana shape',
            'Hold for time'
          ],
          sets: 3,
          duration: '20-30 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Full core'
        }
      ]
    }
  ]
};
