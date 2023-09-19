import { Link } from 'react-router-dom';
import './Header.css'
const Navbar = () => {
    return (
        <nav>
            <h2>Navbar</h2>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contact'}>Contact us</Link>
            <Link to={'/users'}>Users</Link>
        </nav>
    );
};

export default Navbar;