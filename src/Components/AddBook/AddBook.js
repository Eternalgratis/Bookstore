/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/Books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: '', author: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.title.trim() && form.author.trim()) {
      const book = {
        item_id: Date.now(),
        title: form.title,
        author: form.author,
        category: "categories", 
      };
      dispatch(addNewBook(book));
      setForm({ title: '', author: '' });
    }
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Category"
          value={form.author}
          onChange={handleChange}
        />
        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default AddBook;
