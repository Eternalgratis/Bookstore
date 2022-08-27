/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaCircleNotch } from 'react-icons/fa';
import AddBook from '../AddBook/AddBook';
import DisplayBooks from '../DisplayBook/DisplayBooks';
import { deleteBooks, fetchThunks } from '../../redux/Books/books';
import './Books.css';

const Bookss = ({ item_id, category, title, author }) => {
  const books = useSelector((state) => state.books);
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
            <div className="title-comment">
            <DisplayBooks
              category={item.category}
              title={item.title}
              author={item.author}
            />
            <div className='btn-container'>
              <button type="button" className="comment-btn">Comment</button>
              <button type="button" className="remove-btn" id={item.item_id} onClick={(e) => { handleDelete(e); }}>Remove</button>
              <button type="button" className='edit-btn'>Edit</button>
            </div>
            </div>

            <div className="status-container">
            <dt className="prog-report">
            <p><FaCircleNotch size={100} style={{ color: '#0290ff' }} /></p>
              <div className="status">
                <dl className="percent">85%</dl>
                <dl className="complete">Completed</dl>
              </div>
            </dt>

            <dt className="chapter-container">
                <dl className="chapter">CURRENT CHAPTER</dl>
                <dl className="topic">Chapter 8</dl>
              <button className="prog-btn" type="button">UPDATE PROGRESS</button>
            </dt>
          </div>
          </div>
        ))}
      </ul>
      {}
      <AddBook />
    </div>
  );
};

export default Bookss;
