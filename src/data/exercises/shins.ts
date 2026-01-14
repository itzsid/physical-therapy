import { Program } from '../../types';

export const shinsProgram: Program = {
  id: 'shins-program',
  bodyPart: 'Shins/Calves',
  bodyPartId: 'shins',
  title: 'Shin & Lower Leg Mobility Program',
  description: 'A 4-week program to strengthen shin muscles, prevent shin splints, and improve lower leg function.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Shin Mobility & Pain Relief',
      exercises: [
        {
          id: 'shins-w1-e1',
          name: 'Toe Raises',
          description: 'Basic shin muscle activation.',
          instructions: [
            'Stand with feet flat on floor',
            'Lift toes off ground, keeping heels down',
            'Hold for 2 seconds',
            'Lower slowly',
            'Feel tibialis anterior working'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w1-e2',
          name: 'Calf Stretch',
          description: 'Stretch opposing calf muscles.',
          instructions: [
            'Stand facing wall',
            'One foot back, heel on ground',
            'Lean into wall until stretch felt',
            'Hold for 30 seconds',
            'Switch legs'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius'
        },
        {
          id: 'shins-w1-e3',
          name: 'Ankle Circles',
          description: 'Mobilize ankle joint.',
          instructions: [
            'Sit or stand on one leg',
            'Lift foot off ground',
            'Make slow circles with ankle',
            '10 circles each direction',
            'Switch feet'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Ankle joint'
        },
        {
          id: 'shins-w1-e4',
          name: 'Seated Toe Raises',
          description: 'Shin work in seated position.',
          instructions: [
            'Sit in chair, feet flat',
            'Lift toes while keeping heels down',
            'Hold for 3 seconds',
            'Lower slowly',
            'Feel shin muscles working'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w1-e5',
          name: 'Shin Massage',
          description: 'Self-massage for tight shins.',
          instructions: [
            'Sit with one ankle on opposite knee',
            'Use thumbs to massage along shin bone',
            'Apply gentle pressure',
            'Work from ankle to knee',
            'Spend extra time on tender areas'
          ],
          sets: 1,
          duration: '2 minutes each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        }
      ]
    },
    {
      week: 2,
      focus: 'Building Shin Strength',
      exercises: [
        {
          id: 'shins-w2-e1',
          name: 'Heel Walks',
          description: 'Functional tibialis exercise.',
          instructions: [
            'Stand with toes lifted off ground',
            'Walk forward on heels only',
            'Keep toes pulled up throughout',
            'Walk for 30 seconds',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w2-e2',
          name: 'Toe Taps',
          description: 'Quick shin muscle activation.',
          instructions: [
            'Stand with weight on heels',
            'Rapidly tap toes on floor',
            'Keep heels stationary',
            'Tap for 30 seconds',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w2-e3',
          name: 'Resisted Dorsiflexion',
          description: 'Strengthen with resistance.',
          instructions: [
            'Sit with leg extended',
            'Loop band around foot',
            'Pull toes toward shin against resistance',
            'Hold for 2 seconds',
            'Release slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w2-e4',
          name: 'Toe Curls',
          description: 'Work intrinsic foot muscles.',
          instructions: [
            'Place towel on floor',
            'Use toes to scrunch towel toward you',
            'Release and repeat',
            'Work for 1 minute',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '1 minute',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Foot muscles'
        },
        {
          id: 'shins-w2-e5',
          name: 'Soleus Stretch',
          description: 'Stretch deep calf muscle.',
          instructions: [
            'Stand facing wall',
            'Both knees slightly bent',
            'Lean into wall',
            'Feel stretch in lower calf',
            'Hold 30 seconds each leg'
          ],
          sets: 2,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'beginner',
          targetArea: 'Soleus'
        }
      ]
    },
    {
      week: 3,
      focus: 'Progressive Shin Training',
      exercises: [
        {
          id: 'shins-w3-e1',
          name: 'Single Leg Toe Raises',
          description: 'Unilateral shin work.',
          instructions: [
            'Stand on one leg, holding for balance',
            'Lift toes off ground',
            'Hold for 3 seconds',
            'Lower slowly',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w3-e2',
          name: 'Backward Walking',
          description: 'Functional shin and balance exercise.',
          instructions: [
            'Walk backward slowly',
            'Roll from toe to heel',
            'Keep toes lifted as heel strikes',
            'Walk for 1 minute',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '1 minute',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w3-e3',
          name: 'Elevated Heel Walks',
          description: 'Increased range heel walking.',
          instructions: [
            'Walk up slight incline on heels',
            'Toes pulled up throughout',
            'Take slow, controlled steps',
            'Walk for 30 seconds',
            'Rest and repeat'
          ],
          sets: 3,
          duration: '30 seconds',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w3-e4',
          name: 'Tibialis Raises on Step',
          description: 'Full range shin raises.',
          instructions: [
            'Stand with heels on step edge',
            'Toes hanging off',
            'Pull toes up toward shin',
            'Hold at top',
            'Lower past neutral'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w3-e5',
          name: 'Alphabet Ankles',
          description: 'Ankle mobility exercise.',
          instructions: [
            'Sit or lie with foot elevated',
            'Use foot to write alphabet in air',
            'Move through full range',
            'Complete A-Z',
            'Switch feet'
          ],
          sets: 1,
          reps: 1,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'intermediate',
          targetArea: 'Ankle mobility'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Shin Conditioning',
      exercises: [
        {
          id: 'shins-w4-e1',
          name: 'Tibialis Raise with Hold',
          description: 'Isometric shin strengthening.',
          instructions: [
            'Stand and lift toes high',
            'Hold for 10 seconds',
            'Lower slowly',
            'Minimal rest between reps',
            'Feel the burn in shins'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w4-e2',
          name: 'Weighted Toe Raises',
          description: 'Added resistance for shins.',
          instructions: [
            'Hold light weights or wear weighted vest',
            'Perform toe raises',
            'Control the movement',
            'Focus on quality over speed',
            'Complete all reps with control'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w4-e3',
          name: 'Heel Walk Variations',
          description: 'Multi-directional heel walking.',
          instructions: [
            'Walk forward on heels - 30 seconds',
            'Walk backward on heels - 30 seconds',
            'Walk sideways on heels - 30 seconds each way',
            'Keep toes lifted throughout',
            'Rest between sets'
          ],
          sets: 2,
          duration: '2 minutes total',
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'shins-w4-e4',
          name: 'Single Leg Heel Walk',
          description: 'Balance challenge for shins.',
          instructions: [
            'Hop on one heel',
            'Keep toes lifted',
            'Travel short distance',
            'Switch legs',
            'Focus on control'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Tibialis anterior, balance'
        },
        {
          id: 'shins-w4-e5',
          name: 'Eccentric Tibialis Lowering',
          description: 'Controlled lowering for shin strength.',
          instructions: [
            'Stand on step edge on heels',
            'Lift toes high',
            'Slowly lower toes below step level',
            'Take 5 seconds to lower',
            'Reset and repeat'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/kK4RcvCeIFA',
          difficulty: 'advanced',
          targetArea: 'Tibialis anterior'
        }
      ]
    }
  ]
};
