import './book-info.css'

function BookInfo(props) {

    const { title, status, publisher, author, date } = props

    return (
        <div className="info-container">
                {/* judul & status */}
                <div class="title-container">
                    <p class="title">{title}</p>
                    {status? 
                    <p class="status-non">Non-Available</p> :
                    <p class="status">Available</p>
                    }
                    {/* <p class="status">Non-available</p> */}
                </div>
                {/* judul & status */}

                {/* publisher */}
                <div class="publisher-author-container">
                    <p class="publisher">{publisher} </p>
                    <p className='separator'> || </p>
                    <p class="author"> {author}</p>
                </div>
                {/* publisher */}

                {/* date */}
                <div class="date-container">
                    <p class="date">{date}</p>
                </div>
                {/* date */}
        </div>
    )
}

export default BookInfo;