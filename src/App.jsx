import React from 'react'
import Navbar from './Component/Navbar'

import { HashRouter , Routes,  Route } from 'react-router-dom';

import './App.css'
import Home from './Component/pages/home';
// import Services from './Component/pages/Services';
// import Products from './Component/pages/Products';
import SignUp from './Component/pages/SignUp';
import Services from './Component/pages/Services';
import Products from './Component/pages/Products';
function App() {
  return (
    <>
      <HashRouter>
      <Navbar />
      <Routes>
      <Route path='/'         element={<Home/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/sign-up'  element={<SignUp/>} />
      </Routes>
      </HashRouter>
      </>     
  )
}

export default App
