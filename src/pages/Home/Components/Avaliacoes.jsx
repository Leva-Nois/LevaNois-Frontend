// src/components/LandingPage/Avaliacoes.jsx
import React from 'react';
import Slider from "react-slick";
import './Avaliacoes.css';

const Avaliacoes = () => {
  const avaliacoes = [
    { nome: "João", comentario: "Incrível experiência!" },
    { nome: "Maria", comentario: "Muito útil e acessível" },
    { nome: "Lucas", comentario: "Me ajudou a planejar minha viagem" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="avaliacoes">
      <h2>Depoimentos</h2>
      <Slider {...settings} className="avaliacoes-slider">
        {avaliacoes.map((aval, index) => (
          <div key={index} className="avaliacao-item">
            <p>"{aval.comentario}"</p>
            <h4>- {aval.nome}</h4>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Avaliacoes;
