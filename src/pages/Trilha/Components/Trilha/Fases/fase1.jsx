import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Fase1.css';

const Fase1 = () => {
  const [screen, setScreen] = useState('question');
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    if (option === 'updated') {
      setScreen('completed');
    } else if (option === 'update') {
      setScreen('updateInfo');
    }
  };

  return (
    <div className="fase-container">
      {screen === 'question' && (
        <div className="question-screen">
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
          <p>
            Parabéns! Você chegou ao final do Nível 1. Clique no botão “próximo
            nível” para avançar ao Nível 2.
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
        </div>
      )}
    </div>
  );
};

export default Fase1;
