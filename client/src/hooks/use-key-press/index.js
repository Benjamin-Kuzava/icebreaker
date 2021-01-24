import { useEffect } from 'react';

// Listens for user input
export default function useKeyPress(fn) {
    useEffect(() => {
        window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, [fn])
}