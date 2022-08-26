/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../API/api';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const GET_BOOKS = 'bookstore/books/GET_BOOKS';

export const fetchThunks = () => async (dispatch) => {
  const apiFetch = await fetch(url, {
    method: 'GET',
    body: JSON.stringify(),
    headers: {
      accept: 'application/json',
    },
  }).then((data) => data.json());
  const firstState = [];
  Object.keys(apiFetch).forEach((e) => {
    firstState.push({ ...apiFetch[e][0], item_id: e });
  });
  dispatch({
    type: GET_BOOKS,
    payload: firstState,
  });
};

// add new book
export const addNewBook = (book) => async (dispatch) => {
  createAsyncThunk;
    await fetch( url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(book),
    }).then(() => dispatch(fetchThunks()));
}

export const deleteBooks = (item_id) => async (dispatch) => {
  await fetch(`${url}/${item_id}`, {
    method: 'DELETE',
    body: JSON.stringify({item_id}),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(() => dispatch(fetchThunks()));
};

// Reducer
const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return state.filter((book) => book.id !== action.item_id);
    case GET_BOOKS:
      return action.payload;
    default: return state;
  }
};

export default booksReducer;
