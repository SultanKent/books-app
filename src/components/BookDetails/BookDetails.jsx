import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.scss'

const BookDetails = () => {
  const { id } = useParams(); // Получаем id из параметров маршрута
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Здесь вы можете выполнить запрос к API для получения данных о книге по id
    // Пример запроса (предполагая, что вы используете fetch или axios):
    fetch(`https://example-data.draftbit.com/books/${id}`)
      .then(response => response.json())
      .then(data => setBook(data))
      .catch(error => console.error('Error fetching book details:', error));
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <div className='BookDetails'>
      <h2>Book Details</h2>
      <img src={book.image_url} alt={book.title} />
      <h3>{book.title}</h3>
      <p>Author: {book.authors}</p>
      <p>pages: {book.num_pages}</p>
      <p>rating {book.rating}</p>
      <p>genres: {book.genres}</p>
      <p>Description: {book.description}</p>
      <p>Quote1: {book.Quote1}</p>
      <p>Quote2: {book.Quote2}</p>
    </div>
  );
};

export default BookDetails;
