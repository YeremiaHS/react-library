import './book-content.css'

function BookContent(props) {

    const { content } = props;

    return (
        <div class="content-container">
                <p class="content">{content}</p>
        </div>
    )
}

export default BookContent;