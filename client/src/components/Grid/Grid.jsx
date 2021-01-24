import { useState, useEffect } from 'react';
import produce from 'immer';
import './Grid.css';
import Node from '../Node/Node.jsx'
import { checkNextNode } from '../../logic/logic'

const Grid = (props) => {
    const { gridHeight, gridWidth, gridLayout, setGridLayout, isCreate, isHome } = props;
    const numRows = gridHeight;
    const numCols = gridWidth;

    //Gives a class name to each node depending on what kind of node it is
    const nodeClassification = (grid, i, k) => 
        grid[i][k] === 2
        ? 'node-end'
        : grid[i][k] === 3
        ? 'node-current' 
        : grid[i][k] === 4
        ? 'node-visited'
        : grid[i][k] === 1
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

    const [grid, setGrid] = useState(() => generateEmptyGrid());

    useEffect(() => {
        setGrid(() => {
            let rows = [];
            if (gridLayout) {
                rows = gridLayout;
            } else {
                for (let i = 0; i < numRows; i++) {
                    rows.push(Array.from(Array(numCols), () => 0));
                    for (let k = 0; k < numCols; k++) {
                        if (i === numRows - 1 && k === Math.ceil((numCols - 1) / 2)) {
                            rows[i][k] = 3;
                        } else if (i === 0 && k === Math.floor((numCols - 1) / 2)) {
                            rows[i][k] = 2;
                        } else {
                            rows[i][k] = 0;
                        }
                    }
                }
            }
            return rows;
        });
    }, [numCols, numRows, gridLayout]);

    return (
        <main className ='container'
            style={{gridTemplateColumns: `repeat(${numCols}, 5em)`,}}
        >
            {grid.map((rows, i) => 
            rows.map((col, k) => <Node 
                className={`node ${nodeClassification(grid, i, k)}`}
                key={`${i}-${k}`}
                isCurrent={i === numRows - 1 && k === Math.ceil((numCols - 1) / 2)}    
                isEnd={i === 0 && k === Math.floor((numCols - 1) / 2)}
                isVisited={false}
                isWall={grid[i][k] === 1 ? true : false}
                nodeI={i}
                nodeK={k}
                onClick={(e) => {
                    if (isHome) {
                        const newGrid = checkNextNode(grid, i, k)
                        setGrid(newGrid);
                        // handleMouseMovement(e);
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