'use client';
import React, { useState } from 'react';

export const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  React.useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};
