import React from "react";
import { Routes, Route } from "react-router-dom"; // Importa o Routes e o Route do react-router-dom
import Home from "./pages/Home/LandingPage";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Trilha from "./pages/Trilha/HomeGame.jsx";
import Dicas from "./pages/Trilha/Components/Trilha/Dicas/Dicas.jsx";
import Fase1 from "./pages/Trilha/Components/Trilha/Fases/fase1.jsx"; // Importe a fase 1
import Fase2 from "./pages/Trilha/Components/Trilha/Fases/fase2.jsx"; // Importe a fase 2


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Cadastro />} />
        <Route path="/trilha" element={<Trilha />} />
        <Route path="/trilha/Dicas" element={<Dicas />} /> {/* Rota para Dicas */}
        <Route path="/trilha/Fases/fase1" element={<Fase1 />} /> {/* Rota para Fase 1 */}
        <Route path="/trilha/Fases/fase2" element={<Fase2 />} /> {/* Rota para Fase 2 */}
      </Routes>
    </div>
  );
}

export default App;
