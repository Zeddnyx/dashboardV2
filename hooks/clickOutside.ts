import { useEffect } from 'react';

export function useClickOutside(
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: Function,
) {
  function handleClick(e: globalThis.MouseEvent) {
    if (ref.current !== null && !ref.current.contains(e.target as Node)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
}
