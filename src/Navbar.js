import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>Dyt. Emin Tatlılıoğlu</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/dietitian/" onClick={closeMenu}>Ana Sayfa</Link></li>
        <li><Link to="/dietitian/recipes" onClick={closeMenu}>Tarifler</Link></li>
        <li><Link to="/dietitian/blogs" onClick={closeMenu}>Bloglar</Link></li>
        <li><Link to="/dietitian/about" onClick={closeMenu}>Hakkında</Link></li>
        <li><Link to="/dietitian/contact"><button className='btn' onClick={closeMenu}>İletişim</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;