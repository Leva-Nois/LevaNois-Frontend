import React from 'react';
import LevelButton from './LevelButton';
import './Trilha.css';

const TrailSection = ({ trail }) => {
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
          <div key={level} className="level-container">
            {/* Componente do botão da fase */}
            <LevelButton
              level={level}
              unlocked={trail.unlocked && level === 1} // Ajuste para desbloquear apenas o nível 1
            />
            {/* Botão de redirecionamento */}
            {trail.unlocked && level === 1 && (
              <button
                className="redirect-button"
                onClick={() => (window.location.href = `/fase${level}`)}
              >
                Acessar Fase {level}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailSection;
