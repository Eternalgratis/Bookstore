const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

// Reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
};

// Action creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE,
  id,
});

export default booksReducer;
