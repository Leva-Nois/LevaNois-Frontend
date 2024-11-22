import React from "react";
import Home from "./pages/Home/LandingPage";
import Cadastro from "./pages/cadastro/Cadastro.jsx";
import Trilha from "./pages/Trilha/HomeGame.jsx";
import { Routes, Route } from "react-router-dom"; // Importa o Routes e o Route do react-router-dom
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Cadastro />} />
        <Route path="/trilha" element={ <Trilha />} />
      </Routes>
    </div>
  );
}

export default App;
