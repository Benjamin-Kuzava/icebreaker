import { useState, useEffect } from 'react';
import './Home.css';
import Grid from '../Grid/Grid.jsx';
import Button from '../Button/Button.jsx';
import GameOver from '../GameOver/GameOver.jsx';

const Home = (props) => {
    const [level, setLevel] = useState('');
    const [count, setCount] = useState(0);

    useEffect(() => {
        if(props.levels.length > 0) {
            setLevel(props.levels.find((level, index) => index === count));
        }
    },[count, props.levels]);

    if(!level) {
        return (
            <div className="loading">
                <h2>Loading ...</h2>
            </div>
        )
    };

    return (
        <>
            {/* <GameOver /> */}
            <div className="home">
                <div className="level-info">
                    <Button 
                        value='Reset'
                        onClick={() => console.log(test)}
                    />
                    <h2>Level: {level.fields.levelName}</h2>
                    <h3>Count: {`${count}/${props.levels.length - 1}`}</h3> 
                </div>
                {<Grid
                    isHome 
                    gridHeight={level.fields.height} 
                    gridWidth={level.fields.width}
                    gridLayout={JSON.parse(level.fields.grid)}
                    setCount={setCount}
                />}
            </div>
        </>
    )
}

export default Home;