import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Grid from '../Grid/Grid';
import List from '../List/List';

const LevelBrowse = (props) => {
    const params = useParams();


    useEffect(() => {
        if(props.levels.length > 0 && params.id) {
            const level = props.levels.find((level) => level.id === params.id);
            console.log(level);
        }
    },[params.id, props.levels]);

    return (
        <>
            <List levels={props.levels}/>
            <Grid gridHeight={3} gridWidth={3}/>
        </>
    )
}

export default LevelBrowse;