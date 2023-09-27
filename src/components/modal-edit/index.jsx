import { useState } from 'react';
import './modal-detail.css'

function ModalEdit(props) {

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
                            <input type="url" className="input-url" id="input-image" />
                        </div>
                        <br />
                        <div className="container-title">
                            <label for="book-title" className="label-modal-title">Title </label>
                            <input type="text" className="input-title" id="input-title" />
                        </div>
                        <br />
                        <div className="container-description">
                            <label for="book-description" className="label-modal-description">Description </label>
                            <textarea name="book-description-area" id="description" cols="52" rows="4" className="input-description"></textarea>
                        </div>
                        <div className="container-button">
                            <button className="button-submit" id="button-submit">Submit</button>
                        </div>
                    </form>
                </div>
                {/* modal content */}

        </div>
    )
}

export default ModalEdit;