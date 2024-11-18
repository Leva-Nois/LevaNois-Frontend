import React from "react";
import Home from "./pages/Home/LandingPage";
import Cadastro from "./pages/cadastro/Cadastro";
import { Routes, Route } from "react-router-dom"; // Importa o Routes e o Route do react-router-dom
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Cadastro />} />
      </Routes>
    </div>
  );
}

export default App;
