import React from 'react';
import "./Menu.css"
import brezel from '../img/Brezel.jpg'
import goulasch from '../img/Goulasch.jpg'
import jager from '../img/Jägerschnitzel.jpg'
import schwarz from '../img/Schwarzwälder Kirschtorte.jpg'
import rote from '../img/Rote Grütze.jpg'

export const Menu = () => {
  const menuItems = [
    {
      name: 'Brezel mit Obazda',
      description: 'Pan tradicional alemán con forma de nudo retorcido acompañado de una salsa de queso camembert tradicional bávara.',
      price: '3.990',
      image: brezel,
    },
    {
      name: 'Goulasch con Spätzle',
      description: 'Guiso de carne acompañado de una pasta típica de Alemania.',
      price: '16.990',
      image: goulasch,
    },
    {
      name: 'Jägerschniztel mit Bratkartoffeln',
      description: 'Filete de cerdo apanado y frito acompañado de papas salteadas.',
      price: '14.990',
      image: jager,
    },

    {
      name: 'Schwarzwälder Kirschtorte',
      description: 'Pedazo de torta selva negra.',
      price: '6.990',
      image: schwarz,
    },
    {
      name: 'Rote Grütze mit Schlagsahne',
      description: 'Frutos del bosque cocidos acompañado de crema batida.',
      price: '4.990',
      image: rote,
    },
  ];

  return (
    <div className="menu">
      <h2 className="tituloMenu">Menu</h2>
      <ul>
        {menuItems.map((item, index) => (
          <div className="menu-item" key={item.name}>
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-details">
              <h2 className="menu-item-name">{item.name}</h2>
              <p className="menu-item-description">{item.description}</p>
              <span className="menu-item-price">${item.price}</span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;



