import './App.css';

import books from './data/books';

import BooksList from './components/books-list';
import BooksListContext from './contexts/book-list';

function App() {
    return (
        <BooksListContext.Provider value={books}>
            <div className="container">
                <BooksList />
            </div>
        </BooksListContext.Provider>
    );
}

export default App;
