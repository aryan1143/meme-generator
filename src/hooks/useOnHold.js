import { useRef, useCallback } from 'react';

const useOnHold = (callback, delay = 500) => {
  const timerRef = useRef(null);

  const start = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  const startRepetive = useCallback(() => {
    timerRef.current = setInterval(() => {
      callback();
    }, 50);
  }, [callback, delay]);

  const clear = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  return {
    onMouseDown: startRepetive,
    onMouseUp: clear,
    onMouseLeave: clear,
    // For mobile support
    onTouchStart: start, 
    onTouchEnd: clear,
  };
};

export default useOnHold;