// import { useState, useEffect, useContext } from "react";
import { useEffect, useContext } from "react";
// import axios from 'axios';
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

function App() {
    // const [books, setBooks] = useState([]);

    // const fetchBooks = async () => {
    //     const response = await axios.get('http://localhost:3001/books');

    //     setBooks(response.data);
    // };

    const { fetchBooks } = useContext(BooksContext);

    useEffect(() => {
        fetchBooks();
    }, []);

    // const editBookById = async (id, newTitle) => {
    //     const response = await axios.put(`http://localhost:3001/books/${id}`, {
    //         title: newTitle,
    //     });

    //     // console.log(response);

    //     const updatedBooks = books.map((book) => {
    //         if(book.id === id) {
    //             // return { ...book, title: newTitle };
    //             return { ...book, ...response.data };
    //         }

    //         return book;
    //     });

    //     setBooks(updatedBooks);
    // };

    // const deleteBookById = async (id) => {
    //     await axios.delete(`http://localhost:3001/books/${id}`);

    //     const updatedBooks = books.filter((book) => {
    //         return book.id !== id;
    //     });

    //     setBooks(updatedBooks);
    // };

    // const createBook = async (title) => {
    //     const response = await axios.post('http://localhost:3001/books', {
    //         title
    //     });

    //     // console.log(response);
    //     // console.log('Need to add book with:', title);

    //     const updatedBooks = [
    //         ...books, 
    //         // { id: 123, title: title }
    //         // { 
    //         //     // id: 123, 
    //         //     id: Math.round(Math.random() * 9999), 
    //         //     title,
    //         // },
    //         response.data
    //     ];
    //     setBooks(updatedBooks);
    // };

    return <div className="app">
            {/* App */}
            <h1>Reading List</h1>
            {/* {books.length} */}
            {/* <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} /> */}
            <BookList />
            {/* <BookCreate onCreate={createBook} /> */}
            <BookCreate />
        </div>;
}

export default App;