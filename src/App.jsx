import React from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';
import { Reservas } from './components/Reservas';
import { db } from './components/firebase.js'
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Reservas' element={<Reservas />} />
      </Routes>
      <Footer /> {Footer}
    </div>
  )


}

console.log(db)