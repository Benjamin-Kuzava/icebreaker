import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css';
import { handleKeyPress } from '../../logic/maze'

const Grid = (props) => {
    const { gridHeight, gridWidth, gridLayout, setGridLayout, isCreate } = props;
    const numRows = gridHeight;
    const numCols = gridWidth;

    //Gives a class name to each node depending on what kind of node it is
    const nodeClassification = (grid, i, k) => 
        i === numRows - 1 && k === Math.ceil((numCols - 1) / 2)
        ? 'node-start' 
        : i === 0 && k === Math.floor((numCols - 1) / 2)
        ? 'node-end'
        : grid[i][k]
        ? 'node-wall'
        : "";

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

    useEffect(() => {
        console.log('grid did mount');
        document.getElementById('container').focus();
    },[]);

    return (
        <main className ='container'
            id='container'
            onKeyDown={handleKeyPress}
            tabIndex='0' 
            style={{gridTemplateColumns: `repeat(${numCols}, 5em)`,}}
        >
            {grid.map((rows, i) => 
            rows.map((col, k) => <div 
            className={`node ${nodeClassification(grid, i, k)}`}
            key={`${i}-${k}`}
            onClick={() => {
                if (!isCreate) return;
                const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
                })
                setGrid(newGrid);
                setGridLayout(JSON.stringify(newGrid));
            }}
            />
            ))}
        </main>
    )
}

export default Grid;