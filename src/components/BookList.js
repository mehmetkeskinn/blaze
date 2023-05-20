import React from "react";
import Book from "./Book";
import "./Booklist.css";

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="book-list">
      <h2>Book List</h2>
      {books.map((book, index) => (
        <Book key={index} book={book} deleteBook={() => deleteBook(index)} />
      ))}
    </div>
  );
};

export default BookList;
