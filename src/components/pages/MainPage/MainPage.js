import React from "react";
import './MainPage.sass'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <div className="MainPage__header-describe">Get 25% off buying the entire capsule collection <span>|</span> Subscribe to us and get 15% off your first order</div>
            </div>
            <div className="MainPage__promo">
                <div className="MainPage__promo_label"></div>
                <ul className="MainPage__promo_nav">
                    <Link to="/shop" className="MainPage__promo_nav-item">Shop</Link>
                    <Link to="/impact" className="MainPage__promo_nav-item">Our impact</Link>
                    <Link to="/journal" className="MainPage__promo_nav-item">Journal</Link>
                    <Link to="contacts" className="MainPage__promo_nav-item">Contacts</Link>
                </ul>
                    <Link to="/cart" className="MainPage__promo_cart" >Cart</Link>
            </div>
            <div className="MainPage__grid">
                    <div className="MainPage__grid-treehouse">treehouse</div>
                    <div className="MainPage__grid-cloth">Little Clothes.</div>
                    <div className="MainPage__grid-impact">Big Impact.</div>
                    <div className="MainPage__grid-descr">
                    High-quality children's clothing, crafted with care from sustainable materials that are kind to the planet. These timeless styles are the perfect companions for your little adventurer, wherever their imagination takes them. 
                    </div>
                    <Link className="MainPage__grid-btn">Shop now</Link>
                </div>
        </div>
    )
}
export default MainPage