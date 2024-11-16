// src/components/LandingPage/ApresentacaoPaises.jsx
import React from 'react';
import './ApresentacaoPaises.css';

const ApresentacaoPaises = () => {
  const paises = [
    { nome: "EUA", descricao: "Conheça a cultura americana", imagem: "/path/to/usa-image.jpg" },
    { nome: "Portugal", descricao: "Explore a tradição portuguesa", imagem: "/path/to/portugal-image.jpg" },
    { nome: "França", descricao: "Aprecie a arte e gastronomia", imagem: "/path/to/france-image.jpg" },
    { nome: "Canadá", descricao: "Vivencie a natureza canadense", imagem: "/path/to/canada-image.jpg" },
  ];

  return (
    <section className="apresentacao-paises">
      {paises.map((pais, index) => (
        <div key={pais.nome} className={`pais-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="pais-avatar"> {/* Placeholder para o avatar do país */}
            <img src="/path/to/avatar-placeholder.jpg" alt={`${pais.nome} Avatar`} />
          </div>
          <div className="pais-descricao">
            <h3>{pais.nome}</h3>
            <p>{pais.descricao}</p>
          </div>
          <img src={pais.imagem} alt={pais.nome} className="pais-imagem" />
        </div>
      ))}
    </section>
  );
};

export default ApresentacaoPaises;
