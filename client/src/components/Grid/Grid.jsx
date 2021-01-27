import { useState, useEffect } from "react";
import produce from "immer";
import "./Grid.css";
import Node from "../Node/Node.jsx";
import { checkNextNode } from "../../logic/logic";

const Grid = (props) => {
  const {
    gridHeight: numRows,
    gridWidth: numCols,
    gridLayout,
    setGridLayout,
    isCreate,
    isHome,
    setCount,
    handleReset,
  } = props;

  //Set node className depending on node type
  const nodeClassification = (grid, i, k) =>
    grid[i][k] === 1
      ? "node-wall"
      : grid[i][k] === 2
      ? "node-end"
      : grid[i][k] === 3
      ? "node-current"
      : grid[i][k] === 4
      ? "node-visited"
      : grid[i][k] === 5
      ? "node-broken"
      : grid[i][k] === 6
      ? "node-finished"
      : "";

  // Generate matrix initialized to zero
  const generateEmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  };

  const [grid, setGrid] = useState(() => generateEmptyGrid());
  const [gridSize, setGridSize] = useState("5em");

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

  // Resize grid based on window size
  useEffect(() => {
    const checkWindowSize = () => {
      if (window.innerWidth <= 400) {
        setGridSize("1.8em");
      } else if (window.innerWidth <= 480) {
        setGridSize("2.5em");
      } else if (window.innerWidth <= 700) {
        setGridSize("3em");
      } else if (window.innerWidth <= 900) {
        setGridSize("4em");
      } else {
        setGridSize("5em");
      }
    };
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  return (
    <main
      className="container"
      style={{
        gridTemplateColumns: `repeat(${numCols}, ${gridSize})`,
        gridTemplateRows: `repeat(${numRows}, ${gridSize})`,
      }}
    >
      {grid.map((rows, i) =>
        rows.map((col, k) => (
          <Node
            className={`node ${nodeClassification(grid, i, k)}`}
            key={`${i}-${k}`}
            isCurrent={i === numRows - 1 && k === Math.ceil((numCols - 1) / 2)}
            isEnd={i === 0 && k === Math.floor((numCols - 1) / 2)}
            isVisited={false}
            isWall={grid[i][k] === 1 ? true : false}
            onClick={(e) => {
              if (isHome) {
                const newGrid = checkNextNode(
                  grid,
                  i,
                  k,
                  setCount,
                  handleReset
                );
                setGrid(newGrid);
              } else if (isCreate) {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][k] = grid[i][k] ? 0 : 1;
                });
                setGrid(newGrid);
                setGridLayout(JSON.stringify(newGrid));
              } else {
                return;
              }
            }}
          />
        ))
      )}
    </main>
  );
};

export default Grid;
