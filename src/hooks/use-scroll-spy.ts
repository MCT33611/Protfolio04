
'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    
    // Disconnect any existing observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Set home as default active section
    if (ids[0]) {
      setActiveId(ids[0]);
    }

    observer.current = new IntersectionObserver((entries) => {
      let currentBestEntry: IntersectionObserverEntry | null = null;
      
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Find the entry with the highest intersection ratio (most visible)
            if (!currentBestEntry || entry.intersectionRatio > currentBestEntry.intersectionRatio) {
                currentBestEntry = entry;
            }
        }
      });
      
      if (currentBestEntry) {
          setActiveId(currentBestEntry.target.id);
      } else {
        // Fallback for when scrolling fast or leaving the viewport,
        // find the last element that was visible above the viewport center
         const sortedEntries = entries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
         const lastVisible = sortedEntries.find(entry => entry.boundingClientRect.top < window.innerHeight / 2);
         if(lastVisible){
            setActiveId(lastVisible.target.id);
         }
      }
    }, {
      rootMargin: '-50% 0px -50% 0px', // A horizontal line in the middle of the viewport
      threshold: [0, 0.25, 0.5, 0.75, 1], // More thresholds for accuracy
      ...options
    });

    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });

    return () => {
      observer.current?.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(','), options]); // Rerun effect if IDs change

  return activeId;
}
