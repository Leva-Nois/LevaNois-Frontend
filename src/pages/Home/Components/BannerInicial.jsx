// src/components/LandingPage/BannerInicial.jsx
import React from 'react';
import Avatar from '../../../assets/avatar.png';
import Slogan from '../../../assets/slogan.png';
import './BannerInicial.css';

const BannerInicial = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <img src={Avatar} alt="Avatar" className="banner-avatar" />
        <div className="banner-text">
          <img src={Slogan} alt="Slogan da LevaNois" className="slogan-image" />
          <button className="banner-button">Conheça Mais</button>
        </div>
      </div>
    </section>
  );
};

export default BannerInicial;
