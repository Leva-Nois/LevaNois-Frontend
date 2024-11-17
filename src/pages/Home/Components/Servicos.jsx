// src/pages/Home/Servicos.jsx
import React from 'react';
import './Servicos.css';
import PlanejamentoIcon from '../../../assets/HomeAssets/Servicos/dinheiro.png';
import GamificationIcon from '../../../assets/HomeAssets/Servicos/jogo.png';
import TipsIcon from '../../../assets/HomeAssets/Servicos/dicas.png';
import FinanceIcon from '../../../assets/HomeAssets/Servicos/financia.png';
import MentorshipIcon from '../../../assets/HomeAssets/Servicos/mentoria.png';
import CommunityIcon from '../../../assets/HomeAssets/Servicos/comunidade.png';

const Servicos = () => {
  const services = [
    { title: "Planejamento Personalizado", description: "Organize seus planos com eficiência!", icon: PlanejamentoIcon },
    { title: "Gamificação", description: "Aprenda e planeje de forma divertida!", icon: GamificationIcon },
    { title: "Dicas de Intercâmbio", description: "Informações essenciais para sua jornada.", icon: TipsIcon },
    { title: "Gestão Financeira", description: "Monitore seu orçamento para alcançar seus objetivos.", icon: FinanceIcon },
    { title: "Mentoria Especializada", description: "Receba suporte de intercambistas experientes.", icon: MentorshipIcon },
    { title: "Comunidade Conectada", description: "Troque experiências com outros jovens sonhadores.", icon: CommunityIcon },
  ];


  return (
    <section id="servicos" className="servicos">
      <h1>Nossos Serviços</h1>
      <div className="servicos-container">
        {services.map((service, index) => (
          <div key={index} className="servico-card">
            <img src={service.icon} alt={service.title} className="servico-icon" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
