import React from "react";
import "./cadastro.css"; // Importação do CSS
import Header from "../../components/Header/Header"; // Certifique-se de que o caminho está correto

const App = () => {
  return (
    <>
      {/* Adiciona o Header acima da div principal */}
      <Header /> 

      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input type="text" name="txt" placeholder="Nome de Usuário" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Senha" required />
            <button type="submit">Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pswd" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        </div>
    </div>
    </>
  );
};

export default App;
