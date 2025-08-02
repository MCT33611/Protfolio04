
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectPreviewProps {
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
  title: string;
  isLive: boolean;
  setIsLive: (isLive: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export function ProjectPreview({ liveUrl, imageUrl, imageHint, title, isLive, setIsLive, isLoading, setIsLoading }: ProjectPreviewProps) {
  const [showIframe, setShowIframe] = useState(false);

  useEffect(() => {
    // We can't reliably fetch to check liveness due to CORS and other browser security.
    // Instead, we'll try to load the iframe and have a fallback.
    // We assume it's 'live' if a URL is provided and let the iframe load attempt happen.
    if (liveUrl) {
      setShowIframe(true);
      setIsLive(true); // Assume live if URL exists, button state will reflect this
    } else {
      setShowIframe(false);
      setIsLive(false);
    }
    setIsLoading(false);
  }, [liveUrl, setIsLoading, setIsLive]);

  if (isLoading) {
    return (
      <div className="rounded-t-2xl object-cover w-full h-60 bg-secondary/50 flex items-center justify-center">
        <p className="text-muted-foreground">Loading preview...</p>
      </div>
    );
  }
  
  // The logic to render iframe or image is now simplified.
  // We don't need to depend on the isLive state for rendering the preview itself, 
  // as the iframe load handles this visually. The isLive state is for the button.
  if (showIframe) {
    return (
      <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
        <iframe
          src={liveUrl}
          title={title}
          className="rounded-t-2xl object-cover w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
          style={{ transform: 'scale(1)', transformOrigin: '0 0', pointerEvents: 'none' }}
          scrolling="no"
          onError={() => {
            // If the iframe fails to load, we can update the state to show the fallback image.
            setShowIframe(false);
            setIsLive(false);
          }}
        />
         <div className="absolute inset-0"></div>
      </div>
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={title}
      width={600}
      height={400}
      data-ai-hint={imageHint}
      className="rounded-t-2xl object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
    />
  );
}

