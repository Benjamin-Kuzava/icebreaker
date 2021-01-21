import './List.css'
import { Link } from 'react-router-dom'

const List = (props) => {

    return (
        <>
        <div className='level-container'>
            {props.levels && props.levels.map(level => (
            <div key={level.id} className='card'>
                <Link to={`/select/${level.id}`}>{`Level: ${level.fields.levelName}`}</Link>
                <h6>{`Difficulty: ${level.fields.difficulty}`}</h6>
            </div>
        ))}
        </div>
        </>
    )
}

export default List;