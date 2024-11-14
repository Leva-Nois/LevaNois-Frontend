// src/components/Footer/Footer.js

import React from "react";
import Logo from "../../assets/miniLogo.svg";
import LinkedinIcon from '../../assets/icons/linkedinIcon.svg';
import InstagramIcon from '../../assets/icons/instagramIcon.svg';
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer-section">
      {/* Curva superior do footer */}
      <div className="footer-curve"></div>
      <div className="footer-content">
        <div className="footer-left">
          <h4>Nos acompanhe</h4>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/leva-nois" target="_blank" rel="noopener noreferrer">
              <img src={LinkedinIcon} className="social-icon" alt="LinkedIn da Leva Nóis" />
            </a>
            <a href="https://www.instagram.com/leva.nois/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} className="social-icon" alt="Instagram da Leva Nóis" />
            </a>
          </div>
          <p className="contact-email">Contato: leva_nois@outlook.com</p>
        </div>
        
        <div className="footer-right">
          <img src={Logo} alt="Logo da Leva Nóis" className="footer-logo" />
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/termos" className="footer-link">Termos de Uso</Link>
              </li>
              <li>
                <Link to="/privacidade" className="footer-link">Política de Privacidade</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-rights">
        <p>Todos os direitos reservados © 2024 LevaNois</p>
      </div>
    </footer>
  );
};

export default Footer;
