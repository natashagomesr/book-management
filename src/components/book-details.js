const BookDetails = ({ book }) => {
    return (
        <div className="flex flex-col">
            <h2>Descrição</h2>
            {book.title}
            {book.author}
            {book.description}
        </div>
    );
};

export default BookDetails;
