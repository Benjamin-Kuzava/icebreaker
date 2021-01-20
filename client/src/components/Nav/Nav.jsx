import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <Link to='/'>Icebreaker</Link>
            <Link to='/select'>Browse Levels</Link>
            <Link to='/new'>Create Levels</Link>
        </nav>
    )
}

export default Nav;