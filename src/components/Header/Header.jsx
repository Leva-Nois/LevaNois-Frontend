import React from "react";
import Logo from "../../assets/miniLogo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import cadastro from "../../pages/Home/Cadastro";

const Header = () => {
  return (
    <div>
      <section id="header-section">
        <img src={Logo} alt="Logo da Leva Nóis" />
        <nav id="list">
          <li id="list-item">
            <Link to="/" id="item-link">
              Início
            </Link>
          </li>
          <li id="list-item">
            <Link to="/sobre-nos" id="item-link">
              Sobre nós
            </Link>
          </li>
          <li id="list-item">
            <Link to="/contato" id="item-link">
              Contate-nos
            </Link>
          </li>
          <li id="list-item">
            <Link to="/comeco" id="list-botao-jornada">
              Começar Jornada
            </Link>
          </li>
        </nav>
      </section>
    </div>
  );
};

export default Header;
