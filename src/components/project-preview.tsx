
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
  useEffect(() => {
    const checkUrl = async () => {
      if (!liveUrl) {
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(liveUrl, { mode: 'no-cors' });
        if (response.type === 'opaque' || response.ok) {
          setIsLive(true);
        } else {
          setIsLive(false);
        }
      } catch (error) {
        console.error(`Error checking URL ${liveUrl}:`, error);
        setIsLive(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkUrl();
  }, [liveUrl, setIsLoading, setIsLive]);

  if (isLoading) {
    return (
      <div className="rounded-t-2xl object-cover w-full h-60 bg-secondary/50 flex items-center justify-center">
        <p className="text-muted-foreground">Checking live status...</p>
      </div>
    );
  }

  if (isLive) {
    return (
      <div className="relative w-full h-60 overflow-hidden rounded-t-2xl">
        <iframe
          src={liveUrl}
          title={title}
          className="rounded-t-2xl object-cover w-full h-full border-0"
          sandbox="allow-scripts allow-same-origin"
          style={{ transform: 'scale(1)', transformOrigin: '0 0', pointerEvents: 'none' }}
          scrolling="no"
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
