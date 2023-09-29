import './detail.css'
import { getBookByIdService } from '../../services/books';
import { useParams } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
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

    const { id } =useParams();
    const [books, setBooks] = useState({});

    const DetailBook = useCallback(async ()=> {
        try {
            const res = await getBookByIdService(id);
            localStorage.setItem("idBook", id);
            console.log(res.data.data)
            setBooks(res.data.data);
        } catch (error) {
            console.log(error)
        }
    }, [id]);

    useEffect(() => {
        DetailBook();
    }, [DetailBook])

    return(
        <>
            <div>
                <FontAwesomeIcon icon={faArrowLeft} className='back-arrow'/>
            </div>

            {/* edit & delete section */}
            <NavbarDetail />


            {/* modal section */}


            {/* banner book cover */}
            <Jumbotron
                urlImg = {books?.imgUrl }
            />

            {/* book cover */}
            <BookCover
                image = {books?.imgUrl}
            />

            {/* borrow button */}
            <div class="borrow-container">
                <button class="borrow-button">Borrow!</button>
            </div>

            {/* book category */}
            {/* <BookCategory /> */}

            {/* book information */}
            <BookInfo
                title = {books?.title}
                status = {books?.deleted}
                publisher = {books?.publisher?.name}
                author = {books?.author?.name}
                date = {books?.date}
            />

            {/* book content */}
            <BookContent 
                content = {books?.content}
            />
                
            {/* footer */}
            <Footer />
        </>
    )
}

export default Detail;