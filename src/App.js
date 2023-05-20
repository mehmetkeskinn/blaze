import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import "./index.css";

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/books.json");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log("Error fetching books:", error);
    }
  };

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  return (
    <div className="app-container">
      <h1>Bookstore</h1>

      <AddBookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
    </div>
  );
};

export default App;
