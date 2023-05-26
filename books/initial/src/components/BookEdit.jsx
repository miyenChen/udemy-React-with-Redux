import React, { useState } from 'react';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const handleChange = (event) => {
        setTitle(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        // onEdit(book.id, title); 將這部分移動到 Bookshow component
        onSubmit(book.id, title);
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
