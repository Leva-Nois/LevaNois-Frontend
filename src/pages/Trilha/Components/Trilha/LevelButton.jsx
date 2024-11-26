import React from 'react';
import './Trilha.css';

const LevelButton = ({ level, unlocked }) => {
  return (
    <button
      className={`level-button ${unlocked ? "unlocked" : "locked"}`}
      disabled={!unlocked}
    >
      <span className="star">⭐</span>
      {level}
    </button>
  );
};

export default LevelButton;
