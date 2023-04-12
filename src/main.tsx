import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home.view'
import NotFound from './views/NotFound.view'
import './assets/css/global.styles.css'
import Search from './views/Search.view'
import AllProducts from './views/AllProducts.view'
import Cart from './views/Cart.view'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
