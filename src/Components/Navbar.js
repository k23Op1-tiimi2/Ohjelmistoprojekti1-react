import React from 'react';
import '../Navbar.css';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="homebutton" to="/">Home Page</Link>
      <h2>Sort by:</h2>
      <ul className="sorting-options">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </nav>
  );
};

export default Navbar;