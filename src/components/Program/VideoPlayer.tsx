import React from 'react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  // Extract video ID from YouTube URL if it's not already an embed URL
  const getEmbedUrl = (url: string): string => {
    if (url.includes('/embed/')) {
      return url;
    }

    // Handle various YouTube URL formats
    const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    if (videoIdMatch) {
      return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
    }

    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-900">
      <iframe
        src={embedUrl}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
