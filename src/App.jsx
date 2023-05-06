import React from 'react';
import { NavBar } from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { NotFound } from './components/NotFound';
import { UsersDetails } from './components/UsersDetails';
import { Reservas } from './components/Reservas';
import { db } from './components/firebase.js'

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/users/:id' element={<UsersDetails />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Reservas' element={<Reservas />} />
      </Routes>
    </div>
  )
}

console.log(db)