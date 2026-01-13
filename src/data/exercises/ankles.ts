import { Program } from '../../types';

export const anklesProgram: Program = {
  id: 'ankles-program',
  bodyPart: 'Ankles/Feet',
  bodyPartId: 'ankles',
  title: 'Ankle Mobility & Stability Program',
  description: 'A 4-week program to improve ankle mobility, strength, and balance.',
  duration: 4,
  weeks: [
    {
      week: 1,
      focus: 'Mobility & Pain Relief',
      exercises: [
        {
          id: 'ankle-w1-e1',
          name: 'Ankle Circles',
          description: 'Gentle ankle joint mobilization.',
          instructions: [
            'Sit with foot off the ground',
            'Rotate ankle in circles',
            '10 circles clockwise',
            '10 circles counterclockwise',
            'Repeat on other ankle'
          ],
          sets: 2,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/D2G7KO0ypJU',
          difficulty: 'beginner',
          targetArea: 'Ankle joint'
        },
        {
          id: 'ankle-w1-e2',
          name: 'Calf Stretch - Wall',
          description: 'Stretch gastrocnemius muscle.',
          instructions: [
            'Face wall with hands at shoulder height',
            'Step one foot back, heel down',
            'Keep back leg straight',
            'Lean into wall until stretch felt',
            'Hold 30 seconds, switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/b0-rl6qH7C0',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius'
        },
        {
          id: 'ankle-w1-e3',
          name: 'Soleus Stretch',
          description: 'Stretch deeper calf muscle.',
          instructions: [
            'Same position as calf stretch',
            'Bend back knee while keeping heel down',
            'Feel stretch lower in calf',
            'Hold 30 seconds',
            'Repeat on other side'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/b0-rl6qH7C0',
          difficulty: 'beginner',
          targetArea: 'Soleus'
        },
        {
          id: 'ankle-w1-e4',
          name: 'Ankle Alphabet',
          description: 'Improve ankle range of motion.',
          instructions: [
            'Sit with foot elevated',
            'Trace letters A-Z with big toe',
            'Move only at ankle joint',
            'Make letters large',
            'Repeat on other ankle'
          ],
          sets: 1,
          duration: '2 minutes each ankle',
          videoUrl: 'https://www.youtube.com/embed/D2G7KO0ypJU',
          difficulty: 'beginner',
          targetArea: 'Ankle mobility'
        },
        {
          id: 'ankle-w1-e5',
          name: 'Plantar Fascia Release',
          description: 'Release tension in foot arch.',
          instructions: [
            'Place tennis ball under foot',
            'Roll ball under arch',
            'Apply comfortable pressure',
            'Roll for 1-2 minutes',
            'Repeat on other foot'
          ],
          sets: 1,
          duration: '2 minutes each foot',
          videoUrl: 'https://www.youtube.com/embed/s_HI-B2QXXk',
          difficulty: 'beginner',
          targetArea: 'Plantar fascia'
        }
      ]
    },
    {
      week: 2,
      focus: 'Strength Foundation',
      exercises: [
        {
          id: 'ankle-w2-e1',
          name: 'Towel Scrunches',
          description: 'Strengthen foot intrinsic muscles.',
          instructions: [
            'Place towel flat on floor',
            'Sit with foot on towel',
            'Scrunch towel toward you with toes',
            'Spread towel back out',
            'Repeat for prescribed reps'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/3bUVh8o3znk',
          difficulty: 'beginner',
          targetArea: 'Foot intrinsics'
        },
        {
          id: 'ankle-w2-e2',
          name: 'Heel Raises - Double Leg',
          description: 'Strengthen calf muscles.',
          instructions: [
            'Stand with feet hip-width apart',
            'Rise up onto balls of feet',
            'Hold at top for 2 seconds',
            'Lower slowly',
            'Hold wall for balance if needed'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
          difficulty: 'beginner',
          targetArea: 'Gastrocnemius, soleus'
        },
        {
          id: 'ankle-w2-e3',
          name: 'Ankle Dorsiflexion Stretch',
          description: 'Improve ability to bring toes up.',
          instructions: [
            'Face wall in lunge position',
            'Front knee bends toward wall',
            'Keep heel on ground',
            'Feel stretch in front of ankle',
            'Hold 30 seconds, switch sides'
          ],
          sets: 2,
          duration: '30 seconds each side',
          videoUrl: 'https://www.youtube.com/embed/UWloT3yzXfY',
          difficulty: 'beginner',
          targetArea: 'Ankle dorsiflexors'
        },
        {
          id: 'ankle-w2-e4',
          name: 'Resistance Band Dorsiflexion',
          description: 'Strengthen tibialis anterior.',
          instructions: [
            'Sit with leg extended, band around foot',
            'Secure band to fixed object',
            'Pull toes toward shin against resistance',
            'Hold 2 seconds',
            'Release slowly'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/2jS_TGO8xpE',
          difficulty: 'beginner',
          targetArea: 'Tibialis anterior'
        },
        {
          id: 'ankle-w2-e5',
          name: 'Marble Pickup',
          description: 'Improve foot dexterity and strength.',
          instructions: [
            'Place marbles on floor',
            'Pick up one marble at a time with toes',
            'Place in container',
            'Use each foot separately',
            'Complete all marbles'
          ],
          sets: 1,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/3bUVh8o3znk',
          difficulty: 'beginner',
          targetArea: 'Foot intrinsics'
        }
      ]
    },
    {
      week: 3,
      focus: 'Balance & Proprioception',
      exercises: [
        {
          id: 'ankle-w3-e1',
          name: 'Single Leg Balance',
          description: 'Improve ankle stability.',
          instructions: [
            'Stand on one leg',
            'Keep knee slightly bent',
            'Hold for 30 seconds',
            'Use wall for support initially',
            'Progress to no support'
          ],
          sets: 3,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/mFKl2JBBDGU',
          difficulty: 'intermediate',
          targetArea: 'Ankle stabilizers'
        },
        {
          id: 'ankle-w3-e2',
          name: 'Single Leg Heel Raises',
          description: 'Progress calf strength.',
          instructions: [
            'Stand on one leg',
            'Rise up onto ball of foot',
            'Hold at top for 2 seconds',
            'Lower slowly with control',
            'Complete reps, then switch'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/gwLzBJYoWlI',
          difficulty: 'intermediate',
          targetArea: 'Gastrocnemius, soleus'
        },
        {
          id: 'ankle-w3-e3',
          name: 'Band Inversion/Eversion',
          description: 'Strengthen ankle in all directions.',
          instructions: [
            'Sit with band around forefoot',
            'Invert: Turn sole inward against band',
            'Evert: Turn sole outward against band',
            '15 reps each direction',
            'Repeat on other foot'
          ],
          sets: 3,
          reps: 15,
          videoUrl: 'https://www.youtube.com/embed/2jS_TGO8xpE',
          difficulty: 'intermediate',
          targetArea: 'Ankle inverters/everters'
        },
        {
          id: 'ankle-w3-e4',
          name: 'Eyes Closed Balance',
          description: 'Challenge proprioception.',
          instructions: [
            'Stand on one leg',
            'Close eyes',
            'Hold balance as long as possible',
            'Aim for 20-30 seconds',
            'Use wall nearby for safety'
          ],
          sets: 3,
          duration: '20 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/mFKl2JBBDGU',
          difficulty: 'intermediate',
          targetArea: 'Proprioception'
        },
        {
          id: 'ankle-w3-e5',
          name: 'Heel Walks',
          description: 'Strengthen anterior compartment.',
          instructions: [
            'Walk on heels with toes up',
            'Keep toes pulled toward shins',
            'Take small steps',
            'Walk 20-30 steps',
            'Rest and repeat'
          ],
          sets: 3,
          reps: 20,
          videoUrl: 'https://www.youtube.com/embed/5VvEb-WQhXI',
          difficulty: 'intermediate',
          targetArea: 'Tibialis anterior'
        }
      ]
    },
    {
      week: 4,
      focus: 'Advanced Stability & Function',
      exercises: [
        {
          id: 'ankle-w4-e1',
          name: 'Single Leg Balance on Pillow',
          description: 'Challenge stability on unstable surface.',
          instructions: [
            'Stand on pillow with one leg',
            'Keep knee slightly bent',
            'Hold for 30 seconds',
            'Progress to eyes closed',
            'Switch legs'
          ],
          sets: 3,
          duration: '30 seconds each leg',
          videoUrl: 'https://www.youtube.com/embed/mFKl2JBBDGU',
          difficulty: 'advanced',
          targetArea: 'Ankle stabilizers'
        },
        {
          id: 'ankle-w4-e2',
          name: 'Single Leg Heel Raise - Edge',
          description: 'Full range calf strengthening.',
          instructions: [
            'Stand on step with heel off edge',
            'Lower heel below step level',
            'Rise up onto ball of foot',
            'Hold 2 seconds at top',
            'Lower with control'
          ],
          sets: 3,
          reps: 12,
          videoUrl: 'https://www.youtube.com/embed/Cq3hVujp7ZE',
          difficulty: 'advanced',
          targetArea: 'Gastrocnemius, soleus'
        },
        {
          id: 'ankle-w4-e3',
          name: 'Lateral Hops',
          description: 'Dynamic ankle stability.',
          instructions: [
            'Stand on one leg',
            'Hop side to side',
            'Land softly with control',
            'Keep hops small initially',
            'Complete hops, then switch legs'
          ],
          sets: 3,
          reps: 10,
          videoUrl: 'https://www.youtube.com/embed/bGIBZUKRdXs',
          difficulty: 'advanced',
          targetArea: 'Ankle dynamic stability'
        },
        {
          id: 'ankle-w4-e4',
          name: 'Single Leg Squat Reach',
          description: 'Functional ankle and leg strength.',
          instructions: [
            'Stand on one leg',
            'Squat slightly while reaching forward',
            'Keep knee behind toes',
            'Return to standing',
            'Complete reps, switch legs'
          ],
          sets: 3,
          reps: 8,
          videoUrl: 'https://www.youtube.com/embed/z3L2MPh5bIg',
          difficulty: 'advanced',
          targetArea: 'Full lower extremity'
        },
        {
          id: 'ankle-w4-e5',
          name: 'Ankle Mobility Flow',
          description: 'Complete ankle mobility routine.',
          instructions: [
            'Ankle circles - 10 each direction',
            'Calf stretch - 30 seconds each side',
            'Dorsiflexion stretch - 30 seconds each',
            'Toe walks - 20 steps',
            'Heel walks - 20 steps'
          ],
          sets: 1,
          duration: '5 minutes',
          videoUrl: 'https://www.youtube.com/embed/D2G7KO0ypJU',
          difficulty: 'intermediate',
          targetArea: 'Full ankle complex'
        }
      ]
    }
  ]
};
