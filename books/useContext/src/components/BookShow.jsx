import React, { useState, useContext } from 'react';
import BooksContext from '../context/books';
import BookEdit from './BookEdit';

const BookShow = ({ book }) => {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBook } = useContext(BooksContext);

    const handleDelete = () => {
        deleteBook(book.id);
    };
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };
    //編輯狀態: 傳送資料和關掉編輯視窗
    const handleSubmit = () => {
        setShowEdit(false);
    };

    //切換編輯顯示狀態
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={handleSubmit} />;
    }
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
            <div>{content}</div>
            <div className="action">
                <button className="edit" onClick={handleEdit}>
                    Edit
                </button>
                <button className="delete" onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;
