import React from "react";
import './CardPage.sass';
import { useParams } from 'react-router-dom';



const CardPage = () => {

    const {id} = useParams()

    return(
        <h1>{id}</h1>
    )
}

export default CardPage