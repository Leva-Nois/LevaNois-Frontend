// src/components/LandingPage/Inspiracional.jsx
import React from 'react';
import Globo from '../../../assets/Location.png';
import './Inspiracional.css';

const Inspiracional = () => {
  return (
    <section className="inspiracional">
      <div className="inspiracional-text">
        <h2>Transformando Sonhos em Realidade</h2>
        <p>Nosso objetivo é ajudar jovens da periferia a alcançarem novas experiências pelo mundo!</p>
      </div>
      <img src={Globo} alt="Inspirational" className="inspiracional-image" />
    </section>
  );
};

export default Inspiracional;
