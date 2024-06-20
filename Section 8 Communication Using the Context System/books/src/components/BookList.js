// import { useContext } from "react";
// import BooksContext from "../context/books";
import BookShow from "./BookShow"
import useBooksContext from "../hooks/use-books-context";

// function useBooksContext() {
//     return useContext(BooksContext);
// }

// function BookList({ books, onDelete, onEdit }) {
    function BookList() {
    // const { count, incrementCount } = useContext(BooksContext);

    // const { books } = useContext(BooksContext);
    const { books } = useBooksContext();

    const renderedBooks = books.map((book) => {
        return (
            // <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
            <BookShow key={book.id} book={book} />
        );
    }); 

    return <div className="book-list">
        {/* BookList */}
        {/* {count}
        <button onClick={incrementCount}>Click</button> */}
        {renderedBooks}
        </div>;
}

export default BookList;
