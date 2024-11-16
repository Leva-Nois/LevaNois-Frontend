// src/components/LandingPage/LandingPage.jsx
import React from 'react';
import BannerInicial from './Components/BannerInicial.jsx';
import Destinos from './Components/Destinos.jsx';
import Inspiracional from './Components/Inspiracional.jsx';
import Servicos from './Components/Servicos.jsx';
import ApresentacaoPaises from './Components/ApresentacaoPaises.jsx';
import PlanosAssinatura from './Components/Planos.jsx';
import CallToAction from './Components/CallToAction.jsx';
import Feedback from './Components/Feedback.jsx';
import Equipe from './Components/Equipe.jsx';
import Avaliacoes from './Components/Avaliacoes.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';


const LandingPage = () => {
  return (
    <div>
      <Header/>
      <BannerInicial />
      <Destinos />
      <Inspiracional />
      <Servicos/>
      <ApresentacaoPaises />
      <Avaliacoes />
      <CallToAction />
      <PlanosAssinatura />
      <Feedback />
      <Equipe />
      <Footer/>
    </div>
  );
};

export default LandingPage;
