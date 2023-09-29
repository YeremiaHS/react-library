import Flickity from "react-flickity-component"
import 'flickity/dist/flickity.min.css'
import { Link } from "react-router-dom";

const flickityOptions = {
    initialIndex: 2,
    wrapAround: true
}

function Carousel(props) {

    const {id, imgUrl} = props;

    return(
        <Flickity
        className={'carousel slider'} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        >
            <img src="https://cdn.gramedia.com/uploads/picture_meta/2023/7/18/8j2t6feaxsffdnad5mweyj.jpg" alt="book" class="cover-book carousel-cell" />
            <img src="https://cdn.gramedia.com/uploads/items/img20220101_11444970.jpg" alt="book1" class="cover-book carousel-cell" />
            <img src="https://cdn.gramedia.com/uploads/items/WhatsApp_Image_2021-12-20_at_1.42.06_PM.jpeg" alt="book"
            class="cover-book carousel-cell" />
            <img src="https://cdn.gramedia.com/uploads/items/Home_Sweet_Loan_cov.jpg" alt="book1"
            class="cover-book carousel-cell" />
            <img src="https://cdn.gramedia.com/uploads/picture_meta/2023/2/14/iddphd9rbufdfjabf4owuf.jpg" alt="book"
            class="cover-book carousel-cell" />
        </Flickity>
    )
}

export default Carousel;