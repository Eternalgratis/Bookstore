import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBook } from '../../redux/Books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ category: '', title: '', author: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.category.trim() && form.title.trim() && form.author.trim()) {
      const book = {
        item_id: Date.now(),
        category: form.category,
        title: form.title,
        author: form.author,
      };
      dispatch(addNewBook(book));
      setForm({ category: '', title: '', author: '' });
    }
  };
  return (
    <div className="input-container">
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          className="title-input"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="author"
          type="text"
          placeholder="Author"
          className="author-input"
          value={form.author}
          onChange={handleChange}
        />
        <select
          className="category-input"
          name="category"
          type="text"
          value={form.category}
          onChange={handleChange}
        >
          <option value="Choose">Choose Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Kids">Kids</option>
        </select>
        <button type="submit" className="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};
export default AddBook;
