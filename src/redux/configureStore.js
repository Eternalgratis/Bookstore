import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './Books/books';
import categoriesReducer from './Categories/categories';

const store = configureStore({
  books: booksReducer,
  categories: categoriesReducer,
});

export default store;
