import { useRef, useEffect } from 'react';

export const useSwipe = (ref) => {
    const pos = useRef({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 } });
    const minSwipeDistance = 50;

    const onMouseDown = (ev) => {
        pos.current.start = { x: ev.clientX, y: ev.clientY };
    };

    const onMouseMove = (ev) => {
        pos.current.end = { x: ev.clientX, y: ev.clientY };
    };

    const onMouseUp = (apiObj) => {
        const horDiff = pos.current.end.x - pos.current.start.x;
        const toLeft = horDiff < 0 && Math.abs(horDiff) > minSwipeDistance;
        const toRight = horDiff > 0 && Math.abs(horDiff) > minSwipeDistance;

        if (toLeft) apiObj?.scrollNext();
        if (toRight) apiObj?.scrollPrev();
    };

    useEffect(() => {
        const onTouchMove = (ev) => ev.preventDefault();
        const node = ref.current?.scrollContainer?.current;
        node?.addEventListener('touchmove', onTouchMove, { passive: false });

        return () => node?.removeEventListener('touchmove', onTouchMove);
    }, [ref]);

    return { onMouseDown, onMouseMove, onMouseUp };
};
