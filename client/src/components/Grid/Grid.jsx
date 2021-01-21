import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css'

const Grid = (props) => {
    // Determines size of grid. Change into variables later.
    const numRows = props.gridHeight;
    const numCols = props.gridWidth;
    // Generate matrix all initialized to zero
    const generateEmptyGrid = () => {
        const rows = [];
        for (let i = 0; i < numRows; i++) {
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    }
    // Set grid to matrix from generateEmptyGrid
    const [grid, setGrid] = useState(() => generateEmptyGrid());

    useEffect(() => {
        setGrid(() => {
            const rows = [];
            for (let i = 0; i < numRows; i++) {
                rows.push(Array.from(Array(numCols), () => 0));
            }
            return rows;
        });
    }, [numCols, numRows]);

    return (
        <main className ='container' style={{
            gridTemplateColumns: `repeat(${numCols}, 5em)`,
        }}>
            {grid.map((rows, i) => 
            rows.map((col, k) => <div 
            key={`${i}${k}`}
            // Create shallow copy of grid, toggle state of the individual square
            onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
                })
                setGrid(newGrid);
                props.setGridLayout(JSON.stringify(newGrid));
            }}
            // consider making this a decoration function
            style={{
                backgroundColor: grid[i][k] ? 'blue' : undefined,
            }}/>
            ))}
        </main>
    )
}

export default Grid;