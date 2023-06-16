import { React } from 'react';
import './burgerMenu.sass';
import burgerMenuState from '../../store/burgerMenuState';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';


const BurgerMenu = observer(() => {

    const menuClasses = ['burgerMenu']
    if(burgerMenuState.activeMenu){
        menuClasses.push('menuIsOpen')
    }

    return(
        <div className={menuClasses.join(' ')} onClick={() => burgerMenuState.closeMenu()}>
            <div className='burgerMenu__wrapper' onClick={e => e.stopPropagation()}>
                <Link to="/" className='burgerMenu__label' onClick={() => burgerMenuState.closeMenu()}></Link>
                <div className='burgerMenu__close' onClick={() => burgerMenuState.closeMenu()}></div>
                <ul className='burgerMenu__nav'>
                    <li className='burgerMenu__nav-item' onClick={() => burgerMenuState.closeMenu()}><Link className='burgerMenu__nav-ref' to="shop">Shop</Link></li>
                    <li className='burgerMenu__nav-item' onClick={() => burgerMenuState.closeMenu()}><Link className='burgerMenu__nav-ref' to="impact">Our impact</Link></li>
                    <li className='burgerMenu__nav-item' onClick={() => burgerMenuState.closeMenu()}><Link className='burgerMenu__nav-ref' to="journal">Journal</Link></li>
                    <li className='burgerMenu__nav-item' onClick={() => burgerMenuState.closeMenu()}><Link className='burgerMenu__nav-ref' to="contacts">Contacts</Link></li>
                </ul>
            </div>
        </div>
    )
})
export default BurgerMenu