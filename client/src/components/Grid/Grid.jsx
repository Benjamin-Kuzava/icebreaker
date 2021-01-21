import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css'


const Grid = (props) => {
    // Determines size of grid. Change into variables later.
    let numRows = props.gridHeight;
    let numCols = props.gridWidth;
    const size = [numRows, numCols];

    console.log(numRows)
    
    // Generate matrix all initialized to zero
    const generateEmptyGrid = () => {
        const rows = [];
        for (let i = 0; i < size[0]; i++) {
            rows.push(Array.from(Array(size[1]), () => 0));
        }
        return rows;
    }
    // Set grid to matrix from generateEmptyGrid
    const [grid, setGrid] = useState(() => generateEmptyGrid());

    useEffect(() => {
        setGrid(generateEmptyGrid)
    }, [numCols, numRows]);

    return (
        <main className ='container' style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 5em)`,
            width: '50vw',
            margin: '0 auto',
            justifyContent: 'center',
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
                props.setGridLayout(JSON.stringify(newGrid))
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