import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddBook from '../AddBook/AddBook';
import DisplayBooks from '../DisplayBook/DisplayBooks';
import { removeBook } from '../../redux/Books/books';

const Bookss = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(Number(id)));
  };

  return (
    <div>
      <ul>
        {books.map((item) => (
          <div key={item.id}>
            <DisplayBooks
              title={item.title}
              author={item.author}
            />
            <button type="button" id={item.id} onClick={(e) => { handleDelete(e.target.id); }}>Remove</button>
          </div>
        ))}
      </ul>
      <AddBook />
    </div>
  );
};

export default Bookss;
