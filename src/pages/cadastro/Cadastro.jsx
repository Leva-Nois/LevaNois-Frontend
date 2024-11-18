import React, { useState } from "react";
import "./cadastro.css"; // Substitua pelo arquivo CSS correto

const App = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div>
      <h2>Login/Cadastre-se</h2>
      <div
        className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Crie sua conta</h1>
            <span></span>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="button">Cadastrar</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Entrar</h1>
            <span>Bem-vindo de volta</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <a href="#">Esqueceu a senha?</a>
            <button type="button">Entrar</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Bem-vindo(a) de volta!</h1>
              <p>Sentimos sua falta</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(false)}
              >
                Entrar
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Olá, amigo(a)!</h1>
              <p>Crie sua conta para continuar nesse grande sonho na LevaNois</p>
              <button
                className="ghost"
                onClick={() => setIsRightPanelActive(true)}
              >
                Inscreva-se
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
