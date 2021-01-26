import produce from 'immer';

// Check if clicked node is a neighbor of the previous currentNode
const isNeighbor = (iPrev, kPrev, iCurr, kCurr) => {
    return ((kCurr === kPrev && (iCurr === iPrev + 1 || iCurr === iPrev - 1))
    || (iCurr === iPrev && ( kCurr === kPrev + 1 || kCurr === kPrev - 1 )))
}

// When an endNode is clicked, check if there are any unvisited tiles
export const isNodeType = (grid, type) => {
    let result = true;
    for (const rows of grid) {
        for (const node of rows) {
          if (node === type) {
            result = false;
          }
        }
      }
      return result;
}

export const checkNextNode = (grid, i, k, setCount, handleReset) => {
    const newGrid = produce(grid, gridCopy => {
        let iPrev;
        let kPrev;
        // find previous currentPosition and store its col and row
        // look in to useRef or useContext here(?)
        gridCopy.find((rows, i) => 
            rows.some((col, k) => {
                iPrev = i;
                kPrev = k;
                return gridCopy[i][k] === 3;
            }))
        
        // if node is a valid neighbor of currentPosition && is unvisited
        if(isNeighbor(iPrev, kPrev, i, k) && gridCopy[i][k] === 0) {
            gridCopy[iPrev][kPrev] = 4;
            gridCopy[i][k] = grid[i][k] && grid[i][k] !== 2 ? 0 : 3;
        // if node is endNode && all non-walls have been visited
        } else if (gridCopy[i][k] === 2 && isNodeType(gridCopy, 0)) {
            gridCopy[iPrev][kPrev] = 4;
            gridCopy[i][k] = 6;
            setTimeout(() => {
                setCount((prev) => prev + 1);
            }, 750);
        // if node is visited
        } else if (gridCopy[i][k] === 4 && isNeighbor(iPrev, kPrev, i, k)) {
            gridCopy[iPrev][kPrev] = 0;
            gridCopy[i][k] = 5;
            setTimeout(() => {
                handleReset();
            }, 500);
        }
    })
    return newGrid;
}

// Grid CSS w/ Soleil

        // useEffect(() => {
        //     const { innerWidth, innerHeight } = window;

        //     return () => {
        //         if (innerWidth / 2 <= (numCols * 25)) {
        //             console.log('ya too big');
        //         }
        //     }
        // }, [numCols, numRows])


        // useEffect(() => {
        //     gridRef.current.focus();
        //     console.log(gridRef.current.getBoundingClientRect());
        // }, []);
    
        // const { width, height } = gridRef.current.getBoundingClientRect();