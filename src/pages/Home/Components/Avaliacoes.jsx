// src/components/LandingPage/Avaliacoes.jsx
import React, { useState } from 'react';
import './Avaliacoes.css';
import FotoJoao from '../../../assets/HomeAssets/Avaliacoes/joao.jpg';
import FotoMaria from '../../../assets/HomeAssets/Avaliacoes/maria.jpg';
import FotoLucas from '../../../assets/HomeAssets/Avaliacoes/lucas.jpg';
import FotoAna from '../../../assets/HomeAssets/Avaliacoes/ana.jpg';
import FotoPedro from '../../../assets/HomeAssets/Avaliacoes/pedro.jpg';
import FotoCarla from '../../../assets/HomeAssets/Avaliacoes/carla.jpg';

const Avaliacoes = () => {
  const avaliacoes = [
    { nome: "João", comentario: "A LevaNois abriu as portas para o meu sonho de intercâmbio!", foto: FotoJoao },
    { nome: "Maria", comentario: "Planejei meu intercâmbio sem dor de cabeça. Simples e direto!", foto: FotoMaria },
    { nome: "Lucas", comentario: "Nunca imaginei que fosse possível! A plataforma me ajudou muito.", foto: FotoLucas },
    { nome: "Ana", comentario: "Descobri oportunidades incríveis que nunca pensei existir.", foto: FotoAna },
    { nome: "Pedro", comentario: "Recomendo a todos que querem sair da zona de conforto.", foto: FotoPedro },
    { nome: "Carla", comentario: "Com o apoio da LevaNois, viajei e aprendi mais do que esperava.", foto: FotoCarla },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % avaliacoes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + avaliacoes.length) % avaliacoes.length);
  };

  const currentAvaliacoes = avaliacoes.slice(currentIndex, currentIndex + 3);

  return (
    <section className="avaliacoes">
      <h2>Depoimentos</h2>
      <div className="avaliacoes-container">
        {currentAvaliacoes.map((aval, index) => (
          <div key={index} className="avaliacao-item">
            <img src={aval.foto} alt={aval.nome} className="avaliacao-foto" />
            <p>"{aval.comentario}"</p>
            <h4>- {aval.nome}</h4>
          </div>
        ))}
      </div>
      <div className="avaliacoes-botoes">
        <button onClick={handlePrev} className="botao-circle"></button>
        <button onClick={handleNext} className="botao-circle"></button>
      </div>
    </section>
  );
};

export default Avaliacoes;
