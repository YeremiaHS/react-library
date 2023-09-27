import { useState } from 'react';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Sidebar(props) {

    const {
        onClickModal
    } = props;

    const [openNav, setOpenNav] = useState (false)

    function toggleSideBar(e) {
        e.preventDefault();

        setOpenNav(!openNav);
        console.log(openNav);
    }

    return (
        <>
            <section id="main">
                <FontAwesomeIcon icon={faBars} size='xl' className="openbtn" onClick={(e) => toggleSideBar(e)} />
            </section>
            <section id="mySidebar" className="sidebar" style={openNav?{width:"250px"} : {width:"0px"}}>
                <a href="javascript:void(0)" className="closebtn" onClick={(e) => toggleSideBar(e)}>&times;</a>

                <a href="#" className="profile-image">
                    <i className="fa-solid fa-user fa-2xl" />
                </a>

                <a href="#" className="sidebar-username" id="username">Niki Zefanya</a>

                <button className="logoutBtn" id="button-logout">Logout</button>

                <section className="sidebar-menu">

                    <a href="#" className="sidebar-item">Explore</a>
                    <a href="#" className="sidebar-item">History</a>

                    <button id="addBtn" className="addBtn" onClick={onClickModal}>Add books</button>

                </section>
            </section>
        </>
    )
}

export default Sidebar;
