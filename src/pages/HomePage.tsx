import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnatomyView } from '../components/AnatomyView';
import { BodyPart, Program } from '../types';
import { useWebLLM } from '../hooks/useWebLLM';
import { useAIPrograms } from '../hooks/useAIPrograms';
import { AIInputForm } from '../components/AIProgram/AIInputForm';
import { ModelLoadingProgress } from '../components/AIProgram/ModelLoadingProgress';
import { AIProgramHistory } from '../components/AIProgram/AIProgramHistory';
import { ProgramView } from '../components/Program';

const brand = {
  forest: '#1B3A2D',
  sage: '#6B8F71',
  mint: '#A8D5BA',
  cream: '#FAF6F1',
  warm: '#F0E6D8',
  terracotta: '#C4704B',
  charcoal: '#2C2C2C',
  stone: '#8C8577',
};

type PageState = 'input' | 'loading' | 'result';

const ApiKeySetup: React.FC<{ onSave: (key: string) => void }> = ({ onSave }) => {
  const [key, setKey] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (key.trim()) {
      onSave(key.trim());
      setSaved(true);
    }
  };

  if (saved) return null;

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: 28, border: `1px solid ${brand.warm}` }}>
      <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: brand.forest, margin: '0 0 6px' }}>
        Set Up AI Programs
      </h2>
      <p style={{ fontSize: 13, color: brand.stone, lineHeight: 1.6, marginBottom: 16 }}>
        To generate personalized exercise programs, enter your{' '}
        <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" style={{ color: brand.terracotta, textDecoration: 'underline' }}>
          Google Gemini API key
        </a>. Your key stays in your browser and is never sent to our servers.
      </p>
      <form onSubmit={handleSave} style={{ display: 'flex', gap: 10 }}>
        <input
          type="password"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Paste your Gemini API key"
          style={{
            flex: 1, padding: '12px 16px', borderRadius: 100,
            border: `2px solid ${brand.warm}`, fontSize: 14,
            fontFamily: "'DM Sans', sans-serif", color: brand.charcoal,
            background: brand.cream,
          }}
        />
        <button
          type="submit"
          disabled={!key.trim()}
          style={{
            padding: '12px 24px', borderRadius: 100, border: 'none',
            background: key.trim() ? brand.forest : brand.warm,
            color: key.trim() ? 'white' : brand.stone,
            fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600,
            cursor: key.trim() ? 'pointer' : 'not-allowed',
            whiteSpace: 'nowrap' as const,
          }}
        >
          Save Key
        </button>
      </form>
      <p style={{ fontSize: 11, color: brand.stone, marginTop: 10, opacity: 0.7 }}>
        Free tier includes 15 requests/minute. Key is stored in sessionStorage only.
      </p>
    </div>
  );
};

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { status, progress, progressText, generate, setApiKey } = useWebLLM();
  const { programs: savedPrograms, saveProgram, deleteProgram } = useAIPrograms();
  const [pageState, setPageState] = useState<PageState>('input');
  const [currentProgram, setCurrentProgram] = useState<Program | null>(null);
  const [generationError, setGenerationError] = useState<string | null>(null);

  const handleSelectBodyPart = (bodyPart: BodyPart) => {
    navigate(`/program/${bodyPart.id}`);
  };

  const handleSubmit = useCallback(async (description: string) => {
    setGenerationError(null);
    setPageState('loading');
    try {
      const program = await generate(description);
      setCurrentProgram(program);
      setPageState('result');
    } catch (err) {
      setGenerationError(err instanceof Error ? err.message : 'Failed to generate program');
      setPageState('input');
    }
  }, [generate]);

  const handleSave = useCallback(() => {
    if (currentProgram) saveProgram(currentProgram);
  }, [currentProgram, saveProgram]);

  const handleGenerateAnother = useCallback(() => {
    setCurrentProgram(null);
    setPageState('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleSelectSaved = useCallback((program: Program) => {
    setCurrentProgram(program);
    setPageState('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackFromResult = useCallback(() => {
    setCurrentProgram(null);
    setPageState('input');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const isLoading = pageState === 'loading';

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      {/* Hero Section */}
      <div style={{ padding: '48px 24px 24px' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase' as const,
          color: brand.terracotta,
          marginBottom: 12,
          fontWeight: 600,
        }}>
          AI-Powered Recovery
        </div>
        <h1 style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(32px, 5vw, 48px)',
          color: brand.forest,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: 0,
        }}>
          What's bothering you?
        </h1>
        <p style={{ fontSize: 15, color: brand.stone, lineHeight: 1.7, marginTop: 12, maxWidth: 480 }}>
          Describe your pain, stiffness, or mobility issue &mdash; and get a personalized exercise program.
        </p>
      </div>

      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column' as const, gap: 20 }}>
        {/* Result state */}
        {pageState === 'result' && currentProgram && (
          <div className="animate-fade-in">
            <ProgramView
              program={currentProgram}
              bodyPart={{ id: 'ai-custom', name: currentProgram.bodyPart, region: 'front', description: 'AI-generated program' }}
              onBack={handleBackFromResult}
            />
            <div style={{ padding: '16px 0', display: 'flex', gap: 12 }}>
              <button
                onClick={handleSave}
                style={{ flex: 1, padding: '14px 32px', borderRadius: 100, border: 'none', background: brand.forest, color: 'white', fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                Save Program
              </button>
              <button
                onClick={handleGenerateAnother}
                style={{ flex: 1, padding: '14px 32px', borderRadius: 100, border: `2px solid ${brand.forest}`, background: 'transparent', color: brand.forest, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
              >
                Generate Another
              </button>
            </div>
          </div>
        )}

        {isLoading && <ModelLoadingProgress status={status} progress={progress} progressText={progressText} />}

        {pageState === 'input' && (
          <>
            {generationError && (
              <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 16, padding: 16, color: '#b91c1c', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                {generationError}
              </div>
            )}
            {status === 'unsupported' ? (
              <ApiKeySetup onSave={setApiKey} />
            ) : (
              <AIInputForm onSubmit={handleSubmit} isDisabled={isLoading} />
            )}
          </>
        )}

        {pageState === 'input' && (
          <AIProgramHistory programs={savedPrograms} onSelect={handleSelectSaved} onDelete={deleteProgram} />
        )}
      </div>

      {/* Divider */}
      <div style={{ padding: '40px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1, height: 1, background: brand.warm }} />
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
            color: brand.stone,
            whiteSpace: 'nowrap' as const,
          }}>
            Or browse by body part
          </span>
          <div style={{ flex: 1, height: 1, background: brand.warm }} />
        </div>
      </div>

      {/* Anatomy browser */}
      <AnatomyView onSelectBodyPart={handleSelectBodyPart} selectedBodyPart={null} />
    </div>
  );
};
