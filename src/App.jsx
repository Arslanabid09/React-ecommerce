import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Singlepage from './pages/Singlepage';
import Cart from './Component/Cart';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/shop/:id' element={<Singlepage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

      </Route>
    </Routes>
  )
}

export default App