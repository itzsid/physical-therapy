import React, { useState } from 'react';
import { BodyPart } from '../../types';
import { BodyPartSvg } from './BodyPartSvg';

const brand = {
  forest: '#1B3A2D',
  sage: '#6B8F71',
  mint: '#A8D5BA',
  cream: '#FAF6F1',
  warm: '#F0E6D8',
  terracotta: '#C4704B',
  stone: '#8C8577',
};

interface AnatomyViewProps {
  onSelectBodyPart: (bodyPart: BodyPart) => void;
  selectedBodyPart: BodyPart | null;
}

export const AnatomyView: React.FC<AnatomyViewProps> = ({
  onSelectBodyPart,
  selectedBodyPart,
}) => {
  const [view, setView] = useState<'front' | 'back'>('front');

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 24px 16px' }}>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: brand.forest, marginBottom: 4, textAlign: 'center' }}>
        Select a Body Part
      </h2>
      <p style={{ fontSize: 14, color: brand.stone, marginBottom: 24, textAlign: 'center' }}>
        Tap an area to view its exercise program
      </p>

      {/* View Toggle */}
      <div style={{ display: 'inline-flex', borderRadius: 100, padding: 4, background: brand.warm, marginBottom: 24 }}>
        {(['front', 'back'] as const).map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              padding: '8px 24px',
              borderRadius: 100,
              border: 'none',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s',
              background: view === v ? brand.terracotta : 'transparent',
              color: view === v ? 'white' : brand.forest,
            }}
          >
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      {/* Body SVG Container */}
      <div style={{
        width: '100%',
        maxWidth: 380,
        borderRadius: 20,
        padding: 20,
        background: 'white',
        border: `1px solid ${brand.warm}`,
        boxShadow: '0 2px 12px rgba(27,58,45,0.06)',
      }}>
        <BodyPartSvg
          view={view}
          onSelectBodyPart={onSelectBodyPart}
          selectedBodyPart={selectedBodyPart}
        />
      </div>

      {/* Selected body part indicator */}
      {selectedBodyPart && (
        <div className="animate-slide-up" style={{
          marginTop: 16,
          padding: '10px 20px',
          borderRadius: 100,
          background: `${brand.terracotta}15`,
          border: `1px solid ${brand.terracotta}40`,
        }}>
          <p style={{ fontSize: 13, color: brand.terracotta, margin: 0 }}>
            Selected: <strong>{selectedBodyPart.name}</strong>
          </p>
        </div>
      )}

      <p style={{ marginTop: 20, fontSize: 12, color: brand.stone, opacity: 0.7 }}>
        Toggle front and back to explore all muscle groups
      </p>
    </div>
  );
};
