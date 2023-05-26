import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import 'axios';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        //
        const res = await axios.get('http://localhost:3001/books');
        setBooks(res.data);
    };

    /* DONT DO THIS!!
    fetchBooks();
    
    網頁 render app => books initial [] => fetchBooks(); => 
    setBooks => set狀態會重新 render app component => 重頭無限循環 fetch get
    */
    //useEffect 在第一次render時一定會被調用，但之後調用取決於第二個參數
    useEffect(() => {
        fetchBooks();
    }, []);

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

    const delectBook = async (id) => {
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
    return (
        <div className="app">
            <h1>Book List</h1>
            <BookList books={books} onDelete={delectBook} onEdit={editBook} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
