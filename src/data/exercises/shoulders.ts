import { Program } from '../../types';

export const shouldersProgram: Program = {
  id: 'shoulders-program',
  bodyPart: 'Shoulders',
  bodyPartId: 'shoulders',
  title: 'Shoulder Mobility & Strength Program',
  description: 'A 4-week program to improve shoulder mobility, strengthen the rotator cuff, and reduce pain.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Pain Relief & Gentle Mobility',
      exercises: [
        {
          id: 'shoulder-w1-e1',
          name: 'Pendulum Exercises',
          description: 'Gentle movement to reduce stiffness and pain.',
          instructions: [
            'Lean forward with one hand on a table',
            'Let affected arm hang down',
            'Gently swing arm in small circles',
            'Perform clockwise then counterclockwise',
            'Keep movement pain-free'
          ],
          sets: 2,
          duration: '1 minute each direction',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Shoulder joint'
        },
        {
          id: 'shoulder-w1-e2',
          name: 'Cross-Body Shoulder Stretch',
          description: 'Stretch the posterior shoulder capsule.',
          instructions: [
            'Bring right arm across body at shoulder height',
            'Use left hand to gently pull arm closer',
            'Hold for 30 seconds',
            'Keep shoulder blade down',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Posterior deltoid, rotator cuff'
        },
        {
          id: 'shoulder-w1-e3',
          name: 'Doorway Pec Stretch',
          description: 'Open the chest and front of shoulders.',
          instructions: [
            'Stand in doorway with arm at 90 degrees',
            'Place forearm on door frame',
            'Step forward until stretch is felt',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Pectoralis, anterior deltoid'
        },
        {
          id: 'shoulder-w1-e4',
          name: 'Shoulder Blade Squeezes',
          description: 'Activate and strengthen scapular muscles.',
          instructions: [
            'Sit or stand with good posture',
            'Squeeze shoulder blades together',
            'Hold for 5 seconds',
            'Release slowly',
            'Keep shoulders down throughout'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Rhomboids, mid trapezius'
        },
        {
          id: 'shoulder-w1-e5',
          name: 'Passive Shoulder Flexion',
          description: 'Improve overhead range of motion.',
          instructions: [
            'Lie on back holding a stick',
            'Use good arm to lift affected arm overhead',
            'Go as far as comfortable',
            'Hold for 5-10 seconds',
            'Lower slowly and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Shoulder flexors'
        }
      ]
    },
    {
      week: 2,
      focus: 'Range of Motion Improvement',
      exercises: [
        {
          id: 'shoulder-w2-e1',
          name: 'Wall Slides',
          description: 'Improve shoulder flexion with support.',
          instructions: [
            'Stand facing wall with forearms on wall',
            'Slowly slide arms up the wall',
            'Go as high as comfortable',
            'Hold for 2 seconds at top',
            'Slide back down with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Shoulder flexors, serratus anterior'
        },
        {
          id: 'shoulder-w2-e2',
          name: 'External Rotation Stretch',
          description: 'Improve external rotation mobility.',
          instructions: [
            'Lie on back with elbow at 90 degrees',
            'Let forearm fall outward toward floor',
            'Use other hand to gently increase stretch',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Internal rotators'
        },
        {
          id: 'shoulder-w2-e3',
          name: 'Sleeper Stretch',
          description: 'Stretch the posterior shoulder capsule.',
          instructions: [
            'Lie on affected side',
            'Flex shoulder and elbow to 90 degrees',
            'Use other hand to push forearm toward floor',
            'Hold for 30 seconds',
            'Keep pressure gentle'
          ],
          sets: 2,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'intermediate',
          targetArea: 'Posterior capsule'
        },
        {
          id: 'shoulder-w2-e4',
          name: 'Prone T Raises',
          description: 'Strengthen mid-back and posterior shoulder.',
          instructions: [
            'Lie face down with arms out to sides',
            'Thumbs pointing up',
            'Lift arms toward ceiling',
            'Squeeze shoulder blades together',
            'Hold 3 seconds, lower slowly'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Rhomboids, posterior deltoid'
        },
        {
          id: 'shoulder-w2-e5',
          name: 'Internal Rotation Stretch',
          description: 'Improve internal rotation mobility.',
          instructions: [
            'Reach behind back as if scratching',
            'Use towel to assist if needed',
            'Hold stretch for 30 seconds',
            'Don\'t force the movement',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'intermediate',
          targetArea: 'External rotators'
        }
      ]
    },
    {
      week: 3,
      focus: 'Rotator Cuff Strengthening',
      exercises: [
        {
          id: 'shoulder-w3-e1',
          name: 'Side-Lying External Rotation',
          description: 'Strengthen external rotators.',
          instructions: [
            'Lie on side with light weight or band',
            'Keep elbow at side bent 90 degrees',
            'Rotate forearm toward ceiling',
            'Hold 2 seconds at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'intermediate',
          targetArea: 'Infraspinatus, teres minor'
        },
        {
          id: 'shoulder-w3-e2',
          name: 'Internal Rotation with Band',
          description: 'Strengthen internal rotators.',
          instructions: [
            'Stand with band attached at elbow height',
            'Keep elbow at side bent 90 degrees',
            'Rotate forearm across body',
            'Control the return movement',
            'Keep elbow fixed at side'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'intermediate',
          targetArea: 'Subscapularis'
        },
        {
          id: 'shoulder-w3-e3',
          name: 'Prone Y Raises',
          description: 'Strengthen lower trapezius.',
          instructions: [
            'Lie face down with arms forming Y shape',
            'Thumbs pointing up',
            'Lift arms toward ceiling',
            'Hold 3 seconds at top',
            'Lower slowly'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Lower trapezius'
        },
        {
          id: 'shoulder-w3-e4',
          name: 'High Pull with Band',
          description: 'Strengthen posterior deltoid and upper back.',
          instructions: [
            'Hold band with arms extended in front',
            'Pull band apart bringing hands to shoulders',
            'Squeeze shoulder blades at end range',
            'Control return to start',
            'Keep elbows high'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Posterior deltoid, rhomboids'
        },
        {
          id: 'shoulder-w3-e5',
          name: 'Serratus Punch',
          description: 'Strengthen serratus anterior.',
          instructions: [
            'Lie on back holding weight above chest',
            'Push weight toward ceiling',
            'Protract shoulder blade off the floor',
            'Hold 2 seconds',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Serratus anterior'
        }
      ]
    },
    {
      week: 4,
      focus: 'Functional Strength & Stability',
      exercises: [
        {
          id: 'shoulder-w4-e1',
          name: 'Push-Up Plus',
          description: 'Strengthen serratus and chest with scapular control.',
          instructions: [
            'Start in push-up position (knees OK)',
            'Perform push-up',
            'At top, push further to round upper back',
            'Feel shoulder blades spread apart',
            'Return to start position'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Serratus anterior, pectoralis'
        },
        {
          id: 'shoulder-w4-e2',
          name: 'Band Pull-Aparts',
          description: 'Strengthen posterior shoulder and upper back.',
          instructions: [
            'Hold band at shoulder width, arms extended',
            'Pull band apart until it touches chest',
            'Squeeze shoulder blades together',
            'Return with control',
            'Keep arms straight throughout'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Posterior deltoid, rhomboids'
        },
        {
          id: 'shoulder-w4-e3',
          name: 'Shoulder I-Y-T-W Series',
          description: 'Complete shoulder strengthening sequence.',
          instructions: [
            'Lie face down or stand bent over',
            'I: Arms straight down, lift thumbs up',
            'Y: Arms at 45 degrees, lift thumbs up',
            'T: Arms out to sides, lift thumbs up',
            'W: Elbows bent, external rotation lift'
          ],
          sets: 2,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Full rotator cuff, upper back'
        },
        {
          id: 'shoulder-w4-e4',
          name: 'Single Arm Rows',
          description: 'Strengthen lats and improve stability.',
          instructions: [
            'Place one hand and knee on bench',
            'Hold weight in other hand',
            'Pull weight to ribcage',
            'Squeeze shoulder blade at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Latissimus dorsi, rhomboids'
        },
        {
          id: 'shoulder-w4-e5',
          name: 'Overhead Press',
          description: 'Functional overhead strength.',
          instructions: [
            'Stand with weights at shoulder height',
            'Press weights overhead',
            'Keep core engaged',
            'Lower with control',
            'Keep wrists straight'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Deltoids, upper trapezius'
        }
      ]
    }
  ]
};
