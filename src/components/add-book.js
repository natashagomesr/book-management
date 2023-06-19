import { useContext, useState } from 'react';
import { BooksListContext } from '../contexts/book-list-provider';

const AddBooks = () => {
    const booksListContext = useContext(BooksListContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleAddClick = () => {
        let validationInput;

        if (title === '' || author === '') {
            return validationInput;
        }

        const imgURL = 'https://icones.pro/wp-content/uploads/2021/03/symbole-du-livre-gris.png';
        booksListContext.addNewBook({ title, author, imgURL });

        setTitle('');
        setAuthor('');
    };

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="text-xl mt-6">Adicione um livro</div>

                <div className="flex flex-col lg:flex-row items-center mt-2 mb-2">
                    <input
                        className="border-2 rounded-md mt-2 lg:mt-0 "
                        placeholder="Título"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <input
                        className="border-2 rounded-md lg:ml-3 mt-2 lg:mt-0"
                        placeholder="Autor"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                    />

                    <div
                        className="lg:ml-3 border-2 mt-2 lg:mt-0 border-amber-300 rounded-md cursor-pointer bg-amber-200 shadow-md  mb-1  hover:bg-amber-300 w-32 text-center"
                        onClick={handleAddClick}
                    >
                        Adicionar
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddBooks;
