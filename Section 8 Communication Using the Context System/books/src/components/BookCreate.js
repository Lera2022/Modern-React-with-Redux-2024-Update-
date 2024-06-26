// import { useState, useContext } from "react";
import { useState } from "react";
// import BooksContext from "../context/books";
import useBooksContext from "../hooks/use-books-context";

// function BookCreate({ onCreate }) {
    function BookCreate() {
    const [title, setTitle] = useState('');
    // const { createBook } = useContext(BooksContext);
    const { createBook } = useBooksContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // onCreate(title);
        createBook(title);
        setTitle('');
    };

    return <div className="book-create">
        {/* BookCreate */}
        <h3>Create a new book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>;
}

export default BookCreate;