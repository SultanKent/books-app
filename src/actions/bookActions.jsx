import axios from 'axios';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => {
  const storedBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || {};
  const booksWithFavorites = books.map((book) => ({
    ...book,
    isFavorite: storedBooks[book.id] || false,
  }));

  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: booksWithFavorites,
  };
};

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});

export const fetchBooks = (startIndex, limit, searchText) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    const searchQuery = searchText ? `&title_like=${searchText}` : '';
    axios
      .get(`https://example-data.draftbit.com/books?_start=${startIndex}&_limit=${limit}${searchQuery}`)
      .then((response) => {
        const books = response.data.map(book => ({ ...book, isFavorite: false })); // Добавляем начальное значение isFavorite
        dispatch(fetchBooksSuccess(books));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBooksFailure(errorMsg));
      });
  };
};
