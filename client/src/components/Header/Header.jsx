import Nav from '../Nav/Nav.jsx';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <h1 className='logo'>Icebreaker</h1>
            <Nav />
        </header>
    )
}

export default Header;