import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Category from './Components/Categories';
import Bookss from './Components/Book/Books';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Bookss />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
