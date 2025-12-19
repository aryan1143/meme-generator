import { useEffect, useState } from "react";


export default function useZoom(ref) {
    const [touch1Pos, sesTouch1Pos] = useState({ x: 0, y: 0 });
    const [touch2Pos, sesTouch2Pos] = useState({ x: 0, y: 0 });

    function handletouchMove(e) {
        e.preventDefault();
        if (e.touch.length == 2) {
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
        }
    }

    useEffect(() => {
        const element = ref.current;
        element.addEventListener('touchStart', () => {
            if (element) {
                element.addEventListener('touchMove', handletouchMove);
            } else {
                element.removeEventListener('touchMove', handletouchMove);
            }
        })
        element.addEventListener('touchEnd', ()=>{
            element.removeEventListener('touchMove', handletouchMove);
        })

        return (
            element.removeEventListener('touchStart')
        )
    }, [ref.current])

    return 

}