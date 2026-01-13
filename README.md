# Physical Therapy Exercise Program

A React + TypeScript web application that provides personalized physical therapy exercise programs based on body part selection.

## Features

- **Interactive Anatomy View**: Click on front or back view of the human body to select specific muscle groups
- **Pre-defined Programs**: Curated 4-week exercise programs for each body part
- **Video Demonstrations**: YouTube video tutorials for each exercise
- **Step-by-Step Instructions**: Detailed instructions for proper form
- **Progress Tracking**: Track completed exercises with LocalStorage persistence
- **Responsive Design**: Works on desktop and mobile devices

## Body Parts Covered

- Neck
- Shoulders
- Upper Back
- Lower Back
- Hips
- Knees
- Ankles/Feet

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Vitest** - Testing
- **React Testing Library** - Component testing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/physical-therapy.git

# Navigate to project directory
cd physical-therapy

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## Usage

1. Open the application in your browser
2. Select **Front View** or **Back View** to see different body parts
3. Click on a body part you want to strengthen or stretch
4. Browse through the 4-week program
5. Watch video demonstrations for each exercise
6. Mark exercises as complete to track your progress
7. Your progress is automatically saved in your browser

## Project Structure

```
src/
├── components/
│   ├── AnatomyView/     # Body selection interface
│   └── Program/         # Exercise program display
├── data/
│   ├── bodyParts.ts     # Body part definitions
│   └── exercises/       # Pre-defined programs
├── hooks/
│   ├── useLocalStorage.ts
│   ├── useProgress.ts
│   └── useProgram.ts
├── types/               # TypeScript interfaces
├── App.tsx
└── main.tsx
```

## Disclaimer

This application is for educational purposes only. Always consult with a healthcare professional or licensed physical therapist before starting any exercise program, especially if you have existing injuries or medical conditions.

## License

MIT
