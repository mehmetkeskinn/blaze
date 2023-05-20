import React, { useState } from "react";
import "./Book.css"; // Import the CSS file

const Book = ({ book, deleteBook }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="book">
      <img
        className="book-image"
        src={book.imageUrl}
        alt={book.name}
        onClick={openPopup}
      />
      <h1 className="book-name">{book.name}</h1>
      {isPopupOpen && (
        <div className="book-popup">
          <div className="book-popup-content">
            <h3>{book.name}</h3>
            <p className="book-popup-price">Price: {book.price}</p>
            <p className="book-popup-category">Category: {book.category}</p>
            <p className="book-popup-description">
              Description: {book.description}
            </p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
};

export default Book;
