import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <h1 className="nav-title">Bookstore CMS</h1>
            <ul className="nav-list">
                <NavLink to="/">
                    Books
                </NavLink>
                <NavLink to="categories">
                    Categories
                </NavLink>
            </ul>
            <i className="fa-light fa-user" />
        </nav>
    )
};
export default Navbar;