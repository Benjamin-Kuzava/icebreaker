import "./Create.css";
import Grid from "../Grid/Grid.jsx";
import Form from "../Form/Form.jsx";
import { useState } from "react";

const Create = (props) => {
  const { gridLayout, setGridLayout } = props;
  const [gridWidth, setGridWidth] = useState(3);
  const [gridHeight, setGridHeight] = useState(3);

  return (
    <>
      <div className="create">
        <Form
          gridLayout={gridLayout}
          setGridWidth={setGridWidth}
          setGridHeight={setGridHeight}
          setToggleFetch={props.setToggleFetch}
        />
        <Grid
          className="container"
          isCreate
          setGridLayout={setGridLayout}
          gridWidth={gridWidth}
          gridHeight={gridHeight}
          setGridWidth={setGridWidth}
          setGridHeight={setGridHeight}
        />
      </div>
    </>
  );
};

export default Create;
