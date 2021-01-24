import produce from 'immer';

export const isNeighbor = (iPrev, kPrev, iCurr, kCurr) => {
    if ((iCurr === iPrev + 1 && kCurr === kPrev) 
    || (iCurr === iPrev - 1 && kCurr === kPrev) 
    || (iCurr === iPrev && kCurr === kPrev + 1) 
    || (iCurr === iPrev && kCurr === kPrev - 1)) {
        return true;
    }  else {
        return false;
    }
}

const checkForZeroes = (grid) => {
    let result = true
    for (const row of grid) {
        for (const node of row) {
          if (node === 0) {
            result = false;
          }
        }
      }
      return result
}

export const checkNextNode = (grid, i, k) => {
    const newGrid = produce(grid, gridCopy => {
        let iPrev;
        let kPrev;
    gridCopy.map((rows, i) => 
        rows.map((col, k) => {
            if (gridCopy[i][k] === 3) {
            iPrev = i;
            kPrev = k; 
            }
            return 0;
        }))
        if(isNeighbor(iPrev, kPrev, i, k) && gridCopy[i][k] === 0) {
            gridCopy[iPrev][kPrev] = 4;
            gridCopy[i][k] = grid[i][k] && grid[i][k] !== 2 ? 0 : 3;
        } else if (gridCopy[i][k] === 2 && checkForZeroes(gridCopy)) {
            gridCopy[iPrev][kPrev] = 4;
            gridCopy[i][k] = 3;
            console.log('win');
        } else if (gridCopy[i][k] === 4 || (!checkForZeroes(gridCopy) && gridCopy[i][k] === 2)) {
            console.log('Game Over');
        }
    })
    return newGrid;
}





// export const handleKeyPress = (e) => {
//     switch(e.key) {
//         case 'a':
//         case 'ArrowLeft':
//             console.log('left');
//             break;
//         case 'd':
//         case 'ArrowRight':
//             console.log('right');
//             break;
//         case 'w':
//         case 'ArrowUp':
//             console.log('up');
//             break;
//         case 's':
//         case 'ArrowDown':
//             console.log('down');
//             break;
//         default:
//             break;
//     }
// }

// export const handleMouseMovement = (e) => {
//     console.log(e.target.className);