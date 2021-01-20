import { useState } from 'react';
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
        < div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 5em)`,
            width: '50vw',
            margin: '0 auto',
            justifyContent: 'center',
        }}>
            {grid.map((rows, i) => 
            rows.map((col, k) => <div 
            key={`${i}${k}`}
            style={{
                width: '5em',
                height: '5em',
                backgroundColor: grid[i][k] ? 'blue' : undefined,
                border: 'solid 1px black'
            }}/>))}
        </div>
    )
}

export default Grid;