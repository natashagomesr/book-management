import { useContext } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';
import BookItem from './book-item';

const BooksList = () => {
    const booksListContext = useContext(BooksListContext);

    return (
        <div className="flex flex-wrap flex-row justify-center lg:justify-between mb-10 mt-5">
            {booksListContext.books.map((book, index) => {
                return <BookItem book={book} index={index} />;
            })}
        </div>
    );
};

export default BooksList;
