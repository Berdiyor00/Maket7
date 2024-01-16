// BookItem.jsx
import React from 'react';

const BookItem = ({ book }) => (
  <div key={book.isbn13}>
    <img src={book.image} alt={book.title} />
    <h1>{book.title}</h1>
  </div>
);

export default BookItem;
