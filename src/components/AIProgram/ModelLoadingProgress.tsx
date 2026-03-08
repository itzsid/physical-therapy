import React from 'react';
import { WebLLMStatus } from '../../hooks/useWebLLM';

const brand = {
  forest: '#1B3A2D',
  sage: '#6B8F71',
  warm: '#F0E6D8',
  terracotta: '#C4704B',
};

interface ModelLoadingProgressProps {
  status: WebLLMStatus;
  progress: number;
  progressText: string;
}

export const ModelLoadingProgress: React.FC<ModelLoadingProgressProps> = ({ status }) => {
  const getStatusLabel = () => {
    switch (status) {
      case 'generating': return 'Generating your program...';
      default: return 'Loading...';
    }
  };

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 28, border: `1px solid ${brand.warm}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <div style={{
          width: 20, height: 20, borderRadius: '50%',
          border: `2px solid ${brand.terracotta}`,
          borderTopColor: brand.forest,
          animation: 'spin 1s linear infinite',
        }} />
        <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 16, color: brand.forest, margin: 0 }}>
          {getStatusLabel()}
        </h3>
      </div>

      {status === 'generating' && (
        <div style={{ width: '100%', height: 8, borderRadius: 100, background: brand.warm, overflow: 'hidden' }}>
          <div className="shimmer-bar" style={{
            width: '100%', height: 8, borderRadius: 100,
            background: `linear-gradient(to right, ${brand.terracotta}, ${brand.sage})`,
            animation: 'pulseSoft 2s ease-in-out infinite',
          }} />
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
