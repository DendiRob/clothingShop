import React from "react";
import './CategoryPage.sass';
import { useParams } from 'react-router-dom';
// import { useEffect } from "react";
// import { useState } from "react";


const CategoryPage = () => {
    const { category } = useParams()

    return(
        <h1>{category}</h1>
    )
}

export default CategoryPage

// пример реализаций

// const [arr, setArr] = useState()

// useEffect(() => {
//     fetch().then(res => res.json()).then( res => setArr(res))
// }.[])

// arr.map((item) => {
//     <Link key={smth} to='category/item.id'>
//      there is carditem
//     </Link>
// })