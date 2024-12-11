import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fase1.css';

const Fase1 = () => {
  const [screen, setScreen] = useState('welcome');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'updated') {
      setScreen('completed');
    } else if (option === 'update') {
      setScreen('updateInfo');
    }
  };

  const handleNextClick = () => {
    setScreen('question');
  };

  return (
    <div className="fase-container">
      <div className="progress-bar">
        <div className="progress" style={{ width: screen === 'welcome' ? '0%' : screen === 'question' ? '33%' : screen === 'updateInfo' ? '66%' : '100%' }}></div>
      </div>
      
      {screen === 'welcome' && (
        <div className="welcome-screen">
          <h2>Bem-vindo!</h2>
          <p>
            Olá! Que bom que você escolheu a LevaNois. Esperamos que você tenha uma boa experiência com a gente, queremos levar você mais perto dos seus sonhos. Vamos lá iniciar o planejamento do seu intercâmbio.
          </p>
          <button
            className="large-button"
            onClick={handleNextClick}
          >
            Próximo
          </button>
        </div>
      )}

      {screen === 'question' && (
        <div className="question-screen">
          <h2>Verificação de Documentos</h2>
          <p>
            Primeiramente, é importante verificar o básico: você possui RG e CPF
            atualizados? Caso seus documentos tenham sido emitidos quando você
            era criança, é recomendável atualizá-los.
          </p>
          <div className="button-group">
            <button
              className="large-button"
              onClick={() => handleOptionClick('updated')}
            >
              Estão atualizados
            </button>
            <button
              className="large-button"
              onClick={() => handleOptionClick('update')}
            >
              Preciso atualizar
            </button>
          </div>
        </div>
      )}

      {screen === 'completed' && (
        <div className="completed-screen">
          <h2>Parabéns!</h2>
          <p>
            Você chegou ao final do Nível 1. Clique no botão “próximo nível” para avançar ao Nível 2.
          </p>
          <button
            className="next-level-button"
            onClick={() => navigate('/trilha/Fases/fase2')}
          >
            Próximo Nível
          </button>
        </div>
      )}

      {screen === 'updateInfo' && (
        <div className="update-screen">
          <h2>Atualização de Documentos</h2>
          <p>
            Ótimo! Para atualizar seus documentos, você precisa agendar um
            atendimento no Poupatempo. Clique no botão abaixo para acessar o
            site oficial.
          </p>
          <p>
            Atenção: agora o CPF é integrado ao RG. Além disso, você pode
            incluir os números dos seguintes documentos: CNH, NIS, Cartão SUS,
            Carteira de Trabalho, Título de Eleitor e Certificado Militar.
          </p>
          <a
            href="https://www.poupatempo.sp.gov.br"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            Clique aqui
          </a>
          <button
            className="next-level-button"
            onClick={() => setScreen('completed')}
          >
            Estão atualizados
          </button>
        </div>
      )}
    </div>
  );
};

export default Fase1;
