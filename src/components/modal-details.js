const ModalDetails = ({ onClose, book }) => {
    return (
        <>
            <div
                className="z-10 flex flex-col bg-white max-w-3xl h-full left-0 top-0 animate-rightToLeft p-12 items-center absolute"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="cursor-pointer flex items-end text-amber-600" onClick={onClose}>
                    X
                </div>
                <div className="text-center text-amber-600 text-3xl mb-5">Descrição</div>
                <div className="text-slate-600">{book.title}</div>
                <div className="text-slate-600 mb-5">{book.author}</div>
                <div className="text-lg">{book.description}</div>
            </div>
            <div className="z-0 flex top-0 right-0 inset-0 opacity-100 visible bg-opacity-30 bg-black z-30 fixed" onClick={onClose}></div>
        </>
    );
};

export default ModalDetails;
