import React, { useContext } from 'react';
import BookShow from './BookShow';
import BooksContext from '../context/books';

const BookList = ({ books, onDelete, onEdit }) => {
    // const { count, incrementCount } = useContext(BooksContext);

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />;
    });
    return (
        <div className="book-list">
            {/* {count}
            <button onClick={incrementCount}>Click</button> */}
            {renderedBooks}
        </div>
    );
};

export default BookList;
