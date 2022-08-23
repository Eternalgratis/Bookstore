import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const reducer = {
  books: booksReducer,
  categories: categoriesReducer,
};

const store = configureStore({ reducer });

export default store;
