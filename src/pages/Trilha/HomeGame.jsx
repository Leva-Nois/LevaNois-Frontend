import React from "react";
import "./HomeGame.css";
import BarraLateral from "./Components/BarraLateral";
import Cabecalho from "./Components/Cabecalho";
import Trilha from "./Components/Trilha/Trilha";

const HomeGame = () => {
  return (
    <div className="trail-container">
      <BarraLateral />
      <div className="content">
        <Cabecalho />
        <Trilha />
      </div>
    </div>
  );
};

export default HomeGame;
