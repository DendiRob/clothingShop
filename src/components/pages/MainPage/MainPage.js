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
                    <div className="MainPage__title-14px">welcome</div>
                    <div className="MainPage__title-48px">Hi, meet TreeHouse.</div>
                    <div className="MainPage__describe">
                        Mindfully crafted gender-neutral children's clothing focused on your little one and designed with great care for our planet and the people on it.
                    </div>
                    <Link to='journal' className="MainPage__btn MainPage__btn-green">Read more</Link>
                </div>
            </div>
            <div className="MainPage__ourcare">
                <div className="MainPage__ourcare_info-left">
                    <div className="MainPage__title-14px">Our care</div>
                    <div className="MainPage__title-48px">
                        We prioritize your peace of mind.
                    </div>
                    <div className="MainPage__ourcare_text-wrapper">
                        <h2 className="MainPage__ourcare_text-title"><span>1</span>  saving your time</h2>
                        <div className="MainPage__describe">
                            Each item in our collection seamlessly matches the next. Invest in a few pieces or the entire line for a season's worth of clothing options, designed to last and be loved by others once your little one has grown.
                        </div>
                    </div>
                    <div className="MainPage__ourcare_text-wrapper">
                        <h2 className="MainPage__ourcare_text-title"><span>2</span>  ethical manufacturing</h2>
                        <div className="MainPage__describe">
                            Our commitment to ethical production isn’t just rhetoric. We place the welfare of workers and the environment at the forefront of our decision making. Always.
                        </div>
                    </div>
                </div>
                <div className="MainPage__ourcare_photo-kids"></div>
                <div className="MainPage__ourcare_photo-hands"></div>
                <div className="MainPage__ourcare_photo-girl"></div>
                <div className="MainPage__ourcare_info-right">
                    <div className="MainPage__ourcare_text-wrapper">
                        <h2 className="MainPage__ourcare_text-title"><span>3</span>  The highest quality</h2>
                        <div className="MainPage__describe">
                            We use only he highest quality sustainable fabrics, including GOTS-certified organic cotton and OEKO-TEX    STANDARD 100 linen, to ensure your child's delicate skin is cared for.
                        </div>
                    </div>
                    <div className="MainPage__ourcare_text-wrapper">
                        <h2 className="MainPage__ourcare_text-title"><span>4</span>  womAn owned brand</h2>
                        <div className="MainPage__describe">
                            When you choose us, you're supporting an ethical and sustainable small business owned by a woman. We don't just talk the talk, we walk the walk.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainPage