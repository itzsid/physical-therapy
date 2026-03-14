import { useState, useCallback } from 'react';
import { Program } from '../types';
import { buildPrompt } from '../lib/promptBuilder';
import { parseProgram } from '../lib/programParser';
import { matchVideos } from '../lib/videoMatcher';

export type WebLLMStatus =
  | 'idle'
  | 'ready'
  | 'generating'
  | 'error';

interface UseWebLLMReturn {
  status: WebLLMStatus;
  progress: number;
  progressText: string;
  error: string | null;
  initModel: () => Promise<void>;
  generate: (description: string) => Promise<Program>;
}

// In production, requests go through the Cloudflare Worker proxy (no API key in the browser).
// In dev, you can override with VITE_GEMINI_PROXY_URL env var.
const PROXY_URL = import.meta.env.DEV
  ? '/physical-therapy/api/gemini'
  : (import.meta.env.VITE_GEMINI_PROXY_URL || 'https://pt-gemini-proxy.itzsid.workers.dev');

export function useWebLLM(): UseWebLLMReturn {
  const [status, setStatus] = useState<WebLLMStatus>('ready');
  const [progress] = useState(100);
  const [progressText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const initModel = useCallback(async () => {
    // No model download needed for Gemini API
    setStatus('ready');
  }, []);

  const generate = useCallback(async (description: string): Promise<Program> => {
    setStatus('generating');
    setError(null);

    try {
      const messages = buildPrompt(description);

      // Convert chat messages to Gemini format
      const systemInstruction = messages.find(m => m.role === 'system')?.content || '';
      const userMessage = messages.find(m => m.role === 'user')?.content || '';

      const maxRetries = 3;
      let lastError: Error | null = null;
      let data: any = null;

      for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
          if (attempt > 0) {
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
          }

          const response = await fetch(PROXY_URL, {
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
              lastError = new Error('AI service is temporarily busy. Please wait a moment and try again.');
              continue;
            }
            lastError = new Error(`AI service error (${response.status}). Please try again.`);
            continue;
          }

          data = await response.json();
          lastError = null;
          break;
        } catch (fetchErr) {
          lastError = fetchErr instanceof Error ? fetchErr : new Error('Failed to fetch');
        }
      }

      if (lastError || !data) {
        throw lastError || new Error('Failed to fetch after retries');
      }
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
