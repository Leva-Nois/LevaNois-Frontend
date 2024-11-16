import React from "react";
import './Equipe.css';
import GithubIcon from '../../../assets/icons/equipe-github.svg';
import LinkedinIcon from '../../../assets/icons/equipe-linkedin.svg';

// Importar as imagens dos membros da equipe
import felipePhoto from '../../../assets/equipe/temp-felipe.jpg';
import luizaPhoto from '../../../assets/equipe/temp-luiza.png';
import wesleyPhoto from '../../../assets/equipe/temp-wesley.jpg';
import lessandroPhoto from '../../../assets/equipe/temp-lessandro.jpg';
import heitorPhoto from '../../../assets/equipe/temp-heitor.jpeg';
import gustavoPhoto from '../../../assets/equipe/temp-gustavo.jpg';
import emillyPhoto from '../../../assets/equipe/temp-emilly.jpg';

const Equipe = () => {
  const membros = [
    { nome: "Felipe Dias", cargo: "Product Owner e Desenvolvedor Back-End", foto: felipePhoto, github: "https://github.com/AkashiAkz", linkedin: "https://www.linkedin.com/in/felipediaslima/" },
    { nome: "Luiza Ramalho", cargo: "Scrum Master e Desenvolvedora Full Stack", foto: luizaPhoto, github: "https://github.com/LuizaRamalho", linkedin: "https://www.linkedin.com/in/luiza-souza-ramalho/" },
    { nome: "Wesley da Silva", cargo: "Financeiro e Social Media", foto: wesleyPhoto, github: "https://github.com/Wesley-Silva-32", linkedin: "https://www.linkedin.com/in/wesley-da-silva-rocha-a12201222/" },
    { nome: "Lessandro", cargo: "Designer e Desenvolvedor Front-End", foto: lessandroPhoto, github: "https://github.com/sleeap", linkedin: "#" },
    { nome: "Heitor Chagas", cargo: "Financeiro e Desenvolvedor Front-End", foto: heitorPhoto, github: "https://github.com/HeitoromaN", linkedin: "https://www.linkedin.com/in/heitor-chagas-feitosa/" },
    { nome: "Gustavo Faustino", cargo: "Desenvolvedor Full Stack", foto: gustavoPhoto, github: "https://github.com/gustavfaustino", linkedin: "https://www.linkedin.com/in/gustavo-gabriel-4218b2250/" },
    { nome: "Emilly Lourenço", cargo: "UX/UI Designer e Desenvolvedora Front-End", foto: emillyPhoto, github: "https://github.com/MIH005", linkedin: "https://www.linkedin.com/in/emillylouren%C3%A7o/" },
  ];

  return (
    <section id="equipe" className="equipe-section">
      <h2>Conheça a Equipe</h2>
      <div className="equipe-container">
        {membros.map((membro, index) => (
          <div key={index} className="equipe-card">
            <img src={membro.foto} alt={`Foto de ${membro.nome}`} className="equipe-foto" />
            <h3>{membro.nome}</h3>
            <p>{membro.cargo}</p>
            <div className="equipe-icons">
              <a href={membro.github} target="_blank" rel="noopener noreferrer">
                <img src={GithubIcon} alt="GitHub" className="social-icon" />
              </a>
              <a href={membro.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={LinkedinIcon} alt="LinkedIn" className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Equipe;
