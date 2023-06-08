import React from 'react'
import './style.sass'
import MainPage from './components/pages/MainPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
        {/* <Route path='/' element={<lBurger />} />   */}
          <Route index element={<MainPage />} />
          {/* <Route path='shop' element={<Shop/>} />
          {/* <Route path='shop/:category' element={<Shop/>} />
          {/* <Route path='shop/category/:item' element={<Shop/>} />
          <Route path='impact' element={<Impact />} />
          <Route path='journal' element={<Journal />} />
          <Route path='contacts' element={<contacts />} />
          <Route path='cart' element={<cart />} /> */}
          <Route path='*' element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
