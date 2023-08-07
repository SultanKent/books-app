import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../actions/bookActions';
import { Link } from 'react-router-dom';
import './BookList.scss';

const BookList = ({ searchText }) => {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books);
  const { loading, books, error } = booksData;

  const limit = 10;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchBooks(startIndex, limit)); // Запрос всех книг без учета текста поиска
  }, [dispatch, startIndex]);

  const handleLoadMore = () => {
    setStartIndex(startIndex + limit);
  };

  const handleLoadLess = () => {
    if (startIndex - limit >= 0) {
      setStartIndex(startIndex - limit);
    }
  };

  // Фильтрация книг на основе текста поиска
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="book-list">
      {loading ? (
        <p className='Loading'>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div>
          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`} style={{ textDecoration: 'none' }}>
                  <img src={book.image_url} alt="" />
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="button-container">
            <button className="load-button" onClick={handleLoadLess}>
               Less
            </button>
            <button className="load-button" onClick={handleLoadMore}>
               More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList;