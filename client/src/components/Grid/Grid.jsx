import { useState } from 'react';
import produce from 'immer';
import './Grid.css'

const numRows = 3;
const numCols = 7;

const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
     rows.push(Array.from(Array(numCols), () => 0));
    }

    console.log(rows);
    return rows;
}

const Grid = (props) => {
    const [grid, setGrid] = useState(() => generateEmptyGrid());

    return (
        <main style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 5em)`,
            width: '50vw',
            margin: '0 auto',
            justifyContent: 'center',
        }}>
            {grid.map((rows, i) => 
            rows.map((col, k) => <div 
            key={`${i}${k}`}
            onClick={() => {
                const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                })
                setGrid(newGrid);
            }}
            style={{
                width: '5em',
                height: '5em',
                backgroundColor: grid[i][k] ? 'blue' : undefined,
                border: 'solid 1px #C4FFF9'
            }}/>))}
        </main>
    )
}

export default Grid;