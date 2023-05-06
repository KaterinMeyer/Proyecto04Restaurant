import React from 'react';
import fotorestaurant from '../img/restaurantaleman.jpg';
import './Home.css';
import './main.css'

export const Home = () => {
  return (
    <>
      <h1 className="titulo">Bienvenidos! Willkommen!</h1>
      <img id='fotorestaurant' src={fotorestaurant} alt="Restaurante Alemán" />
      
    </>
  );
};