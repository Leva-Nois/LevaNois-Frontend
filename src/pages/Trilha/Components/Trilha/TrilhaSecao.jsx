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
          <LevelButton
            key={level}
            level={level}
            unlocked={trail.unlocked && level === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default TrailSection;
