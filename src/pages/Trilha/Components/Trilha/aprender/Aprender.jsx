import React from 'react';
import './Aprender.css';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">LVA</div>
        <nav>
          <ul>
            <li>HOME</li>
            <li>APRENDER</li>
            <li>FINANÇAS</li>
            <li>LEVA DICA</li>
            <li>PERFIL</li>
            <li>OUTROS</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <div className="header-content">
            <h1>CANADÁ</h1>
            <div className="header-image">
              <img src="/images/header-image.jpg" alt="Celebration" />
            </div>
          </div>
        </header>
        <section className="info-section">
          <h2>CONHEÇA MAIS SOBRE O CANADÁ</h2>
          <p>Se prepare ainda melhor sabendo tudo sobre seu destino!</p>
          <div className="info-cards">
            <div className="card">
              <img src="/images/gastronomia-canada.jpg" alt="Gastronomia" />
              <h3>GASTRONOMIA</h3>
            </div>
            <div className="card">
              <img src="/images/cultura-canada.jpg" alt="Cultura" />
              <h3>CULTURA</h3>
            </div>
            <div className="card">
              <img src="/images/turismo-canada.jpg" alt="Turismo" />
              <h3>TURISMO</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
