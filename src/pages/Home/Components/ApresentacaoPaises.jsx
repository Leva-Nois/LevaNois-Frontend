// src/components/LandingPage/ApresentacaoPaises.jsx
import React from 'react';
import './ApresentacaoPaises.css';

// Fotos dos países
import usa from '../../../assets/HomeAssets/ApresentacaoPaises/usa-image.jpg';
import portugal from '../../../assets/HomeAssets/ApresentacaoPaises/portugal-image.jpg';
import france from '../../../assets/HomeAssets/ApresentacaoPaises/france-image.jpg';
import canada from '../../../assets/HomeAssets/ApresentacaoPaises/canada-image.jpg';
import ireland from '../../../assets/HomeAssets/ApresentacaoPaises/ireland-image.jpg';

// Avatares
import avatar1 from '../../../assets/characters/bonecoP1M.png';
import avatar2 from '../../../assets/characters/bonecoP1(1).png';
import avatar3 from '../../../assets/characters/bonecoA3M.png';

const ApresentacaoPaises = () => {
  const paises = [
    { nome: "EUA", descricao: "Mergulhe no sonho americano e transforme seu futuro!", imagem: usa, avatar: avatar1 },
    { nome: "Portugal", descricao: "Conecte-se com a história e o charme europeu!", imagem: portugal, avatar: avatar2 },
    { nome: "França", descricao: "Apaixone-se pela cultura e pela moda francesa!", imagem: france, avatar: avatar3 },
    { nome: "Canadá", descricao: "Descubra paisagens incríveis e oportunidades únicas!", imagem: canada, avatar: avatar1 },
    { nome: "Irlanda", descricao: "Viva a magia celta e conquiste novos horizontes!", imagem: ireland, avatar: avatar2 },
  ];

  return (
    <section className="apresentacao-paises">
      {paises.map((pais, index) => (
        <div key={pais.nome} className="pais-item">
          {index % 2 === 0 && (
            <div className="pais-avatar">
              <img src={pais.avatar} alt={`Avatar representando ${pais.nome}`} />
            </div>
          )}
          <div className="pais-conteudo">
            <div className="pais-descricao">
              <h3>{pais.nome}</h3>
              <p>{pais.descricao}</p>
            </div>
            <div className="pais-imagem-container">
              <img src={pais.imagem} alt={`Imagem de ${pais.nome}`} className="pais-imagem" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ApresentacaoPaises;
