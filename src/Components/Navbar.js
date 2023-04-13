import React from 'react';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
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