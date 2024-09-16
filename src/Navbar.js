import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>Dyt. Emin Tatlılıoğlu</h1>
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/dietitian/">Ana Sayfa</Link></li>
        <li><Link to="/dietitian/recipes">Tarifler</Link></li>
        <li><Link to="/dietitian/blogs">Bloglar</Link></li>
        <li><Link to="/dietitian/about">Hakkında</Link></li>
        <li><Link to="/dietitian/contact"><button className='btn'>İletişim</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;