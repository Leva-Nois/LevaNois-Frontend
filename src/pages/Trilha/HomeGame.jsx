import React from "react";
import "./HomeGame.css"; // Importação do CSS

import { MdHomeFilled } from "react-icons/md";
import { FaBookBookmark } from "react-icons/fa6";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const HomeGame = () => {
  return (
    <div className="trail-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile">
          <img
            src="https://via.placeholder.com/80"
            alt="Foto do Usuário"
            className="profile-picture"
          />
          <h3>Lucas Oliveira</h3>
          <p>Nível: 5</p>
          <p>XP: 1200 / 1500</p>
        </div>
        <ul className="menu">
          <li>
            <i className="icon"><MdHomeFilled/></i> Home
          </li>
          <li>
            <i className="icon"><FaBookBookmark/></i> Aprender
          </li>
          <li>
            <i className="icon"><FaMoneyBillTransfer/></i> Finanças
          </li>
          <li>
            <i className="icon"><RiLightbulbFlashFill/></i> Leva Dica
          </li>
          <li>
            <i className="icon"><FaUser/></i> Perfil
          </li>
          <li>
            <i className="icon"><BsThreeDots/></i> Outros
          </li>
        </ul>
      </div>

      {/* Trilha e Header */}
      <div className="content">
        {/* Header */}
        <div className="header">
          <div className="flag-container">
            <img
              src="https://flagcdn.com/w40/br.png"
              alt="Brasil"
              className="flag"
            />
            <img
              src="https://via.placeholder.com/40"
              alt="Seleção de País"
              className="flag-placeholder"
            />
            <button className="country-switch">➡️</button>
          </div>
        </div>

        {/* Trilha */}
        <div className="trail">
          <h1>Sua Trilha</h1>
          <div className="lessons">
            <div className="lesson completed">1</div>
            <div className="lesson">2</div>
            <div className="lesson">3</div>
            <div className="lesson locked">4</div>
            <div className="lesson locked">5</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGame;
