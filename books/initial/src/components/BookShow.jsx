import React, { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ book, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const handleDelete = () => {
        onDelete(book.id);
    };
    const handleEdit = () => {
        setShowEdit(!showEdit);
    };
    //編輯狀態: 傳送資料和關掉編輯視窗
    const handleSubmit = (id, nweTitle) => {
        setShowEdit(false);
        onEdit(id, nweTitle);
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
