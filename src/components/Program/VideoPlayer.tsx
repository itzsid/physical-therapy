import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  const getEmbedUrl = (url: string): string => {
    if (url.includes('/embed/')) return url;
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (videoIdMatch) return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    return url;
  };

  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: '16/9',
      borderRadius: 14, overflow: 'hidden',
      background: '#1B3A2D',
      boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.1)',
    }}>
      <iframe
        src={getEmbedUrl(videoUrl)}
        title={title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
