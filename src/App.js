import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products'
import Branches from './pages/Branches/Branches'
import AboutUs from './pages/AboutUs/AboutUs'
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';
import Account from './pages/Account/Account';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/products' element={<Products title="منو" />} />
          <Route path='/branches' element={<Branches title="شعبه های ما" />} />
          <Route path='/about' element={<AboutUs title="درباره ما" />} />
          <Route path='/cart' element={<Cart title="صورتحساب" />} />
          <Route path='/account' element={<Account title="حساب کاربری" />} />
          <Route path='*' element={<NotFound title="" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
