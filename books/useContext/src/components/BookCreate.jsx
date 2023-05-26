import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';

const BookCreate = () => {
    const [title, setTitle] = useState('');
    const { createBook } = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSumit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSumit}>
                <label>Title: </label>
                <input type="text" className="input" onChange={handleChange} value={title} />
                <button className="button">Create</button>
            </form>
        </div>
    );
};

export default BookCreate;
