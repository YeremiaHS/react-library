import './card.css'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'

function Card(props) {
    const {id, imgUrl, title, content} = props;

    return (
        <>
        {/* <div className="cards"> */}
            <div class="card">
                <div className="card-image-container">
                    <img
                        src={imgUrl}
                        alt="book"
                        style ={{width:'50%'}}
                    />
                </div>
                <div class="book-container">
                    <Link to={`detail/${id}`}>
                        <p class="book-title">{title}</p>
                    </Link>
                    <div class="book-desc-container">
                        <p class="book-desc">
                                {content}
                        </p>
                    </div>
                </div>
            </div>
        {/* </div> */}
        </>
    )
}

Card.PropTypes = {
    id : PropTypes.string,
    imgUrl : PropTypes.string,
    title : PropTypes.string,
    content : PropTypes.string
}

export default Card;