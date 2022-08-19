import React from "react";
import PropTypes from "prop-types";
import AddBook from "../AddBook/AddBook";
import DisplayBooks from "../DisplayBook/DisplayBooks";

const Bookss = (props) => {
    const { bookItem } = props;
    return(
        <div>
    <ul>
        {bookItem.map((item) => (
            <>
            <DisplayBooks 
            key={item.id}
            title={item.title}
            author={item.author}
            />
            <button type="button">Remove</button>
            </>
        ))}
    </ul>
    <AddBook />
    </div>
    );
};

Bookss.propTypes = {
    bookItem: PropTypes.string.isRequired
};

export default Bookss;