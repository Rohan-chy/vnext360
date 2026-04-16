import { useEffect, useRef, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';

export function useIframeRenderer<T>(
  iframeRef: React.RefObject<HTMLIFrameElement | null>
) {
  const [root, setRoot] = useState<Root | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc || (doc as any).__reactRoot) return;

    const reactRoot = createRoot(doc);
    (doc as any).__reactRoot = reactRoot;
    setRoot(reactRoot);
  }, [iframeRef]);

  return root;
}
