import React from "react";
import Home from "./pages/Home/LandingPage";
import Trilha from "./pages/Trilha/HomeGame"
import { Routes, Route } from "react-router-dom"; // Importa o Routes e o Route do react-router-dom
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>teste</h1>} />
        <Route path="/trilha" element={<Trilha />} />
      </Routes>
    </div>
  );
}

export default App;
