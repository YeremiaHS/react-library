import './book-info.css'

function BookInfo() {
    return (
        <div className="info-container">
                {/* judul & status */}
                <div class="title-container">
                    <p class="title">Sakamoto Days 4</p>
                    <p class="status">Available</p>
                </div>
                {/* judul & status */}

                {/* publisher */}
                <div class="publisher-author-container">
                    <p class="publisher">Elex Media </p>
                    <p className='separator'> || </p>
                    <p class="author"> Yuto Suzuki</p>
                </div>
                {/* publisher */}

                {/* date */}
                <div class="date-container">
                    <p class="date">22 Juni 2023</p>
                </div>
                {/* date */}
        </div>
    )
}

export default BookInfo;