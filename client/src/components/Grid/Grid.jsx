import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css';
import Node from '../Node/Node.jsx'
import { handleMouseMovement } from '../../logic/logic'
import useKeyPress from '../../hooks/use-key-press'

const Grid = (props) => {
    const { gridHeight, gridWidth, gridLayout, setGridLayout, isCreate, isHome } = props;
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

    const hash = {
        up: 0,
        right: 1,
        down: 2,
        left: 3,
    }

    // Custom hook to track keypresses
        // adapted from https://www.youtube.com/watch?v=DqpPgK13oEM
    useKeyPress((e) => {
        const direction = e.key.replace('Arrow','').toLowerCase();
        if (hash.hasOwnProperty(direction)) console.log(direction);
        // e.preventDefault();
    })

    return (
        <main className ='container'
            style={{gridTemplateColumns: `repeat(${numCols}, 5em)`,}}
        >
            {grid.map((rows, i) => 
            rows.map((col, k) => <Node 
            className={`node ${nodeClassification(grid, i, k)}`}
            key={`${i},${k}`}
            nodePosition={`${i},${k}`}
            onClick={(e) => {
                if (isHome) {
                    handleMouseMovement(e);
                } else if (isCreate) {
                    const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = grid[i][k] ? 0 : 1;
                    })
                    setGrid(newGrid);
                    setGridLayout(JSON.stringify(newGrid));
                } else {
                    return;
                }
            }}
            />
            ))}
        </main>
    )
}

export default Grid;