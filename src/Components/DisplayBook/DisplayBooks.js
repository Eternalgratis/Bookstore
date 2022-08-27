/* eslint-disable */
import PropTypes from 'prop-types';

const DisplayBooks = (props) => {
  const { category, title, author, id } = props;
  return (
    <li key={id}>
      <p className='text'>{category}</p>
      <h1 className='head'>{title}</h1>
      <p className='para'>{author}</p>
    </li>
  );
};
DisplayBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DisplayBooks;
