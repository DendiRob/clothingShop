import React from "react";
import './shopCard.sass';
import { Link } from "react-router-dom";



const ShopCard = ({item}) => {


    return(
            <Link to={`/shop/${item.id}`} style={{textDecoration: "none"}}>
                <li className="shopPage__clothes_item">
                    <div className="shopPage__clothes_item-img">
                        <img src={item.urlPhoto} alt="item" className="shopPage__clothes_item-img"/>
                    </div>
                    <div className="shopPage__clothes_item-title">{item.title}</div>
                    <div className="shopPage__clothes_item-price">{item.price} USD</div>
                </li>
            </Link>   
    )  
}
export default ShopCard