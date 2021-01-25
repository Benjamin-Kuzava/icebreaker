import { useState, useEffect } from 'react';
import './Home.css';
import Grid from '../Grid/Grid.jsx';
import GameOver from '../GameOver/GameOver.jsx';

const Home = (props) => {
    const [level, setLevel] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(props.levels.length > 0) {
            setLevel(props.levels.find((level, index) => index === count));
        }
    },[count, props.levels]);

    return (
        <>
            {/* <GameOver /> */}
            {level && <Grid
                isHome 
                gridHeight={level.fields.height} 
                gridWidth={level.fields.width}
                gridLayout={JSON.parse(level.fields.grid)}
                setCount={setCount}
            />}
        </>
    )
}

export default Home;