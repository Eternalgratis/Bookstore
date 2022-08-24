const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [
  {
    id: 1,
    title: 'Things fall apart',
    author: 'Chinua Achebe',
  },
  {
    id: 2,
    title: 'An image of Africa',
    author: 'Chinua Achebe',
  },
  {
    id: 3,
    title: 'Arrow of God',
    author: 'Chinua Achebe',
  },
];

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
