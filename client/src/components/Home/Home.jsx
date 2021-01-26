import { useState, useEffect, useRef } from "react";
import "./Home.css";
import Grid from "../Grid/Grid.jsx";
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";

const Home = (props) => {
  const { setGridLayout } = props;
  const [level, setLevel] = useState("");
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState("hidden");
  const gridRef = useRef("");

  const handleReset = () => {
    setGridLayout(JSON.parse(gridRef.current.fields.grid));
  };

  //   Cycle through levels
  useEffect(() => {
    // if (props.level && count > props.levels.length) {
    //   console.log(count);
    //   console.log(props.levels.length);
    //   setIsFinished("modal");
    // }
    if (props.levels.length > 0) {
      setLevel(props.levels.find((level, index) => index === count));
      gridRef.current = level;
    }
  }, [count, props.levels, level]);

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
        <Modal isFinished={isFinished} setIsFinished={setIsFinished} />
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
