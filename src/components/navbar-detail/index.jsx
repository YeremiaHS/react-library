import './navbar-detail.css'
import ModalEdit from '../modal-edit';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBookService } from '../../services/books';

function NavbarDetail() {
    const [openModalDet, setOpenModalDet] = useState (false);

    const { id } = useParams();
    const navigate = useNavigate();

    const deleteBook = async(id) =>{
        try {
            const response = await deleteBookService(id);
            alert(response.data.message)
            console.log(response)
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    function toggleModalDet(e) {
        e.preventDefault();

        setOpenModalDet(!openModalDet);
    }

    return (
        <>
            <div class="edit-delete-container">
                    {/* edit button */}
                    <div>
                        <button id="addBtn" class="edit-button" onClick={(e) => toggleModalDet(e)}>Edit</button>
                    </div>
                    {/* edit button */}
                    {/* separator */}
                    <div class="separator">
                        <p> || </p>
                    </div>
                    {/* separator */}
                    {/* delete button */}
                    <div>
                        <button class="delete-button" onClick={(e) => deleteBook(id)}>Delete</button>
                    </div>
                    {/* delete button */}
            </div>
            {openModalDet? <ModalEdit isOpen = {openModalDet}/> : <></>}
        </>
    )
}

export default NavbarDetail;