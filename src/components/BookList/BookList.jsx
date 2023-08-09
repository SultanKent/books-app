import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../actions/bookActions';
import { Link } from 'react-router-dom';
import './BookList.scss';

const BookList = ({ searchText }) => {
  const dispatch = useDispatch();
  const [bookToShow, setBookToShow] = useState(10);
  const booksData = useSelector((state) => state.books);
  const { loading, books, error } = booksData;
  useEffect(() => {
    dispatch(fetchBooks(filteredBooks));
  }, [dispatch, searchText]);

  useEffect(() => {
    setBookToShow(10);
  }, [booksData]);

  const handleLoadMore = () => {
    setBookToShow((prevValue) => prevValue + 10);
  };

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
            {filteredBooks.slice(0, bookToShow).map((book) => (
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
            <button className="load-button" onClick={handleLoadMore}>
               More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookList