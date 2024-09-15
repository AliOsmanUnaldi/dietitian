import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Dyt. Emin Tatlılıoğlu</h1>
      <ul>
        <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/recipes">Tarifler</Link></li>
        <li><Link to="/blogs">Bloglar</Link></li>
        <li><Link to="/about">Hakkında</Link></li>
        <li><Link to="/contact"><button className='btn'>İletişim</button></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;