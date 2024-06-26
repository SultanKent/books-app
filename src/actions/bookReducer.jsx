import {
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  TOGGLE_FAVORITE,
} from '../actions/bookActions';


const initialState = {
  loading: false,
  books: [],
  error: '',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
      };
      case TOGGLE_FAVORITE:
      const updatedBooks = state.books.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
      const newLocalStorage = updatedBooks.reduce((acc, book) => {
        acc[book.id] = book.isFavorite;
        return acc;
      }, {});

      localStorage.setItem('favoriteBooks', JSON.stringify(newLocalStorage));

      return {
        ...state,
        books: updatedBooks,
      };
    default:
      return state;
  }
};


export default bookReducer