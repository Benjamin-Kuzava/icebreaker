import { useState, useEffect, useRef } from 'react';
import './Home.css';
import Grid from '../Grid/Grid.jsx';
import Button from '../Button/Button.jsx';
// import GameOver from '../GameOver/GameOver.jsx';

const Home = (props) => {
    const { setGridLayout } = props;
    const [level, setLevel] = useState('');
    const [count, setCount] = useState(0);
    const gridRef = useRef('');

    const handleReset = () => {
        setGridLayout(JSON.parse(gridRef.current.fields.grid));
    }

    useEffect(() => {
        if(props.levels.length > 0) {
            setLevel(props.levels.find((level, index) => index === count));
            gridRef.current = level;
        }
    },[count, props.levels, level]);

    if(!level) {
        return (
            <div className="loading">
                <h2>Loading ...</h2>
            </div>
        )
    } else if (count >= props.levels.length) { //not working
        return (
            <div className="loading">
                <h2>Congradulations! You've completed all available levels.</h2>
                <h2>Head over to Create Levels to add your own.</h2>
            </div>
        )
    }

    return (
        <>
            {/* <GameOver /> */}
            <div className="home">
                <div className="level-info">            
                    <Button 
                        value='Reset'
                        onClick={() => {handleReset()}}
                    />
                    <h2>Level: {level.fields.levelName}</h2>
                    <h3>COUNT: {`${count + 1}/${props.levels.length}`}</h3> 
                </div>
                {<Grid
                    isHome 
                    gridHeight={level.fields.height} 
                    gridWidth={level.fields.width}
                    gridLayout={JSON.parse(level.fields.grid)}
                    setCount={setCount}
                    handleReset={handleReset}
                />}
            </div>
        </>
    )
}

export default Home;