import React from 'react';

const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input name="title" type="text" placeholder="Book title" />
      <input name="author" type="text" placeholder="Category" />
      <button type="submit">Add Book</button>
    </form>
  </div>
);

export default AddBook;
