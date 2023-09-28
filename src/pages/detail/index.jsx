import './detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Jumbotron from '../../components/jumbotron';
import BookCover from '../../components/book-cover';
import BookInfo from '../../components/book-info';
// import BookCategory from '../../components/book-category';
import BookContent from '../../components/book-content';
import Footer from '../../components/footer';
import NavbarDetail from '../../components/navbar-detail';

const Detail = () => {
    return(
        <>
            <div>
                <FontAwesomeIcon icon={faArrowLeft} className='back-arrow'/>
            </div>

            {/* edit & delete section */}
            <NavbarDetail />


            {/* modal section */}


            {/* banner book cover */}
            <Jumbotron />

            {/* book cover */}
            <BookCover />

            {/* borrow button */}
            <div class="borrow-container">
                <button class="borrow-button">Borrow!</button>
            </div>

            {/* book category */}
            {/* <BookCategory /> */}

            {/* book information */}
            <BookInfo />

            {/* book content */}
            <BookContent />
                
            {/* footer */}
            <Footer />
        </>
    )
}

export default Detail;