// import { useState, useContext } from "react";
import { useState } from "react";
// import BooksContext from "../context/books";
import BookEdit from './BookEdit';
import useBooksContext from "../hooks/use-books-context";

// function BookShow({ book, onDelete, onEdit }) {
    function BookShow({ book }) {
    const [showEdit, setShowEdit] = useState(false);
    // const { deleteBookById } = useContext(BooksContext);
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        // onDelete(book.id);
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    // const handleSubmit = (id, newTitle) => {
        const handleSubmit = () => {
        setShowEdit(false);
        // onEdit(id, newTitle)
    }

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        // content = <BookEdit onSubmit={handleSubmit} onEdit={onEdit} book={book} />;
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    }

    return <div className="book-show">
            {/* BookShow */}
            {/* {book.title} */}
            <img
                alt="books"
                src="https://placebeard.it/300/200/notag"
                // src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>;
}

export default BookShow;