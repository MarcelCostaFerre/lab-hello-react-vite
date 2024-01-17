import logo from '../assets/ironhack-logo-xs.png';
import menu from '../assets/menu-top-xs.png';

function navbar () {
    return (
        <nav>
            <img src={logo} alt='ironhack logo' />
            <img src={menu} alt='menu logo' />
            
        </nav>
    )
}

export default navbar;