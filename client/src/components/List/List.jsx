import './List.css'
import { NavLink } from 'react-router-dom'

const List = (props) => {

    return (
        <>
        <div className='level-container'>
            {props.levels && props.levels.map(level => (
            <div key={level.id} className='card'>
                <NavLink activeStyle={{ fontWeight: 700 }} to={`/select/${level.id}`}>{`Level: ${level.fields.levelName}`}</NavLink>
                <h6>{`Difficulty: ${level.fields.difficulty}`}</h6>
            </div>
        ))}
        </div>
        </>
    )
}

export default List;