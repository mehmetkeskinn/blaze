import React, { useState } from "react";
import "./AddBookForm.css";

const AddBookForm = ({ addBook }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isAddingBook, setIsAddingBook] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ name, price, category, description, imageUrl });
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    setImageUrl("");
    setIsAddingBook(false);
  };

  const handleAddBookClick = () => {
    setIsAddingBook(true);
  };

  return (
    <div className="add-book">
      {!isAddingBook ? (
        <button className="add-book-btn" onClick={handleAddBookClick}>
          Add Book
        </button>
      ) : (
        <form className="add-book-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <button type="submit">Add Book</button>
        </form>
      )}
    </div>
  );
};

export default AddBookForm;
