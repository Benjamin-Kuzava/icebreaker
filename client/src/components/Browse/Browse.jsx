import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Grid from '../Grid/Grid';
import List from '../List/List';

const LevelBrowse = (props) => {
    const params = useParams();
    let level = [];

    useEffect(() => {
        if(props.levels.length > 0 && params.id) {
            const level = props.levels.find((level) => level.id === params.id);
            console.log(level);
        }
    },[params.id, props.levels]);

    return (
        <>
            <List levels={props.levels}/>
            {level.fields && <Grid gridHeight={level.fields.height} gridWidth={level.fields.width}/>}
        </>
    )
}

export default LevelBrowse;

// useRef to keep the value of level?