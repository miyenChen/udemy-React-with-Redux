import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
        editBook(book.id, title);
    };
    return (
        <form action="" className="book-edit" onSubmit={handleSubmit}>
            <label>Title: </label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-primary">Edit</button>
        </form>
    );
};

export default BookEdit;
