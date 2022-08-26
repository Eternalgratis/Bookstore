/* eslint-disable */
import PropTypes from 'prop-types';

const DisplayBooks = (props) => {
  const { title, author, id } = props;
  return (
    <li key={id}>
      <h1>{title}</h1>
      <p>{author}</p>
    </li>
  );
};
DisplayBooks.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default DisplayBooks;
