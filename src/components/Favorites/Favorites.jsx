import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../BookList/BookList.scss'

const Favorites = () => {
  const storedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || {};
  const favoriteBooks = useSelector((state) =>
    state.books.books.filter((book) => storedBooks[book.id])
  );

  return (
    <div className='Favorites'>
      <h2>Favorites</h2>
      <ul>
        {favoriteBooks.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
              <img src={book.image_url} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;