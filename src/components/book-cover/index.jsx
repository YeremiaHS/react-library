import './book-cover.css'

function BookCover(props) {

    const {image} = props

    return (
        <div class="book-cover-container">
                <img src={image} alt="cover-book" class="book-cover" />
        </div>
    )
}

export default BookCover;