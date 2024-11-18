// src/pages/Gamificacao/HomeGame.jsx
import React from "react";
import "./HomeGame.css";

const HomeGame = () => {
  return (
    <div className="trilha-container">
      <h1>Sua Trilha de Aprendizado</h1>
      <p>Comece sua jornada de intercâmbio com as etapas abaixo:</p>
      <div className="trilha">
        <div className="etapa">
          <h2>Etapa 1</h2>
          <p>Planejamento financeiro.</p>
        </div>
        <div className="etapa">
          <h2>Etapa 2</h2>
          <p>Escolha do destino.</p>
        </div>
        <div className="etapa">
          <h2>Etapa 3</h2>
          <p>Preparação de documentos.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeGame;
