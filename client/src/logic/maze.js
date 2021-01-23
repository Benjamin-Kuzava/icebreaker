let grid = [[0, 0, 1], [0, 0, 0], [1, 0, 0]]
let currentPosition = []

export const handleKeyPress = (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            console.log('left');
            break;
        case 'ArrowRight':
            console.log('right');
            break;
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
    }
}


