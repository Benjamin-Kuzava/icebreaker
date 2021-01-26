import Nav from '../Nav/Nav.jsx';
import iceberg from '../../icons/iceberg.svg'
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='logo'>
                <img src={iceberg} alt="logo" height={50}/>
                <h1 className='title'>Icebreaker</h1>
            </div>
            <Nav />
        </header>
    )
}

export default Header;