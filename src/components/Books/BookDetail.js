import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById, borrowBook, returnBook } from '../../api';
import { AuthContext } from '../../context/AuthContext';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const loadBook = async () => {
      const response = await fetchBookById(id);
      setBook(response.data);
    };
    loadBook();
  }, [id]);

  const handleBorrow = async () => {
    await borrowBook(id, user.token);
    setBook({ ...book, available: false });
  };

  const handleReturn = async () => {
    await returnBook(id, user.token);
    setBook({ ...book, available: true });
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Available: {book.available ? 'Yes' : 'No'}</p>
      {book.available ? (
        <button onClick={handleBorrow}>Borrow</button>
      ) : (
        <button onClick={handleReturn}>Return</button>
      )}
    </div>
  );
};

export default BookDetail;