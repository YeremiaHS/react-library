import './modal-home.css'
import { useEffect, useState } from 'react';
import { addBookService } from '../../services/books';
import { useNavigate } from 'react-router-dom';

function ModalAdd(props) {

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [content, setContent] = useState("")

  const navigate = useNavigate();

  const saveBook = async (e) => {
    try {
      e.preventDefault();

      const book = {
        imgUrl, judul: title, tanggalTerbit: date, namaPengarang: author, namaPenerbit: publisher, konten: content,
      };

      const resp = await addBookService(book);

      console.log(resp.data.message);
      alert(resp.data.message)
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

  const {
    isOpen
  } = props

  const [closeModal, setCloseModal] = useState (isOpen? true : false);

  function isClosed(e) {
    e.preventDefault()

    setCloseModal(false)
    console.log("closeModal", closeModal)
  }

  useEffect(() => {
    console.log(props)
    console.log(closeModal)
  })

    return (
        <div id="myModal" className="modal-library" style={closeModal?{display: 'block'} : {display: 'none'}}>
        <div className="modal-content">
          <span className="close" onClick={(e) => isClosed(e)}>&times;</span>
          <p className="text-modal-1">Add Data</p>
          <form action="" className="form-modal">
            <div className="container-url">
              <label className="label-modal-url">
                Url Image
              </label>
              <input type="url" className="input-url" id="input-image" onChange={(e) => setImgUrl(e.target.value)} value={imgUrl} />
            </div>
            <br />
            <div className="container-title">
              <label className="label-modal-title">
                Title
              </label>
              <input type="text" className="input-title" id="input-title" onChange={(e) => setTitle(e.target.value)} value={title} />
            </div>
            <br />
            <div className="container-date">
              <label className='label-modal-date'>
                Date
              </label>
              <input type="text" className='input-date' id='input-date' onChange={(e) => setDate(e.target.value)} value={date} />
            </div>
            <br />
            <div className="container-author">
              <label className='label-modal-author'>
                Author
              </label>
              <input type="text" className='input-author' id='input-author' onChange={(e) => setAuthor(e.target.value)} value={author} />
            </div>
            <br />
            <div className="container-publisher">
              <label className='label-modal-publisher'>
                Publisher{""}
              </label>
              <input type="text" className='input-publisher' id='input-publisher' onChange={(e) => setPublisher(e.target.value)} value={publisher} />
            </div>
            <br />
            <div className="container-description">
              <label className="label-modal-description">
                Description
              </label>
              <textarea
                name="book-description-area"
                id="description"
                cols="40"
                rows="4"
                className="input-description"
                onChange={(e) => setContent(e.target.value)} value={content}
              ></textarea>
            </div>
            <div className="container-button">
              <button className="button-submit" id="button-submit" onClick={(e) => saveBook(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default ModalAdd;