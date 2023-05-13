import React from 'react';
import '../Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="sorting-options">
        <li><Link className="homebutton" to="/">Home Page</Link></li>
        <li><Link className="productsbutton" to="/products">Products</Link></li>
        <li><Link className="manufacturersbutton" to="/manufacturers">Manufacturers</Link></li>
        <li><Link className="aboutbutton" to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;