import React from "react";
import Logo from "../../assets/miniLogo.svg";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header id="header-section">
      <img id="logo" src={Logo} alt="Logo da Leva Nóis" />
      <nav id="list">
        <li id="list-item">
          <span id="item-link" onClick={() => scrollToSection("banner")}>
            Início
          </span>
        </li>
        <li id="list-item">
          <span id="item-link" onClick={() => scrollToSection("servicos")}>
            Sobre nós
          </span>
        </li>
        <li id="list-item">
          <span id="item-link" onClick={() => scrollToSection("feedback")}>
            Contate-nos
          </span>
        </li>
        <li id="list-item">
          <a href="/login" id="list-botao-jornada">
            Começar Jornada
          </a>
        </li>
      </nav>
    </header>
  );
};

export default Header;