import './Form.css';
import { useEffect, useState } from 'react';
import { baseURL, config } from '../../services'
import axios from 'axios';

const Form = (props) => {
    const [levelName, setLevelName] = useState('');
    const [author, setAuthor] = useState('');
    const [width, setWidth] = useState(1);
    const [height, setHeight] = useState(1);
    const [grid, setGrid] = useState('');
    const [difficulty, setDifficulty] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newLevel = {
            levelName,
            author,
            width,
            height,
            grid,
            difficulty
        };
        await axios.post(baseURL, { fields: newLevel }, config);
        props.setToggleFetch((prev) => !prev);
    }

    useEffect(() => {
        setGrid(props.gridLayout)
    },[props.gridLayout]);

    return (
        <form action="">
            <label htmlFor="levelName">Level Name: </label>
            <input 
                name="levelName"
                type="text"
                value={levelName}
                onChange={(e) => setLevelName(e.target.value)}
            />
            <label htmlFor="author">Author: </label>
            <input 
                name="author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="height">Height: </label>
            <input 
                name="height"
                type="number"
                min='1'
                max='11'
                value={height}
                onChange={(e) => {
                    setHeight(e.target.valueAsNumber);
                    props.setGridHeight(e.target.valueAsNumber);
                }}
            />
            <label htmlFor="width">Width: </label>
            <input 
                name="width"
                type="number"
                min='1'
                max='11'
                value={width}
                onChange={(e) => {
                    setWidth(e.target.valueAsNumber);
                    props.setGridWidth(e.target.valueAsNumber);
                }}
            />
            <label htmlFor="difficulty">Difficulty: </label>
            <input 
                name="difficulty"
                type="text"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Submit Level</button>
        </form>
    )
}

export default Form;