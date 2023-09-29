import './navbar-detail.css'
import ModalEdit from '../modal-edit';
import { useState } from 'react';

function NavbarDetail() {
    const [openModalDet, setOpenModalDet] = useState (false)

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
                        <button class="delete-button" >Delete</button>
                    </div>
                    {/* delete button */}
            </div>
            {openModalDet? <ModalEdit isOpen = {openModalDet}/> : <></>}
        </>
    )
}

export default NavbarDetail;