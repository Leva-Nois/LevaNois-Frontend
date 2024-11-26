import React from 'react';
import TrailSection from './TrilhaSecao';
import './Trilha.css';

// Configuração das trilhas
const trails = [
  { title: "Trilha 1: Básico", description: "Aprenda os fundamentos.", unlocked: true },
  { title: "Trilha 2: Intermediário", description: "Avance para o próximo nível.", unlocked: false },
  { title: "Trilha 3: Avançado", description: "Aperfeiçoe suas habilidades.", unlocked: false },
  { title: "Trilha 4: Expert", description: "Domine o conteúdo.", unlocked: false },
];

const Trail = () => {
  return (
    <div className="trail-container">
      {trails.map((trail, index) => (
        <TrailSection key={index} trail={trail} />
      ))}
    </div>
  );
};

export default Trail;
