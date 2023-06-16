import { React, useState } from "react";    
import './dashboard.sass';
import { Link, Outlet, useLocation} from 'react-router-dom';
import awareState from '../../store/awareState';
import { AwareModal } from "../modal";
import { observer } from "mobx-react-lite";
import BurgerMenu from "../burgerMenu/burgerMenu";

const Dashboard = observer(() => {

    let location = useLocation()
    const [message, setMessage] = useState('');

    const handleSubmit = event => {
        setMessage(event.target.value);
        event.preventDefault();
    }
    const handleClick = () => {
        setMessage('');
    }

    return(
        <>
            <header className="dashboard__nav" style={{
                maxWidth: (location.pathname === "/") ? "1140px": '',
                position: (location.pathname === "/") ? "absolute": 'relative',
                marginLeft: (location.pathname === "/") ? "auto": 'none',
                marginRight: (location.pathname === "/") ? "auto": 'none',
                background: (location.pathname === "/") ? "none": '',
                left: (location.pathname === "/") ? "0": 'none',
                right: (location.pathname === "/") ? "0": 'none'

            }}>
                <div className="dashboard__nav_container">
                    <Link to="/" className="dashboard__nav_label"></Link>
                            <ul className="dashboard__nav_wrapper">
                                <Link to="/shop" className="dashboard__nav-item">Shop</Link>
                                <Link to="/impact" className="dashboard__nav-item">Our impact</Link>
                                <Link to="/journal" className="dashboard__nav-item">Journal</Link>
                                <Link to="contacts" className="dashboard__nav-item">Contacts</Link>
                            </ul>
                    <Link to="/cart" className="dashboard__nav_cart" ></Link>
                    <BurgerMenu />
                </div>
            </header>   
            <Outlet />
            <footer className="dashboard__footer"  style={{
                marginTop: (location.pathname === "/") ? "50px": 0
            }}> 
                    <div className="dashboard__footer_wrapper">
                        <div className="dashboard__footer_left">
                            <div className="dashboard__footer_input">
                                <div className="dashboard__footer_input-email">
                                    <div className="dashboard__footer_input-title">
                                        subscribe to our mailing list and get 15% off your first order
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <input 
                                        onChange={handleSubmit}
                                        value={message}
                                        type="email" 
                                        name="enteremail" 
                                        placeholder="Enter your email"
                                        />
                                        <button type="button" className="dashboard__footer_input-btn" onClick={handleClick}>I’m in</button>
                                    </form>
                                </div>
                            </div>
                            <div className="dashboard__footer_label"></div>
                            <div className="dashboard__footer_rights">Tree House 2023 © All Rights reserved</div>
                        </div>
                        <div className="dashboard__footer_right">
                            <ul className="dashboard__footer_refs">
                                SITEMAP
                                <li className="dashboard__footer_refs-item">
                                    <Link to="/shop" className="dashboard__nav-item">
                                        Shop
                                    </Link>
                                </li>
                                <li className="dashboard__footer_refs-item">
                                    <Link to="/impact" className="dashboard__nav-item">Our impact</Link>
                                </li>
                                <li className="dashboard__footer_refs-item">
                                    <Link to="/journal" className="dashboard__nav-item">
                                        Journal
                                    </Link>   
                                </li>
                                <li className="dashboard__footer_refs-item">
                                    <Link to="contacts" className="dashboard__nav-item">
                                        Contacts
                                    </Link>
                                </li>
                            </ul>
                            <ul className="dashboard__footer_refs">
                                Social
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Instagram</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>FaceBook</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Pinterest</li>   
                            </ul>
                            <ul className="dashboard__footer_refs">
                                CUSTOMER CARE
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Terms & Conditions</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Privacy Policy</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Delivery & return</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>Track your order</li>
                                <li className="dashboard__footer_refs-item" onClick={()=> awareState.toggleModal(true)}>FAQ</li>
                            </ul>
                        </div>
                    </div>
                <div className="dashboard__footer_leaf"></div>
                {awareState.activeModal? <AwareModal /> : '' }
            </footer>
        </>
    )
})
export default Dashboard