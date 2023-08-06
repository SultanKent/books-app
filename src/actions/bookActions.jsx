import axios from 'axios';

export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = (startIndex, limit) => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    axios
      .get(`https://example-data.draftbit.com/books?_start=${startIndex}&_limit=${limit}`)
      .then((response) => {
        const books = response.data;
        dispatch(fetchBooksSuccess(books));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchBooksFailure(errorMsg));
      });
  };
};
