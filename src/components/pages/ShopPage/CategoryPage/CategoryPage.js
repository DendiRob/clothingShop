import React from "react";
import './CategoryPage.sass';
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
    const { useParams } = useParams()

    return(
        <h1>CategoryPage</h1>
    )
}

export default CategoryPage