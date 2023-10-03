import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Mens from './Mens';
import SingleProduct from './SingleProduct';
import ShoppingCart from './ShoppingCart';

function App() {

  const [appBlur, setAppBlur] = useState('App');

  return (
    <div className={appBlur}>
      <Header appBlur={appBlur} setAppBlur={setAppBlur}/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Men' element={<Mens appBlur={appBlur} setAppBlur={setAppBlur} />}/>
        <Route exact path='/H&M HOME' element={<Home/>}/>
        <Route exact path='/singleproduct' element={<SingleProduct/>}/>
        <Route exact path='/shoppingcart' element={<ShoppingCart/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
