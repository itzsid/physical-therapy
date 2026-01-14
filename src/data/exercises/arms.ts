import { Program } from '../../types';

export const armsProgram: Program = {
  id: 'arms-program',
  bodyPart: 'Arms',
  bodyPartId: 'arms',
  title: 'Arm Strength & Mobility Program',
  description: 'A 4-week program to strengthen biceps, triceps, and forearms while improving elbow mobility.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Mobility & Light Activation',
      exercises: [
        {
          id: 'arms-w1-e1',
          name: 'Wrist Circles',
          description: 'Mobilize wrist joints.',
          instructions: [
            'Extend arms in front of you',
            'Make fists with hands',
            'Rotate wrists in circles',
            '10 circles clockwise, then counterclockwise',
            'Keep arms still'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Wrists'
        },
        {
          id: 'arms-w1-e2',
          name: 'Bicep Stretch',
          description: 'Stretch the front of the arm.',
          instructions: [
            'Extend arm with palm facing up',
            'Use other hand to pull fingers down',
            'Straighten elbow fully',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each arm',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Biceps'
        },
        {
          id: 'arms-w1-e3',
          name: 'Tricep Stretch',
          description: 'Stretch the back of the arm.',
          instructions: [
            'Raise arm overhead',
            'Bend elbow, hand reaching down back',
            'Use other hand to gently push elbow back',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each arm',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Triceps'
        },
        {
          id: 'arms-w1-e4',
          name: 'Forearm Flexor Stretch',
          description: 'Stretch forearm muscles.',
          instructions: [
            'Extend arm with palm facing up',
            'Use other hand to pull fingers toward floor',
            'Keep elbow straight',
            'Hold for 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each arm',
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Forearm flexors'
        },
        {
          id: 'arms-w1-e5',
          name: 'Elbow Circles',
          description: 'Mobilize elbow joints.',
          instructions: [
            'Bend elbows with hands on shoulders',
            'Make circles with elbows',
            '10 circles forward',
            '10 circles backward',
            'Keep movements controlled'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Elbow joints'
        }
      ]
    },
    {
      week: 2,
      focus: 'Basic Arm Strengthening',
      exercises: [
        {
          id: 'arms-w2-e1',
          name: 'Wall Bicep Curls',
          description: 'Isometric bicep engagement.',
          instructions: [
            'Stand with back against wall',
            'Arms at sides, elbows bent 90 degrees',
            'Press backs of hands into wall',
            'Hold for 10 seconds',
            'Release and repeat'
          ],
          sets: 3,
          duration: '10 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Biceps'
        },
        {
          id: 'arms-w2-e2',
          name: 'Tricep Dips on Chair',
          description: 'Strengthen triceps with body weight.',
          instructions: [
            'Sit on chair edge, hands gripping seat',
            'Slide hips off seat',
            'Lower body by bending elbows',
            'Push back up',
            'Keep back close to chair'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Triceps'
        },
        {
          id: 'arms-w2-e3',
          name: 'Wrist Curls',
          description: 'Strengthen forearm flexors.',
          instructions: [
            'Rest forearm on thigh, wrist over knee',
            'Hold light weight, palm up',
            'Curl wrist up',
            'Lower slowly',
            'Complete reps, switch arms'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Forearm flexors'
        },
        {
          id: 'arms-w2-e4',
          name: 'Reverse Wrist Curls',
          description: 'Strengthen forearm extensors.',
          instructions: [
            'Rest forearm on thigh, wrist over knee',
            'Hold light weight, palm down',
            'Curl wrist up',
            'Lower slowly',
            'Complete reps, switch arms'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Fpv8MZrGF7I',
          difficulty: 'beginner',
          targetArea: 'Forearm extensors'
        },
        {
          id: 'arms-w2-e5',
          name: 'Arm Circles',
          description: 'Warm up and activate arm muscles.',
          instructions: [
            'Extend arms out to sides',
            'Make small circles forward',
            'Gradually increase circle size',
            'Reverse direction',
            '30 seconds each direction'
          ],
          sets: 2,
          duration: '30 seconds each direction',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'beginner',
          targetArea: 'Shoulders, arms'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Arm Strength',
      exercises: [
        {
          id: 'arms-w3-e1',
          name: 'Bicep Curls with Band',
          description: 'Resistance band bicep curls.',
          instructions: [
            'Stand on band, hold handles',
            'Keep elbows at sides',
            'Curl hands toward shoulders',
            'Squeeze biceps at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Biceps'
        },
        {
          id: 'arms-w3-e2',
          name: 'Tricep Extensions with Band',
          description: 'Overhead tricep work.',
          instructions: [
            'Hold band behind back',
            'One hand low, one hand high behind head',
            'Extend top arm overhead',
            'Keep elbow close to head',
            'Lower and repeat, switch arms'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Triceps'
        },
        {
          id: 'arms-w3-e3',
          name: 'Hammer Curls',
          description: 'Target brachialis and forearms.',
          instructions: [
            'Hold weights with palms facing each other',
            'Keep elbows at sides',
            'Curl weights to shoulders',
            'Thumbs stay pointing up',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Brachialis, forearms'
        },
        {
          id: 'arms-w3-e4',
          name: 'Close-Grip Push-Ups',
          description: 'Push-ups emphasizing triceps.',
          instructions: [
            'Hands close together under chest',
            'Lower chest to hands',
            'Keep elbows close to body',
            'Push back up',
            'Can do on knees if needed'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Triceps, chest'
        },
        {
          id: 'arms-w3-e5',
          name: 'Farmer Carries',
          description: 'Grip and forearm endurance.',
          instructions: [
            'Hold weights at sides',
            'Stand tall with shoulders back',
            'Walk forward with controlled steps',
            'Keep core engaged',
            'Walk for 30 seconds'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'intermediate',
          targetArea: 'Forearms, grip'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Arm Development',
      exercises: [
        {
          id: 'arms-w4-e1',
          name: 'Concentration Curls',
          description: 'Isolated bicep work.',
          instructions: [
            'Sit with elbow on inner thigh',
            'Hold weight with palm up',
            'Curl weight to shoulder',
            'Squeeze bicep at top',
            'Lower slowly, switch arms'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Biceps'
        },
        {
          id: 'arms-w4-e2',
          name: 'Skull Crushers',
          description: 'Lying tricep extensions.',
          instructions: [
            'Lie on back holding weights',
            'Arms extended over chest',
            'Bend elbows lowering weights to forehead',
            'Extend arms back up',
            'Keep upper arms still'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Triceps'
        },
        {
          id: 'arms-w4-e3',
          name: 'Zottman Curls',
          description: 'Combined bicep and forearm exercise.',
          instructions: [
            'Curl weights up with palms up',
            'At top, rotate palms to face down',
            'Lower weights with palms down',
            'Rotate palms up at bottom',
            'Repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Biceps, forearms'
        },
        {
          id: 'arms-w4-e4',
          name: 'Diamond Push-Ups',
          description: 'Advanced tricep push-up.',
          instructions: [
            'Hands together forming diamond shape',
            'Lower chest to hands',
            'Elbows stay close to body',
            'Push back up',
            'Keep core tight'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Triceps'
        },
        {
          id: 'arms-w4-e5',
          name: '21s Bicep Curls',
          description: 'High volume bicep finisher.',
          instructions: [
            '7 reps from bottom to halfway',
            '7 reps from halfway to top',
            '7 full range of motion reps',
            'No rest between portions',
            'Use lighter weight than normal'
          ],
          sets: 2,
          reps: 21,
          videoUrl: 'https://www.youtube.com/embed/D7tpdLLDXJE',
          difficulty: 'advanced',
          targetArea: 'Biceps'
        }
      ]
    }
  ]
};
