import React from "react";
import './Feedback.css';

const Feedback = () => {
  return (
    <section id="feedback" className="feedback-section">
      <h2>Deixe seu Feedback</h2>
      <form className="feedback-form">
        <input type="text" placeholder="Seu Nome" className="feedback-input" required />
        <input type="email" placeholder="Seu Email" className="feedback-input" required />
        <textarea placeholder="Seu Comentário" className="feedback-textarea" maxLength="500" required></textarea>
        <button type="submit" className="feedback-button">Enviar</button>
      </form>
    </section>
  );
};

export default Feedback;
