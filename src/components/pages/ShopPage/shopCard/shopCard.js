import React from "react";
import './shopCard.sass';



const ShopCard = ({item}) => {


    return(
        <li className="shopPage__clothes_item">
            <img src={item.urlPhoto} alt="item" className="shopPage__clothes_item-img"/>
            <div className="shopPage__clothes_item-title">{item.title}</div>
            <div className="shopPage__clothes_item-price">{item.price} USD</div>
        </li>
    )  
}
export default ShopCard