import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const closeNavbar = () => setToggleMenu(false);

  return (
    <nav className={`navbar ${toggleMenu ? 'open' : ''}`} id='navbar'>
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={logoImg} alt="site logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
          </Link>
          <button type="button" className={`navbar-toggler-btn ${toggleMenu ? 'open' : ''}`} onClick={handleNavbar}>
            <div className={`line ${toggleMenu ? 'open' : ''}`}></div>
            <div className={`line ${toggleMenu ? 'open' : ''}`}></div>
            <div className={`line ${toggleMenu ? 'open' : ''}`}></div>
          </button>
        </div>

        <div className={`navbar-collapse ${toggleMenu ? 'show-navbar-collapse' : ''}`}>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1' onClick={closeNavbar}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
