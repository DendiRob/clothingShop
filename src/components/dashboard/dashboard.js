import { React } from "react";    
import './dashboard.sass';
import { Link, Outlet} from 'react-router-dom';

const Dashboard = () => {
    


    return(
        <>
            <header className="dashboard__nav">
                <div className="dashboard__nav_label"></div>
                        <ul className="dashboard__nav_wrapper">
                            <Link to="/shop" className="dashboard__nav-item">Shop</Link>
                            <Link to="/impact" className="dashboard__nav-item">Our impact</Link>
                            <Link to="/journal" className="dashboard__nav-item">Journal</Link>
                            <Link to="contacts" className="dashboard__nav-item">Contacts</Link>
                        </ul>
                        <Link to="/cart" className="dashboard__nav_cart" >Cart</Link>
            </header>
            <Outlet />
            <footer className="dashboard__footer"> 
                    <div className="dashboard__footer_wrapper">
                        <div className="dashboard__footer_left">
                            <div className="dashboard__footer_input">
                                <div className="dashboard__footer_input-email">
                                    <div className="dashboard__footer_input-title">
                                        subscribe to our mailing list and get 15% off your first order
                                    </div>
                                    <form>
                                        <input type="email" name="enteremail" placeholder="Enter your email"/>
                                        <button className="dashboard__footer_input-btn">I’m in</button>
                                    </form>
                                </div>
                            </div>
                            <div className="MainPage__promo_label"></div>
                            <div className="dashboard__footer_rights">Tree House 2023 © All Rights reserved</div>
                        </div>
                        <div className="dashboard__footer_right">
                            <ul className="dashboard__footer_refs">
                                SITEMAP
                                <li className="dashboard__footer_refs-item">Shop</li>
                                <li className="dashboard__footer_refs-item">Meetus</li>
                                <li className="dashboard__footer_refs-item">Our impact</li>
                                <li className="dashboard__footer_refs-item">Gift cards</li>
                                <li className="dashboard__footer_refs-item">FAQ</li>
                                <li className="dashboard__footer_refs-item">Blog</li>
                                <li className="dashboard__footer_refs-item">Contacts</li>
                            </ul>
                            <ul className="dashboard__footer_refs">
                                Social
                                <li className="dashboard__footer_refs-item">Instagram</li>
                                <li className="dashboard__footer_refs-item">FaceBook</li>
                                <li className="dashboard__footer_refs-item">Pinterest</li>   
                            </ul>
                            <ul className="dashboard__footer_refs">
                                CUSTOMER CARE
                                <li className="dashboard__footer_refs-item">Terms & Conditions</li>
                                <li className="dashboard__footer_refs-item">Privacy Policy</li>
                                <li className="dashboard__footer_refs-item">Delivery & return</li>
                                <li className="dashboard__footer_refs-item">Track your order</li>
                                <li className="dashboard__footer_refs-item">FAQ</li>
                            </ul>
                        </div>
                    </div>
                <div className="dashboard__footer_leaf"></div>
            </footer>
        </>
    )
}
export default Dashboard