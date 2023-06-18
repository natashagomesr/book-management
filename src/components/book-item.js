import { useContext, useState } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';
import BookDetails from './book-details';

const BookItem = ({ book, index }) => {
    const [showDetail, setShowDetail] = useState(false);
    const booksListContext = useContext(BooksListContext);

    const handleDetailsClick = () => {
        setShowDetail(!showDetail);
    };

    console.log(index);

    return (
        <>
            <div className="flex my-4">
                <h2>{book.title}</h2>
                <h3>{book.author}</h3>
                <div onClick={handleDetailsClick}>{showDetail ? 'x' : 'Ver detalhes'}</div>
            </div>
            <div onClick={() => booksListContext.removeBook(index)}>Remover</div>
            {showDetail ? <BookDetails book={book} /> : null}
            ---------------------------------------------------------------------
        </>
    );
};

export default BookItem;
