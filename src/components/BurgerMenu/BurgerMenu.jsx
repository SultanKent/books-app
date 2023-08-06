import React from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.scss';

const BurgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`BurgerMenu ${isOpen ? 'open' : ''}`}>
      <div className="burger-icon" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className="menu-list">
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/favorites" >Favorites</Link></li>
        <li><Link to="/genre" >Genre</Link></li>
        <li><Link to="/contact" >Contact</Link></li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
