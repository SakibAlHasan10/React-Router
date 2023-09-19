import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Navbar = () => {
    return (
        <nav>
            <h2>Navbar</h2>
            <Link to={'/'}>Home</Link>
            <NavLink  to={'/about'}>About</NavLink>
            {/* <Link to={'/about'}>About</Link> */}
            <NavLink to={'/contact'}>Contact Us</NavLink>
            {/* <Link to={'/contact'}>Contact us</Link> */}
            <Link to={'/users'}>Users</Link>
            <Link to={'/post'}>Post</Link>
        </nav>
    );
};

export default Navbar;