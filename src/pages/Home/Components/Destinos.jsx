// src/components/LandingPage/Destinos.jsx
import React from 'react';
import './Destinos.css';

const Destinos = () => {
  const destinos = ["EUA", "Portugal", "França", "Canadá", "Argentina", "Itália"];
  return (
    <section className="destinos">
      <h2>Destinos Possíveis</h2>
      <ul className="destinos-list">
        {destinos.map(destino => (
          <li key={destino} className="destino-item">
            {destino}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Destinos;
