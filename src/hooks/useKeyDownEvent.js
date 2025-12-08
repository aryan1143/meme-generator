import { useEffect } from "react";

export default function useKeyDownEvent(key, callback) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === key) {
                callback();
            }

        }
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [key, callback]);
}
