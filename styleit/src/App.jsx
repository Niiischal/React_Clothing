import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bottomnav from './components/bottomnav/Bottomnav';
import Cart from './components/cart/Cart';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Men from './components/men/Men';
import Sneakers from './components/sneakers/Sneakers';
import Topnav from './components/topnav/Topnav';
import Women from './components/women/Women';

const App = () => {
  return (
<>
<Router>
<Topnav/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/men' element={<Men/>}/>
  <Route exact path='/women' element={<Women/>}/>
  <Route exact path='/sneakers' element={<Sneakers/>}/>
  <Route exact path='/contact' element={<Contact/>}/>
  <Route exact path='/cart' element={<Cart/>}/>
</Routes>
<Bottomnav/>
<Footer/>
</Router>
</>
  )
}

export default App
