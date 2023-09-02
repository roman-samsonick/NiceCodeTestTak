import { MutableRefObject, useEffect } from 'react';
import { useStableRef } from './useStableRef';

export function useBackdropClick(ref: MutableRefObject<HTMLElement | null>, callback: () => void, active: boolean) {
  const stableCallback = useStableRef(callback);
  const stableActive = useStableRef(active);

  useEffect(() => {
    const handler = (event: Event) => {
      if (!stableActive.current) {
        return;
      }

      if (ref.current && !event.composedPath().includes(ref.current)) {
        stableCallback.current();
        event.stopPropagation();
      }
    };

    document.addEventListener('click', handler, { capture: true });

    return () => document.removeEventListener('click', handler);
  }, []);
}
