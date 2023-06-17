import { useContext } from 'react';
import BooksListContext from '../contexts/book-list';

const BooksList = () => {
    const booksListContext = useContext(BooksListContext);

    return <>{JSON.stringify(booksListContext)}</>;
};

export default BooksList;
