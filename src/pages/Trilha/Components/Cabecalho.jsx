import React from 'react';
import './Cabecalho.css';

// Header do site, incluindo bandeira do país escolhido e controle de navegação
const Cabecalho = ({ country = "Brasil", flagUrl = "https://flagcdn.com/w40/br.png", onNextCountry }) => {
  return (
    <header className="header">
      {/* Bandeira e País no lado direito */}
      <div className="country-info">
        <img src={flagUrl} alt={`${country} Flag`} className="flag" />
        <button className="next-country" onClick={onNextCountry}>
          ➡️
        </button>
        <span className="country-name">{country}</span>
      </div>
    </header>
  );
};

export default Cabecalho;



