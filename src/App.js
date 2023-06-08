import React from 'react';
import './style.sass';
import MainPage from './components/pages/MainPage';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './components/pages/ShopPage';
import ImpactPage from './components/pages/ImpactPage';
import JournalPage from './components/pages/JournalPage';
import ContactsPage from './components/pages/ContactsPage';
import CartPage from './components/pages/CartPage';
import CardPage from './components/pages/ShopPage/CardPage';
import CategoryPage from './components/pages/ShopPage/CategoryPage';


function App() {
  return (
    <>
      <div className='container'>
        <Routes>
        {/* <Route path='/' element={<lBurger />} />   */}
          <Route index element={<MainPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='shop/:category' element={<CategoryPage/>} />
          <Route path='shop/category/:item' element={<CardPage/>} />
          <Route path='impact' element={<ImpactPage />} />
          <Route path='journal' element={<JournalPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='cart' element={<CartPage />} /> 
          <Route path='*' element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
