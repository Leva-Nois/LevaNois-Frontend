import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Trilha.css';

const TrailSection = ({ trail }) => {
  const navigate = useNavigate();

  return (
    <div className={`trail-section ${trail.unlocked ? "" : "locked"}`}>
      {/* Título e descrição da trilha */}
      <div className="section-header">
        <h2>{trail.title}</h2>
        <p>{trail.description}</p>
      </div>
      {/* Botões das fases */}
      <div className="section-levels">
        {[1, 2, 3, 4].map((level) => (
          <button
            key={level}
            className={`level-button ${trail.unlocked && level === 1 ? "unlocked" : "locked"}`}
            onClick={() => {
              if (trail.unlocked && level === 1) {
                // Navega para a tela da fase
                navigate(`/trilha/Fases/fase${level}`);
              } else {
                // Mostra um alerta caso a fase esteja bloqueada
                alert("Essa fase ainda não está disponível!");
              }
            }}
          >
            Fase {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrailSection;
