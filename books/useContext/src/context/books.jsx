import React, { useState, createContext, useCallback } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async () => {
        const res = await axios.get('http://localhost:3001/books');
        setBooks(res.data);
    }, []);
    // const stableFetchBooks = useCallback(fetchBooks, [])
    // 沒有用 useCallback 時，react實際是一直創新的 fetchBooks 然後把舊的刪除

    const editBook = async (id, newTitle) => {
        const res = await axios.put(`http://localhost:3001/books/${id}`, { title: newTitle });

        const updated = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...res.data };
                // return { ...book, title: newTitle };
                /* ...res.data是傳整個物件
                title: newTitle是手動更新單一屬性，但可能同時有多位使用者更新同一物件的不同值*/
            }
            return book;
        });
        setBooks(updated);
    };

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updated = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updated);
    };

    const createBook = async (title) => {
        //axios 發送 post 請求, json-server儲存時自動產生 id (也可自行傳入，有重複 res code 500)
        const res = await axios.post('http://localhost:3001/books', {
            title,
        });
        // console.log(res);
        const updatedBooks = [...books, res.data];
        setBooks(updatedBooks);
    };

    const valueToShare = {
        //把要分享的function和狀態放在這裡用valus傳遞
        books,
        fetchBooks,
        createBook,
        deleteBook,
        editBook,
    };

    return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
