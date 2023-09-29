import { useParams } from 'react-router-dom';
import './jumbotron.css'
import { useCallback, useEffect, useState } from 'react';
import { getBookByIdService } from '../../services/books';

function Jumbotron(props) {

    const {urlImg} = props

    return (
        <div className="jumbotron">
                <img src={ urlImg || 'https://cdn.gramedia.com/uploads/picture_meta/2023/7/18/8j2t6feaxsffdnad5mweyj.jpg'} className="jumbo-cover" alt="" />
        </div>
    )
}

export default Jumbotron;