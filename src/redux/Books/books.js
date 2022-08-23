const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case REMOVE:
      return state.filter((book) => book.id !== action.book.id);
    default: return state;
  }
};

export default booksReducer;
