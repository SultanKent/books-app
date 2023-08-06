import React, { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu'; // Импортируем компонент BurgerMenu
import './Menu.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Menu">
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />

      <div className="Menu_books">
        <h1>Books</h1>
      </div>
    </div>
  );
};

export default Menu;