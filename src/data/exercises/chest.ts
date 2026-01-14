import { Program } from '../../types';

export const chestProgram: Program = {
  id: 'chest-program',
  bodyPart: 'Chest',
  bodyPartId: 'chest',
  title: 'Chest Mobility & Strength Program',
  description: 'A 4-week program to improve chest mobility, strengthen pectoral muscles, and improve posture.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Chest Opening & Mobility',
      exercises: [
        {
          id: 'chest-w1-e1',
          name: 'Doorway Pec Stretch',
          description: 'Open the chest and stretch pectoral muscles.',
          instructions: [
            'Stand in a doorway with arm at 90 degrees',
            'Place forearm on door frame',
            'Step forward until stretch is felt in chest',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 3,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Pectoralis major and minor'
        },
        {
          id: 'chest-w1-e2',
          name: 'Chest Opener Stretch',
          description: 'Counteract rounded shoulder posture.',
          instructions: [
            'Clasp hands behind your back',
            'Straighten arms and lift them up',
            'Squeeze shoulder blades together',
            'Open chest and look slightly up',
            'Hold for 20-30 seconds'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Chest, anterior deltoids'
        },
        {
          id: 'chest-w1-e3',
          name: 'Floor Angels',
          description: 'Improve thoracic mobility and chest opening.',
          instructions: [
            'Lie on back with knees bent',
            'Arms out to sides, elbows bent 90 degrees',
            'Slide arms up overhead along floor',
            'Keep back flat against floor',
            'Return to start position'
          ],
          sets: 2,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/wQylqaCl8Zo',
          difficulty: 'beginner',
          targetArea: 'Chest, thoracic spine'
        },
        {
          id: 'chest-w1-e4',
          name: 'Cat-Cow for Chest',
          description: 'Mobilize spine and open chest.',
          instructions: [
            'Start on hands and knees',
            'Cow: Drop belly, lift chest and head',
            'Cat: Round spine, tuck chin',
            'Focus on opening chest in cow position',
            'Move slowly through full range'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/dfMiuFsM1o8',
          difficulty: 'beginner',
          targetArea: 'Chest, spine'
        },
        {
          id: 'chest-w1-e5',
          name: 'Corner Pec Stretch',
          description: 'Deep stretch for both sides of chest.',
          instructions: [
            'Stand facing a corner',
            'Place forearms on each wall',
            'Lean into corner until stretch is felt',
            'Keep core engaged',
            'Hold for 30 seconds'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Pectoralis major'
        }
      ]
    },
    {
      week: 2,
      focus: 'Activation & Light Strengthening',
      exercises: [
        {
          id: 'chest-w2-e1',
          name: 'Wall Push-Ups',
          description: 'Beginner chest strengthening.',
          instructions: [
            'Stand arm\'s length from wall',
            'Place hands on wall at shoulder height',
            'Bend elbows to bring chest toward wall',
            'Push back to start',
            'Keep body straight throughout'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Pectoralis major'
        },
        {
          id: 'chest-w2-e2',
          name: 'Incline Push-Ups',
          description: 'Progress push-up strength.',
          instructions: [
            'Place hands on elevated surface',
            'Body forms straight line',
            'Lower chest toward surface',
            'Push back up with control',
            'Keep core tight'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Chest, triceps'
        },
        {
          id: 'chest-w2-e3',
          name: 'Chest Squeeze',
          description: 'Isometric chest activation.',
          instructions: [
            'Press palms together in front of chest',
            'Elbows out to sides',
            'Squeeze hands together hard',
            'Hold for 10 seconds',
            'Release and repeat'
          ],
          sets: 3,
          duration: '10 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Pectoralis major'
        },
        {
          id: 'chest-w2-e4',
          name: 'Prone Chest Lift',
          description: 'Strengthen chest and improve posture.',
          instructions: [
            'Lie face down, arms out to sides',
            'Lift chest off floor',
            'Squeeze shoulder blades together',
            'Hold 5 seconds',
            'Lower with control'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/wQylqaCl8Zo',
          difficulty: 'beginner',
          targetArea: 'Chest, upper back'
        },
        {
          id: 'chest-w2-e5',
          name: 'Pec Minor Release',
          description: 'Self-massage for tight chest muscles.',
          instructions: [
            'Use ball against wall or floor',
            'Position below collarbone',
            'Apply gentle pressure',
            'Roll slowly to find tight spots',
            'Hold on tender areas for 30 seconds'
          ],
          sets: 2,
          duration: '1-2 minutes each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Pectoralis minor'
        }
      ]
    },
    {
      week: 3,
      focus: 'Building Chest Strength',
      exercises: [
        {
          id: 'chest-w3-e1',
          name: 'Knee Push-Ups',
          description: 'Modified push-up for strength building.',
          instructions: [
            'Start on hands and knees',
            'Walk hands forward, cross ankles',
            'Lower chest toward floor',
            'Push back up',
            'Keep core engaged throughout'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Chest, triceps'
        },
        {
          id: 'chest-w3-e2',
          name: 'Resistance Band Chest Press',
          description: 'Chest press with band resistance.',
          instructions: [
            'Anchor band behind you',
            'Hold handles at chest level',
            'Press arms forward',
            'Squeeze chest at end of movement',
            'Return with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Pectoralis major'
        },
        {
          id: 'chest-w3-e3',
          name: 'Resistance Band Flyes',
          description: 'Isolate chest muscles with bands.',
          instructions: [
            'Anchor band behind you at chest height',
            'Arms out to sides, slight bend in elbows',
            'Bring hands together in front of chest',
            'Squeeze chest at center',
            'Return slowly to start'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Pectoralis major'
        },
        {
          id: 'chest-w3-e4',
          name: 'Wide Push-Ups on Knees',
          description: 'Target outer chest fibers.',
          instructions: [
            'Hand position wider than shoulders',
            'On knees, body in straight line',
            'Lower chest between hands',
            'Push back up',
            'Feel stretch in chest at bottom'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Outer chest'
        },
        {
          id: 'chest-w3-e5',
          name: 'Decline Push-Ups on Knees',
          description: 'Target upper chest.',
          instructions: [
            'Knees on elevated surface',
            'Hands on floor below shoulders',
            'Lower chest toward floor',
            'Push back up',
            'Keep core tight'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Upper chest'
        }
      ]
    },
    {
      week: 4,
      focus: 'Full Chest Development',
      exercises: [
        {
          id: 'chest-w4-e1',
          name: 'Standard Push-Ups',
          description: 'Full push-up for chest strength.',
          instructions: [
            'Hands slightly wider than shoulders',
            'Body in straight line from head to heels',
            'Lower chest to floor',
            'Push back up',
            'Keep core engaged throughout'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Full chest'
        },
        {
          id: 'chest-w4-e2',
          name: 'Diamond Push-Ups',
          description: 'Target inner chest and triceps.',
          instructions: [
            'Hands together forming diamond shape',
            'Lower chest toward hands',
            'Elbows stay close to body',
            'Push back up',
            'Can do on knees if needed'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Inner chest, triceps'
        },
        {
          id: 'chest-w4-e3',
          name: 'Archer Push-Ups',
          description: 'Unilateral chest strength.',
          instructions: [
            'Wide hand position',
            'Shift weight to one side',
            'Lower toward that hand',
            'Other arm stays straight',
            'Alternate sides'
          ],
          sets: 3,
          reps: 6,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Chest, core'
        },
        {
          id: 'chest-w4-e4',
          name: 'Tempo Push-Ups',
          description: 'Slow controlled push-ups for muscle growth.',
          instructions: [
            'Lower for 3 seconds',
            'Hold at bottom for 1 second',
            'Push up for 2 seconds',
            'Hold at top for 1 second',
            'Maintain perfect form'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Full chest'
        },
        {
          id: 'chest-w4-e5',
          name: 'Push-Up Plus',
          description: 'Strengthen serratus and chest.',
          instructions: [
            'Perform standard push-up',
            'At top, push further to round upper back',
            'Feel shoulder blades spread apart',
            'Return to standard position',
            'Repeat each rep'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Chest, serratus anterior'
        }
      ]
    }
  ]
};
