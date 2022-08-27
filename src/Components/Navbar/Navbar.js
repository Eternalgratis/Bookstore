/* eslint-disble */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoIosContact } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => (
  <nav className="nav-container">
    <div className="title-list">
      <h1 className="nav-title">Bookstore CMS</h1>
      <ul className="nav-list">
        <NavLink to="/" className="nav-book">
          Books
        </NavLink>
        <NavLink to="categories" className="nav-cat">
          Categories
        </NavLink>
      </ul>
    </div>
    <div>
      <p className="cont-img"><IoIosContact size={40} /></p>
    </div>
  </nav>
);
export default Navbar;
