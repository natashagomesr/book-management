import { useContext, useState } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';

const AddBooks = () => {
    const booksListContext = useContext(BooksListContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddClick = () => {
        booksListContext.addNewBook({ title, author });

        setTitle('');
        setAuthor('');
    };

    return (
        <>
            <span>Adicione um livro</span>
            <div>
                <input placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
                <input placeholder="Autor" value={author} onChange={(event) => setAuthor(event.target.value)} />

                <div onClick={handleAddClick}>Adicionar</div>
            </div>
        </>
    );
};

export default AddBooks;
