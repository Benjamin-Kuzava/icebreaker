import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css';

const Grid = (props) => {
    const { gridHeight, gridWidth, gridLayout, setGridLayout, isCreate } = props;
    const numRows = gridHeight;
    const numCols = gridWidth;

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
            let rows = [];
            if (gridLayout) {
                rows = gridLayout;
            } else {
                for (let i = 0; i < numRows; i++) {
                    rows.push(Array.from(Array(numCols), () => 0));
                }
            }
            return rows;
        });
    }, [numCols, numRows, gridLayout]);

    return (
        <main className ='container' style={{
            gridTemplateColumns: `repeat(${numCols}, 5em)`,
        }}>
            {grid.map((rows, i) => 
            rows.map((col, k) => <div 
            key={`${i}${k}`}
            onClick={() => {
                if (!isCreate) return;
                const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
                })
                setGrid(newGrid);
                setGridLayout(JSON.stringify(newGrid));
            }}
            // consider making this a decoration function
            style={{
                backgroundColor: grid[i][k] ? 'blue' : 'rgba(79, 81, 101, 1)',
            }}/>
            ))}
        </main>
    )
}

export default Grid;