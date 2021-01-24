import { useEffect } from 'react';

// Listens for user input
export default function useKeyPress(fn) {
    useEffect(() => {
        window.addEventListener('keydown', fn);
        return () => window.removeEventListener('keydown', fn);
    }, [fn])
}

    // const hash = {
    //     up: 0,
    //     right: 1,
    //     down: 2,
    //     left: 3,
    // }

    // Custom hook to track keypresses
        // adapted from https://www.youtube.com/watch?v=DqpPgK13oEM
    // useKeyPress((e) => {
    //     const direction = e.key.replace('Arrow','').toLowerCase();
    //     if (hash.hasOwnProperty(direction)) console.log(direction);
    //     e.preventDefault();
    // })