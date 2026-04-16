export const handleNavigation = (url: string) => {
  if (typeof window !== 'undefined' && window.self !== window.top) {
    window.parent.postMessage({ type: 'NAVIGATE', url }, '*');
  } else {
    window.location.href = url;
  }
};
