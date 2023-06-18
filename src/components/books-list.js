import { useContext } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';
import BookItem from './book-item';

const BooksList = () => {
    const booksListContext = useContext(BooksListContext);

    return booksListContext.books.map((book, index) => {
        return <BookItem book={book} index={index} />;
    });
};

export default BooksList;
