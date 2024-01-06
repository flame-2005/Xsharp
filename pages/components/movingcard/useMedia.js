import { useEffect, useState } from 'react';

export default function useMedia(queries, values, defaultValue) {
  const isClient = typeof window === 'object';

  const match = () => {
    if (isClient) {
      return values[queries.findIndex(q => window.matchMedia(q).matches)] || defaultValue;
    }
    return defaultValue;
  };

  const [value, set] = useState(match);

  useEffect(() => {
    if (isClient) {
      const handler = () => set(match);
      window.addEventListener('resize', handler);
      return () => window.removeEventListener('resize', handler);
    }
  }, [isClient]);

  return value;
}
