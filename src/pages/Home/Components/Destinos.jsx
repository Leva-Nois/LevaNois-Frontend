// src/components/LandingPage/Destinos.jsx
import React from 'react';
import './Destinos.css';

import UsaIcon from '../../../assets/icons/usaIcon.png';
import PortugalIcon from '../../../assets/icons/portugalIcon.png';
import FranceIcon from '../../../assets/icons/franceIcon.png';
import CanadaIcon from '../../../assets/icons/canadaIcon.png';
import ArgentinaIcon from '../../../assets/icons/argentinaIcon.png';
import ItalyIcon from '../../../assets/icons/italyIcon.png';

const Destinos = () => {
  const destinos = [
    { nome: "EUA", icone: UsaIcon },
    { nome: "Portugal", icone: PortugalIcon },
    { nome: "França", icone: FranceIcon },
    { nome: "Canadá", icone: CanadaIcon },
    { nome: "Argentina", icone: ArgentinaIcon },
    { nome: "Itália", icone: ItalyIcon },
  ];

  return (
    <section className="destinos">
      <h2>Para onde <b>você</b> quer ir?</h2>
      <ul className="destinos-list">
        {destinos.map(({ nome, icone }) => (
          <li key={nome} className="destino-item">
            <img src={icone} alt={`Ícone de ${nome}`} className="destino-icon" />
            <p className="destino-nome">{nome}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Destinos;
