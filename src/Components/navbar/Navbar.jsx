import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavbarData } from '../../Data/NavbarData';
import './Navbar.css';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  return (
    <div className='navbar'>
      <h2 className='logo'>TraWorld</h2>
      <div className='menu-icon' onClick={handleClick}>
        <i>{clicked ? <FaTimes /> : <FaBars />}</i>
      </div>
      <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
        {NavbarData.map((value, index) => {
            return(
                <li key={index}>
                    <Link onClick={() => window.scroll(0, 0)} className="nav-links" to={value.url}><i>{value.icon}</i>{value.title}</Link>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Navbar
