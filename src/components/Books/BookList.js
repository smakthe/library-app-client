import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Link } from 'react-router-dom';

const BookList = () => {
  const { books } = useContext(BookContext);

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {books.map(book => (
          <li key={book._id}>
            <Link to={`/books/${book._id}`}>{book.title} by {book.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;