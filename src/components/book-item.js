import { useContext, useState } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';
import ModalDetails from './modal-details';

const BookItem = ({ book, index }) => {
    const [showDetail, setShowDetail] = useState(false);
    const booksListContext = useContext(BooksListContext);

    const handleDetailsClick = () => {
        setShowDetail(!showDetail);
    };

    return (
        <>
            <div className="flex flex-col my-4 items-center max-w-[200px] border-2 rounded-md shadow-xl p-1.5">
                <img className="h-80" alt="book" src={`${book.imgURL}`} />
                <h2 className="min-h-[50px] text-center mt-1.5">{book.title}</h2>
                <h3 className="text-slate-500 mt-1">{book.author}</h3>
                <div
                    className="border-2 rounded-md border-amber-300 cursor-pointer bg-amber-200 shadow-md mt-1 mb-1 w-full flex justify-center hover:bg-amber-300"
                    onClick={handleDetailsClick}
                >
                    Ver detalhes
                </div>
                <div className="cursor-pointer" onClick={() => booksListContext.removeBook(index)}>
                    🗑
                </div>
                {showDetail ? <ModalDetails book={book} onClose={() => setShowDetail(false)} /> : null}
            </div>
        </>
    );
};

export default BookItem;
