import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products'
import Branches from './pages/Branches/Branches'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart';

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/products' exact element={<Products title="منو" />} />
          <Route path='/branches' exact element={<Branches title="شعبه های ما" />} />
          <Route path='/about' exact element={<AboutUs title="درباره ما" />} />
          <Route path='/cart' exact element={<Cart title="صورتحساب" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
