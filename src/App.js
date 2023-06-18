import AddBooks from './components/add-book';
import BooksList from './components/books-list';

import './App.css';
import { BooksListProvider } from './contexts/book-list-provider';

function App() {
    return (
        <BooksListProvider>
            <div className="container">
                <AddBooks />
                <BooksList />
            </div>
        </BooksListProvider>
    );
}

export default App;
