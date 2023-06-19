import { createContext, useState } from 'react';

import initialBooksData from '../data/books';

const BooksListContext = createContext([]);

const BooksListProvider = ({ children }) => {
    const [books, setBooks] = useState(initialBooksData);

    const addNewBook = (newBook) => {
        setBooks([...books, newBook]);
    };

    const removeBook = (bookIndex) => {
        const arrayOfBooks = [...books];

        arrayOfBooks.splice(bookIndex, 1);

        setBooks(arrayOfBooks);
    };

    const bookListContext = {
        books,
        addNewBook,
        removeBook,
    };

    return <BooksListContext.Provider value={bookListContext}>{children}</BooksListContext.Provider>;
};

export { BooksListContext, BooksListProvider };
