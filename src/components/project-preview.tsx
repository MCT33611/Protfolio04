'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ProjectPreviewProps {
  liveUrl: string;
  imageUrl: string;
  imageHint: string;
  title: string;
}

export function ProjectPreview({ liveUrl, imageUrl, imageHint, title }: ProjectPreviewProps) {
  const [isLive, setIsLive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUrl = async () => {
      if (!liveUrl) {
        setIsLoading(false);
        return;
      }
      try {
        // We use 'no-cors' mode to avoid CORS errors, as we only need to know if the request succeeds, not read the response.
        // This is a simple check and might not be 100% accurate for all server configurations.
        const response = await fetch(liveUrl, { mode: 'no-cors' });
        // 'no-cors' requests always have a status of 0, so we check the type of response.
        // 'opaque' means the request was successful but we can't access the content.
        if (response.type === 'opaque' || response.ok) {
          setIsLive(true);
        }
      } catch (error) {
        console.error(`Error checking URL ${liveUrl}:`, error);
        setIsLive(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkUrl();
  }, [liveUrl]);

  if (isLoading) {
    return (
      <div className="rounded-t-2xl object-cover w-full h-60 bg-secondary/50 flex items-center justify-center">
        <p className="text-muted-foreground">Checking live status...</p>
      </div>
    );
  }

  if (isLive) {
    return (
      <iframe
        src={liveUrl}
        title={title}
        className="rounded-t-2xl object-cover w-full h-60 border-0"
        sandbox="allow-scripts allow-same-origin"
      />
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
