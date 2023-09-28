import { useEffect, useState } from 'react';
import './modal-detail.css'
import { useNavigate, useParams } from 'react-router-dom';
import { updateBookService, getBookByIdService } from '../../services/books';
// import { data } from 'flickity';

function ModalEdit(props) {

    const [imgUrl, setImgUrl] = useState("");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");
    const [publisher, setPublisher] = useState("");
    const [content, setContent] = useState("")

    const {id} = useParams();

    const navigate = useNavigate();

    const updateBook = async (e) => {
        try {
            e.preventDefault();

            const book = {
                imgUrl, judul: title, tanggalTerbit: date, namaPengarang: author, namaPenerbit: publisher, konten: content,
            };

            const resp = await updateBookService(book);

            alert(resp.data)
            setImgUrl("")
            setTitle("")
            setDate("")
            setAuthor("")
            setPublisher("")
            setContent("");

            navigate("/home")

        } catch (error) {
            console.log(error);
        }
    }

    const getBook = async (idBook) => {
        try {
            const response = await getBook(idBook)
            const book = response.data.data[0];
            setImgUrl(book.imgUrl);
            setTitle(book.title);
            setDate(book.date);
            setAuthor(book.author);
            setPublisher(book.publisher);
            setContent(book.content);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBookByIdService(id);
    }, [id]);

    const {
        isOpen
    } = props

    const [closeModal, setCloseModal] = useState (isOpen? true : false);

    function isClosed(e) {
        e.preventDefault()

        setCloseModal(false)
    }

    return (
        <div id="myModal" className="modal-edit" style={closeModal?{display: 'block'} : {display: 'none'}}>

                {/* modal content */}
                <div className="modal-content">
                    <span className="close" onClick={(e) => isClosed(e)}>&times;</span>
                    <p className="text-modal-1">Edit Data</p>
                    <form action="" className="form-modal">
                        <div className="container-url">
                            <label for="url-image" className="label-modal-url">Url Image </label>
                            <input type="url" className="input-url" id="input-image" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
                        </div>
                        <br />
                        <div className="container-title">
                            <label for="book-title" className="label-modal-title">Title </label>
                            <input type="text" className="input-title" id="input-title" onChange={(e) => setTitle(e.target.value)} value={title} />
                        </div>
                        <br />
                        <div className="container-date">
                            <label for="date" className="label-modal-date">Date </label>
                            <input type="text" className="input-date" id="input-date" onChange={(e) => setDate(e.target.value)} value={date} />
                        </div>
                        <br />
                        <div className="container-author">
                            <label for="book-author" className="label-modal-author">Author </label>
                            <input type="text" className="input-author" id="input-author" onChange={(e) => setAuthor(e.target.value)} value={author} />
                        </div>
                        <br />
                        <div className="container-publisher">
                            <label for="book-punlisher" className="label-modal-publisher">Publisher </label>
                            <input type="text" className="input-publisher" id="input-publisher" onChange={(e) => setPublisher(e.target.value)} value={publisher} />
                        </div>
                        <br />
                        <div className="container-description">
                            <label for="book-description" className="label-modal-description">Description </label>
                            <textarea name="book-description-area" id="description" cols="52" rows="4" className="input-description" onChange={(e) => setContent(e.target.value)}></textarea>
                        </div>
                        <div className="container-button">
                            <button className="button-submit" id="button-submit" onClick={(e) => updateBook(e)}>Submit</button>
                        </div>
                    </form>
                </div>
                {/* modal content */}

        </div>
    )
}

export default ModalEdit;