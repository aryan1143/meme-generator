//it will return the current position of the mouse relative to the referenced element while dragging

import { useEffect,useState } from "react";

export default function useDrag(ref) {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    useEffect(() => {
        function handleMouseMove(e) {
            const rect = ref.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setPosition({ x, y });
        }
        const element = ref.current;
        ref.current.addEventListener('pointerdown', () => {
            
            if (element) {
                element.addEventListener('pointermove', handleMouseMove);
            }
            return () => {
                element.removeEventListener('pointeremove', handleMouseMove);
            }
        });

        ref.current.addEventListener('pointerup', () => {
            ref.current.removeEventListener('pointermove', handleMouseMove);
        });

    }, [ref.current])


    return position;
}