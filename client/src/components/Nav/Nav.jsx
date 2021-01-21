import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
    return (
        <>
            <input type="checkbox" className='nav-toggle' id='nav-toggle'/>
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/select'>Browse Levels</Link></li>
                <li><Link to='/new'>Create Levels</Link></li>
                </ul>
            </nav>
            <label htmlFor="nav-toggle" className='nav-toggle-label'><span></span></label>
        </>
    )
}

export default Nav;