import axios from 'axios';
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

  export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
  });

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const toggleFavorite = (id) => ({
  type: TOGGLE_FAVORITE,
  payload: id,
});

export const fetchBooks = (searchText) => {
  return (dispatch) => {
    const searchQuery = searchText ? `&title_like=${searchText}` : '';
    axios
      .get(`https://example-data.draftbit.com/books?_limit=240`)
      .then((response) => {
        const books = response.data.map(book => ({ ...book, isFavorite: false })); 
        dispatch(fetchBooksSuccess(books));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBooksFailure(errorMsg));
      });
  };
};