import { useSetAtom } from 'jotai';
import { throttle } from 'lodash-es'
import { mouseLocationAtom } from '@/store/mouseInfo';
import { useEffect } from 'react';

export function MouseLocationProvider() {
  const setMouseLocation = useSetAtom(mouseLocationAtom);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseMove = throttle((event: MouseEvent) => {
      setMouseLocation({ mouseX: event.clientX, mouseY: event.clientY });
    }, 16);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, [setMouseLocation]);

  return null;
}