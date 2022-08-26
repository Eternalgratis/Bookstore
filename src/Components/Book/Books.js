/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../AddBook/AddBook';
import DisplayBooks from '../DisplayBook/DisplayBooks';
import { deleteBooks, fetchThunks } from '../../redux/Books/books';
import './Books.css';

const Bookss = ({ item_id, title, author }) => {
  const books = useSelector((state) => state.books);
  // console.log(books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThunks());
  }, []);

  const handleDelete = (e) => {
    console.log(e);
    const Btn = Number(e.target.id);
    dispatch(deleteBooks(Number(Btn)));
  };

  return (
    <div className="booklist-container">
      <ul>
        {books.map((item) => (
          <div key={item.item_id} className="book-list">
            <DisplayBooks
              title={item.title}
              author={item.author}
            />
            <button type="button" id={item.item_id} onClick={(e) => { handleDelete(e); }}>Remove</button>
          </div>
        ))}
      </ul>
      <div>
        {title}
      </div>
      <div>
        {author}
      </div>
      <AddBook />
    </div>
  );
};

export default Bookss;
