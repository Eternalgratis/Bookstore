import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Category from './Components/Categories';
import Bookss from './Components/Book/Books';

const bookLi = [
  {
    id: '1',
    title: 'Things fall apart',
    author: 'Chinue Achebe',
  },
  {
    id: '2',
    title: 'Things fall apart',
    author: 'Chinue Achebe',
  },
  {
    id: '3',
    title: 'Things fall apart',
    author: 'Chinua Achebe',
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookss bookItem={bookLi} />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
