import { useState, useCallback } from 'react';
import { Program } from '../types';
import { buildPrompt } from '../lib/promptBuilder';
import { parseProgram } from '../lib/programParser';
import { matchVideos } from '../lib/videoMatcher';

export type WebLLMStatus =
  | 'idle'
  | 'ready'
  | 'generating'
  | 'error'
  | 'unsupported';

interface UseWebLLMReturn {
  status: WebLLMStatus;
  progress: number;
  progressText: string;
  error: string | null;
  initModel: () => Promise<void>;
  generate: (description: string) => Promise<Program>;
}

// API key is read at runtime from sessionStorage to avoid baking secrets into the JS bundle.
// In local dev, the key is seeded from the VITE_GEMINI_API_KEY env var on first load.
function getApiKey(): string | null {
  const stored = sessionStorage.getItem('gemini_api_key');
  if (stored) return stored;
  // Seed from env var in dev only (Vite inlines this, but the env var should be empty in CI/production builds)
  const envKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
  if (envKey) {
    sessionStorage.setItem('gemini_api_key', envKey);
    return envKey;
  }
  return null;
}

function getGeminiUrl(apiKey: string): string {
  return `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
}

export function useWebLLM(): UseWebLLMReturn {
  const [status, setStatus] = useState<WebLLMStatus>(() =>
    getApiKey() ? 'ready' : 'unsupported'
  );
  const [progress] = useState(100);
  const [progressText] = useState('');
  const [error, setError] = useState<string | null>(
    getApiKey() ? null : 'Gemini API key not configured.'
  );

  const initModel = useCallback(async () => {
    // No model download needed for Gemini API
    setStatus('ready');
  }, []);

  const generate = useCallback(async (description: string): Promise<Program> => {
    const apiKey = getApiKey();
    if (!apiKey) {
      throw new Error('Gemini API key not configured.');
    }

    setStatus('generating');
    setError(null);

    try {
      const messages = buildPrompt(description);

      // Convert chat messages to Gemini format
      const systemInstruction = messages.find(m => m.role === 'system')?.content || '';
      const userMessage = messages.find(m => m.role === 'user')?.content || '';

      const response = await fetch(getGeminiUrl(apiKey), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: 'user', parts: [{ text: userMessage }] }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 8192,
          },
        }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error('AI service is temporarily busy. Please wait a moment and try again.');
        }
        throw new Error(`AI service error (${response.status}). Please try again.`);
      }

      const data = await response.json();
      const output = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!output) {
        throw new Error('No output from Gemini');
      }

      let program = parseProgram(output);
      program.searchQuery = description;
      program = matchVideos(program);

      setStatus('ready');
      return program;
    } catch (err) {
      setStatus('error');
      const message = err instanceof Error ? err.message : 'Generation failed';
      setError(message);
      throw new Error(message);
    }
  }, []);

  return { status, progress, progressText, error, initModel, generate };
}
