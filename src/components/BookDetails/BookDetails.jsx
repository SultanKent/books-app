import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../actions/bookActions';
import './BookDetails.scss';

const BookDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://example-data.draftbit.com/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((error) => console.error('Error fetching book details:', error));
  }, [id]);

  const booksData = useSelector((state) => state.books);
  const { books } = booksData;

  const selectedBook = books.find((b) => b.id === parseInt(id));
  const isFavorite = selectedBook ? selectedBook.isFavorite : false;

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(parseInt(id)));
  
    // Update local storage with the new favorite status
    const storedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || {};
    localStorage.setItem(
      'favoriteBooks',
      JSON.stringify({ ...storedBooks, [id]: !isFavorite })
    );
  };

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className='BookDetails'>
      <h2>Book Details</h2>
      <img src={book.image_url} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Author: {book.authors}</p>
      <p>Pages: {book.num_pages}</p>
      <p>Rating: {book.rating}</p>
      <p>Genres: {book.genres}</p>
      <p>Description: {book.description}</p>
      <p>Quote1: {book.Quote1}</p>
      <p>Quote2: {book.Quote2}</p>
      <button onClick={handleFavoriteToggle}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default BookDetails;