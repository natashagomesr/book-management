const ModalDetails = ({ onClose, book }) => {
    return (
        <>
            <div className="z-10 flex flex-col bg-white max-w-[70%] lg:max-w-3xl h-full left-0 top-0 animate-rightToLeft fixed ">
                <div className="cursor-pointer text-end text-amber-600 text-2xl p-6" onClick={onClose}>
                    X
                </div>
                <div className="flex flex-col items-center p-12">
                    <div className="text-center text-amber-600 text-3xl mb-5 ">Descrição</div>
                    <div className="text-slate-600">{book.title}</div>
                    <div className="text-slate-600 mb-5">{book.author}</div>
                    <div className="text-lg">{book.description}</div>
                </div>
            </div>
            <div className="z-[1] flex top-0 right-0 inset-0 opacity-100 visible bg-opacity-30 bg-black fixed" onClick={onClose}></div>
        </>
    );
};

export default ModalDetails;
