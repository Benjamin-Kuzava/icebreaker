import { useState, useEffect, useRef } from "react";
import "./Home.css";
import Grid from "../Grid/Grid.jsx";
import Button from "../Button/Button.jsx";

const Home = (props) => {
  const { setGridLayout, setIsFinished, levels, history } = props;
  const [level, setLevel] = useState("");
  const [count, setCount] = useState(0);
  const gridRef = useRef("");

  const handleReset = () => {
    setGridLayout(JSON.parse(gridRef.current.fields.grid));
  };

  //   Cycle through levels
  // If game is finished, push to Create page and reset
  useEffect(() => {
    if (levels.length > 0) {
      if (count >= levels.length) {
        setIsFinished(true);
        setTimeout(() => {
          setIsFinished(false);
          history.push("/new");
        }, 2000);
      }
      setLevel(levels.find((level, index) => index === count));
      gridRef.current = level;
    }
  }, [count, levels, level, history, setIsFinished]);

  if (!level) {
    return (
      <div className="loading">
        <h2>Loading ...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="home">
        <div className="level-info">
          <Button
            value="Reset"
            onClick={() => {
              handleReset();
            }}
          />
          <h2>{level.fields.levelName}</h2>
          <h3>COUNT: {`${count + 1}/${props.levels.length}`}</h3>
        </div>
        {
          <Grid
            isHome
            gridHeight={level.fields.height}
            gridWidth={level.fields.width}
            gridLayout={JSON.parse(level.fields.grid)}
            setCount={setCount}
            handleReset={handleReset}
          />
        }
      </div>
    </>
  );
};

export default Home;
