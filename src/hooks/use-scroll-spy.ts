
'use client';

import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(ids: string[], options?: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (observer.current) {
      observer.current.disconnect();
    }

    // Default to the first ID if it exists
    if (elements.length > 0) {
      setActiveId(elements[0].id);
    }
    
    observer.current = new IntersectionObserver((entries) => {
      let bestEntry: IntersectionObserverEntry | null = null;

      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            // Prioritize the entry that is most visible
            if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
                bestEntry = entry;
            }
        }
      });
      
      if (bestEntry) {
        setActiveId(bestEntry.target.id);
      } else {
        // If nothing is intersecting, find the last element that was intersecting
        // This helps when scrolling fast or leaving the viewport
        let lastVisibleId: string | null = null;
        for (let i = elements.length - 1; i >= 0; i--) {
            const el = elements[i];
            const rect = el.getBoundingClientRect();
            if (rect.top <= (options?.rootMargin ? parseInt(options.rootMargin) : 0)) {
                lastVisibleId = el.id;
                break;
            }
        }
        if (lastVisibleId) {
            setActiveId(lastVisibleId);
        }
      }
    }, {
        rootMargin: '-50% 0px -50% 0px', // A horizontal line in the middle of the viewport
        threshold: 0,
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
  }, [ids, options]);

  return activeId;
}
