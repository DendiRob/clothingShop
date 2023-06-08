import React from "react";
import './MainPage.sass'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return(
        <div className="MainPage">
            <div className="MainPage__header">
                <div className="MainPage__header-describe">Get 25% off buying the entire capsule collection <span>|</span> Subscribe to us and get 15% off your first order</div>
            </div>
            <div className="MainPage__promo-wrapper">
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
                <div className="MainPage__grid_promo">
                        <div className="MainPage__grid_promo-treehouse">treehouse</div>
                        <div className="MainPage__grid_promo-cloth">Little Clothes.</div>
                        <div className="MainPage__grid_promo-impact">Big Impact.</div>
                        <div className="MainPage__grid_promo-descr">
                        High-quality children's clothing, crafted with care from sustainable materials that are kind to the planet. These timeless styles are the perfect companions for your little adventurer, wherever their imagination takes them. 
                        </div>
                        <Link to='shop' className="MainPage__btn">Shop now</Link>

                </div>
            </div>
            <div className="MainPage__welcome">
                <div className="MainPage__welcome_picture-big"></div>
                <div className="MainPage__welcome_picture-small"></div>
                <div className="MainPage__welcome_picture-leaf"></div>
                <div className="MainPage__welcome-wrapper">
                    <div className="MainPage__welcome_title-14px">welcome</div>
                    <div className="MainPage__welcome_title-48px">Hi, meet TreeHouse.</div>
                    <div className="MainPage__welcome_describe">
                        Mindfully crafted gender-neutral children's clothing focused on your little one and designed with great care for our planet and the people on it.
                    </div>
                    <Link to='journal' className="MainPage__btn MainPage__btn-green">Read more</Link>
                </div>
            </div>
        </div>
    )
}
export default MainPage