/* eslint-disable */
import React from 'react';
import { NavLink } from 'react-router-dom';
import userImage from '../../images/user-icon.png';
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
      <img className="user-image" src={userImage} alt="user-img" />
    </div>
  </nav>
);
export default Navbar;
