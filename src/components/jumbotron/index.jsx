import { useParams } from 'react-router-dom';
import './jumbotron.css'
import { useCallback, useEffect, useState } from 'react';
import { getBookByIdService } from '../../services/books';

function Jumbotron() {
    const { id } =useParams();
    const [books, setBooks] = useState({});

    const DetailBook = useCallback(async ()=> {
        try {
            const res = await getBookByIdService(id);
            localStorage.setItem("idBook", id);
            setBooks(res.data.data[0]);
        } catch (error) {
            console.log(error)
        }
    }, [id]);

    useEffect(() => {
        DetailBook();
    }, [DetailBook])

    return (
        <div className="jumbotron">
                <img src={ books?.imgUrl || 'https://cdn.gramedia.com/uploads/picture_meta/2023/7/18/8j2t6feaxsffdnad5mweyj.jpg'} className="jumbo-cover" alt="" />
        </div>
    )
}

export default Jumbotron;