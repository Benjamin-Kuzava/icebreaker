import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import List from "../List/List";
import "./Browse.css";

const Browse = (props) => {
  const params = useParams();
  const [level, setLevel] = useState("");

  useEffect(() => {
    if (props.levels.length > 0 && params.id) {
      setLevel(props.levels.find((level) => level.id === params.id));
    }
  }, [params.id, props.levels]);

  return (
    <div className="browse">
      {level.fields && (
        <Grid
          gridHeight={level.fields.height}
          gridWidth={level.fields.width}
          gridLayout={JSON.parse(level.fields.grid)}
        />
      )}
      <List levels={props.levels} />
    </div>
  );
};

export default Browse;
