import React from 'react';
import { BodyPart } from '../../types';

interface BodyPartSvgProps {
  view: 'front' | 'back';
  onSelectBodyPart: (bodyPart: BodyPart) => void;
  selectedBodyPart: BodyPart | null;
}

// Body part regions with SVG paths for front and back views
const bodyPartRegions = {
  front: [
    { id: 'neck', name: 'Neck', path: 'M145,60 Q160,55 175,60 L175,90 Q160,95 145,90 Z', cx: 160, cy: 75 },
    { id: 'shoulders', name: 'Shoulders', path: 'M100,90 L145,90 L145,120 L100,110 Z M175,90 L220,90 L220,110 L175,120 Z', cx: 160, cy: 105 },
    { id: 'chest', name: 'Chest', path: 'M120,110 L200,110 L200,160 L120,160 Z', cx: 160, cy: 135 },
    { id: 'arms', name: 'Arms', path: 'M85,110 L100,110 L100,200 L85,200 Z M220,110 L235,110 L235,200 L220,200 Z', cx: 160, cy: 155 },
    { id: 'core', name: 'Core/Abs', path: 'M125,160 L195,160 L195,220 L125,220 Z', cx: 160, cy: 190 },
    { id: 'hips', name: 'Hips', path: 'M115,220 L205,220 L205,250 L115,250 Z', cx: 160, cy: 235 },
    { id: 'quadriceps', name: 'Quadriceps', path: 'M120,250 L155,250 L155,340 L120,340 Z M165,250 L200,250 L200,340 L165,340 Z', cx: 160, cy: 295 },
    { id: 'knees', name: 'Knees', path: 'M125,340 L155,340 L155,370 L125,370 Z M165,340 L195,340 L195,370 L165,370 Z', cx: 160, cy: 355 },
    { id: 'shins', name: 'Shins/Calves', path: 'M128,370 L152,370 L152,430 L128,430 Z M168,370 L192,370 L192,430 L168,430 Z', cx: 160, cy: 400 },
    { id: 'ankles', name: 'Ankles/Feet', path: 'M125,430 L155,430 L155,460 L125,460 Z M165,430 L195,430 L195,460 L165,460 Z', cx: 160, cy: 445 },
  ],
  back: [
    { id: 'neck-back', name: 'Neck', path: 'M145,60 Q160,55 175,60 L175,90 Q160,95 145,90 Z', cx: 160, cy: 75 },
    { id: 'upper-back', name: 'Upper Back', path: 'M110,90 L210,90 L210,160 L110,160 Z', cx: 160, cy: 125 },
    { id: 'lower-back', name: 'Lower Back', path: 'M120,160 L200,160 L200,220 L120,220 Z', cx: 160, cy: 190 },
    { id: 'glutes', name: 'Glutes', path: 'M115,220 L205,220 L205,280 L115,280 Z', cx: 160, cy: 250 },
    { id: 'hamstrings', name: 'Hamstrings', path: 'M120,280 L155,280 L155,350 L120,350 Z M165,280 L200,280 L200,350 L165,350 Z', cx: 160, cy: 315 },
    { id: 'calves-back', name: 'Calves', path: 'M128,350 L152,350 L152,430 L128,430 Z M168,350 L192,350 L192,430 L168,430 Z', cx: 160, cy: 390 },
  ],
};

export const BodyPartSvg: React.FC<BodyPartSvgProps> = ({
  view,
  onSelectBodyPart,
  selectedBodyPart,
}) => {
  const regions = bodyPartRegions[view];

  const handleClick = (region: typeof regions[0]) => {
    const bodyPart: BodyPart = {
      id: region.id,
      name: region.name,
      region: view,
      description: `${region.name} area`,
    };
    onSelectBodyPart(bodyPart);
  };

  return (
    <svg
      viewBox="0 0 320 480"
      className="w-full max-w-xs mx-auto"
      style={{ maxHeight: '60vh' }}
    >
      {/* Body outline */}
      <ellipse cx="160" cy="35" rx="35" ry="35" fill="#FFDAB9" stroke="#D4A574" strokeWidth="2" />

      {/* Neck */}
      <rect x="148" y="65" width="24" height="25" fill="#FFDAB9" stroke="#D4A574" strokeWidth="1" />

      {/* Torso */}
      <path
        d="M100,90 Q80,100 80,150 L80,220 Q80,250 110,280 L110,250 L210,250 L210,280 Q240,250 240,220 L240,150 Q240,100 220,90 Z"
        fill="#FFDAB9"
        stroke="#D4A574"
        strokeWidth="2"
      />

      {/* Arms */}
      <path
        d="M80,100 Q60,110 50,150 L50,200 Q50,210 60,210 L85,210 L85,110 Z"
        fill="#FFDAB9"
        stroke="#D4A574"
        strokeWidth="2"
      />
      <path
        d="M240,100 Q260,110 270,150 L270,200 Q270,210 260,210 L235,210 L235,110 Z"
        fill="#FFDAB9"
        stroke="#D4A574"
        strokeWidth="2"
      />

      {/* Legs */}
      <path
        d="M115,250 L115,430 Q115,450 130,455 L150,455 Q155,450 155,430 L155,250 Z"
        fill="#FFDAB9"
        stroke="#D4A574"
        strokeWidth="2"
      />
      <path
        d="M165,250 L165,430 Q165,450 170,455 L190,455 Q205,450 205,430 L205,250 Z"
        fill="#FFDAB9"
        stroke="#D4A574"
        strokeWidth="2"
      />

      {/* Clickable regions */}
      {regions.map((region) => {
        const isSelected = selectedBodyPart?.id === region.id;
        return (
          <g key={region.id} onClick={() => handleClick(region)} className="cursor-pointer">
            <path
              d={region.path}
              fill={isSelected ? 'rgba(59, 130, 246, 0.5)' : 'rgba(59, 130, 246, 0.1)'}
              stroke={isSelected ? '#2563eb' : '#3b82f6'}
              strokeWidth={isSelected ? 3 : 2}
              className="transition-all duration-200 hover:fill-blue-300/50 hover:stroke-blue-600"
            />
            <text
              x={region.cx}
              y={region.cy}
              textAnchor="middle"
              dominantBaseline="middle"
              className="pointer-events-none text-xs font-medium fill-blue-800"
              style={{ fontSize: '10px' }}
            >
              {region.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
