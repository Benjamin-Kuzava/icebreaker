import './Form.css';
import { useEffect, useState } from 'react';
import { baseURL, config } from '../../services';
import Button from '../Button/Button';
import axios from 'axios';

const Form = (props) => {
    const [levelName, setLevelName] = useState('');
    const [author, setAuthor] = useState('');
    const [width, setWidth] = useState(3);
    const [height, setHeight] = useState(3);
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
        if (levelName !== '' && author !== '' && difficulty !== '') {
            await axios.post(baseURL, { fields: newLevel }, config);
            props.setToggleFetch((prev) => !prev);
        }
    }

    useEffect(() => {
        setGrid(props.gridLayout)
    },[props.gridLayout]);

    return (
        <form action="">
            <h4>LEVEL INFORMATION</h4>
            <div>
                <label htmlFor="levelName">Level Name: </label>
                <input 
                    name="levelName"
                    type="text"
                    value={levelName}
                    onChange={(e) => setLevelName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="author">Author: </label>
                <input 
                    name="author"
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty: </label>
                <input 
                    name="difficulty"
                    type="text"
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                />
            </div>
            <div className="dimensions">
                <label htmlFor="height">Height: </label>
                <input 
                    name="height"
                    type="number"
                    min='3'
                    max='5'
                    value={height}
                    onChange={(e) => {
                        if (e.target.valueAsNumber > 0) {
                            setHeight(e.target.valueAsNumber);
                            props.setGridHeight(e.target.valueAsNumber);
                        }
                    }}
                />
                <label htmlFor="width">Width: </label>
                <input 
                    name="width"
                    type="number"
                    min='3'
                    max='11'
                    value={width}
                    onChange={(e) => {
                        if (e.target.valueAsNumber > 0) {
                            setWidth(e.target.valueAsNumber);
                            props.setGridWidth(e.target.valueAsNumber);
                        }
                    }}
                />
            </div>
            <Button
                value="Submit Level"
                onClick={handleSubmit}
            />
        </form>
    )
}

export default Form;