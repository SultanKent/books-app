import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Menu from '../Menu/Menu'

const Header = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
    handleSearch(e.target.value); // Передача текста поиска вверх
  };

  return (
    <div className="Header">
      <Menu />
      <div className="Header_main">
        <h1>The best Books in the world</h1>
        <p>Books are more than just repositories of knowledge; they are vessels of empathy and compassion</p>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Header;