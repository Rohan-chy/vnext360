'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function IframeNavigationBridge() {
  const router = useRouter();

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'NAVIGATE') {
        router.push(event.data.url);
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [router]);

  return null;
}
