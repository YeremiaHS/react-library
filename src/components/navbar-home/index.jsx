import './navbar.css'
import Sidebar from '../sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import ModalAdd from '../modal-add';

function Navbar() {
    const [ openModal, setOpenModal ] = useState (false)

    function toggleModal(e) {
        e.preventDefault();

        setOpenModal(!openModal);
        console.log("openModal", openModal);
    } 
    
    return (
        <>
        <ul className="navbar-library">
            <div className="navbar-item-left">
                <li className="navbar-library-item">
                    <Sidebar onClickModal = {(e) => toggleModal(e)} />
                </li>

                <li className="navbar-library-item">
                    <section className="dropdown">
                        <button className="dropbtn">All Categories</button>
                        <section className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </section>
                    </section>
                </li>
            
                <li className="navbar-library-item">
                    <section className="dropdown">

                        <button className="dropbtn">All Times</button>

                        <section className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </section>

                    </section>
                </li>
            </div>

            <div className="navbar-item-center">
                <input type="text" placeholder="Search Books" className="search-book" />
            </div>

            <div className="navbar-item-right">
                <li className="title">
                    <a href="" className="title-icon"><FontAwesomeIcon icon={faBook}/>Library</a>
                </li>
            </div>
            
        </ul>
        {openModal? <ModalAdd isOpen = {openModal} /> : <></>}
        
        </>
    )
}

export default Navbar;