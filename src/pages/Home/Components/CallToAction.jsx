import React from "react";
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section id="call-to-action">
      <div className="cta-overlay">
        <div className="cta-content">
          <h1>Descubra o Mundo com a LevaNois!</h1>
          <p>
            Transforme seus sonhos em realidade. Explore novos países, aprenda culturas únicas e viva experiências inesquecíveis. O mundo está esperando por você!
          </p>
          <button className="cta-button">Inicie Sua Jornada Agora</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
